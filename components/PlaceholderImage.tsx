import Image from "next/image";

interface PlaceholderImageProps {
  label: string;
  src?: string;
  alt?: string;
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
  src,
  alt,
  aspectRatio = "square",
  className = "",
}: PlaceholderImageProps) {
  const aspectClass = className.includes("h-full") ? "" : aspectClasses[aspectRatio];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-brand-grey border border-white/10 ${aspectClass} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? label}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-grey to-brand-black" />
          <span className="relative z-10 px-4 text-center text-sm font-semibold uppercase tracking-wider text-white/50">
            {label}
          </span>
        </>
      )}
    </div>
  );
}
