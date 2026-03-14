"use client";

import { useEffect, useRef } from "react";

interface HeroBackgroundProps {
  color?: string;
}

export function HeroBackground({ color = "167, 139, 250" }: HeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const drawWaveform = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      const waves = 8;
      const baseAmplitude = height * 0.12;

      for (let w = 0; w < waves; w++) {
        const opacity = 0.4 - w * 0.04;
        const amplitude = baseAmplitude * (1 - w * 0.1);
        const frequency = 0.002 + w * 0.0003;
        const speed = 0.015 - w * 0.001;
        const yOffset = height * 0.45 + w * 40;

        ctx.beginPath();
        ctx.moveTo(0, yOffset);

        for (let x = 0; x <= width; x += 2) {
          const y =
            yOffset +
            Math.sin(x * frequency + time * speed) * amplitude +
            Math.sin(x * frequency * 2.5 + time * speed * 1.3) * (amplitude * 0.4) +
            Math.sin(x * frequency * 0.5 + time * speed * 0.7) * (amplitude * 0.2);
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `rgba(${color}, ${opacity})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      // Add stronger glow effect
      const gradient = ctx.createRadialGradient(
        width * 0.3,
        height * 0.5,
        0,
        width * 0.3,
        height * 0.5,
        width * 0.6
      );
      gradient.addColorStop(0, `rgba(${color}, 0.15)`);
      gradient.addColorStop(0.5, `rgba(${color}, 0.05)`);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add second glow on the right
      const gradient2 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.6,
        0,
        width * 0.8,
        height * 0.6,
        width * 0.4
      );
      gradient2.addColorStop(0, `rgba(${color}, 0.1)`);
      gradient2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      time += 1;
      animationId = requestAnimationFrame(drawWaveform);
    };

    resize();
    drawWaveform();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
