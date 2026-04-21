/* |UXUIDC| SectionHeading */
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  as = "h2",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const HeadingTag = as as "h2";
  const size =
    as === "h1"
      ? "text-[clamp(32px,6vw,72px)] leading-[1.05]"
      : as === "h2"
      ? "text-[clamp(26px,4vw,52px)] leading-[1.1]"
      : "text-[clamp(20px,3vw,32px)] leading-[1.2]";

  return (
    <div className={`${alignment} max-w-3xl ${align === "center" ? "" : ""} ${className}`}>
      {eyebrow ? (
        <p className="font-nav text-[10px] sm:text-xs tracking-widest uppercase text-[#E6A91A] mb-4">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className={`font-heading ${size} text-white`}>{title}</HeadingTag>
      {lede ? (
        <p className="mt-6 font-body text-base sm:text-lg text-white/70 font-light leading-relaxed">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
