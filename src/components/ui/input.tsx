"use client";
// Aceternity UI "Signup Form" girdisinden uyarlanmıştır.
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import React, { useState } from "react";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  const radius = 100;
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`radial-gradient(${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px, #2340f5, transparent 80%)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group/input rounded-lg p-[2px] transition duration-300"
    >
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border-none bg-white px-3 py-2 text-sm text-navy shadow-[0px_0px_1px_1px_#c9cfe0] transition duration-400 placeholder:text-navy/40 focus-visible:ring-[2px] focus-visible:ring-cobalt/40 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none",
          className,
        )}
        ref={ref}
        {...props}
      />
    </motion.div>
  );
});
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <div className="rounded-lg p-[2px]">
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-28 w-full rounded-md border-none bg-white px-3 py-2 text-sm text-navy shadow-[0px_0px_1px_1px_#c9cfe0] placeholder:text-navy/40 focus-visible:ring-[2px] focus-visible:ring-cobalt/40 focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  </div>
));
Textarea.displayName = "Textarea";

export const Label = ({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label
    className={cn("text-sm leading-none font-semibold text-navy", className)}
    {...props}
  />
);
