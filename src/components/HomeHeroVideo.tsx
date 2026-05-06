/* |UXUIDC| HomeHeroVideo */
"use client";

import { useEffect, useRef, useState } from "react";

interface HomeHeroVideoProps {
  className?: string;
}

const SRC_DESKTOP = "/videos/cogai-explainer-1080p.mp4";
const SRC_MOBILE = "/videos/cogai-explainer-720p.mp4";
const POSTER = "/videos/cogai-explainer-poster.jpg";

export function HomeHeroVideo({ className = "" }: HomeHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string>(SRC_DESKTOP);
  const [muted, setMuted] = useState<boolean>(true);
  const [reduced, setReduced] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mobileMQ = window.matchMedia("(max-width: 768px)");
    setSrc(mobileMQ.matches ? SRC_MOBILE : SRC_DESKTOP);

    const reduceMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(reduceMQ.matches);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduced) {
      v.pause();
      v.removeAttribute("autoplay");
    }
  }, [reduced, src]);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setMuted(next);
    if (!next) {
      const p = v.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          v.muted = true;
          setMuted(true);
        });
      }
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggleMute();
    }
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      <video
        ref={videoRef}
        key={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={POSTER}
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>

      <button
        type="button"
        onClick={toggleMute}
        onKeyDown={onKey}
        aria-label={muted ? "Unmute video" : "Mute video"}
        aria-pressed={!muted}
        className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-inset"
      >
        <span className="sr-only">{muted ? "Unmute video" : "Mute video"}</span>
      </button>

      <div
        aria-hidden="true"
        className={`absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none transition-opacity duration-300 ${
          muted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-2 bg-black/55 backdrop-blur-sm text-white px-3 py-2 border border-white/20">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="22" y1="9" x2="16" y2="15" />
            <line x1="16" y1="9" x2="22" y2="15" />
          </svg>
          <span className="font-nav text-[10px] tracking-widest uppercase font-light">
            Tap for sound
          </span>
        </div>
      </div>
    </div>
  );
}
