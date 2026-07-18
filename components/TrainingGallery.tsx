"use client";

import { ServiceVideo } from "./ServiceVideo";

interface GalleryItem {
  id: string;
  title: string;
  video: string;
  poster?: string;
}

interface TrainingGalleryProps {
  items: GalleryItem[];
}

export function TrainingGallery({ items }: TrainingGalleryProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <figure key={item.id} className="overflow-hidden border border-white/10 bg-brand-grey">
          <ServiceVideo src={item.video} poster={item.poster} title={item.title} />
          <figcaption className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-white/80">
            {item.title}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
