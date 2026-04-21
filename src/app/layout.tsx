/* |UXUIDC| RootLayout */
import type { Metadata, Viewport } from "next";
import { Bebas_Neue, IBM_Plex_Sans, Open_Sans, Quicksand } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { ClinicalReferralBanner } from "@/components/ClinicalReferralBanner";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-open-sans",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-quicksand",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cognifica.app"),
  title: {
    default: "Cognifica | Cognitive health, measured.",
    template: "%s | Cognifica",
  },
  description:
    "Validated mental health screening and risk stratification for employers, clinics, and insurers. Built on top of an active clinical practice. The employer never sees an individual score.",
  authors: [{ name: "Cognifica" }],
  creator: "Cognifica",
  publisher: "Cognifica",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cognifica.app",
    siteName: "Cognifica",
    title: "Cognifica | Cognitive health, measured.",
    description:
      "Validated mental health screening for employers, clinics, and insurers. Built by a practicing clinician. The employer never sees an individual score.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cognifica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognifica | Cognitive health, measured.",
    description:
      "Validated mental health screening for employers, clinics, and insurers. Built by a practicing clinician.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.cognifica.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${ibmPlexSans.variable} ${openSans.variable} ${quicksand.variable}`}
    >
      <body className="min-h-dvh bg-[#0A0A0A] text-white antialiased">
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:bg-[#161616] focus-visible:px-4 focus-visible:py-2 focus-visible:text-white focus-visible:shadow-lg"
        >
          Skip to main content
        </a>

        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0A0A0A]/95 backdrop-blur-md pt-safe-top">
          <ClinicalReferralBanner />
          <Nav />
        </header>

        <main id="main" className="min-h-dvh pt-28 sm:pt-32 pb-24 lg:pb-0">
          {children}
        </main>

        <Footer />
        <MobileStickyCTA />
        <CookieConsent />
      </body>
    </html>
  );
}
