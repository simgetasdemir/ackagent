import { ButtonLink } from "@/components/ui/button";
import { contact } from "@/lib/content";
import { Container } from "./section-heading";

export function CtaPanels() {
  return (
    <section className="pb-24">
      <Container className="grid gap-4 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl bg-cobalt p-10 text-white">
          <div className="pointer-events-none absolute -right-20 -bottom-20 size-72 rounded-full bg-sky/40 blur-3xl" />
          <h3 className="relative text-3xl font-bold tracking-tight">Hizmetleri keşfedin.</h3>
          <p className="relative mt-4 max-w-sm text-white/85">
            Reklamdan SEO&apos;ya, pazaryerinden ölçümlemeye kadar size uygun
            kombinasyonu bulun.
          </p>
          <ButtonLink href="/#hizmetler" variant="white" className="relative mt-8">
            Hizmetlere göz atın
          </ButtonLink>
        </div>
        <div className="rounded-3xl bg-navy p-10 text-white">
          <h3 className="text-3xl font-bold tracking-tight">Bir uzmanla konuşun.</h3>
          <p className="mt-4 max-w-sm text-white/80">
            {contact.hours} arasında {contact.phone} numarasından bize
            ulaşabilir ya da geri arama isteyebilirsiniz.
          </p>
          <ButtonLink href="/#iletisim" variant="outline-white" className="mt-8">
            Geri arama isteyin
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
