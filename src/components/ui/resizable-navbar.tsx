"use client";
// Aceternity UI "Resizable Navbar" bileşeninden uyarlanmıştır.
// Açık temaya çevrildi; menü öğeleri absolute yerine flex ile yerleşir,
// böylece dar ekranlarda logo/buton ile üst üste binmez.
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Link from "next/link";
import React, { useState } from "react";

const floatingShadow =
  "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05)";

export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 120);
  });

  return (
    <div className={cn("sticky top-0 z-50 w-full", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </div>
  );
};

export const NavBody = ({
  children,
  className,
  visible,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) => {
  return (
    <div
      className={cn(
        "hidden w-full transition-colors duration-300 lg:block",
        visible ? "bg-transparent" : "border-b border-navy/10 bg-white",
      )}
    >
      <motion.div
        animate={{
          boxShadow: visible ? floatingShadow : "none",
          width: visible ? "80%" : "100%",
          y: visible ? 12 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        style={{ minWidth: "900px" }}
        className={cn(
          "relative mx-auto flex h-18 w-full max-w-7xl flex-row items-center justify-between gap-6 px-4",
          visible && "h-16 rounded-full bg-white/90 backdrop-blur-md",
          className,
        )}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const NavItems = ({
  items,
  className,
}: {
  items: { name: string; link: string }[];
  className?: string;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <nav
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-1 flex-row items-center justify-center gap-1 text-sm font-semibold text-navy",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          onMouseEnter={() => setHovered(idx)}
          className="relative flex h-10 items-center px-4"
          key={item.link}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="nav-hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-surface"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export const MobileNav = ({
  children,
  className,
  visible,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative w-full border-b border-navy/10 bg-white lg:hidden",
        visible && "shadow-sm",
        className,
      )}
    >
      <div className="mx-auto flex w-full flex-col px-4 py-3">{children}</div>
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "flex h-10 w-full flex-row items-center justify-between",
      className,
    )}
  >
    {children}
  </div>
);

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className={cn(
          "flex w-full flex-col items-start gap-4 overflow-hidden pt-4 pb-2",
          className,
        )}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
    aria-expanded={isOpen}
    onClick={onClick}
    className="flex size-10 items-center justify-center rounded-full text-navy hover:bg-surface"
  >
    {isOpen ? <IconX className="size-5" /> : <IconMenu2 className="size-5" />}
  </button>
);

export const NavbarLogo = ({ inverted = false }: { inverted?: boolean }) => (
  <Link
    href="/"
    aria-label="ACK Dijital Ajans ana sayfa"
    className={cn(
      "flex h-10 shrink-0 items-center gap-2.5 text-base font-bold tracking-tight",
      inverted ? "text-white" : "text-navy",
    )}
  >
    <span
      className={cn(
        "flex size-9 items-center justify-center rounded-full text-[11px] font-extrabold tracking-tight",
        inverted ? "bg-white text-navy" : "bg-navy text-white",
      )}
    >
      ACK
    </span>
    <span>
      ACK <span className="font-medium">Dijital</span>
    </span>
  </Link>
);
