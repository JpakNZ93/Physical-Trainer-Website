import Image from "next/image";
import { CTAButton } from "./CTAButton";

interface CTAStripProps {
  headline: string;
  highlight?: string;
  buttonText: string;
  buttonHref?: string;
  description?: string;
  backgroundImage?: string;
}

export function CTAStrip({
  headline,
  highlight,
  buttonText,
  buttonHref = "/contact",
  description,
  backgroundImage,
}: CTAStripProps) {
  const highlightIndex =
    highlight && headline ? headline.lastIndexOf(highlight) : -1;
  const hasHighlight = highlightIndex >= 0 && highlight;

  return (
    <section className="relative overflow-hidden bg-brand-grey py-16">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-brand-black/80" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-black uppercase tracking-wide md:text-4xl">
          {hasHighlight ? (
            <>
              {headline.slice(0, highlightIndex)}
              <span className="text-brand-yellow">{highlight}</span>
              {headline.slice(highlightIndex + highlight.length)}
            </>
          ) : (
            headline
          )}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-white/70">{description}</p>
        )}
        <div className="mt-8">
          <CTAButton href={buttonHref}>{buttonText}</CTAButton>
        </div>
      </div>
    </section>
  );
}
