import type { Metadata } from "next";
import { CoachPortrait } from "@/components/CoachPortrait";
import { Check } from "lucide-react";
import { coach, qualifications } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Trainers",
  description: `Meet ${coach.name}, founder and head coach at 180PT — personal trainer and boxing coach with 10+ years of experience.`,
};

export default function TrainersPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <CoachPortrait />

          <div>
            <h1 className="text-3xl font-black uppercase tracking-wide text-white md:text-4xl">
              Meet Your Coach
            </h1>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-wide text-brand-yellow md:text-5xl">
              {coach.name}
            </h2>
            <p className="mt-2 text-lg font-semibold uppercase tracking-wider text-white/80">
              {coach.title}
            </p>

            <p className="mt-6 text-white/70">
              {coach.firstName} is passionate about helping people completely transform their lives
              through fitness.
            </p>
            <p className="mt-4 text-white/70">
              With more than a decade of coaching experience, he believes that consistency,
              discipline, and accountability are the keys to lasting results.
            </p>
            <p className="mt-4 text-white/70">
              His coaching style is supportive, motivating, and focused on building confidence while
              helping clients achieve sustainable success.
            </p>

            <div className="mt-8">
              <h3 className="mb-4 text-lg font-bold uppercase tracking-wider text-brand-yellow">
                Qualifications
              </h3>
              <ul className="flex flex-col gap-3">
                {qualifications.map((qual) => (
                  <li key={qual} className="flex items-center gap-3 text-white/70">
                    <Check className="h-5 w-5 shrink-0 text-brand-yellow" />
                    {qual}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
