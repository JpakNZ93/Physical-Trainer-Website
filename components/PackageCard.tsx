import { CTAButton } from "./CTAButton";

interface PackageCardProps {
  id: string;
  title: string;
  detail: string;
}

export function PackageCard({ id, title, detail }: PackageCardProps) {
  return (
    <div className="flex flex-col items-center border border-white/10 bg-brand-black/60 p-6 text-center">
      <h4 className="text-sm font-bold uppercase tracking-wider text-brand-yellow">{title}</h4>
      <p className="mt-4 text-sm text-white/60">{detail}</p>
      <CTAButton href={`/contact?package=${id}`} className="mt-6 w-full">
        Book a Free Consultation
      </CTAButton>
    </div>
  );
}
