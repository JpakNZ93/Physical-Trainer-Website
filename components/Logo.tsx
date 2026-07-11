import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "header" | "footer" | "sm" | "lg";
}

const imageSizeStyles = {
  header: "h-11 w-auto md:h-12",
  footer: "h-16 w-auto md:h-20",
  sm: "h-10 w-auto",
  lg: "h-24 w-auto md:h-32",
} as const;

const textSizeStyles = {
  header: {
    main: "text-[26px]",
    tagline: "text-[6px] tracking-[0.28em]",
  },
} as const;

function MobileHeaderLogo({ className = "" }: { className?: string }) {
  const styles = textSizeStyles.header;

  return (
    <span className={`inline-flex flex-col leading-none md:hidden ${className}`}>
      <span className={`font-headline -skew-x-6 uppercase tracking-tighter ${styles.main}`}>
        <span className="text-white">180</span>
        <span className="text-brand-yellow">PT</span>
      </span>
      <span
        className={`mt-1 font-label uppercase text-white/70 ${styles.tagline}`}
      >
        Turning Lives Around
      </span>
    </span>
  );
}

export function Logo({ className = "", size = "sm" }: LogoProps) {
  if (size === "header") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`}>
        <MobileHeaderLogo />
        <Image
          src="/Logo.png?v=2"
          alt="180PT — Turning Lives Around"
          width={480}
          height={160}
          priority
          className={`hidden md:block ${imageSizeStyles.header}`}
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
        className={imageSizeStyles[size]}
      />
    </Link>
  );
}
