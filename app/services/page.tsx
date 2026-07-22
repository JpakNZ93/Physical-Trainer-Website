import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { PackageCard } from "@/components/PackageCard";
import { CTAStrip } from "@/components/CTAStrip";
import { MobileTrainingCase } from "@/components/MobileTrainingCase";
import { TrainingGallery } from "@/components/TrainingGallery";
import { packages, pageImages, services, trainingGallery } from "@/lib/constants";
export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile personal training, outdoor boxing, and small group sessions across Western Sydney. No gym required — we come to your park, home, or garage.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl font-black uppercase tracking-wide md:text-5xl">
            Our <span className="text-brand-yellow">Services</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/70">
            Professional coaching at your location across Western Sydney — your local park, home,
            or garage. No gym membership, no commute, no crowds. Just focused training that fits your
            life.
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm text-white/60">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
            Mobile training — we come to you. Sessions available early mornings, evenings, and
            weekends.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} showImage={false} />
            ))}
          </div>
        </div>
      </section>

      <MobileTrainingCase />

      <section className="border-t border-white/10 bg-brand-grey py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl font-black uppercase tracking-wide md:text-4xl">
            Training in <span className="text-brand-yellow">Action</span>
          </h2>
          <p className="mt-4 max-w-2xl text-white/70">
            Real outdoor and at-home sessions across Western Sydney — personal training, boxing, and
            small group coaching without stepping inside a gym.
          </p>

          <div className="mt-12">
            <TrainingGallery items={trainingGallery} />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-brand-grey bg-diagonal-lines py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl font-black uppercase tracking-wide md:text-4xl">
            Training <span className="text-brand-yellow">Packages</span>
          </h2>
          <p className="mt-4 max-w-2xl text-white/70 md:mx-auto md:text-center">
            Choose a package that fits your schedule and goals. All personal training sessions are
            45 minutes and booked at a time that works for you.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Ready to Get Started?"
        highlight="Get Started"
        description="Book a free consultation and we'll find the right program — at your park, home, or garage."
        buttonText="Book a Free Consultation"
        backgroundImage={pageImages.ctaBackground}
      />
    </>
  );
}
