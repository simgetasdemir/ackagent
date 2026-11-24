"use client";
// Aceternity UI "Card Hover Effect" bileşeninden uyarlanmıştır.
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export type HoverItem = {
  title: string;
  description: string;
  meta: string;
  metrics: { value: string; label: string }[];
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: HoverItem[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-white/[0.06]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-20 h-full w-full overflow-hidden rounded-2xl border border-cream/10 bg-ink-2 p-4 group-hover:border-accent/30">
            <div className="p-4">
              <p className="text-xs font-semibold tracking-wide text-accent-300 uppercase">
                {item.meta}
              </p>
              <h4 className="mt-3 text-xl font-bold text-cream">
                {item.title}
              </h4>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">
                {item.description}
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-cream/10 pt-6">
                {item.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="text-xs text-cream/60">{m.label}</dt>
                    <dd className="mt-1 text-xl font-bold whitespace-nowrap text-cream">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
