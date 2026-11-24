import { posts } from "@/lib/content";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { Container, SectionHeading } from "./section-heading";

export function Blog() {
  return (
    <section id="blog" className="border-t border-white/10 py-28">
      <Container>
        <SectionHeading eyebrow="Blog" title="Sahadan notlar" description="Ölçümleme ve user acquisition üzerine sahada öğrendiklerimizi yazıyoruz." />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.title}
              href="/#blog"
              className="group flex flex-col rounded-3xl border border-white/10 bg-ink-2 p-6 transition hover:border-white/25"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full border border-white/10 px-3 py-1 font-semibold text-neutral-300">{p.category}</span>
                <IconArrowUpRight className="size-5 text-neutral-500 transition group-hover:text-white" />
              </div>
              <h3 className="mt-8 text-lg leading-snug font-bold text-white">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">{p.excerpt}</p>
              <p className="mt-6 text-xs text-neutral-500">
                {p.date} · {p.readTime} okuma
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
