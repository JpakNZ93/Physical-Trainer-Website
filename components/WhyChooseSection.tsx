import { IndustrialCard } from "./IndustrialCard";
import { homeFeatures } from "@/lib/constants";

export function WhyChooseSection() {
  return (
    <section className="mx-auto max-w-[var(--spacing-container-max)] px-page py-20 md:py-32">
      <div className="mx-auto mb-20 max-w-3xl text-center">
        <h2 className="font-headline mb-8 text-headline-lg uppercase">Why Choose 180PT?</h2>
        <p className="text-lg text-on-surface-variant">
          At 180PT, we believe fitness is about more than just physical transformation—it&apos;s
          about changing lives. Whether you&apos;re looking to lose weight, build muscle, or gain
          confidence, we&apos;re here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        <IndustrialCard className="p-8 md:col-span-8 md:p-8">
          <h3 className="font-headline mb-4 text-4xl uppercase group-hover:text-primary">
            <span
              className="material-symbols-outlined mr-4 align-middle text-5xl text-secondary"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              fitness_center
            </span>
            {homeFeatures[0].title}
          </h3>
          <p className="max-w-md text-on-surface-variant">{homeFeatures[0].description}</p>
        </IndustrialCard>

        <IndustrialCard className="p-8 md:col-span-4 md:p-12">
          <h3 className="font-headline mb-6 flex items-center gap-4 text-3xl uppercase group-hover:text-primary">
            <span className="material-symbols-outlined text-5xl text-secondary">verified_user</span>
            {homeFeatures[1].title}
          </h3>
          <p className="text-on-surface-variant">{homeFeatures[1].description}</p>
        </IndustrialCard>

        <IndustrialCard className="p-8 md:col-span-6 md:p-12">
          <div className="mb-6 flex items-center gap-4">
            <span className="material-symbols-outlined text-5xl text-secondary">task_alt</span>
            <h3 className="font-headline text-3xl uppercase group-hover:text-primary">
              {homeFeatures[2].title}
            </h3>
          </div>
          <p className="text-on-surface-variant">{homeFeatures[2].description}</p>
        </IndustrialCard>

        <IndustrialCard className="flex flex-col justify-between p-8 md:col-span-6 md:p-12">
          <h3 className="font-headline mb-6 flex items-center gap-4 text-4xl uppercase group-hover:text-primary">
            <span className="material-symbols-outlined text-3xl text-secondary">verified_user</span>
            {homeFeatures[3].title}
          </h3>
          <p className="max-w-md text-on-surface-variant">{homeFeatures[3].description}</p>
        </IndustrialCard>
      </div>
    </section>
  );
}
