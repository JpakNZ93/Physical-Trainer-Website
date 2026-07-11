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
  if (size === "header") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`}>
        <Image
          src="/Logo-mobile.png?v=1"
          alt="180PT — Turning Lives Around"
          width={480}
          height={160}
          priority
          className={`md:hidden ${sizeStyles.header}`}
        />
        <Image
          src="/Logo.png?v=2"
          alt="180PT — Turning Lives Around"
          width={480}
          height={160}
          priority
          className={`hidden md:block ${sizeStyles.header}`}
        />
      </Link>
    );
  }

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/Logo.png?v=2"
        alt="180PT — Turning Lives Around"
        width={480}
        height={160}
        priority={false}
        className={sizeStyles[size]}
      />
    </Link>
  );
}
