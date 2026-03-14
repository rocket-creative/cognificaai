import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Cognifica AI Terms of Service. Review the terms and conditions for using our Employee Mental Health Hub platform.",
  alternates: {
    canonical: "https://cognifica.ai/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Terms of Service" }]} />

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
                Terms of Service
              </h1>
              <p className="font-body text-sm text-white/50">
                Last updated: March 14, 2026
              </p>
            </header>

            <div className="space-y-8">
              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Acceptance of Terms
                </h2>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                  By accessing or using Cognifica AI (&quot;the Platform&quot;), you agree
                  to be bound by these Terms of Service. If you do not agree to
                  these terms, do not use the Platform.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Description of Service
                </h2>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed mb-4">
                  Cognifica AI provides an Employee Mental Health Hub that
                  includes:
                </p>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/60 font-light">
                  <li>Anonymous mental health self assessments</li>
                  <li>Interactive digital support resources</li>
                  <li>Computerized cognitive remediation exercises</li>
                  <li>Optional access to licensed mental health professionals</li>
                  <li>Aggregate workforce insights for employers</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Not a Substitute for Professional Care
                </h2>
                <div className="bg-[#0A0A0A] p-6 mb-4 border border-white/10">
                  <p className="font-body text-sm text-white font-bold">
                    Important: Cognifica AI is not a substitute for professional
                    medical advice, diagnosis, or treatment.
                  </p>
                </div>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                  The Platform provides educational resources and screening
                  tools. Always seek the advice of a qualified healthcare
                  provider with any questions regarding a medical condition. If
                  you are experiencing a mental health emergency, call 988
                  (Suicide and Crisis Lifeline) or go to your nearest emergency
                  room.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  User Responsibilities
                </h2>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed mb-4">
                  As a user of the Platform, you agree to:
                </p>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/60 font-light">
                  <li>Provide accurate information in assessments</li>
                  <li>Use the Platform only for its intended purpose</li>
                  <li>Not share your account credentials with others</li>
                  <li>Not attempt to access other users&apos; data</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Employer Responsibilities
                </h2>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed mb-4">
                  Employers using the Platform agree to:
                </p>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/60 font-light">
                  <li>Not attempt to identify individual employees from aggregate data</li>
                  <li>Not use the Platform for surveillance or monitoring purposes</li>
                  <li>Maintain confidentiality of all workforce insights</li>
                  <li>Comply with all applicable employment and privacy laws</li>
                  <li>Pay all fees associated with the service</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Intellectual Property
                </h2>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                  The Platform and its original content, features, and
                  functionality are owned by Cognifica AI and are protected by
                  international copyright, trademark, patent, trade secret, and
                  other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Limitation of Liability
                </h2>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                  To the maximum extent permitted by law, Cognifica AI shall not
                  be liable for any indirect, incidental, special,
                  consequential, or punitive damages, or any loss of profits or
                  revenues, whether incurred directly or indirectly, or any loss
                  of data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Termination
                </h2>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                  We may terminate or suspend your access to the Platform
                  immediately, without prior notice or liability, for any reason
                  whatsoever, including without limitation if you breach these
                  Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Changes to Terms
                </h2>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                  We reserve the right to modify or replace these Terms at any
                  time. If a revision is material, we will provide at least 30
                  days&apos; notice prior to any new terms taking effect.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Governing Law
                </h2>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                  These Terms shall be governed by and construed in accordance
                  with the laws of the State of New York, without regard to its
                  conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Contact Us
                </h2>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                  For questions about these Terms, contact us at:
                </p>
                <p className="font-body text-sm text-white mt-2">
                  legal@cognifica.ai
                  <br />
                  (914) 705 6830
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
