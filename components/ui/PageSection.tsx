import type { ReactNode } from "react";

interface PageSectionProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly background?: "default" | "surface-low" | "primary";
  readonly containerClassName?: string;
}

const backgroundClasses = {
  default: "bg-background",
  "surface-low": "bg-surface-container-low",
  primary: "bg-primary",
} as const;

export function PageSection({
  children,
  className = "",
  background = "default",
  containerClassName = "",
}: PageSectionProps) {
  return (
    <section className={`py-24 md:py-32 ${backgroundClasses[background]} ${className}`}>
      <div
        className={`mx-auto max-w-container-max px-page ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
