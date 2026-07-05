import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors";
  const variantStyles =
    variant === "primary"
      ? "bg-brand-yellow text-brand-black hover:bg-yellow-300"
      : "border-2 border-white text-white hover:bg-white/10";

  const classes = `${baseStyles} ${variantStyles} ${className}`;

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
