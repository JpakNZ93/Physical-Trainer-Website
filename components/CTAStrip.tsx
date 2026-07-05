import { CTAButton } from "./CTAButton";

interface CTAStripProps {
  headline: string;
  highlight?: string;
  buttonText: string;
  buttonHref?: string;
  description?: string;
}

export function CTAStrip({
  headline,
  highlight,
  buttonText,
  buttonHref = "/contact",
  description,
}: CTAStripProps) {
  const highlightIndex =
    highlight && headline ? headline.lastIndexOf(highlight) : -1;
  const hasHighlight = highlightIndex >= 0 && highlight;

  return (
    <section className="bg-brand-grey py-16">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
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
