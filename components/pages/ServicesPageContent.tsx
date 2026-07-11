import Link from "next/link";
import { IndustrialCard } from "@/components/IndustrialCard";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CardTitle } from "@/components/ui/CardTitle";
import { trainingPackages, trainingPrograms, stitchImages } from "@/lib/constants";

interface ServicesPageContentProps {
  readonly className?: string;
}

export function ServicesPageContent({ className = "" }: ServicesPageContentProps) {
  return (
    <div className={className}>
      <section className="relative flex h-[min(600px,75svh)] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="h-full w-full bg-cover bg-center brightness-90 contrast-125 grayscale"
            style={{ backgroundImage: `url('${stitchImages.servicesHero}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-container-max px-page">
          <div className="max-w-4xl">
            <SectionHeading as="h1" size="xl" className="mb-6 text-[clamp(64px,12vw,120px)]">
              Services
            </SectionHeading>
            <p className="max-w-2xl font-body text-body-lg text-primary">
              Professional coaching tailored to your goals, fitness level, and lifestyle. Engineered
              for performance, built for results.
            </p>
          </div>
        </div>
      </section>

      <PageSection>
        <div className="mb-12 flex items-center gap-4">
          <div className="h-1.5 w-20 bg-secondary" />
          <SectionHeading as="h2">Training Programs</SectionHeading>
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          {trainingPrograms.map((program) => (
            <IndustrialCard
              key={program.id}
              className={`${program.colSpan} p-10 ${
                program.layout === "split" ? "flex flex-col md:flex-row md:gap-8" : "flex flex-col"
              }`}
            >
              <div className={program.layout === "split" ? "flex-1" : ""}>
                <CardTitle icon={program.icon} filledIcon={program.filledIcon} size="lg">
                  {program.title}
                </CardTitle>
                <p className="mb-6 font-body text-body-md text-on-surface-variant">
                  {program.description}
                </p>
                {program.items && (
                  <ul className="grid grid-cols-1 gap-y-3 font-label text-label-sm uppercase tracking-wider sm:grid-cols-2">
                    {program.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {program.badge && (
                  <div className="mt-4 inline-block bg-primary px-3 py-1 font-label text-[10px] uppercase text-on-primary">
                    {program.badge}
                  </div>
                )}
                {program.footer && (
                  <div className="mt-4 font-label text-label-sm uppercase tracking-tighter text-secondary italic">
                    {program.footer}
                  </div>
                )}
              </div>
              {program.checklist && (
                <div className="flex-1 border-outline-variant pl-0 md:border-l md:pl-8">
                  <ul className="space-y-4 font-label text-label-sm uppercase">
                    {program.checklist.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-lg text-secondary">
                          check_circle
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </IndustrialCard>
          ))}
        </div>
      </PageSection>

      <section className="relative border-y border-outline bg-surface-container-high py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-container-max px-page">
          <div className="mb-16 text-center">
            <SectionHeading as="h2" size="xl" className="mb-4 text-[clamp(36px,8vw,64px)]">
              Training Packages
            </SectionHeading>
            <SectionLabel className="font-bold tracking-[0.2em]">
              Select your intensity level
            </SectionLabel>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
            {trainingPackages.map((pkg) => (
              <IndustrialCard
                key={pkg.id}
                className={`flex h-full flex-col p-8 ${
                  pkg.featured ? "!bg-primary md:-translate-y-4" : ""
                }`}
              >
                <h4
                  className={`font-headline mb-6 flex items-center gap-3 text-headline-md leading-tight uppercase ${
                    pkg.featured ? "text-on-primary" : "text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-4xl text-secondary">
                    {pkg.featured ? "star" : "fitness_center"}
                  </span>
                  {pkg.title}
                </h4>
                <p
                  className={`mb-12 flex-grow font-body text-body-md ${
                    pkg.featured ? "text-primary-fixed-dim" : "text-on-surface-variant"
                  }`}
                >
                  {pkg.detail}
                </p>
                <Link
                  href={`/contact?package=${pkg.id}`}
                  className={`w-full py-4 text-center font-headline text-[16px] uppercase transition-none ${
                    pkg.buttonVariant === "primary"
                      ? "bg-primary text-on-primary hover:bg-secondary"
                      : pkg.buttonVariant === "surface"
                        ? "bg-surface text-primary hover:bg-secondary hover:text-on-secondary"
                        : "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-on-primary"
                  }`}
                >
                  Book a Free Consultation
                </Link>
              </IndustrialCard>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 w-full translate-y-1/2 overflow-hidden opacity-[0.05]">
          <div className="whitespace-nowrap font-headline text-[80px] uppercase leading-none text-primary md:text-[300px]">
            STRENGTH • ENDURANCE • POWER • STRENGTH • ENDURANCE • POWER
          </div>
        </div>
      </section>

      <section className="bg-primary px-page py-32 text-center">
        <div className="mx-auto max-w-4xl">
          <SectionHeading as="h2" size="xl" className="mb-8 !text-white">
            Ready to Commit?
          </SectionHeading>
          <div className="mx-auto mb-12 h-2 w-32 bg-secondary" />
          <p className="mb-12 font-body text-body-lg text-primary-fixed-dim">
            Join 180PT and transform your potential into performance. Our coaches are waiting to
            build your blueprint.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:gap-6 md:flex-row">
            <Link
              href="/contact"
              className="touch-manipulation bg-surface px-8 py-5 text-center font-headline text-lg uppercase text-primary transition-none hover:bg-secondary hover:text-on-secondary sm:px-12 sm:py-6 sm:text-[24px]"
            >
              Join the Team
            </Link>
            <Link
              href="/contact"
              className="touch-manipulation border-2 border-surface px-8 py-5 text-center font-headline text-lg uppercase text-on-primary transition-none hover:bg-surface hover:text-primary sm:px-12 sm:py-6 sm:text-[24px]"
            >
              View Locations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
