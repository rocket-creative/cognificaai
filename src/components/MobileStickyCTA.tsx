"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = typeof window !== "undefined" ? window.innerHeight * 0.8 : 600;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/10"
      role="complementary"
      aria-label="Request demo"
    >
      <div className="flex gap-3 max-w-lg mx-auto">
        <Link
          href="#demo"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#D4B8E8] text-[#0A0A0A] py-3 px-4 uppercase tracking-widest text-[10px] font-light"
        >
          Request Demo
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </Link>
        <Link
          href="tel:+19147056830"
          className="inline-flex items-center justify-center bg-white/10 text-white py-3 px-4 text-[10px] tracking-widest uppercase font-light hover:bg-white/20 transition-colors"
        >
          (914) 705 6830
        </Link>
      </div>
    </div>
  );
}
