import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { PackageCard } from "@/components/PackageCard";
import { services, packages } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Personal training, boxing, small group training, and online coaching packages at 180PT Western Sydney.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl font-black uppercase tracking-wide text-white md:text-5xl">
            Services
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Professional coaching tailored to your goals, fitness level, and lifestyle.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-brand-grey bg-diagonal-lines py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-black uppercase tracking-wide text-white">
            Packages
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <PackageCard key={pkg.title} {...pkg} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
