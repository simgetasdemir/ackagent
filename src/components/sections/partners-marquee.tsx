import { partnerMarks } from "@/lib/content";
import { Container } from "./section-heading";

export function PartnersMarquee() {
  return (
    <section className="border-y border-white/10 bg-ink py-12">
      <Container>
        <p className="text-center text-sm font-medium text-neutral-400">
          Performans ekiplerinin iş ortağı
        </p>
      </Container>
      <div className="mt-8 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        <div
          className="flex w-max shrink-0 animate-marquee items-center gap-12 pr-12 hover:[animation-play-state:paused]"
          style={{ "--marquee-duration": "45s" } as React.CSSProperties}
        >
          {[...partnerMarks, ...partnerMarks].map((name, i) => (
            <span
              key={i}
              aria-hidden={i >= partnerMarks.length ? true : undefined}
              className="text-xl font-bold tracking-tight whitespace-nowrap text-neutral-500 transition hover:text-white"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
