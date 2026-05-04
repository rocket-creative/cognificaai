/* |UXUIDC| HeroVideo */
"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  className?: string;
  poster?: string;
}

export function HeroVideo({ className = "", poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      v.pause();
      v.removeAttribute("autoplay");
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      className={`w-full h-full object-cover ${className}`}
      aria-hidden="true"
    >
      <source src="/videos/hero.webm" type="video/webm" />
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  );
}
