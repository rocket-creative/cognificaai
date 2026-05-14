/* |UXUIDC| PilotPage */
import type { Metadata } from "next";
import Link from "next/link";
import {
  PageContainer,
  Eyebrow,
  SectionHeading,
  ArrowLink,
  Reveal,
  NumberedStep,
} from "@/components/ui";
import { DemoRequestForm } from "@/components/DemoRequestForm";
import { BreadcrumbSchema, ServiceSchema } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pilot COGAI | Ninety day pilot, every audience",
  description:
    "Ninety day pilot across three audiences. One full measurement cycle. A Day 35 decision meeting. A walk away clause with no contract pressure. Live tenant data, real consent.",
  path: "/pilot",
  ogTitle: "Pilot COGAI",
  ogDescription:
    "Ninety day pilot. One full measurement cycle. Walk away clause. Live tenant data with real consent at every scale.",
  keywords: [
    "COGAI pilot",
    "mental health pilot",
    "employer pilot",
    "clinic pilot",
    "insurer pilot",
    "HEDIS pilot",
    "ninety day pilot",
  ],
});

const pilotColumns = [
  {
    key: "employer",
    eyebrow: "Employer pilot",
    title: "COGAI Workforce · 90 days",
    body: "One department or one business unit. Rolling consent. One full monthly cycle. A Day 35 decision meeting with a board ready dashboard.",
    bullets: [
      "Scope: one department or one business unit",
      "Duration: 90 days · one full monthly cycle",
      "Decision: Day 35 board ready dashboard",
      "Out: walk away clause, no contract pressure",
    ],
    cta: { label: "Start your free trial", href: "/workforce#demo" },
  },
  {
    key: "clinic",
    eyebrow: "Clinic pilot",
    title: "COGAI Medical · scope with us",
    body: "One clinic panel. Medical Provider console. Crisis protocol live from day one. Scope and duration set in consultation with the clinical lead.",
    bullets: [
      "Scope: one clinic panel",
      "Duration: TBD, scope in consultation",
      "Decision: response measurement at three months",
      "Out: terminate on notice during pilot",
    ],
    cta: { label: "Request a clinic pilot", href: "/medical#demo" },
  },
  {
    key: "insurer",
    eyebrow: "Insurer pilot",
    title: "COGAI Medical · HEDIS cycle",
    body: "One panel within the plan. HEDIS measures in scope. Per patient per month rate set up front. A clinical operator on every check in.",
    bullets: [
      "Scope: one defined member panel",
      "Duration: one HEDIS cycle",
      "Decision: HEDIS movement against baseline",
      "Out: no renewal if baseline does not move",
    ],
    cta: { label: "Book an insurer call", href: "/medical#contact" },
  },
  {
    key: "workers-comp",
    eyebrow: "Workers compensation pilot · optional",
    title: "COGAI Medical · claims panel",
    body: "A carrier or TPA panel of open workers compensation claims. Instruments run at claim open and on cadence through recovery.",
    bullets: [
      "Scope: open claims with recovery expected",
      "Duration: six months, longer on request",
      "Decision: time off and reinjury markers",
      "Out: pilot scoped with carrier counsel",
    ],
    cta: { label: "Scope a carrier pilot", href: "/medical#insurers#workers-comp" },
  },
];

const sharedRules = [
  {
    title: "No fake data",
    body: "Every pilot uses live tenant data with real consent, even at small scale. No seeded demo numbers bleed into a tenant dashboard.",
  },
  {
    title: "The boundary never moves",
    body: "Employers do not see individual scores in a pilot any more than in production. Plans do not see identity absent consent. The rules in the contract are the rules in the pilot.",
  },
  {
    title: "A real operator on the line",
    body: "A clinical operator and the founder are on pilot kickoff and pilot close. Not a sales team. Not an account manager.",
  },
  {
    title: "A published exit",
    body: "Every pilot has a documented exit. Walk away clauses for workforce. Non renewal language for insurers. Termination on notice for clinics.",
  },
];

