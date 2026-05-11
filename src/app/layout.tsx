/* |UXUIDC| RootLayout */
import type { Metadata, Viewport } from "next";
import { Bebas_Neue, IBM_Plex_Sans, Open_Sans, Quicksand } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/SiteChrome";

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
  metadataBase: new URL("https://www.cogai.health"),
  title: {
    default: "COGAI | Cognitive health, measured.",
    template: "%s | COGAI",
  },
  description:
    "Validated mental health screening and risk stratification for employers, clinics, and insurers. Built on top of an active clinical practice. The employer never sees an individual score.",
  authors: [{ name: "COGAI" }],
  creator: "COGAI",
  publisher: "COGAI",
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
    url: "https://www.cogai.health",
    siteName: "COGAI",
    title: "COGAI | Cognitive health, measured.",
    description:
      "Validated mental health screening for employers, clinics, and insurers. Built by a practicing clinician. The employer never sees an individual score.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@cogai",
    creator: "@cogai",
    title: "COGAI | Cognitive health, measured.",
    description:
      "Validated mental health screening for employers, clinics, and insurers. Built by a practicing clinician.",
  },
  alternates: {
    canonical: "https://www.cogai.health",
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
      <body className="min-h-dvh bg-[#E5E5E2] text-[#0A0A0A] antialiased">
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:bg-[#F5F5F7] focus-visible:px-4 focus-visible:py-2 focus-visible:text-[#0A0A0A] focus-visible:shadow-lg"
        >
          Skip to main content
        </a>

        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
