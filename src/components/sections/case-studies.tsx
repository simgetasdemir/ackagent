import { HoverEffect } from "@/components/ui/card-hover-effect";
import { caseStudies } from "@/lib/content";
import { Container, SectionHeading } from "./section-heading";

export function CaseStudies() {
  return (
    <section id="calismalar" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Çalışmalar"
          title="Performansınız bizim işimiz."
          description="Her proje için başlangıç değerini ve aynı metriğin bugünkü halini paylaşıyoruz. Rakamlar müşterilerimizin GA4 ve reklam panellerinden alınmıştır."
        />
        <HoverEffect items={caseStudies} className="-mx-2 mt-4" />
        <p className="text-xs text-navy/50">
          Bazı müşteri adları gizlilik sözleşmesi gereği değiştirilmiştir.
        </p>
      </Container>
    </section>
  );
}
