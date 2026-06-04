/* |UXUIDC| HomePage */
import type { Metadata } from "next";
import Link from "next/link";
import {
  PageContainer,
  Eyebrow,
  SectionHeading,
  ArrowLink,
  Reveal,
} from "@/components/ui";
import {
  OrganizationSchema,
  WebSiteSchema,
  SoftwareApplicationSchema,
  MedicalOrganizationSchema,
} from "@/components/JsonLd";
import { HomeHeroVideo } from "@/components/HomeHeroVideo";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "COGAI | Cognitive health, measured.",
  description:
    "The workforce mental health platform that gives employers aggregate insight into the cognitive health of their workforce, without ever revealing an individual score. Seven validated instruments, monthly. Free 6-month trial.",
  path: "/",
  ogDescription:
    "Know the mental health of your workforce without ever seeing an individual score. Seven validated instruments. Monthly 8-minute cadence. Free 6-month trial.",
  twitterDescription:
    "Aggregate insight for employers. Confidential for the employee. Free 6-month trial.",
  keywords: [
    "COGAI",
    "COGAI Workforce",
    "COGAI Medical",
    "employee mental health",
    "workforce mental health",
    "validated screening",
    "PHQ-9",
    "GAD-7",
    "free trial workforce mental health",
    "behavioral health",
    "R Score",
  ],
});

const audienceCards = [
  {
    key: "workforce",
    eyebrow: "COGAI Workforce",
    product: "For employers",
    title: "What an EAP was supposed to be.",
    body: "Three to six percent of your employees actually use your EAP. The other ninety-four percent go unserved. COGAI Workforce reaches the rest. Aggregate insight for HR. Confidential for the employee. Free 6-month trial.",
    cta: { label: "Start your free trial", href: "/workforce#demo" },
  },
  {
    key: "medical",
    eyebrow: "COGAI Medical",
    product: "For clinics and insurance plans",
    title: "Know which patients need you on Monday, before Monday.",
    body: "Validated screeners on a monthly cadence. Twelve-month trend per patient. Crisis flags surfaced in real time. Per seat for clinics. Per patient per month for insurance plans.",
    cta: { label: "Explore COGAI Medical", href: "/medical" },
  },
];

const instruments = [
  { acronym: "PHQ 9", name: "Depression" },
  { acronym: "GAD 7", name: "Anxiety" },
  { acronym: "PCL 5", name: "Trauma" },
  { acronym: "DAST 10", name: "Drug use" },
  { acronym: "AUDIT", name: "Alcohol use" },
  { acronym: "PSQI", name: "Sleep" },
  { acronym: "WORK", name: "Work wellness" },
];

