import { HoverEffect } from "@/components/ui/card-hover-effect";
import { caseStudies } from "@/lib/content";
import { Container, SectionHeading } from "./section-heading";

export function CaseStudies() {
  return (
    <section id="basari-hikayeleri" className="py-28 border-t border-white/10">
      <Container>
        <SectionHeading
          eyebrow="Başarı hikayeleri"
          title="Başlangıç noktası ve bugün"
          description="Her proje için başlangıç değerini ve aynı metriğin bugünkü halini paylaşıyoruz. Rakamlar müşterilerimizin GA4 ve reklam panellerinden alınmıştır."
        />
        <HoverEffect items={caseStudies} className="-mx-2 mt-4" />
        <p className="text-xs text-cream/50">
          Bazı müşteri adları gizlilik sözleşmesi gereği değiştirilmiştir.
        </p>
      </Container>
    </section>
  );
}
