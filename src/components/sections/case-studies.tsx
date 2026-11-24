import { HoverEffect } from "@/components/ui/card-hover-effect";
import { setups } from "@/lib/content";
import { Container, SectionHeading } from "./section-heading";

export function Setups() {
  return (
    <section id="kurulumlar" className="border-t border-white/10 py-28">
      <Container>
        <SectionHeading
          eyebrow="Kurulumlar"
          title="Net kapsam, net teslim süresi"
          description="Her kurulumun sonunda neyi teslim ettiğimizi ve ne kadar sürdüğünü baştan yazıyoruz. Kurulumlar tek başına da alınabilir, UA yönetimiyle birlikte de."
        />
        <HoverEffect items={setups} className="-mx-2 mt-4" />
      </Container>
    </section>
  );
}