const commitments = [
  "No PHI leaves the clinical boundary.",
  "No therapy notes are ever accessible to the employer.",
  "No individual symptom scores are ever accessible to the employer.",
];

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <SoftwareApplicationSchema />
      <MedicalOrganizationSchema />

      <section className="relative bg-black text-white" aria-label="Intro">
        <div className="relative w-full aspect-video overflow-hidden">
          <HomeHeroVideo />
        </div>
        <div
          className="bg-white border-t border-[#D4D4D4]"
          role="presentation"
        >
          <PageContainer className="py-6 sm:py-8 lg:py-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
              <div className="max-w-3xl">
                <p className="font-nav text-[10px] sm:text-xs tracking-widest uppercase text-[#0A0A0A]">
                  Cognitive health, measured.
                </p>
                <h1 className="font-heading text-[clamp(28px,5vw,72px)] leading-[0.98] mt-3">
                  <span className="gradient-text">Know the mental health of your workforce without ever seeing an individual score.</span>
                </h1>
                <p className="mt-4 font-body text-sm sm:text-base text-[#0A0A0A] font-light leading-relaxed max-w-2xl">
                  Seven validated instruments. Monthly 8 minute cadence. Aggregate insight for employers. Confidential for the employee. Free 6 month trial.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:flex-shrink-0">
                <ArrowLink href="/workforce#demo" variant="solid">
                  Start your free trial
                </ArrowLink>
                <Link
                  href="/medical"
                  className="group inline-flex items-center gap-3 border border-[#0A0A0A] text-[#0A0A0A] py-3 px-6 text-[10px] sm:text-xs uppercase tracking-widest font-light hover:border-[#3B5A75] text-orange-grad-hover hover:gap-5 transition-all"
                >
                  COGAI Medical
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </PageContainer>
        </div>
      </section>

      <section
        className="border-t border-[#D4D4D4] bg-[#F7F7F7]"
        aria-labelledby="audiences-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="One umbrella. Two products."
            title="Pick a lane."
            lede="COGAI Workforce for employers. COGAI Medical for clinics and for small insurance plans. Same clinical boundary underneath. Same seven validated instruments."
            as="h2"
          />
          <ul
            id="audiences-heading"
            className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6"
            role="list"
          >
            {audienceCards.map((c, i) => (
              <li key={c.key}>
                <Reveal delay={i * 80}>
                  <Link
                    href={c.cta.href}
                    className="group flex flex-col h-full border border-[#D4D4D4] bg-white p-8 sm:p-10 hover:border-[#3B5A75] transition-colors"
                  >
                    <p className="font-nav text-[10px] tracking-widest uppercase text-orange-grad">
                      {c.eyebrow}
                    </p>
                    <p className="mt-2 font-nav text-xs tracking-widest uppercase text-[#737373]">
                      {c.product}
                    </p>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#0A0A0A] mt-6 leading-tight">
                      {c.title}
                    </h3>
                    <p className="mt-6 font-body text-sm sm:text-base text-[#404040] font-light leading-relaxed">
                      {c.body}
                    </p>
                    <span className="mt-auto pt-8 font-nav text-xs tracking-widest uppercase text-[#525252] group-text-orange-grad-hover transition-colors">
                      {c.cta.label} →
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4]"
        aria-labelledby="credibility-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Eyebrow>Built inside a real clinical practice</Eyebrow>
              <h2
                id="credibility-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-[#0A0A0A] mt-4"
              >
                Clinicians built this. For the thing they needed on Monday.
              </h2>
              <p className="mt-6 font-body text-base sm:text-lg text-[#404040] font-light leading-relaxed">
                COGAI runs on top of Cognifica Health, an active practice in
                Aquebogue and West Harrison, New York. The founder, Dr. John
                Abrahams, is a practicing neurosurgeon. Susan Mogan, a
                Psychiatric Mental Health Nurse Practitioner, leads behavioral
                health delivery.
              </p>
              <div className="mt-8">
                <ArrowLink href="/about" variant="ghost">
                  About the team
                </ArrowLink>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-[#D4D4D4] p-6">
                <p className="font-heading text-[10px] tracking-widest text-orange-grad">
                  Founder
                </p>
                <h3 className="font-heading text-xl text-[#0A0A0A] mt-3">
                  Dr. John Abrahams
                </h3>
                <p className="mt-3 font-body text-sm text-[#404040] font-light">
                  Practicing neurosurgeon. Three prior medical device ventures.
                  New York, since 2004.
                </p>
              </div>
              <div className="border border-[#D4D4D4] p-6">
                <p className="font-heading text-[10px] tracking-widest text-orange-grad">
                  Clinician
                </p>
                <h3 className="font-heading text-xl text-[#0A0A0A] mt-3">
                  Susan Mogan · PMHNP, DNP
                </h3>
                <p className="mt-3 font-body text-sm text-[#404040] font-light">
                  Practicing Psychiatric Mental Health Nurse Practitioner at
                  Cognifica Health.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4] bg-[#F7F7F7]"
        aria-labelledby="vignette-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <Eyebrow>What actually happens</Eyebrow>
              <h2
                id="vignette-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-[#0A0A0A] mt-4"
              >
                A 63 year old patient. A concussion. A conversation that
                otherwise would not have happened.
              </h2>
            </div>
            <div className="space-y-5 font-body text-base sm:text-lg text-[#262626] font-light leading-relaxed">
              <p>
                The patient presents after a fall. Concussion. Routine follow
                up six weeks out. The exam is unremarkable. The patient reports
                being &quot;fine&quot; in the room.
              </p>
              <p>
                The clinician opens the panel. The PHQ 9 has drifted from 4 to
                13. The PCL 5 has crossed the validated threshold. The trend
                sits next to the note.
              </p>
              <p>
                The conversation that would not have happened does. The patient
                is scheduled for follow up with Susan. A plan is in motion by
                the end of the day.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4]"
        aria-labelledby="instruments-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Seven validated instruments"
            title="Clinical instruments with research behind them"
            lede="Named. Scored. Tracked. No proprietary questionnaires stand in for them."
            as="h2"
          />
          <ul
            id="instruments-heading"
            className="mt-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3"
            role="list"
          >
            {instruments.map((s, i) => (
              <li key={s.acronym}>
                <Reveal delay={i * 40}>
                  <div className="border border-[#D4D4D4] p-4 sm:p-5 h-full flex flex-col">
                    <p className="font-heading text-lg sm:text-xl text-[#0A0A0A] leading-tight">
                      {s.acronym}
                    </p>
                    <p className="mt-2 font-nav text-[10px] tracking-widest uppercase text-orange-grad">
                      {s.name}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ArrowLink href="/how-it-works" variant="ghost">
              How the mechanics work
            </ArrowLink>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4] bg-[#F7F7F7]"
        aria-labelledby="privacy-tease-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Privacy architecture</Eyebrow>
              <h2
                id="privacy-tease-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-[#0A0A0A] mt-4"
              >
                The employer never sees an individual score.
              </h2>
              <p className="mt-6 font-body text-base text-[#404040] font-light leading-relaxed">
                Three contractual commitments. Not a feature toggle. A boundary
                the product architecture enforces.
              </p>
              <div className="mt-8">
                <ArrowLink href="/privacy" variant="ghost">
                  Read the architecture
                </ArrowLink>
              </div>
            </div>
            <ul className="lg:col-span-3 space-y-6" role="list">
              {commitments.map((line, i) => (
                <li
                  key={line}
                  className="flex items-start gap-6 border-t border-[#D4D4D4] pt-6"
                >
                  <span className="font-heading text-[10px] tracking-widest text-orange-grad pt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-lg sm:text-xl text-[#0A0A0A] font-light leading-relaxed">
                    {line}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4] bg-[#404040]"
        aria-label="Next steps"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-nav text-[10px] sm:text-xs tracking-widest uppercase text-orange-grad">
                Start the conversation
              </p>
              <h2 className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-white mt-4">
                Pick your lane.
              </h2>
              <p className="mt-6 font-body text-base text-white font-light leading-relaxed">
                No credit card. No commitment to convert. A real operator on every call.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 lg:max-w-md lg:ml-auto w-full">
              <Link
                href="/workforce#demo"
                className="group flex items-center justify-between gap-3 bg-orange-grad text-white py-3 px-6 text-[10px] tracking-widest uppercase font-light bg-orange-grad-hover transition-colors"
              >
                Start your free trial
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/medical#demo"
                className="group flex items-center justify-between gap-3 border border-white text-white py-3 px-6 text-[10px] tracking-widest uppercase font-light hover:bg-white hover:text-[#0A0A0A] transition-colors"
              >
                Explore COGAI Medical
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
