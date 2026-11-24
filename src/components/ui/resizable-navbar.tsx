"use client";
// Aceternity UI "Resizable Navbar" bileşeninden uyarlanmıştır.
// Menü öğeleri absolute yerine flex ile yerleşir; dar ekranda logo ve
// butonlarla çakışmaz, header ile içerik aynı max-w-7xl px-4 hizasındadır.
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";

export type NavItem = { name: string; link: string };

const floatingShadow =
  "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 80));

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
          : child,
      )}
    </div>
  );
};

export const NavBody = ({
  children,
  visible,
}: {
  children: React.ReactNode;
  visible?: boolean;
}) => (
  <motion.div
    animate={{
      backdropFilter: visible ? "blur(12px)" : "blur(0px)",
      boxShadow: visible ? floatingShadow : "none",
      width: visible ? "76%" : "100%",
      y: visible ? 14 : 0,
    }}
    transition={{ type: "spring", stiffness: 200, damping: 50 }}
    style={{ minWidth: "940px" }}
    className={cn(
      "relative mx-auto hidden h-20 w-full max-w-7xl flex-row items-center justify-between gap-6 px-4 lg:flex",
      visible && "h-16 rounded-full bg-ink-2/80",
    )}
  >
    {children}
  </motion.div>
);

export const NavItems = ({ items }: { items: NavItem[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <nav
      onMouseLeave={() => setHovered(null)}
      className="flex flex-1 flex-row items-center justify-center gap-1 text-sm font-medium text-neutral-300"
    >
      {items.map((item, idx) => (
        <Link
          key={item.link}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          className="relative flex h-10 items-center px-4 hover:text-white"
        >
          {hovered === idx && (
            <motion.div layoutId="nav-hovered" className="absolute inset-0 rounded-full bg-neutral-800" />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export const MobileNav = ({ children, visible }: { children: React.ReactNode; visible?: boolean }) => (
  <div
    className={cn(
      "w-full transition-colors lg:hidden",
      visible ? "border-b border-white/10 bg-ink/90 backdrop-blur-md" : "bg-transparent",
    )}
  >
    <div className="mx-auto flex w-full flex-col px-4 py-3">{children}</div>
  </div>
);

export const MobileNavMenu = ({ children, isOpen }: { children: React.ReactNode; isOpen: boolean }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="mt-3 flex w-full flex-col items-start gap-4 overflow-hidden rounded-2xl bg-ink-2 px-4 py-6"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button
    type="button"
    aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
    aria-expanded={isOpen}
    onClick={onClick}
    className="flex size-10 items-center justify-center rounded-full text-cream hover:bg-white/10"
  >
    {isOpen ? <IconX className="size-5" /> : <IconMenu2 className="size-5" />}
  </button>
);

// ACK Agency logosu: simgesiz, küçük harfli "ack" yazısı ve vurgu renginde
// bir nokta; yanında küçük, aralıklı "AGENCY" etiketi.
export const NavbarLogo = () => (
  <Link
    href="/"
    aria-label="ACK Agency ana sayfa"
    className="group flex h-10 shrink-0 items-center gap-2"
  >
    <span className="text-[26px] leading-none font-extrabold tracking-[-0.05em] text-white">
      ack
      <span className="text-accent transition duration-300 group-hover:text-accent-300">.</span>
    </span>
    <span className="mt-1.5 text-[11px] leading-none font-medium tracking-[0.18em] text-neutral-400 transition group-hover:text-neutral-200">
      AGENCY
    </span>
  </Link>
);

export const LanguageSwitch = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-medium text-neutral-300 hover:text-white"
      >
        TR
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute top-full right-0 w-32 rounded-xl border border-white/10 bg-ink-2 p-1"
          >
            {[
              ["Türkçe", "TR"],
              ["English", "EN"],
            ].map(([name, code]) => (
              <span
                key={code}
                className={cn(
                  "flex justify-between rounded-lg px-3 py-2 text-sm",
                  code === "TR" ? "text-white" : "cursor-not-allowed text-neutral-500",
                )}
                title={code === "EN" ? "Yakında" : undefined}
              >
                {name}
                <span className="text-xs text-neutral-500">{code}</span>
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
