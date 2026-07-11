import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "header" | "footer" | "sm" | "lg";
}

const sizeStyles = {
  header: "h-11 w-auto md:h-12",
  footer: "h-16 w-auto md:h-20",
  sm: "h-10 w-auto",
  lg: "h-24 w-auto md:h-32",
} as const;

export function Logo({ className = "", size = "sm" }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/Logo.png?v=2"
        alt="180PT — Turning Lives Around"
        width={480}
        height={160}
        priority={size === "header"}
        className={sizeStyles[size]}
      />
    </Link>
  );
}
