import { ButtonLink } from "@/components/ui/button";
import { solutions } from "@/lib/content";
import { IconArrowRight } from "@tabler/icons-react";
import { Container, SectionHeading } from "./section-heading";

export function Solutions() {
  return (
    <section id="cozumler" className="border-t border-white/10 bg-ink-3 py-28">
      <Container>
        <SectionHeading
          eyebrow="Çözümler"
          title="Yapay zeka destekli çözümler"
          description="UA ve ölçümleme işini hızlandırmak için geliştirdiğimiz üç araç. Hepsi hizmetlerimize dahildir; tekrar eden işi yazılıma bırakıp zamanımızı stratejiye ayırıyoruz."
        />
        <div className="mt-16 space-y-6">
          {solutions.map((s) => (
            <article
              key={s.name}
              className="grid gap-10 rounded-3xl border border-white/10 bg-ink-2 p-8 md:p-10 lg:grid-cols-[1fr_1.6fr]"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-sm font-extrabold text-white">
                    {s.name.split(" ")[1][0]}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-white">{s.name}</h3>
                </div>
                <p className="mt-4 text-sm font-semibold text-accent-300">{s.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{s.description}</p>
                <div className="mt-8 lg:mt-auto lg:pt-8">
                  <ButtonLink href="/#iletisim" variant="secondary">
                    Detayları gör
                    <IconArrowRight className="size-4" stroke={2.25} />
                  </ButtonLink>
                </div>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {s.features.map((f) => (
                  <li key={f.title} className="rounded-2xl border border-white/5 bg-ink p-5">
                    <h4 className="text-sm font-bold text-white">{f.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">{f.text}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
