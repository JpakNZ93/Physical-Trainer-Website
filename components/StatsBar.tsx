import { homeStats } from "@/lib/constants";

export function StatsBar() {
  return (
    <section className="overflow-hidden border-y border-outline-variant bg-surface-container-high px-page py-8">
      <div className="flex flex-wrap items-center justify-between gap-8 whitespace-nowrap md:gap-12">
        {homeStats.map((stat, index) => (
          <div key={stat.label} className="flex items-center gap-4">
            {index > 0 && <div className="hidden h-12 w-px bg-outline md:block" />}
            <span className="font-headline text-4xl text-primary">{stat.value}</span>
            <span className="font-label text-label-sm uppercase text-on-surface-variant">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
