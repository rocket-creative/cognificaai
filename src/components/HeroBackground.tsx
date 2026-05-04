/* |UXUIDC| HeroBackground */
"use client";

import { useEffect, useRef } from "react";

interface HeroBackgroundProps {
  className?: string;
  waveCount?: number;
  color?: string;
  colorAlt?: string;
}

export function HeroBackground({
  className = "",
  waveCount = 5,
  color = "255, 79, 0",
  colorAlt = "204, 63, 0",
}: HeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let dpr = 1;
    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const waves = Array.from({ length: waveCount }, (_, i) => ({
      amplitude: 45 + i * 20,
      frequency: 0.008 - i * 0.001,
      speed: 1 + i * 0.2,
      phase: (i * Math.PI) / waveCount,
      stroke: i % 2 === 0 ? `rgb(${color})` : `rgb(${colorAlt})`,
      yOffset: i * 40,
    }));

    let rafId: number | null = null;
    const start = performance.now();
    const loopMs = 8000;

    const drawFrame = (timeSeed: number) => {
      ctx.clearRect(0, 0, width, height);
      const centerY = height / 2;

      waves.forEach((wave) => {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 2) {
          const y =
            centerY +
            wave.yOffset +
            Math.sin(x * wave.frequency + timeSeed * wave.speed + wave.phase) *
              wave.amplitude +
            Math.sin(
              x * wave.frequency * 2 + timeSeed * wave.speed * 0.5
            ) *
              (wave.amplitude * 0.3);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = wave.stroke;
        ctx.lineWidth = 3.5;
        ctx.stroke();
      });

      for (let x = 0; x < width; x += 80) {
        const baseY = centerY + Math.sin(x * 0.01 + timeSeed) * 20;
        const pulseSize = 6 + Math.sin(timeSeed * 2 + x * 0.05) * 3;
        ctx.beginPath();
        ctx.arc(x, baseY, Math.max(0.5, pulseSize), 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${color})`;
        ctx.fill();
      }
    };

    if (reduceMotion) {
      drawFrame(0);
    } else {
      const animate = (now: number) => {
        const elapsed = (now - start) % loopMs;
        const timeSeed = (elapsed / loopMs) * Math.PI * 2;
        drawFrame(timeSeed);
        rafId = requestAnimationFrame(animate);
      };
      rafId = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [waveCount, color, colorAlt]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
