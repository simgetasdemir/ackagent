import { ButtonLink } from "@/components/ui/button";
import { packages } from "@/lib/content";
import { cn } from "@/lib/utils";
import { IconCheck } from "@tabler/icons-react";
import { Container, SectionHeading } from "./section-heading";

export function Packages() {
  return (
    <section id="paketler" className="bg-surface py-24">
      <Container>
        <SectionHeading
          eyebrow="Paketler"
          title="Ne ödediğinizi baştan bilin."
          description="Fiyatlar aylık hizmet bedelidir; reklam bütçesi ve KDV hariçtir. İlk dönem 3 ay, sonrası aylık devam eder."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={cn(
                "flex flex-col rounded-3xl p-8",
                p.highlighted ? "bg-navy text-white" : "bg-white text-navy",
              )}
            >
              <div className="flex h-7 items-center justify-between">
                <h3 className="text-lg font-bold">{p.name}</h3>
                {p.highlighted && (
                  <span className="rounded-full bg-sky px-3 py-1 text-xs font-semibold text-navy">
                    En çok tercih edilen
                  </span>
                )}
              </div>
              <p className={cn("mt-4 min-h-10 text-sm", p.highlighted ? "text-white/75" : "text-navy/70")}>
                {p.description}
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{p.price}</span>
                <span className={cn("text-sm", p.highlighted ? "text-white/70" : "text-navy/60")}>
                  {p.period}
                </span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <IconCheck
                      className={cn("mt-0.5 size-4 shrink-0", p.highlighted ? "text-sky" : "text-cobalt")}
                      stroke={2.5}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="/#iletisim"
                variant={p.highlighted ? "white" : "outline"}
                className="mt-8 w-full"
              >
                {p.cta}
              </ButtonLink>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
