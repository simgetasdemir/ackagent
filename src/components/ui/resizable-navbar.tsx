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

// ACK Agency işareti: yükselen çapraz çizgili bir "A" (büyüme) ve sağ üstte
// sinyal veren bir veri noktası (ölçümleme). Performans ve ölçümleme odağını anlatır.
export const LogoMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={cn("size-8", className)} aria-hidden="true">
    <defs>
      <linearGradient id="ack-mark-bg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#6d93ff" />
        <stop offset="1" stopColor="#2f55e6" />
      </linearGradient>
      <linearGradient id="ack-mark-shine" x1="16" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ffffff" stopOpacity="0.35" />
        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="9" fill="url(#ack-mark-bg)" />
    <rect x="0.5" y="0.5" width="31" height="31" rx="8.5" fill="url(#ack-mark-shine)" stroke="#ffffff" strokeOpacity="0.18" />
    <path d="M7.5 24.5 14.5 9l7 15.5" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.6 19.2 18.4 16" fill="none" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="24.5" cy="8.5" r="4" fill="#ffffff" fillOpacity="0.22" />
    <circle cx="24.5" cy="8.5" r="2.2" fill="#ffffff" />
  </svg>
);

export const NavbarLogo = () => (
  <Link
    href="/"
    aria-label="ACK Agency ana sayfa"
    className="group flex h-10 shrink-0 items-center gap-2.5"
  >
    <LogoMark className="transition duration-300 group-hover:-rotate-6 group-hover:drop-shadow-[0_0_12px_rgba(79,124,255,0.6)]" />
    <span className="flex items-baseline gap-1.5 text-[17px] leading-none tracking-tight">
      <span className="font-extrabold text-white">ACK</span>
      <span className="font-medium text-neutral-400 transition group-hover:text-neutral-200">Agency</span>
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
