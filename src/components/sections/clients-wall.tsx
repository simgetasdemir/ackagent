import { platformPartners } from "@/lib/content";
import { Container, SectionHeading } from "./section-heading";

export function ClientsWall() {
  return (
    <section id="hakkimizda" className="border-t border-white/10 bg-ink-3 py-28">
      <Container>
        <SectionHeading
          center
          eyebrow="Hakkımızda"
          title="Birlikte güçlüyüz"
          description="2019'dan beri İstanbul'dan Türkiye ve Avrupa'daki 40'tan fazla markayla çalışıyoruz. 26 kişilik ekibimiz, her gün kullandığımız platformların sertifikalı uzmanlarından oluşur."
        />
        <div className="mt-16 grid grid-cols-2 border-t border-l border-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {platformPartners.map((p) => (
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
