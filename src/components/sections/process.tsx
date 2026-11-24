import { processSteps } from "@/lib/content";
import { Container, SectionHeading } from "./section-heading";

export function Process() {
  return (
    <section id="surec" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Nasıl çalışıyoruz"
          title="İlk 90 gün, adım adım."
          description="Sözleşmeyi imzalamadan önce hesabınızda neyi değiştireceğimizi yazılı olarak görürsünüz."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s) => (
            <li key={s.step} className="flex flex-col rounded-2xl bg-surface p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {s.step}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy/70">
                  {s.duration}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">{s.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
