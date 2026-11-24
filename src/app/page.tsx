import { Blog } from "@/components/sections/blog";
import { CaseStudies } from "@/components/sections/case-studies";
import { ClientsWall } from "@/components/sections/clients-wall";
import { Closing } from "@/components/sections/closing";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Measure } from "@/components/sections/measure";
import { PartnersMarquee } from "@/components/sections/partners-marquee";
import { Results } from "@/components/sections/results";
import { Solutions } from "@/components/sections/solutions";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PartnersMarquee />
        <Results />
        <ClientsWall />
        <Measure />
        <Solutions />
        <CaseStudies />
        <Blog />
        <Closing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
