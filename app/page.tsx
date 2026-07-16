import { Hero } from "@/components/Hero";
import { FeatureBar } from "@/components/FeatureBar";
import { CTAStrip } from "@/components/CTAStrip";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { pageImages } from "@/lib/constants";

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
            <FeatureBar />
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
