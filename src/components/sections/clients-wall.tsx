import { integrations } from "@/lib/content";
import { Container, SectionHeading } from "./section-heading";

export function ClientsWall() {
  return (
    <section id="hakkimizda" className="border-t border-white/10 bg-ink-3 py-28">
      <Container>
        <SectionHeading
          center
          eyebrow="Hakkımızda"
          title="Kurduğumuz ölçümleme altyapısı"
          description="Performans pazarlaması ve user acquisition'a odaklanan bir ekibiz. Reklamı yönetmeden önce ölçümü kuruyoruz: analytics, tag manager, MMP ve SKAN tek elden."
        />
        <div className="mt-16 grid grid-cols-2 border-t border-l border-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {integrations.map((p) => (
            <div
              key={p}
              className="flex h-28 items-center justify-center border-r border-b border-white/10 px-4 text-center text-base font-bold tracking-tight text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
            >
              {p}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
