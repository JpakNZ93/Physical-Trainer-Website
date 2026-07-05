import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Personal training, boxing, small group training, and online coaching at 180PT Western Sydney.",
};

export default function ServicesPage() {
  return (
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
  );
}
