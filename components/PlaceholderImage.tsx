interface PlaceholderImageProps {
  label: string;
  aspectRatio?: "hero" | "portrait" | "square" | "wide";
  className?: string;
}

const aspectClasses = {
  hero: "aspect-video",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
};

export function PlaceholderImage({
  label,
  aspectRatio = "square",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-brand-grey border border-white/10 ${aspectClasses[aspectRatio]} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-grey to-brand-black" />
      <span className="relative z-10 px-4 text-center text-sm font-semibold uppercase tracking-wider text-white/50">
        {label}
      </span>
    </div>
  );
}
