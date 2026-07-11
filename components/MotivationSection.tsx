import Link from "next/link";
import { IndustrialCard } from "./IndustrialCard";
import { homeImages } from "@/lib/constants";

export function MotivationSection() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low py-24 md:py-40">
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 opacity-5 select-none">
        <span className="font-headline text-[20vw] leading-none text-primary">LIMITS</span>
      </div>

      <div className="flex flex-col items-center gap-12 px-page md:flex-row md:gap-20">
        <div className="relative w-full md:w-1/2">
          <IndustrialCard className="aspect-square overflow-hidden p-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="A gritty close-up of a weightlifter's chalk-covered hands gripping a heavy barbell"
              className="h-full w-full object-cover brightness-90 grayscale"
              src={homeImages.motivation}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute top-8 left-8 z-10 bg-primary p-6 text-on-primary">
              <span className="font-headline text-3xl uppercase">EST. 2010</span>
            </div>
          </IndustrialCard>
        </div>

        <div className="w-full md:w-1/2">
          <span className="mb-6 block font-label text-label-sm uppercase tracking-[0.4em] text-secondary">
            No Shortcuts
          </span>
          <h2 className="font-headline mb-8 text-headline-lg leading-tight uppercase">
            Your Only Limit
            <br />
            Is You
          </h2>
          <p className="mb-12 border-l-4 border-secondary pl-8 text-xl text-on-surface-variant">
            &ldquo;Start today and discover how 180PT can help you build a stronger body, stronger
            mind, and stronger life. We don&apos;t just train muscles; we forge character.&rdquo;
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary px-12 py-6 font-label text-lg uppercase tracking-widest text-on-primary transition-none hover:bg-secondary hover:text-on-secondary"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
