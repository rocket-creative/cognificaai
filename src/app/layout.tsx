import type { Metadata, Viewport } from "next";
import { Bebas_Neue, IBM_Plex_Sans, Open_Sans, Quicksand } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { ClinicalReferralBanner } from "@/components/ClinicalReferralBanner";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { PageTransition } from "@/components/animations";

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
  weight: ["300", "400", "500"],
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
    default: "Employee Mental Health Screening Platform | Cognifica App",
    template: "%s | Cognifica App",
  },
  description:
    "Anonymous mental health assessments, digital support, and optional professional access for the modern workforce. Trusted by employees. Safe for employers. Request a demo.",
  keywords: [
    "employee mental health",
    "workplace wellness",
    "mental health platform",
    "employee assistance",
    "workplace mental health",
    "anonymous assessments",
    "HIPAA compliant",
    "corporate wellness",
  ],
  authors: [{ name: "Cognifica App" }],
  creator: "Cognifica App",
  publisher: "Cognifica App",
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
    siteName: "Cognifica App",
    title: "Employee Mental Health Screening Platform | Cognifica App",
    description:
      "Anonymous mental health assessments, digital support, and optional professional access. Trusted by employees. Safe for employers. Request a demo.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cognifica App Employee Mental Health Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Employee Mental Health Screening Platform | Cognifica App",
    description:
      "Anonymous mental health assessments, digital support, and optional professional access. Trusted by employees. Safe for employers. Request a demo.",
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
        {/* Skip to main content - Accessibility */}
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
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />
        <MobileStickyCTA />
        <CookieConsent />
      </body>
    </html>
  );
}
