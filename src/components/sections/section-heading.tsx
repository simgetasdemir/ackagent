import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  inverted = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  inverted?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold",
            inverted ? "text-sky" : "text-cobalt",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.1]",
          inverted ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            inverted ? "text-white/75" : "text-navy/70",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4", className)}>
      {children}
    </div>
  );
}
