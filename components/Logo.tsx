import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "lg";
}

const sizeStyles = {
  sm: "h-10 w-auto",
  lg: "h-24 w-auto md:h-32",
};

export function Logo({ className = "", size = "sm" }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/Logo-mobile.png"
        alt="180PT"
        width={320}
        height={128}
        priority
        className={`md:hidden ${sizeStyles[size]}`}
      />
      <Image
        src="/Logo.png"
        alt="180PT"
        width={320}
        height={128}
        priority
        className={`hidden md:block ${sizeStyles[size]}`}
      />
    </Link>
  );
}
