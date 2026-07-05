import type { Metadata } from "next";
import { TransformationCard } from "@/components/TransformationCard";
import { Testimonial } from "@/components/Testimonial";
import { StatsBar } from "@/components/StatsBar";
import { CTAStrip } from "@/components/CTAStrip";
import { transformations } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real transformation stories from 180PT clients. See before and after results and hear from our community.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl font-black uppercase tracking-wide text-white md:text-5xl">
            Success Stories
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Real people, real results. See how 180PT has helped transform lives.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {transformations.map((t) => (
              <TransformationCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-brand-grey py-16">
        <Testimonial />
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <StatsBar />
        </div>
      </section>

      <CTAStrip
        headline="Ready to Write Your Own Story?"
        buttonText="Start Today"
      />
    </>
  );
}
