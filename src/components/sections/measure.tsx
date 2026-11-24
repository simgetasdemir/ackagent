import { measureCards } from "@/lib/content";
import { Container, SectionHeading } from "./section-heading";

function Visual({ index }: { index: number }) {
  if (index === 0)
    return (
      <svg viewBox="0 0 300 120" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
        <polyline fill="none" stroke="#4f7cff" strokeWidth="2.5" points="0,95 40,88 80,90 120,70 160,64 200,46 240,40 300,18" />
        <polyline fill="none" stroke="#9db5ff" strokeWidth="2" points="0,105 40,100 80,96 120,92 160,82 200,80 240,72 300,64" />
        <polyline fill="none" stroke="#525252" strokeWidth="2" points="0,112 40,110 80,108 120,106 160,102 200,100 240,98 300,94" />
      </svg>
    );
  if (index === 1)
    return (
      <div className="flex h-full flex-col justify-center gap-3 px-2">
        {[
          ["Yalnız SDK / piksel", "71%", "w-[71%] bg-neutral-600"],
          ["Sunucu + postback", "96%", "w-[96%] bg-accent"],
        ].map(([k, v, c]) => (
          <div key={k}>
            <div className="flex justify-between text-xs text-neutral-400">
              <span>{k}</span>
              <span className="font-semibold text-white">{v}</span>
            </div>
            <div className="mt-1.5 h-2.5 rounded-full bg-white/5">
              <div className={`h-full rounded-full ${c}`} />
            </div>
          </div>
        ))}
        <p className="text-[11px] text-neutral-500">Raporlanan dönüşüm oranı, temsili</p>
      </div>
    );
  return (
    <div className="flex h-full flex-col justify-center gap-2 px-2 text-xs">
      <p className="font-semibold text-white">Bu hafta</p>
      <p className="text-neutral-400">TikTok&apos;ta UGC kreatifler IPM&apos;i %22 artırdı; Apple Search Ads&apos;te marka dışı kelimeler D7 ROAS hedefini geçti.</p>
      <p className="mt-1 font-semibold text-white">Gelecek hafta</p>
      <p className="text-neutral-400">SKAN şemasında ikinci gelir aralığı daraltılıyor.</p>
    </div>
  );
}

export function Measure() {
  return (
    <section className="py-28">
      <Container>
        <SectionHeading
          title="Ölçemediğiniz şeyi yönetemezsiniz."
          description="Kampanyalar çoğu zaman reklam yüzünden değil, ölçüm yüzünden kötü görünür: eksik event'ler, MMP ile GA4 arasında tutmayan rakamlar, okunamayan SKAN postback'leri. İşe her zaman buradan başlıyoruz."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {measureCards.map((c, i) => (
            <div key={c.title} className="flex flex-col rounded-3xl border border-white/10 bg-ink-2 p-6">
              <div className="h-40 rounded-2xl border border-white/5 bg-ink p-4">
                <Visual index={i} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{c.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
