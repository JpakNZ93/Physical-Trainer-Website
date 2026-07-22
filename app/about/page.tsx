import type { Metadata } from "next";
import { CoachPortrait } from "@/components/CoachPortrait";
import { CTAStrip } from "@/components/CTAStrip";
import { FeatureBar } from "@/components/FeatureBar";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Check, Target } from "lucide-react";
import { aboutFeatures, coach, pageImages, qualifications } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "180PT is mobile personal training for Western Sydney locals who are done with gym commutes. Train outdoors or at home with expert coaching that comes to you.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
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
                a mobile personal training service for people who want real results without the gym
                — those who&apos;d rather train in the fresh air, close to home, on a schedule that
                actually works.
              </p>
              <p className="mt-4 text-white/70">
                Based in Western Sydney, we bring training to you — at home, in a local park, or in
                your garage. No gym membership, no peak-hour traffic, and no waiting around for
                equipment. Just focused, one-on-one coaching where you&apos;re most comfortable.
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
                  To make professional fitness accessible to everyday people — wherever they are, on
                  their terms — through personalised coaching, accountability, and care.
                </p>
              </div>
            </div>

            <PlaceholderImage
              label="Training at 180PT"
              src={pageImages.aboutHero}
              alt="Group training session at 180PT"
              aspectRatio="portrait"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-brand-grey py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <CoachPortrait />
            <div>
              <h2 className="text-3xl font-black uppercase tracking-wide text-white md:text-4xl">
                Meet <span className="text-brand-yellow">{coach.firstName}</span>
              </h2>
              <p className="mt-2 text-lg font-semibold uppercase tracking-wider text-white/80">
                {coach.title}
              </p>

              <div className="mt-6 space-y-4">
                <p className="text-white/70">
                  {coach.firstName} founded 180PT for clients who were fed up with gym commutes and
                  crowded training floors. He combines one-on-one personal training with boxing
                  coaching — helping people lose weight, build strength, and grow real confidence
                  through structured programs, weekly accountability, and sessions that fit real
                  life.
                </p>
                <p className="text-white/70">
                  Known for a direct but supportive approach, {coach.firstName} builds plans around
                  each client&apos;s schedule, ability, and goals — from first-time trainers to
                  clients pushing their next boxing and conditioning milestone.
                </p>
              </div>

              <aside className="mt-8 border border-brand-yellow/30 bg-brand-black/40 p-6">
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
        description="Ready to train without the gym? Book a free consultation — we'll come to you across Western Sydney."
        buttonText="Book a Free Consultation"
        backgroundImage={pageImages.ctaBackground}
      />
    </>
  );
}
