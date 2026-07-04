import { PlaceholderImage } from "./PlaceholderImage";

interface TransformationCardProps {
  name: string;
  result: string;
  timeframe: string;
}

export function TransformationCard({ name, result, timeframe }: TransformationCardProps) {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-2">
        <PlaceholderImage label="Before" aspectRatio="portrait" />
        <PlaceholderImage label="After" aspectRatio="portrait" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold uppercase tracking-wider text-brand-orange">{name}</h3>
        <p className="mt-1 text-2xl font-black text-brand-orange">{result}</p>
        <p className="mt-1 text-sm uppercase tracking-wider text-white/60">{timeframe}</p>
      </div>
    </div>
  );
}
