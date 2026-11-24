import { faqs } from "@/lib/content";
import { IconPlus } from "@tabler/icons-react";
import { Container, SectionHeading } from "./section-heading";

export function Faq() {
  return (
    <section id="sss" className="py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading eyebrow="Sıkça sorulanlar" title="Başlamadan önce bilmeniz gerekenler." />
        <div className="divide-y divide-navy/10 border-y border-navy/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-bold text-navy [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface">
                  <IconPlus className="size-4 text-navy transition group-open:rotate-45" stroke={2.25} />
                </span>
              </summary>
              <p className="mt-3 pr-12 text-sm leading-relaxed text-navy/70">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
