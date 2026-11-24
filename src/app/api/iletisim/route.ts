import { contactSchema } from "@/lib/contact-schema";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

// Vercel gibi sunucusuz ortamlarda yalnızca /tmp yazılabilir (ve kalıcı değildir).
// Kalıcı kayıt için bu fonksiyon bir veritabanı veya e-posta servisine bağlanmalı.
const DATA_DIR = process.env.VERCEL
  ? path.join("/tmp", "ack-data")
  : path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

// IP başına basit hız sınırı: 10 dakikada en fazla 5 başvuru.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

async function saveLead(lead: Record<string, unknown>) {
  await mkdir(DATA_DIR, { recursive: true });
  let leads: unknown[] = [];
  try {
    leads = JSON.parse(await readFile(LEADS_FILE, "utf8"));
  } catch {
    leads = [];
  }
  leads.push(lead);
  await writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf8");
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";

  if (rateLimited(ip)) {
    return Response.json(
      { ok: false, message: "Çok fazla deneme yaptınız. Lütfen 10 dakika sonra tekrar deneyin." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, message: "Geçersiz istek." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      {
        ok: false,
        message: "Formdaki bazı alanları kontrol edin.",
        errors: z.flattenError(parsed.error).fieldErrors,
      },
      { status: 422 },
    );
  }

  // Bot tuzağı doluysa başarılı gibi yanıt ver ama kaydetme.
  if (parsed.data.fax) {
    return Response.json({ ok: true, message: "Teşekkürler." });
  }

  const { name, email, phone, company, website, service, budget, message } =
    parsed.data;
  const record = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    name,
    email,
    phone,
    company,
    website,
    service,
    budget,
    message,
  };
  try {
    await saveLead(record);
  } catch (err) {
    console.error("Başvuru kaydedilemedi", err);
  }
  // Sunucu günlüklerinde (Vercel > Logs) her başvuru görünür.
  console.log("Yeni başvuru", JSON.stringify(record));

  return Response.json(
    {
      ok: true,
      message:
        "Teşekkürler, talebiniz bize ulaştı. Bir sonraki iş günü içinde sizi arayacağız.",
    },
    { status: 201 },
  );
}
