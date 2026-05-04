"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const consent = localStorage.getItem("cognifica-cookie-consent");
    if (!consent) {
      const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1500;
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cognifica-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cognifica-cookie-consent", "declined");
    setIsVisible(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") handleDecline();
  };

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;
    const focusable = containerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0] as HTMLElement | undefined;
    const last = focusable[focusable.length - 1] as HTMLElement | undefined;
    first?.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-heading"
      aria-describedby="cookie-description"
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-2xl mx-auto bg-[#F5F5F7] border border-[#D2D2D7] shadow-lg p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2
              id="cookie-heading"
              className="font-heading text-sm text-[#0A0A0A] mb-2"
            >
              Cookie Preferences
            </h2>
            <p
              id="cookie-description"
              className="font-body text-xs text-[#6E6E73] font-light leading-relaxed"
            >
              We use cookies to improve your experience and analyze site usage.
              No personal health information is ever stored in cookies.
            </p>
          </div>
          <button
            onClick={handleDecline}
            className="p-1 text-[#86868B] hover:text-[#0A0A0A] transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button
            onClick={handleAccept}
            className="inline-flex items-center justify-center bg-orange-grad text-white py-2.5 px-5 text-[10px] tracking-widest uppercase font-light bg-orange-grad-hover transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={handleDecline}
            className="inline-flex items-center justify-center bg-transparent text-[#6E6E73] py-2.5 px-5 text-[10px] tracking-widest uppercase font-light border border-[#D2D2D7] hover:bg-[#F5F5F7] hover:text-[#0A0A0A] transition-colors"
          >
            Necessary Only
          </button>
        </div>
      </div>
    </div>
  );
}
