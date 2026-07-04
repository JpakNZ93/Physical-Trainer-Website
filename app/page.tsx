import { Hero } from "@/components/Hero";
import { FeatureBar } from "@/components/FeatureBar";
import { CTAStrip } from "@/components/CTAStrip";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl font-black uppercase tracking-wide md:text-4xl">
            Why Choose <span className="text-brand-orange">180PT</span>?
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

          <div className="mt-12">
            <FeatureBar />
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
