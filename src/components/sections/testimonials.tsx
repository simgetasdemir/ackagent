import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/lib/content";
import { Container, SectionHeading } from "./section-heading";

export function Testimonials() {
  return (
    <section className="overflow-hidden bg-navy py-24">
      <Container>
        <SectionHeading
          inverted
          eyebrow="Müşterilerimiz anlatıyor"
          title="Birlikte çalıştığımız ekiplerden."
        />
      </Container>
      <div className="mt-10 flex justify-center">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </section>
  );
}
