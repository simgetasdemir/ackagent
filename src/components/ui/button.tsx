import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

// Tüm butonlar tek bir ölçek paylaşır: hap şekli (rounded-full),
// text-sm font-semibold, yükseklik h-10 (md) veya h-12 (lg),
// kenarlıklı ve dolgulu varyantlar aynı 2px kenarlığa sahiptir,
// böylece yan yana durduklarında kalınlıkları ve yükseklikleri eşit görünür.
type Variant = "primary" | "outline" | "white" | "outline-white";
type Size = "md" | "lg";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-2 text-sm font-semibold whitespace-nowrap transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "border-cobalt bg-cobalt text-white hover:border-cobalt-600 hover:bg-cobalt-600",
  outline:
    "border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
  white: "border-white bg-white text-navy hover:border-sky hover:bg-sky",
  "outline-white":
    "border-white/70 bg-transparent text-white hover:border-white hover:bg-white hover:text-navy",
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
    <Link
      href={href}
      onClick={onClick}
      className={buttonClasses({ variant, size, className })}
    >
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
