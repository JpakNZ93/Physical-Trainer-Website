"use client";

import { useSyncExternalStore } from "react";
import { heroMedia } from "@/lib/constants";

const mediaClass =
  "absolute inset-0 h-full w-full object-cover brightness-90 contrast-125 grayscale";

function getShouldPlayVideo() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktop = window.matchMedia("(min-width: 768px)").matches;
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
    .connection;
  const saveData = connection?.saveData ?? false;

  return desktop && !reducedMotion && !saveData;
}

function subscribe(onStoreChange: () => void) {
  const queries = [
    window.matchMedia("(min-width: 768px)"),
    window.matchMedia("(prefers-reduced-motion: reduce)"),
  ];

  queries.forEach((mq) => mq.addEventListener("change", onStoreChange));
  return () => queries.forEach((mq) => mq.removeEventListener("change", onStoreChange));
}

export function HeroMedia() {
  const shouldPlayVideo = useSyncExternalStore(subscribe, getShouldPlayVideo, () => false);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={heroMedia.mobilePoster}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className={`${mediaClass} md:hidden`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={heroMedia.poster}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className={`${mediaClass} hidden md:block`}
      />
      {shouldPlayVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroMedia.poster}
          className={mediaClass}
          aria-hidden="true"
        >
          <source src={heroMedia.video} type="video/mp4" />
        </video>
      )}
    </>
  );
}
