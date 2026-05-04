/* |UXUIDC| ArrowLink */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "text";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function ArrowLink({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
  ariaLabel,
}: ArrowLinkProps) {
  const base = "group inline-flex items-center gap-3 uppercase tracking-widest font-light transition-all";
  const sizes = "text-[10px] sm:text-xs py-3 px-6";
  const styles =
    variant === "solid"
      ? `bg-orange-grad text-white bg-orange-grad-hover hover:gap-5 ${sizes}`
      : variant === "ghost"
      ? `border border-[#D2D2D7] text-[#0A0A0A] hover:border-[#3B5A75] text-orange-grad-hover hover:gap-5 ${sizes}`
      : "text-[#0A0A0A] text-orange-grad-hover hover:gap-4 text-xs tracking-widest";

  const props = external
    ? { target: "_blank" as const, rel: "noopener noreferrer", "aria-label": ariaLabel }
    : { "aria-label": ariaLabel };

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        className={`${variant === "text" ? "w-3 h-3" : "w-3 h-3"} transition-transform group-hover:translate-x-0.5`}
        aria-hidden="true"
      />
    </>
  );

  if (external) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`} {...props}>
      {content}
    </Link>
  );
}
