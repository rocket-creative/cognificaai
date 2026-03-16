"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

const SESSION_KEY = "cognifica_clinical_banner_dismissed";

export function ClinicalReferralBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(SESSION_KEY);
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="w-full bg-[#D4B8E8]/10 border-b border-[#D4B8E8]/20 z-40"
      role="banner"
      aria-label="Clinical care referral"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-center min-h-[44px]">
        <p className="font-body text-xs sm:text-sm text-white/70 font-light text-center">
          Having trouble now? Our clinical team is ready to help.{" "}
          <a
            href="https://cognifica-health.vercel.app/?utm_source=cognificaai&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#D4B8E8] hover:text-white transition-colors focus:outline-none focus-visible:underline font-normal"
            aria-label="Visit Cognifica Health for clinical care"
          >
            Visit Cognifica Health
            <ArrowRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
          </a>
        </p>
        <button
          onClick={dismiss}
          className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4B8E8] flex-shrink-0 p-1"
          aria-label="Dismiss this message"
        >
          <X className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
