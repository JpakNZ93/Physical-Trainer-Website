import { Award, Users, Heart } from "lucide-react";
import { stats } from "@/lib/constants";

const iconMap = {
  award: Award,
  users: Users,
  heart: Heart,
};

export function StatsBar() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = iconMap[stat.icon];
        return (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-brand-orange/30 bg-brand-orange/10">
              <Icon className="h-7 w-7 text-brand-orange" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider">{stat.label}</span>
          </div>
        );
      })}
    </div>
  );
}
