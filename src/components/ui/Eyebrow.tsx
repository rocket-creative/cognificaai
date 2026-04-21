/* |UXUIDC| Eyebrow */
import { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  tone?: "yellow" | "muted";
}

export function Eyebrow({ children, className = "", tone = "yellow" }: EyebrowProps) {
  const color = tone === "yellow" ? "text-[#E6A91A]" : "text-white/40";
  return (
    <p
      className={`font-nav text-[10px] sm:text-xs tracking-widest uppercase ${color} ${className}`}
    >
      {children}
    </p>
  );
}
