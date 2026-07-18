import { Target, Dumbbell, Users, BarChart3, HeartPulse, Home, Flower2 } from "lucide-react";
import { features as defaultFeatures } from "@/lib/constants";

const iconMap = {
  target: Target,
  dumbbell: Dumbbell,
  users: Users,
  chart: BarChart3,
  heart: HeartPulse,
  home: Home,
  flower: Flower2,
};

interface FeatureItem {
  label: string;
  icon: keyof typeof iconMap;
}

interface FeatureBarProps {
  items?: FeatureItem[];
  columns?: 4 | 5;
}

export function FeatureBar({ items = defaultFeatures, columns = 4 }: FeatureBarProps) {
  const gridClass =
    columns === 5
      ? "grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5"
      : "grid grid-cols-2 gap-6 md:grid-cols-4";

  return (
    <div className={gridClass}>
      {items.map((feature) => {
        const Icon = iconMap[feature.icon];
        return (
          <div key={feature.label} className="flex flex-col items-center text-center">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-brand-yellow/30 bg-brand-yellow/10">
              <Icon className="h-7 w-7 text-brand-yellow" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider md:text-sm">
              {feature.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
