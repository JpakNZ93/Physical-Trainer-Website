import Link from "next/link";
import { Check } from "lucide-react";
import { Hero } from "@/components/Hero";
import { FeatureBar } from "@/components/FeatureBar";
import { CTAStrip } from "@/components/CTAStrip";
import { CoachPortrait } from "@/components/CoachPortrait";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { coach, pageImages } from "@/lib/constants";
const trustPoints = [
  "Mobile training — we come to you across Western Sydney",
  "10+ years of coaching experience",
  "Programs tailored to your goals, level, and lifestyle",
  "Personal training, boxing, small group, and online coaching",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl font-black uppercase tracking-wide md:text-4xl">
            Why Choose <span className="text-brand-yellow">180PT</span>?
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            At 180PT, we believe fitness is about more than just physical transformation—it&apos;s
            about changing lives.
          </p>
          <p className="mt-4 max-w-3xl text-white/70">
            Whether you&apos;re looking to lose weight, build muscle, improve your health, or gain
            confidence, we&apos;re committed to helping you reach your goals with structured
            training, expert coaching, and ongoing support.
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
        headline="Your Only Limit Is You"
        highlight="You"
        description="Start today and discover how 180PT can help you build a stronger body, stronger mind, and stronger life."
        buttonText="Book a Free Consultation"
        backgroundImage={pageImages.ctaBackground}
      />
    </>
  );
}
