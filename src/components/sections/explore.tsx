"use client";
import { platforms, sectors, services } from "@/lib/content";
import { cn } from "@/lib/utils";
import {
  IconArrowRight,
  IconBrandGoogle,
  IconBuildingStore,
  IconChartLine,
  IconDeviceDesktop,
  IconSearch,
  IconUsersGroup,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Container, SectionHeading } from "./section-heading";

const serviceIcons: Record<string, React.ReactNode> = {
  performans: <IconBrandGoogle />,
  seo: <IconSearch />,
  sosyal: <IconUsersGroup />,
  pazaryeri: <IconBuildingStore />,
  olcumleme: <IconChartLine />,
  web: <IconDeviceDesktop />,
};

const tabs = [
  { key: "hizmet", label: "Hizmetler" },
  { key: "platform", label: "Platformlar" },
  { key: "sektor", label: "Sektörler" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

function Tile({
  icon,
  title,
  text,
}: {
  icon?: React.ReactNode;
  title: string;
  text?: string;
}) {
  return (
    <Link
      href="/#iletisim"
      className="group flex h-full flex-col justify-between gap-6 rounded-2xl bg-surface p-6 transition hover:bg-navy hover:text-white"
    >
      {icon && (
        <span className="flex size-11 items-center justify-center rounded-full bg-white text-cobalt [&>svg]:size-5">
          {icon}
        </span>
      )}
      <span>
        <span className="flex items-center justify-between gap-3 text-lg font-bold">
          {title}
          <IconArrowRight className="size-5 shrink-0 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
        </span>
        {text && (
          <span className="mt-2 block text-sm text-navy/65 group-hover:text-white/75">
            {text}
          </span>
        )}
      </span>
    </Link>
  );
}

export function Explore() {
  const [active, setActive] = useState<TabKey>("hizmet");

  return (
    <section id="hizmetler" className="py-24">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            title="Büyümek için kuruldu."
            description="Hangi kanalda, hangi sektörde olursanız olun; hedefi birlikte koyar, sonucu aynı tabloda izleriz."
          />
          <div
            role="tablist"
            aria-label="Keşfet"
            className="flex w-fit gap-1 rounded-full bg-surface p-1"
          >
            {tabs.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={active === t.key}
                onClick={() => setActive(t.key)}
                className={cn(
                  "relative h-10 rounded-full px-5 text-sm font-semibold transition",
                  active === t.key ? "text-white" : "text-navy hover:text-cobalt",
                )}
              >
                {active === t.key && (
                  <motion.span
                    layoutId="explore-tab"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    className="absolute inset-0 rounded-full bg-navy"
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-12"
        >
          {active === "hizmet" && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <Tile
                  key={s.key}
                  icon={serviceIcons[s.key]}
                  title={s.title}
                  text={s.tags.join(" · ")}
                />
              ))}
            </div>
          )}
          {active === "platform" && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {platforms.map((p) => (
                <div
                  key={p}
                  className="flex h-24 items-center justify-center rounded-2xl border border-navy/10 text-base font-bold text-navy"
                >
                  {p}
                </div>
              ))}
            </div>
          )}
          {active === "sektor" && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((s) => (
                <Tile key={s.title} title={s.title} text={s.text} />
              ))}
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
