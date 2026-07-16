import Image from "next/image";
import { coach } from "@/lib/constants";

export function CoachPortrait() {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden border border-white/10">
      <Image
        src={coach.image}
        alt={coach.imageAlt}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center"
      />
    </div>
  );
}
