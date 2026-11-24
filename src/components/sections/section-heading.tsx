import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow && <p className="text-sm font-semibold text-accent-300">{eyebrow}</p>}
      <h2 className="mt-3 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">{description}</p>
      )}
    </div>
  );
}

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4", className)}>{children}</div>;
}
