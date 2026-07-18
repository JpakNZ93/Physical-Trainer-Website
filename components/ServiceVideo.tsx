"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

interface ServiceVideoProps {
  src: string;
  poster?: string;
  title: string;
}

export function ServiceVideo({ src, poster, title }: ServiceVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;

    void video.play();
    setIsPlaying(true);
  }

  function handlePause() {
    setIsPlaying(false);
  }

  return (
    <div className="relative aspect-video w-full bg-brand-black">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        controls={isPlaying}
        className="h-full w-full object-cover"
        onPause={handlePause}
        onEnded={handlePause}
      />

      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors hover:bg-black/50"
          aria-label={`Play ${title} session video`}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-yellow bg-brand-black/80">
            <Play className="ml-1 h-6 w-6 fill-brand-yellow text-brand-yellow" />
          </span>
        </button>
      )}
    </div>
  );
}
