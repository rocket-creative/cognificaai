"use client";

import { useRef, useState } from "react";

interface VideoBlockProps {
  mp4Url: string;
  webmUrl?: string;
  posterUrl: string;
  captionsUrl?: string;
}

export function VideoBlock({ mp4Url, webmUrl, posterUrl, captionsUrl }: VideoBlockProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.controls = true;
    setHasStarted(true);
    setHasEnded(false);

    try {
      await video.play();
    } catch (error) {
      setHasStarted(false);
      video.controls = false;
      console.error("Intro video playback failed:", error);
    }
  };

  const showOverlay = !hasStarted || hasEnded;

  return (
    <div className="relative w-full overflow-hidden bg-[#F4F5F7]" aria-label="COGAI introduction video">
      <video
        poster={posterUrl}
        preload="metadata"
        playsInline
        controls={hasStarted && !hasEnded}
        ref={videoRef}
        className="aspect-video w-full bg-[#F4F5F7]"
        onEnded={() => {
          setHasEnded(true);
          setHasStarted(false);
        }}
      >
        <source src={mp4Url} type="video/mp4" />
        {webmUrl ? <source src={webmUrl} type="video/webm" /> : null}
        {captionsUrl ? (
          <track kind="captions" src={captionsUrl} srcLang="en" label="English" default />
        ) : null}
        Your browser does not support the video tag.
      </video>

      {showOverlay ? (
        <button
          type="button"
          aria-label="Play the COGAI introduction video"
          onClick={handlePlay}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A2D34]"
        >
          <span className="flex size-20 items-center justify-center rounded-full bg-[#FF4F00] shadow-[0_12px_30px_rgba(15,15,20,0.18)] sm:size-[120px]">
            <span
              aria-hidden="true"
              className="ml-1 h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-white sm:border-y-[22px] sm:border-l-[34px]"
            />
          </span>
          {hasEnded ? (
            <span className="bg-[#0F0F14]/80 px-4 py-2 font-[var(--font-work-sans)] text-xs font-bold uppercase tracking-[0.18em]">
              Replay
            </span>
          ) : null}
        </button>
      ) : null}
    </div>
  );
}
