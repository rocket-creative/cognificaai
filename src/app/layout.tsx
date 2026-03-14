import type { Metadata } from "next";
import { Bebas_Neue, IBM_Plex_Sans, Open_Sans, Quicksand } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://cognifica.ai"),
  title: {
    default: "Cognifica AI | Employee Mental Health Hub",
    template: "%s | Cognifica AI",
  },
  description:
    "Anonymous mental health assessments, digital support, and optional professional access for the modern workforce. Trusted by employees. Safe for employers. HIPAA compliant.",
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
  authors: [{ name: "Cognifica AI" }],
  creator: "Cognifica AI",
  publisher: "Cognifica AI",
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
    url: "https://cognifica.ai",
    siteName: "Cognifica AI",
    title: "Cognifica AI | Employee Mental Health Hub",
    description:
      "Anonymous mental health assessments, digital support, and optional professional access. Trusted by employees. Safe for employers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cognifica AI Employee Mental Health Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognifica AI | Employee Mental Health Hub",
    description:
      "Anonymous mental health assessments, digital support, and optional professional access. Trusted by employees. Safe for employers.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cognifica.ai",
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
      <body className="min-h-screen bg-[#0A0A0A] text-white antialiased">
        {/* Skip to main content - Accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#161616] focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>

        <Nav />

        <main id="main" className="min-h-screen">
          {children}
        </main>

        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
