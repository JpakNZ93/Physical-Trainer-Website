import Image from "next/image";
import { User, Users, Laptop, Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  icon: "user" | "boxing" | "users" | "laptop";
  image?: string;
  imageAlt?: string;
  description: string;
  subtitle?: string;
  items: string[];
  footer?: string;
  showImage?: boolean;
}

const iconMap = {
  user: User,
  boxing: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8">
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <path d="M5 11h14v2a3 3 0 0 1-3 3h-1v4" />
      <path d="M9 16v4" />
    </svg>
  ),
  users: Users,
  laptop: Laptop,
};

export function ServiceCard({
  title,
  icon,
  image,
  imageAlt,
  description,
  subtitle,
  items,
  footer,
  showImage = true,
}: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="flex flex-col overflow-hidden border border-white/10 bg-brand-grey">
      {showImage && image && (
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 text-brand-yellow">
          <Icon />
        </div>
        <h3 className="mb-3 text-lg font-bold uppercase tracking-wider text-brand-yellow">
          {title}
        </h3>
        <p className="mb-4 text-sm text-white/70">{description}</p>
        {subtitle && (
          <p className="mb-2 text-sm font-semibold text-white/90">{subtitle}</p>
        )}
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/70">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
              {item}
            </li>
          ))}
        </ul>
        {footer && <p className="mt-4 text-sm text-white/60">{footer}</p>}
      </div>
    </div>
  );
}
