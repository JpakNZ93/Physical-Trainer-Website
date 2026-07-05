import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about 180PT's mission to help people turn their lives around through health, fitness, and discipline in Western Sydney.",
};

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-wide text-white md:text-5xl">
              About Us
            </h1>
            <h2 className="brushstroke-highlight mt-4 text-2xl font-bold uppercase tracking-wide">
              Turning Lives Around
            </h2>

            <p className="mt-6 text-white/70">
              180PT was founded with one simple mission: to help people turn their lives around
              through health, fitness, and discipline.
            </p>
            <p className="mt-4 text-white/70">
              With over 10 years of coaching experience, we&apos;ve helped people from all walks of
              life build confidence, improve their fitness, lose weight, and develop lifelong healthy
              habits.
            </p>
            <p className="mt-4 text-white/70">
              At 180PT, you&apos;re never just another client. Every program is designed
              specifically for your goals, fitness level, lifestyle, and ability.
            </p>
            <p className="mt-4 text-white/70">
              Whether you&apos;re stepping into the gym for the first time or looking to take your
              performance to the next level, we&apos;ll guide you every step of the way.
            </p>

            <div className="mt-8 border border-brand-yellow/30 bg-brand-grey p-6">
              <div className="mb-3 flex items-center gap-3">
                <Target className="h-6 w-6 text-brand-yellow" />
                <h3 className="text-lg font-bold uppercase tracking-wider text-brand-yellow">
                  Our Mission
                </h3>
              </div>
              <p className="text-white/70">
                To inspire, motivate and empower people to become the strongest version of
                themselves—physically, mentally and emotionally.
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <PlaceholderImage
              label="Weight Plates Background"
              aspectRatio="portrait"
              className="w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Logo size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
