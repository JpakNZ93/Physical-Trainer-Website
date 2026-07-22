import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { PackageCard } from "@/components/PackageCard";
import { CTAStrip } from "@/components/CTAStrip";
import { CTAButton } from "@/components/CTAButton";
import { TrainingGallery } from "@/components/TrainingGallery";
import { packages, pageImages, services, servicesPage, trainingGallery } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Personal training, boxing, small group, and online coaching across Western Sydney. Choose your program and book a free consultation.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl font-black uppercase tracking-wide md:text-5xl">
            Services & <span className="text-brand-yellow">Packages</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">{servicesPage.intro}</p>

          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {servicesPage.steps.map((step, index) => (
              <li
                key={step.title}
                className="border border-white/10 bg-brand-grey p-6"
              >
                <span className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
                  Step {index + 1}
                </span>
                <h2 className="mt-2 text-lg font-bold uppercase tracking-wide text-white">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-white/10 bg-brand-grey py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl font-black uppercase tracking-wide md:text-4xl">
            {servicesPage.programsHeading}
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="max-w-xl text-white/70">
              Not sure which program is right for you? We&apos;ll help you choose in a free
              consultation.
            </p>
            <CTAButton href="/contact">Book a Free Consultation</CTAButton>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-wide md:text-4xl">
                {servicesPage.galleryHeading}
              </h2>
              <p className="mt-2 text-white/70">{servicesPage.galleryIntro}</p>
            </div>
          </div>

          <div className="mt-10">
            <TrainingGallery items={trainingGallery} />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-brand-grey bg-diagonal-lines py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-center text-3xl font-black uppercase tracking-wide md:text-4xl">
            {servicesPage.packagesHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
            {servicesPage.packagesIntro}
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Let's Find the Right Fit"
        highlight="Right Fit"
        description="Book your free consultation today — we'll confirm your program, location, and schedule."
        buttonText="Book a Free Consultation"
        backgroundImage={pageImages.ctaBackground}
      />
    </>
  );
}
