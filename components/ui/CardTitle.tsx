import type { ReactNode } from "react";

interface CardTitleProps {
  readonly icon: string;
  readonly children: ReactNode;
  readonly filledIcon?: boolean;
  readonly size?: "lg" | "md";
  readonly className?: string;
}

const titleSizes = {
  lg: "text-4xl",
  md: "text-3xl",
} as const;

export function CardTitle({
  icon,
  children,
  filledIcon = false,
  size = "md",
  className = "",
}: CardTitleProps) {
  return (
    <h3
      className={`font-headline mb-4 flex items-center gap-4 uppercase group-hover:text-primary ${titleSizes[size]} ${className}`}
    >
      <span
        className="material-symbols-outlined shrink-0 text-5xl text-secondary"
        style={filledIcon ? { fontVariationSettings: '"FILL" 1' } : undefined}
      >
        {icon}
      </span>
      {children}
    </h3>
  );
}