export default function PilotPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Pilot", url: "https://www.cogai.health/pilot" }]} />
      <ServiceSchema
        name="COGAI ninety day pilot"
        description="A scoped ninety day mental health screening pilot for employers, clinics, and insurers. One full measurement cycle. Day 35 decision meeting. Walk away clause."
        url="https://www.cogai.health/pilot"
      />

      <PageContainer className="pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24">
        <div className="max-w-4xl">
          <Eyebrow>Pilot</Eyebrow>
          <h1 className="font-heading text-[clamp(32px,6vw,80px)] leading-[1.05] text-[#0A0A0A] mt-6">
            Ninety days. One cycle. A real exit.
          </h1>
          <p className="mt-8 font-body text-base sm:text-lg text-[#515154] font-light leading-relaxed max-w-2xl">
            Every audience has a different pilot shape. Every pilot has the
            same posture. Live data, live consent, a real operator on the
            line, and a documented exit.
          </p>
        </div>
      </PageContainer>

      <section
        className="border-t border-[#D2D2D7] bg-[#F5F5F7]"
        aria-labelledby="shapes-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Three shapes"
            title="Pick the pilot that matches the buyer"
            as="h2"
          />
          <ul id="shapes-heading" className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6" role="list">
            {pilotColumns.slice(0, 3).map((col, i) => (
              <li key={col.key}>
                <Reveal delay={i * 80}>
                  <article className="border border-[#D2D2D7] p-8 h-full flex flex-col">
                    <p className="font-nav text-[10px] tracking-widest uppercase text-orange-grad">
                      {col.eyebrow}
                    </p>
                    <h3 className="font-heading text-xl sm:text-2xl text-[#0A0A0A] mt-3">
                      {col.title}
                    </h3>
                    <p className="mt-4 font-body text-sm sm:text-base text-[#515154] font-light leading-relaxed">
                      {col.body}
                    </p>
                    <ul className="mt-6 space-y-2 font-body text-sm text-[#515154] font-light" role="list">
                      {col.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="text-orange-grad" aria-hidden="true">→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-[#D2D2D7]">
                      <Link
                        href={col.cta.href}
                        className="font-nav text-xs tracking-widest uppercase text-orange-grad hover:text-[#0A0A0A] transition-colors"
                      >
                        {col.cta.label} →
                      </Link>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D2D2D7]"
        aria-labelledby="wc-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <Reveal>
            <article className="border border-[#3B5A75] bg-white p-8 lg:p-12">
              <p className="font-nav text-[10px] tracking-widest uppercase text-orange-grad">
                {pilotColumns[3].eyebrow}
              </p>
              <h2
                id="wc-heading"
                className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#0A0A0A] mt-3"
              >
                {pilotColumns[3].title}
              </h2>
              <p className="mt-4 font-body text-base text-[#3A3A3C] font-light leading-relaxed max-w-3xl">
                {pilotColumns[3].body}
              </p>
              <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 font-body text-sm text-[#515154] font-light" role="list">
                {pilotColumns[3].bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-orange-grad" aria-hidden="true">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ArrowLink href={pilotColumns[3].cta.href} variant="solid">
                  {pilotColumns[3].cta.label}
                </ArrowLink>
              </div>
            </article>
          </Reveal>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D2D2D7] bg-[#F5F5F7]"
        aria-labelledby="rules-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Pilot posture</Eyebrow>
              <h2
                id="rules-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.1] text-[#0A0A0A] mt-4"
              >
                Four rules that apply to every pilot
              </h2>
              <p className="mt-6 font-body text-base text-[#515154] font-light leading-relaxed">
                These hold whichever product and whichever audience. They are
                the rules that make the exit real.
              </p>
            </div>
            <div className="lg:col-span-3">
              <ul className="space-y-0" role="list">
                {sharedRules.map((r, i) => (
                  <li key={r.title}>
                    <NumberedStep index={i + 1} title={r.title}>
                      {r.body}
                    </NumberedStep>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        id="consultation"
        className="border-t border-[#D2D2D7] bg-[#404040]"
        aria-labelledby="consultation-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="font-nav text-[10px] sm:text-xs tracking-widest uppercase text-orange-grad">
                Schedule a consultation
              </p>
              <h2
                id="consultation-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-white mt-4"
              >
                Start the pilot conversation.
              </h2>
              <p className="mt-6 font-body text-base text-white font-light leading-relaxed">
                Tell us which audience you are, what the panel looks like, and
                what you want to measure. A clinical operator and the founder
                are on the first call.
              </p>
              <ul className="mt-8 space-y-2 font-body text-sm text-white font-light">
                <li>Scope and timeline</li>
                <li>Consent and privacy posture</li>
                <li>Exit criteria, in writing</li>
              </ul>
              <div className="mt-8">
                <Link
                  href="tel:+19147056830"
                  className="font-nav text-xs tracking-widest uppercase text-white border-b border-white hover:border-[#3B5A75] transition-colors"
                >
                  Or call (914) 705 6830
                </Link>
              </div>
            </div>
            <div>
              <DemoRequestForm />
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
