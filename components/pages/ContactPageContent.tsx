import { Suspense } from "react";
import { ContactFormLight } from "@/components/ContactFormLight";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig, stitchImages, studioDetails } from "@/lib/constants";

interface ContactPageContentProps {
  readonly className?: string;
}

export function ContactPageContent({ className = "" }: ContactPageContentProps) {
  return (
    <div className={className}>
      <section className="relative flex h-[min(500px,70svh)] flex-col items-center justify-center overflow-hidden px-page text-center md:h-[600px]">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={stitchImages.contactHero}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-background/50" />
        </div>
        <div className="z-10 max-w-4xl">
          <SectionHeading as="h1" size="xl" className="mb-6 text-[clamp(48px,8vw,72px)]">
            Get in Touch
          </SectionHeading>
          <p className="mx-auto max-w-2xl font-body text-body-lg uppercase tracking-wide text-on-surface-variant">
            Start your transformation today. Book a free consultation with our team.
          </p>
        </div>
      </section>

      <PageSection className="py-16 md:py-32" containerClassName="grid grid-cols-1 gap-gutter lg:grid-cols-12">
        <div className="brutalist-border industrial-shadow border-l-4 border-l-primary bg-surface-container-low p-8 md:p-12 lg:col-span-7">
          <SectionHeading as="h2" className="mb-8 text-headline-lg-mobile md:text-headline-lg">
            Iron-Clad Commitment
          </SectionHeading>
          <Suspense fallback={<div className="text-on-surface-variant">Loading form...</div>}>
            <ContactFormLight />
          </Suspense>
        </div>

        <div className="flex flex-col gap-gutter lg:col-span-5">
          <div className="brutalist-border industrial-shadow relative overflow-hidden bg-surface-container-high p-8 md:p-12">
            <div className="pointer-events-none absolute -top-12 -right-12 font-headline text-9xl opacity-5">
              STUDIO
            </div>
            <SectionHeading as="h3" className="mb-6 text-secondary">
              Contact Details
            </SectionHeading>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-3xl text-primary">schedule</span>
                <div>
                  <SectionLabel className="mb-1 block text-outline">Opening Hours</SectionLabel>
                  <ul className="space-y-1 font-headline text-headline-md uppercase text-on-surface">
                    {studioDetails.hours.map((slot) => (
                      <li key={slot}>{slot}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-3xl text-primary">call</span>
                <div>
                  <SectionLabel className="mb-1 block text-outline">Direct Line</SectionLabel>
                  <a
                    href={siteConfig.phoneHref}
                    className="font-headline text-headline-md text-on-surface transition-none hover:text-secondary"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-3xl text-primary">mail</span>
                <div>
                  <SectionLabel className="mb-1 block text-outline">Email Us</SectionLabel>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-headline text-headline-md uppercase text-on-surface transition-none hover:text-secondary"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <section className="overflow-hidden border-y-2 border-outline-variant bg-primary px-page py-12 whitespace-nowrap">
        <div className="animate-marquee flex w-max gap-gutter">
          <span className="font-headline text-4xl uppercase text-on-primary opacity-40 md:text-5xl">
            RESULTS GUARANTEED // NO EXCUSES // 180PT TITAN // BUILT DIFFERENT // RESULTS
            GUARANTEED // NO EXCUSES // 180PT TITAN // BUILT DIFFERENT
          </span>
          <span className="font-headline text-4xl uppercase text-on-primary opacity-40 md:text-5xl">
            RESULTS GUARANTEED // NO EXCUSES // 180PT TITAN // BUILT DIFFERENT // RESULTS
            GUARANTEED // NO EXCUSES // 180PT TITAN // BUILT DIFFERENT
          </span>
        </div>
      </section>
    </div>
  );
}
