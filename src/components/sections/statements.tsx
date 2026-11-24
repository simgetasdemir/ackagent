import { statements } from "@/lib/content";
import Link from "next/link";
import { Container } from "./section-heading";

export function Statements() {
  return (
    <section className="border-t border-navy/10 py-24">
      <Container className="grid gap-12 md:grid-cols-3">
        {statements.map((s) => (
          <div key={s.title}>
            <h3 className="text-3xl font-bold tracking-tight text-navy">{s.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-navy/70">{s.text}</p>
            <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              {s.links.map((l) => (
                <Link
                  key={l.name}
                  href={l.link}
                  className="text-cobalt underline decoration-2 underline-offset-4 hover:text-navy"
                >
                  {l.name}
                </Link>
              ))}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
