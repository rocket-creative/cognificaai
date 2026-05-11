import type { Metadata } from "next";
import { IBM_Plex_Sans_Condensed, Work_Sans } from "next/font/google";
import { IntroLeadForm } from "./IntroLeadForm";
import { VideoBlock } from "./VideoBlock";

const displayFont = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-intro-display",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-work-sans",
  display: "swap",
});

const canonicalUrl = "https://cogai.health/intro-x7q9m2";
const title = "COGAI — Cognitive health, measured.";
const description =
  "Validated workplace and clinical mental health screening. R Score risk stratification. The employer never sees an individual score.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: "COGAI",
    type: "website",
    images: [
      {
        url: "https://cogai.health/og-intro.png",
        width: 1200,
        height: 630,
        alt: "COGAI cognitive health measured",
      },
    ],
    videos: process.env.VIDEO_MP4_URL
      ? [
          {
            url: process.env.VIDEO_MP4_URL,
            type: "video/mp4",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://cogai.health/og-intro.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "COGAI lead capture introduction",
  description,
  provider: {
    "@type": "Organization",
    name: "COGAI",
    url: "https://cogai.health",
  },
  areaServed: "United States",
  serviceType: "Mental health measurement platform",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cogai.health" },
    { "@type": "ListItem", position: 2, name: "Intro", item: canonicalUrl },
  ],
};

export default function IntroPage() {
  const videoMp4Url = process.env.VIDEO_MP4_URL || "/videos/cogai-explainer-1080p.mp4";
  const videoWebmUrl = process.env.VIDEO_WEBM_URL || undefined;
  const posterImageUrl =
    process.env.POSTER_IMAGE_URL || "/videos/cogai-explainer-poster.jpg";
  const captionsUrl = process.env.CAPTIONS_VTT_URL || undefined;

  return (
    <div className={`${displayFont.variable} ${workSans.variable} bg-white text-[#0F0F14]`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto w-full max-w-3xl px-6 py-10 sm:px-8 md:px-10 lg:max-w-5xl lg:py-16">
        <div className="space-y-8 lg:space-y-10">
          <VideoBlock
            mp4Url={videoMp4Url}
            webmUrl={videoWebmUrl}
            posterUrl={posterImageUrl}
            captionsUrl={captionsUrl}
          />

          <section aria-labelledby="intro-heading" className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div>
              <h1
                id="intro-heading"
                className="font-[var(--font-intro-display)] text-[32px] font-bold leading-[0.98] text-[#2A2D34] normal-case tracking-normal sm:text-5xl"
              >
                Cognitive health, measured.
              </h1>
              <p className="mt-5 max-w-xl font-[var(--font-work-sans)] text-base font-light leading-relaxed text-[#0F0F14]">
                Two products. One clinical boundary. COGAI Workforce for employers. COGAI
                Medical for clinics and small insurance plans.
              </p>
              <p className="mt-6 font-[var(--font-work-sans)] text-sm font-normal leading-relaxed text-[#6B7280]">
                Not used for diagnosis. Not for emergency response. Clinical decisions are
                always initiated by a human.
              </p>
            </div>

            <div>
              <IntroLeadForm />
            </div>
          </section>

          <footer className="border-t border-[#E5E7EB] pt-6">
            <p className="font-[var(--font-work-sans)] text-sm font-normal leading-relaxed text-[#6B7280]">
              Built inside Cognifica Health, a real clinical practice in Aquebogue and West
              Harrison, NY.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
