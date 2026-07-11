import type { ReactNode } from "react";

interface SectionHeadingProps {
  readonly children: ReactNode;
  readonly size?: "lg" | "xl";
  readonly className?: string;
  readonly as?: "h1" | "h2" | "h3" | "h4";
}

const sizeClasses = {
  lg: "text-headline-lg",
  xl: "text-headline-xl",
} as const;

export function SectionHeading({
  children,
  size = "lg",
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Tag className={`font-headline uppercase leading-none text-primary ${sizeClasses[size]} ${className}`}>
      {children}
    </Tag>
  );
}
