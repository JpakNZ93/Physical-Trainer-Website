import { Clock, Home, MapPin, Trees } from "lucide-react";
import { mobileTrainingCase } from "@/lib/constants";

const iconMap = {
  trees: Trees,
  home: Home,
  clock: Clock,
  map: MapPin,
};

export function MobileTrainingCase() {
  return (
    <section className="border-y border-white/10 bg-brand-grey py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
          {mobileTrainingCase.eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black uppercase tracking-wide md:text-4xl">
          {mobileTrainingCase.headline}{" "}
          <span className="text-brand-yellow">{mobileTrainingCase.highlight}</span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-white/70">{mobileTrainingCase.intro}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mobileTrainingCase.points.map((point) => {
            const Icon = iconMap[point.icon];
            return (
              <div
                key={point.title}
                className="border border-white/10 bg-brand-black/40 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-brand-yellow/30 bg-brand-yellow/10">
                  <Icon className="h-6 w-6 text-brand-yellow" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{point.description}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-10 max-w-3xl border-l-2 border-brand-yellow pl-6 text-white/80">
          {mobileTrainingCase.closer}
        </p>
      </div>
    </section>
  );
}
