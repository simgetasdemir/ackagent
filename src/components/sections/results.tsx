import { results } from "@/lib/content";
import { Container, SectionHeading } from "./section-heading";

function DashboardVisual() {
  const bars = [32, 41, 38, 52, 49, 61, 66, 63, 74, 82, 79, 91];
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-ink-2 to-ink p-6">
      <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-accent/25 blur-3xl" />
      <div className="relative flex items-center justify-between text-xs text-neutral-400">
        <span>Kanal bazında gelir, son 12 hafta</span>
        <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 font-semibold text-emerald-400">+%38</span>
      </div>
      <dl className="relative mt-6 grid grid-cols-3 gap-3">
        {[
          ["Harcama", "214.800 ₺"],
          ["Gelir", "987.300 ₺"],
          ["ROAS", "4,6"],
        ].map(([k, v]) => (
          <div key={k} className="flex flex-col-reverse gap-1 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
            <dt className="text-xs text-neutral-500">{k}</dt>
            <dd className="text-lg font-bold text-white md:text-xl">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="relative mt-6 flex h-40 items-end gap-2">
        {bars.map((h, i) => (
          <div key={i} style={{ height: `${h}%` }} className="flex-1 rounded-t-md bg-gradient-to-t from-accent/30 to-accent" />
        ))}
      </div>
      <p className="relative mt-4 text-xs text-neutral-500">
        Örnek pano. Bir e-ticaret müşterimizin anonimleştirilmiş verisidir.
      </p>
    </div>
  );
}

export function Results() {
  return (
    <section id="hizmetler" className="py-28">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Hizmetler"
            title="Veri odaklı stratejik sonuçlar"
            description="Her işe ölçümlemeden başlıyoruz. Doğru veri olmadan bütçe kararı vermiyor, test etmeden ölçeklemiyoruz."
          />
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {results.map((r, i) => (
              <li key={r.title}>
                <span className="text-sm font-semibold text-accent-300">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-bold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{r.description}</p>
              </li>
            ))}
          </ol>
        </div>
        <DashboardVisual />
      </Container>
    </section>
  );
}
