import { CTAButton } from "./CTAButton";

interface PackageCardProps {
  title: string;
  price: string;
  detail: string;
}

export function PackageCard({ title, price, detail }: PackageCardProps) {
  return (
    <div className="flex flex-col items-center border border-white/10 bg-brand-grey p-6 text-center">
      <h4 className="text-sm font-bold uppercase tracking-wider text-white/80">{title}</h4>
      <p className="mt-2 text-4xl font-black text-brand-orange">{price}</p>
      <p className="mt-2 text-sm text-white/60">{detail}</p>
      <CTAButton href="/contact" className="mt-6 w-full">
        Book Now
      </CTAButton>
    </div>
  );
}
