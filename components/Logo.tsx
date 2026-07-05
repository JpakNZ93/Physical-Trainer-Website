import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "lg";
}

export function Logo({ className = "", size = "sm" }: LogoProps) {
  const textSize = size === "lg" ? "text-5xl md:text-7xl" : "text-2xl";

  return (
    <Link href="/" className={`inline-flex items-baseline font-black ${textSize} ${className}`}>
      <span className="text-brand-white">180</span>
      <span className="text-brand-yellow">PT</span>
    </Link>
  );
}
