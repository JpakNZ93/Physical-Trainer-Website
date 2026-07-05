import type { Metadata } from "next";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CTAStrip } from "@/components/CTAStrip";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { openingHours, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with 180PT in Western Sydney. Book your free consultation today.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0">
          <PlaceholderImage label="Boxing Gloves Background" aspectRatio="hero" className="h-full w-full" />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl font-black uppercase tracking-wide text-white md:text-5xl">
            Contact Us
          </h1>
          <h2 className="mt-2 text-2xl font-bold uppercase tracking-wide">Let&apos;s Get Started</h2>
          <p className="mt-4 text-white/70">
            Ready to begin your fitness journey? Book your first session today.
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-xl font-bold uppercase tracking-wider text-brand-yellow">
                Contact Details
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="h-5 w-5 text-brand-yellow" />
                  {siteConfig.address}
                </div>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-3 text-white/70 hover:text-brand-yellow"
                >
                  <Phone className="h-5 w-5 text-brand-yellow" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-brand-yellow"
                >
                  <Mail className="h-5 w-5 text-brand-yellow" />
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.url}
                  className="flex items-center gap-3 text-white/70 hover:text-brand-yellow"
                >
                  <Globe className="h-5 w-5 text-brand-yellow" />
                  {siteConfig.url.replace("https://", "")}
                </a>
              </div>

              <h3 className="mb-4 mt-10 text-xl font-bold uppercase tracking-wider text-brand-yellow">
                Opening Hours
              </h3>
              <div className="flex flex-col gap-3">
                {openingHours.map((slot) => (
                  <div key={slot.days} className="flex justify-between border-b border-white/10 pb-2">
                    <span className="font-semibold text-white/90">{slot.days}</span>
                    <span className="text-white/60">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 bg-brand-black/60 p-6 backdrop-blur-sm md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Your Only Limit Is You"
        highlight="You"
        description="Start today and discover how 180PT can help you build a stronger body, stronger mind, and stronger life."
        buttonText="Book Your Free Consultation Today"
      />
    </>
  );
}
