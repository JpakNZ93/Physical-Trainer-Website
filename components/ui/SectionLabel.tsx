import type { ReactNode } from "react";

interface SectionLabelProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`font-label text-label-sm uppercase tracking-widest text-secondary ${className}`}
    >
      {children}
    </span>
  );
}
