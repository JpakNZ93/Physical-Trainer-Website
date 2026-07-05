import { User, Users, Laptop, Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  icon: "user" | "boxing" | "users" | "laptop";
  description: string;
  subtitle?: string;
  items: string[];
  footer?: string;
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
  description,
  subtitle,
  items,
  footer,
}: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="flex flex-col border border-white/10 bg-brand-grey p-6">
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
            {icon === "users" && title === "Small Group Training" ? (
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
            ) : (
              <span className="text-brand-yellow">•</span>
            )}
            {item}
          </li>
        ))}
      </ul>
      {footer && <p className="mt-4 text-sm text-white/60">{footer}</p>}
    </div>
  );
}
