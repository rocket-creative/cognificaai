"use client";

import type { ReactNode } from "react";
import { ClinicalReferralBanner } from "@/components/ClinicalReferralBanner";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { Nav } from "@/components/Nav";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="fixed top-0 left-1/2 z-50 w-full max-w-[1280px] -translate-x-1/2 bg-white pt-safe-top shadow-sm">
        <ClinicalReferralBanner />
        <Nav />
      </header>

      <div className="mx-auto max-w-[1280px] bg-white shadow-sm">
        <main id="main" className="min-h-dvh pt-28 pb-24 sm:pt-32 lg:pb-0">
          {children}
        </main>

        <Footer />
      </div>

      <MobileStickyCTA />
      <CookieConsent />
    </>
  );
}
