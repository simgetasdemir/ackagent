import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

// Tüm butonlar tek bir ölçek paylaşır: hap şekli (rounded-full), 1px kenarlık,
// text-sm font-semibold, yükseklik h-10 (md) veya h-12 (lg).
// Dolgulu ve kenarlıklı varyantlar aynı kenarlık kalınlığına sahiptir,
// böylece yan yana durduklarında yükseklik ve ağırlık birebir eşit görünür.
type Variant = "primary" | "secondary" | "accent";
type Size = "md" | "lg";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full border text-sm font-semibold whitespace-nowrap transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "border-cream bg-cream text-ink hover:bg-white hover:-translate-y-0.5",
  secondary:
    "border-white/15 bg-white/[0.03] text-cream hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08]",
  accent: "border-accent bg-accent text-white hover:-translate-y-0.5 hover:bg-accent-600 hover:border-accent-600",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5",
  lg: "h-12 px-7",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: Omit<CommonProps, "children">) {
  return cn(base, variants[variant], sizes[size], className);
}

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  onClick,
}: CommonProps & { href: string; onClick?: () => void }) {
  return (
    <Link href={href} onClick={onClick} className={buttonClasses({ variant, size, className })}>
      {children}
    </Link>
  );
}

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={buttonClasses({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
