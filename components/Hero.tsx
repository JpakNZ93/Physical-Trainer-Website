import Link from "next/link";
import { HeroMedia } from "@/components/HeroMedia";

export function Hero() {
  return (
    <section className="relative flex h-[min(921px,100svh)] w-full items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroMedia />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl px-page">
        <span className="mb-4 block font-label text-label-sm uppercase tracking-[0.3em] text-secondary">
          Private Personal Training
        </span>
        <h1 className="font-headline text-display-lg mb-6 uppercase leading-none text-primary">
          Turning Lives
          <br />
          Around
        </h1>
        <p className="mb-10 max-w-xl text-base text-on-surface-variant md:text-lg">
          Helping everyday people become stronger, healthier, and more confident through professional
          coaching and real accountability.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="/contact"
            className="touch-manipulation bg-primary px-8 py-4 text-center font-label text-sm uppercase tracking-widest text-on-primary transition-none hover:bg-secondary hover:text-on-secondary sm:px-10 sm:py-5 sm:text-base"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-[var(--spacing-margin-mobile)] hidden animate-bounce md:left-[var(--spacing-margin-desktop)] md:block">
        <span className="material-symbols-outlined scale-150 text-primary">expand_more</span>
      </div>
    </section>
  );
}
