import Link from "next/link";
import { Check } from "lucide-react";
import { Hero } from "@/components/Hero";
import { FeatureBar } from "@/components/FeatureBar";
import { CTAStrip } from "@/components/CTAStrip";
import { CoachPortrait } from "@/components/CoachPortrait";
import { MobileTrainingCase } from "@/components/MobileTrainingCase";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { coach, pageImages, trustPoints } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero />

      <MobileTrainingCase />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl font-black uppercase tracking-wide md:text-4xl">
            Why Choose <span className="text-brand-yellow">180PT</span>?
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Most people don&apos;t quit fitness because they&apos;re lazy — they quit because the gym
            doesn&apos;t fit their life. Long commutes, crowded floors, and memberships that go unused
            make it harder to stay consistent.
          </p>
          <p className="mt-4 max-w-3xl text-white/70">
            180PT removes those barriers. We bring expert coaching to your doorstep, your local park,
            or wherever you feel most comfortable — so you can focus on getting stronger, not fighting
            for a treadmill.
          </p>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <PlaceholderImage
              label="Training at 180PT"
              src={pageImages.homeMotivation}
              alt="Group training session at 180PT"
              aspectRatio="wide"
              className="w-full"
            />
            <ul className="flex flex-col gap-4">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-white/70">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-brand-grey py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <FeatureBar />
        </div>
      </section>

      <section className="border-t border-white/10 bg-brand-grey py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <CoachPortrait />
            <div>
              <h2 className="text-3xl font-black uppercase tracking-wide md:text-4xl">
                Meet <span className="text-brand-yellow">{coach.firstName}</span>
              </h2>
              <p className="mt-2 text-lg font-semibold uppercase tracking-wider text-white/80">
                {coach.title}
              </p>
              <p className="mt-6 text-white/70">
                With more than a decade of coaching experience, {coach.firstName} is passionate
                about helping people completely transform their lives through fitness — building
                confidence, discipline, and lasting results along the way.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="text-sm font-bold uppercase tracking-wider text-brand-yellow transition-colors hover:text-yellow-300"
                >
                  Learn more about 180PT →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Skip the Gym. Start Training."
        highlight="Start Training"
        description="Book a free consultation and train outdoors or at home — on your schedule, with a coach who comes to you."
        buttonText="Book a Free Consultation"
        backgroundImage={pageImages.ctaBackground}
      />
    </>
  );
}
