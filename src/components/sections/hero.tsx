import { ButtonLink } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { hashtag } from "@/lib/content";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";
import { Container } from "./section-heading";

export function Hero() {
  return (
    <section className="relative flex min-h-[44rem] w-full items-center overflow-hidden bg-ink pt-32 pb-20 antialiased md:min-h-[48rem]">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:48px_48px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-ink [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      <Container className="relative z-10 text-center">
        <p className="text-sm font-semibold tracking-wide text-accent-300">{hashtag}</p>
        <h1 className="mx-auto mt-6 max-w-5xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-8xl md:leading-[1.02]">
          Dijitalde ölçülebilir büyüme
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-xl">
          Performans pazarlaması ve user acquisition ajansı. Analytics, tag
          manager, MMP ve SKAN kurulumundan kampanya yönetimine kadar tek ekip.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/#hizmetler" size="lg" className="w-full sm:w-auto">
            Hizmetleri inceleyin
            <IconArrowRight className="size-4" stroke={2.25} />
          </ButtonLink>
          <ButtonLink href="/#blog" size="lg" variant="secondary" className="w-full sm:w-auto">
            Blog
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
