import type { Metadata } from "next";
import { CoachPortrait } from "@/components/CoachPortrait";
import { CTAStrip } from "@/components/CTAStrip";
import { FeatureBar } from "@/components/FeatureBar";
import { Check, Target } from "lucide-react";
import { aboutFeatures, coach, pageImages, qualifications } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about 180PT and meet Johnson Huynh — founder, personal trainer, and boxing coach helping people turn their lives around in Western Sydney.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-black uppercase tracking-wide text-brand-yellow md:text-5xl">
                About Us
              </h1>
              <h2 className="brushstroke-highlight mt-4 text-2xl font-bold uppercase tracking-wide">
                Turning Lives Around
              </h2>

              <p className="mt-6 text-white/70">
                At 180PT, we believe fitness is more than just exercise — it&apos;s about{" "}
                <span className="font-semibold text-brand-yellow">turning lives around</span>. We are
                a mobile personal training service dedicated to helping everyday people become
                stronger, healthier, and more confident — body, mind and life.
              </p>

              <div className="my-8 lg:hidden">
                <CoachPortrait />
              </div>

              <p className="text-white/70">
                Based in Western Sydney, we bring training to you — at home, in a local park, or
                wherever you train best. No gym membership required.
              </p>
              <p className="mt-4 text-white/70">
                At 180PT, you&apos;re never just another client. Every program is designed
                specifically for your goals, fitness level, lifestyle, and ability — whether
                you&apos;re starting out or levelling up your boxing and strength work.
              </p>

              <div className="mt-8 border border-brand-yellow/30 bg-brand-grey p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Target className="h-6 w-6 text-brand-yellow" />
                  <h3 className="text-lg font-bold uppercase tracking-wider text-brand-yellow">
                    Our Mission
                  </h3>
                </div>
                <p className="text-white/70">
                  To inspire, equip and support people to reach their full potential through
                  personalised fitness, accountability and care.
                </p>
              </div>
            </div>

            <div className="hidden lg:sticky lg:top-24 lg:block">
              <CoachPortrait />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-brand-grey py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl font-black uppercase tracking-wide text-white md:text-4xl">
            Meet <span className="text-brand-yellow">{coach.firstName}</span>
          </h2>
          <p className="mt-2 text-lg font-semibold uppercase tracking-wider text-white/80">
            {coach.title}
          </p>

          <div className="mt-10 grid items-start gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-white/70">
                {coach.firstName} founded 180PT to combine one-on-one personal training with boxing
                coaching — helping clients lose weight, build strength, and grow real confidence
                through structured programs and weekly accountability.
              </p>
              <p className="text-white/70">
                Known for a direct but supportive approach, {coach.firstName} builds plans around
                each client&apos;s schedule, ability, and goals — from first-time trainers to
                clients pushing their next boxing and conditioning milestone.
              </p>
            </div>

            <aside className="border border-brand-yellow/30 bg-brand-black/40 p-6">
              <h3 className="text-lg font-bold uppercase tracking-wider text-brand-yellow">
                Qualifications
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {qualifications.map((qual) => (
                  <li key={qual} className="flex items-start gap-3 text-white/70">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-black uppercase tracking-wide md:text-4xl">
            Why Train With <span className="text-brand-yellow">180PT</span>?
          </h2>
          <FeatureBar items={aboutFeatures} columns={5} />
        </div>
      </section>

      <CTAStrip
        headline="Your Fitness Journey Starts Here"
        highlight="Starts Here"
        description="Take the first step toward a stronger body, stronger mind, and stronger life with 180PT."
        buttonText="Book a Free Consultation"
        backgroundImage={pageImages.ctaBackground}
      />
    </>
  );
}
