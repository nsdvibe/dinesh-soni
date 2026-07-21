import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Common = {
  children: ReactNode;
  className?: string;
  variant?: "gold" | "outline" | "ghost";
  size?: "md" | "lg";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold whitespace-nowrap";

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants = {
  gold: "btn-gold hover:brightness-105",
  outline:
    "border border-line text-ink hover:border-gold/60 hover:text-gold bg-surface/40 backdrop-blur",
  ghost: "text-ink-soft hover:text-gold",
};

function classesFor(variant: Common["variant"] = "gold", size: Common["size"] = "md", className?: string) {
  return cn(base, sizes[size], variants[variant], className);
}

/** Internal / anchor link button. */
export function LinkButton({
  href,
  children,
  className,
  variant = "gold",
  size = "md",
}: Common & { href: string }) {
  const cls = classesFor(variant, size, className);
  if (href.startsWith("http") || href.startsWith("#")) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Real <button> for actions (form submit, open modal). */
export function ActionButton({
  children,
  className,
  variant = "gold",
  size = "md",
  ...rest
}: Common & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classesFor(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
