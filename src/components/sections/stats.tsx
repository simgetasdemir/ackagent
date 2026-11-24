import { stats } from "@/lib/content";
import { Container, SectionHeading } from "./section-heading";

export function Stats() {
  return (
    <section id="hakkimizda" className="bg-navy py-24 text-white">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">
        <SectionHeading
          inverted
          title="Reklam bütçesini emanet edebileceğiniz bir ekip."
          description="2019'dan beri İstanbul'daki ofisimizden Türkiye ve Avrupa'daki markalara hizmet veriyoruz. Ekibimizde 26 kişi var; her müşterinin bir strateji sorumlusu ve bir kanal uzmanı bulunur."
        />
        <dl className="grid gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end gap-3 border-t-2 border-sky pt-6">
              <dt className="text-sm text-white/70">{s.label}</dt>
              <dd className="text-3xl font-bold tracking-tight whitespace-nowrap xl:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
