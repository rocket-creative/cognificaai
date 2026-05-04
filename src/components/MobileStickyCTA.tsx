/* |UXUIDC| MobileStickyCTA */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface StickyCta {
  label: string;
  href: string;
}

function stickyCtaForPath(pathname: string | null): StickyCta | null {
  if (!pathname) return null;
  if (pathname.startsWith("/workforce")) {
    return { label: "Request a demo", href: "/workforce#demo" };
  }
  if (pathname.startsWith("/medical")) {
    return { label: "Request a demo", href: "/medical#demo" };
  }
  if (pathname.startsWith("/medical#insurers")) {
    return { label: "Book a call", href: "/medical#contact" };
  }
  if (pathname.startsWith("/pilot")) {
    return { label: "Schedule a consultation", href: "/pilot#consultation" };
  }
  if (pathname.startsWith("/how-it-works")) {
    return { label: "Try the demo", href: "https://www.cognifica.ai/demo" };
  }
  return null;
}

export function MobileStickyCTA() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const cta = stickyCtaForPath(pathname);

  useEffect(() => {
    if (!cta) {
      setIsVisible(false);
      return;
    }
    const handleScroll = () => {
      const heroHeight =
        typeof window !== "undefined" ? window.innerHeight * 0.8 : 600;
      setIsVisible(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cta]);

  if (!cta || !isVisible) return null;

  const isExternal = cta.href.startsWith("http");

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#D2D2D7] pb-safe-bottom"
      role="complementary"
      aria-label={cta.label}
    >
      <div className="flex gap-3 max-w-lg mx-auto p-4 pt-3">
        {isExternal ? (
          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-grad text-white min-h-[56px] px-4 uppercase tracking-widest text-[10px] font-light"
          >
            {cta.label}
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </a>
        ) : (
          <Link
            href={cta.href}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-grad text-white min-h-[56px] px-4 uppercase tracking-widest text-[10px] font-light"
          >
            {cta.label}
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        )}
        <a
          href="tel:+19147056830"
          className="inline-flex items-center justify-center bg-[#E5E5EA] text-[#0A0A0A] min-h-[56px] px-4 text-[10px] tracking-widest uppercase font-light bg-orange-grad-hover hover:text-white transition-colors"
          aria-label="Call (914) 705 6830"
        >
          (914) 705 6830
        </a>
      </div>
    </div>
  );
}
