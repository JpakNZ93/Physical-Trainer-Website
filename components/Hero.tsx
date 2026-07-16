import { CTAButton } from "./CTAButton";
import { HeroMedia } from "./HeroMedia";

interface HeroProps {
  showCTAs?: boolean;
}

export function Hero({ showCTAs = true }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <HeroMedia />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-6">
        <h1 className="max-w-3xl text-4xl font-black uppercase italic leading-tight tracking-wide md:text-6xl lg:text-7xl">
          Turning <span className="text-brand-yellow not-italic">Lives</span> Around
        </h1>
        <p className="mt-4 text-lg font-semibold uppercase tracking-widest text-white/90 md:text-xl">
          Private Personal Training
        </p>
        <p className="mt-6 max-w-xl text-lg text-white/70">
          Helping everyday people become stronger, healthier, and more confident through
          professional coaching and real accountability.
        </p>

        {showCTAs && (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/contact">Book a Free Consultation</CTAButton>
          </div>
        )}
      </div>
    </section>
  );
}
