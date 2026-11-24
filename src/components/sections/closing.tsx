import { ButtonLink } from "@/components/ui/button";
import { hashtag } from "@/lib/content";
import { Container } from "./section-heading";

export function Closing() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-28">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <Container className="relative text-center">
        <p className="text-sm font-semibold text-accent-300">{hashtag}</p>
        <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white uppercase md:text-7xl">
          Dijitalde ölçülebilir büyüme
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-neutral-300">
          Hesaplarınıza 48 saat içinde ücretsiz bir göz atalım; boşa giden harcamayı ve hızlı kazanımları yazılı olarak paylaşalım.
        </p>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/#iletisim" size="lg" variant="accent">
            Ücretsiz analiz isteyin
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
