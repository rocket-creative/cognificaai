"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroBackgroundProps {
  className?: string;
  waveCount?: number;
  color?: string;
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function HeroBackground({ 
  className = "", 
  waveCount = 5,
  color = "167, 139, 250"
}: HeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef<{ value: number }>({ value: 0 });

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    gsap.to(timeRef.current, {
      value: Math.PI * 2,
      duration: 8,
      repeat: -1,
      ease: "none",
    });

    const waves = Array.from({ length: waveCount }, (_, i) => ({
      amplitude: 30 + i * 15,
      frequency: 0.008 - i * 0.001,
      speed: 1 + i * 0.2,
      phase: (i * Math.PI) / waveCount,
      opacity: 0.15 - i * 0.02,
      yOffset: i * 40,
    }));

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const centerY = rect.height / 2;
      const time = timeRef.current.value;

      waves.forEach((wave) => {
        ctx.beginPath();
        
        for (let x = 0; x <= rect.width; x += 2) {
          const y = centerY + 
            wave.yOffset +
            Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * wave.amplitude +
            Math.sin(x * wave.frequency * 2 + time * wave.speed * 0.5) * (wave.amplitude * 0.3);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = `rgba(${color}, ${wave.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        for (let x = 0; x <= rect.width; x += 2) {
          const y = centerY + 
            wave.yOffset +
            Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * wave.amplitude +
            Math.sin(x * wave.frequency * 2 + time * wave.speed * 0.5) * (wave.amplitude * 0.3);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.lineTo(rect.width, rect.height);
        ctx.lineTo(0, rect.height);
        ctx.closePath();
        
        const gradient = ctx.createLinearGradient(0, centerY, 0, rect.height);
        gradient.addColorStop(0, `rgba(${color}, ${wave.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      for (let x = 0; x < rect.width; x += 80) {
        const baseY = centerY + Math.sin(x * 0.01 + time) * 20;
        const pulseSize = 3 + Math.sin(time * 2 + x * 0.05) * 2;
        const opacity = 0.3 + Math.sin(time + x * 0.02) * 0.2;
        
        ctx.beginPath();
        ctx.arc(x, baseY, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      gsap.killTweensOf(timeRef.current);
    };
  }, [waveCount, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
