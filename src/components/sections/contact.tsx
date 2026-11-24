"use client";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { budgetOptions, contact, serviceOptions } from "@/lib/content";
import { cn } from "@/lib/utils";
import { IconLoader2 } from "@tabler/icons-react";
import { useState } from "react";
import { Container, SectionHeading } from "./section-heading";

type Errors = Partial<Record<string, string[]>>;
type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "done"; message: string }
  | { state: "error"; message: string };

const selectClass =
  "flex h-10 w-full appearance-none rounded-md border-none bg-zinc-800 px-3 text-sm text-cream shadow-[0px_0px_1px_1px_#404040] focus-visible:ring-[2px] focus-visible:ring-accent/40 focus-visible:outline-none";

function Field({
  id,
  label,
  errors,
  className,
  children,
}: {
  id: string;
  label: string;
  errors?: Errors;
  className?: string;
  children: React.ReactNode;
}) {
  const err = errors?.[id]?.[0];
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {err && <p className="text-xs text-red-600">{err}</p>}
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      ...Object.fromEntries(fd.entries()),
      kvkk: fd.get("kvkk") === "on",
    };
    setStatus({ state: "sending" });
    setErrors({});
    try {
      const res = await fetch("/api/iletisim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors(data.errors ?? {});
        setStatus({ state: "error", message: data.message });
        return;
      }
      form.reset();
      setStatus({ state: "done", message: data.message });
    } catch {
      setStatus({
        state: "error",
        message: "Bağlantı kurulamadı. Lütfen tekrar deneyin.",
      });
    }
  }

  return (
    <section id="iletisim" className="border-t border-white/10 bg-ink-3 py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="İletişim"
            title="Ücretsiz ölçüm denetimi isteyin"
            description="Formu doldurun; bir sonraki iş günü içinde sizi arayalım. GA4, GTM ve MMP hesaplarınıza okuma yetkisiyle bakar, eksik event'leri ve SKAN sorunlarını 48 saat içinde PDF olarak paylaşırız."
          />
          <dl className="mt-10 space-y-5 text-sm">
            {[
              ["E-posta", contact.email],
              ["Telefon", contact.phone],
              ["Ofis", contact.address],
              ["Çalışma saatleri", contact.hours],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-cream/60">{k}</dt>
                <dd className="mt-1 font-semibold text-cream">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-3xl border border-white/10 bg-ink-2 p-6 md:p-10">
          {status.state === "done" ? (
            <div className="flex min-h-80 flex-col items-start justify-center">
              <p className="text-2xl font-bold text-cream">Talebiniz alındı</p>
              <p className="mt-3 text-sm text-cream/70">{status.message}</p>
              <Button
                variant="secondary"
                className="mt-6"
                onClick={() => setStatus({ state: "idle" })}
              >
                Yeni talep gönder
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="flex flex-col gap-5 md:flex-row">
                <Field id="name" label="Ad soyad" errors={errors}>
                  <Input id="name" name="name" placeholder="Ayşe Demir" autoComplete="name" />
                </Field>
                <Field id="company" label="Şirket" errors={errors}>
                  <Input id="company" name="company" placeholder="Şirket adı" autoComplete="organization" />
                </Field>
              </div>
              <div className="flex flex-col gap-5 md:flex-row">
                <Field id="email" label="E-posta" errors={errors}>
                  <Input id="email" name="email" type="email" placeholder="ayse@sirket.com" autoComplete="email" />
                </Field>
                <Field id="phone" label="Telefon (isteğe bağlı)" errors={errors}>
                  <Input id="phone" name="phone" type="tel" placeholder="05xx xxx xx xx" autoComplete="tel" />
                </Field>
              </div>
              <Field id="website" label="Web sitesi (isteğe bağlı)" errors={errors}>
                <Input id="website" name="website" placeholder="sirket.com" />
              </Field>
              <div className="flex flex-col gap-5 md:flex-row">
                <Field id="service" label="İlgilendiğiniz hizmet" errors={errors}>
                  <div className="p-[2px]">
                    <select id="service" name="service" defaultValue="" className={selectClass}>
                      <option value="" disabled>Seçin</option>
                      {serviceOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </Field>
                <Field id="budget" label="Aylık reklam bütçesi" errors={errors}>
                  <div className="p-[2px]">
                    <select id="budget" name="budget" defaultValue="" className={selectClass}>
                      <option value="" disabled>Seçin</option>
                      {budgetOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </Field>
              </div>
              <Field id="message" label="Hedefiniz" errors={errors}>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Örn. iOS ve Android uygulamamız için AppsFlyer kurulumu ve SKAN şeması gerekiyor; ardından aylık 40 bin install hedefliyoruz."
                />
              </Field>
              <input type="text" name="fax" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div>
                <label className="flex items-start gap-3 text-sm text-cream/70">
                  <input type="checkbox" name="kvkk" className="mt-0.5 size-4 accent-accent" />
                  Kişisel verilerimin talebime yanıt verilmesi amacıyla işlenmesini kabul ediyorum (KVKK aydınlatma metni).
                </label>
                {errors.kvkk?.[0] && (
                  <p className="mt-2 text-xs text-red-600">{errors.kvkk[0]}</p>
                )}
              </div>
              {status.state === "error" && (
                <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {status.message}
                </p>
              )}
              <Button type="submit" size="lg" variant="accent" className="w-full" disabled={status.state === "sending"}>
                {status.state === "sending" && <IconLoader2 className="size-4 animate-spin" />}
                {status.state === "sending" ? "Gönderiliyor" : "Denetim talebini gönder"}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
