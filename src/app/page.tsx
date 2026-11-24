import { CaseStudies } from "@/components/sections/case-studies";
import { Contact } from "@/components/sections/contact";
import { CtaPanels } from "@/components/sections/cta-panels";
import { Explore } from "@/components/sections/explore";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Packages } from "@/components/sections/packages";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Statements } from "@/components/sections/statements";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Explore />
        <Statements />
        <Stats />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Process />
        <Packages />
        <Faq />
        <CtaPanels />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
