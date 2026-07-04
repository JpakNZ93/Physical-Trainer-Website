import { CTAButton } from "./CTAButton";
import { PlaceholderImage } from "./PlaceholderImage";

interface HeroProps {
  showCTAs?: boolean;
}

export function Hero({ showCTAs = true }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <PlaceholderImage label="Gym Hero Image" aspectRatio="hero" className="h-full w-full" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-6">
        <h1 className="max-w-3xl text-4xl font-black uppercase italic leading-tight tracking-wide md:text-6xl lg:text-7xl">
          Turning <span className="text-brand-orange not-italic">Lives</span> Around
        </h1>
        <p className="mt-4 text-lg font-semibold uppercase tracking-widest text-white/90 md:text-xl">
          Personal Training • Boxing • Strength &amp; Fitness
        </p>
        <p className="mt-6 max-w-xl text-lg text-white/70">
          Helping everyday people become stronger, healthier, and more confident through
          professional coaching and real accountability.
        </p>

        {showCTAs && (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/contact">Start Today</CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Book a Free Consultation
            </CTAButton>
          </div>
        )}
      </div>
    </section>
  );
}
