import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms of service",
  description:
    "Terms of service for Cognifica. Acceptance, description of service, user and tenant responsibilities, limitation of liability, governing law.",
  alternates: { canonical: "https://www.cognifica.app/terms" },
  openGraph: {
    title: "Terms of service | Cognifica",
    description:
      "Terms of service for Cognifica. Acceptance, description, responsibilities, limitation of liability, governing law.",
    url: "https://www.cognifica.app/terms",
    siteName: "Cognifica",
    type: "website",
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
    title: "Terms of service | Cognifica",
    description: "Terms of service for Cognifica.",
    images: ["/og-image.png"],
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Terms of Service", url: "https://www.cognifica.app/terms" }]} />

      <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/50">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Terms of Service</li>
            </ol>
          </nav>

          <article className="bg-[#161616] p-8 sm:p-12 border border-white/5">
            <header className="mb-8 pb-8 border-b border-white/10">
              <h1 className="font-heading text-3xl sm:text-4xl text-white mb-4">
                Terms of service
              </h1>
              <p className="font-body text-sm text-white/50">
                Last updated: April 20, 2026
              </p>
            </header>

            <div className="space-y-8">
              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Acceptance of terms
                </h2>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed">
                  By accessing or using Cognifica (&quot;the Platform&quot;), including
                  the CogAI Workforce and CogAI Medical products, you agree to
                  be bound by these Terms of Service. If you do not agree,
                  discontinue use.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Description of service
                </h2>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed mb-4">
                  Cognifica provides validated mental health screening and risk
                  stratification, including:
                </p>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/70 font-light">
                  <li>Validated instruments: PHQ-9, GAD-7, PCL-5, DAST-10, AUDIT, PSQI, Work Wellness</li>
                  <li>R-Score risk stratification</li>
                  <li>Optional access to licensed clinicians through Cognifica Health</li>
                  <li>Aggregate tenant insights subject to the consent architecture</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Not a substitute for professional care
                </h2>
                <div className="bg-[#0A0A0A] p-6 mb-4 border border-white/10">
                  <p className="font-body text-sm text-white font-bold">
                    Cognifica is not used for diagnosis and is not for emergency response. It is not a
                    substitute for professional medical advice, diagnosis, or
                    treatment.
                  </p>
                </div>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed">
                  The platform provides validated screening and risk
                  stratification. Always seek the advice of a qualified
                  healthcare provider for any medical condition. If you are
                  experiencing a mental health emergency, call 988 for the
                  Suicide and Crisis Lifeline, text 741741 for the Crisis Text
                  Line, or go to your nearest emergency room.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  User responsibilities
                </h2>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed mb-4">
                  As a user of the platform, you agree to:
                </p>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/70 font-light">
                  <li>Provide accurate information in screening instruments</li>
                  <li>Use the platform only for its intended purpose</li>
                  <li>Not share account credentials with others</li>
                  <li>Not attempt to access other users&apos; data</li>
                  <li>Comply with applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Tenant responsibilities
                </h2>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed mb-4">
                  Tenants (employers, clinics, insurers) using the platform
                  agree to:
                </p>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/70 font-light">
                  <li>Not attempt to identify individuals from aggregate data</li>
                  <li>Not use the platform for surveillance or monitoring</li>
                  <li>Maintain confidentiality of tenant-level insights</li>
                  <li>Comply with applicable employment, health, and privacy laws</li>
                  <li>Pay all fees associated with the service</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Intellectual property
                </h2>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed">
                  The platform and its original content, features, and
                  functionality are owned by Cognifica and are protected by
                  copyright, trademark, patent, trade secret, and other
                  intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Limitation of liability
                </h2>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed">
                  To the maximum extent permitted by law, Cognifica shall not
                  be liable for any indirect, incidental, special,
                  consequential, or punitive damages, or any loss of profits,
                  revenues, data, or goodwill, whether incurred directly or
                  indirectly.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Termination
                </h2>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed">
                  Access to the platform may be suspended or terminated for
                  breach of these Terms of Service. Pilot terminations follow
                  the terms in the applicable pilot agreement.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Changes to terms
                </h2>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed">
                  Cognifica may modify these terms from time to time. Material
                  changes are communicated with at least 30 days of notice
                  before taking effect.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Governing law
                </h2>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed">
                  These terms are governed by the laws of the State of New
                  York, without regard to conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Contact
                </h2>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed">
                  For questions about these terms, contact{" "}
                  <a href="mailto:legal@cognifica.app" className="text-[#E6A91A] hover:underline">
                    legal@cognifica.app
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+19147056830" className="text-[#E6A91A] hover:underline">
                    (914) 705 6830
                  </a>
                  .
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
