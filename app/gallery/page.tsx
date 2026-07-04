import type { Metadata } from "next";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { galleryItems } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos from 180PT training sessions — personal training, boxing, group workouts, and community events.",
};

export default function GalleryPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h1 className="text-4xl font-black uppercase tracking-wide text-brand-orange md:text-5xl">
          The 180PT Experience
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          High-energy training sessions, boxing, group workouts, and community events.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((label) => (
            <div key={label} className="group overflow-hidden">
              <PlaceholderImage
                label={label}
                aspectRatio="square"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
