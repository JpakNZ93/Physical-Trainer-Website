import { Target, Dumbbell, Users, BarChart3 } from "lucide-react";
import { features } from "@/lib/constants";

const iconMap = {
  target: Target,
  dumbbell: Dumbbell,
  users: Users,
  chart: BarChart3,
};

export function FeatureBar() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {features.map((feature) => {
        const Icon = iconMap[feature.icon];
        return (
          <div key={feature.label} className="flex flex-col items-center text-center">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-brand-orange/30 bg-brand-orange/10">
              <Icon className="h-7 w-7 text-brand-orange" />
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
