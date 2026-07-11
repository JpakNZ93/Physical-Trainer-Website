import Link from "next/link";
import { IndustrialCard } from "@/components/IndustrialCard";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CardTitle } from "@/components/ui/CardTitle";
import {
  aboutApproach,
  aboutImages,
  coach,
  coachBio,
  qualifications,
  stitchImages,
} from "@/lib/constants";

interface AboutPageContentProps {
  readonly className?: string;
}

export function AboutPageContent({ className = "" }: AboutPageContentProps) {
  return (
    <div className={className}>
      <section className="relative flex h-[min(921px,100svh)] w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/40 to-background/10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={aboutImages.hero}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover brightness-75 contrast-100 grayscale"
          />
        </div>
        <div className="relative z-20 px-page text-center">
          <h1 className="font-headline mb-4 text-display-lg uppercase leading-none text-on-background">
            About Us
          </h1>
          <p className="font-body text-body-lg font-bold uppercase tracking-[0.2em] text-secondary">
            Turning Lives Around
          </p>
          <div className="mx-auto mt-12 h-1.5 w-24 bg-primary" />
        </div>
      </section>

      <PageSection background="surface-low" className="border-y border-outline-variant">
        <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHeading
              as="h2"
              className="border-l-4 border-secondary pl-6 text-on-background"
            >
              Our Mission
            </SectionHeading>
          </div>
          <div className="md:col-span-8">
            <p className="font-headline text-headline-lg-mobile italic leading-tight text-on-surface md:text-headline-lg">
              &ldquo;To inspire, motivate and empower people to become the strongest version of
              themselves—physically, mentally and emotionally.&rdquo;
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="grid grid-cols-1 items-center gap-24 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="mb-8 inline-block bg-secondary px-4 py-1">
              <SectionLabel className="text-on-secondary">Est. 2014</SectionLabel>
            </div>
            <SectionHeading as="h2" className="mb-2 text-on-background">
              Meet {coach.name}
            </SectionHeading>
            <p className="mb-8 font-label text-label-sm uppercase text-on-surface-variant">
              {coach.title}
            </p>
            <div className="max-w-xl space-y-6">
              {coachBio.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="font-body text-body-md leading-relaxed text-on-surface-variant"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="brutalist-border industrial-shadow mt-8 bg-surface-container-low p-6">
              <h3 className="mb-4 font-label text-label-sm uppercase text-secondary">
                Qualifications
              </h3>
              <ul className="flex flex-col gap-3">
                {qualifications.map((qual) => (
                  <li key={qual} className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    <span className="font-body text-body-md">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative order-1 aspect-[4/5] overflow-hidden brutalist-border bg-surface-container-high md:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Portrait of fitness founder"
              className="h-full w-full object-cover contrast-125 grayscale"
              src={stitchImages.aboutFounder}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </PageSection>

      <PageSection background="surface-low">
        <div className="flex flex-col items-start gap-16 md:flex-row">
          <div className="w-full md:w-1/3">
            <SectionLabel className="mb-4 block">Methodology</SectionLabel>
            <SectionHeading as="h2" className="text-on-background">
              Personal Approach
            </SectionHeading>
          </div>
          <div className="grid w-full grid-cols-1 gap-gutter md:w-2/3 md:grid-cols-2">
            {aboutApproach.map((item) => (
              <IndustrialCard key={item.title} className="p-8">
                <CardTitle icon={item.icon}>{item.title}</CardTitle>
                <p className="font-body text-body-md text-on-surface-variant">{item.description}</p>
              </IndustrialCard>
            ))}
          </div>
        </div>
      </PageSection>

      <section className="relative overflow-hidden bg-primary py-20 md:py-32">
        <div className="absolute inset-0 bg-white/5 opacity-10 mix-blend-overlay" />
        <div className="relative z-10 mx-auto max-w-container-max px-page text-center">
          <SectionHeading
            as="h2"
            size="xl"
            className="mb-10 !text-white text-headline-lg-mobile md:text-headline-xl"
          >
            Start Your 180 Today
          </SectionHeading>
          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/contact"
              className="touch-manipulation bg-surface px-8 py-4 text-center font-headline text-headline-md uppercase tracking-tight text-primary transition-all hover:-translate-y-1 hover:bg-surface-container-highest sm:px-12 sm:py-5"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
