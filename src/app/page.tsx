/* |UXUIDC| HomePage */
import Link from "next/link";
import {
  PageContainer,
  Eyebrow,
  SectionHeading,
  ArrowLink,
  Reveal,
  AggregateOnlyBadge,
} from "@/components/ui";

const audienceCards = [
  {
    key: "employers",
    eyebrow: "For employers",
    product: "CogAI Workforce",
    title: "Proactive. Easy. Measurable. Without violating privacy.",
    body: "Monthly screening. Aggregate only reporting. The employer never sees an individual score.",
    cta: { label: "Explore CogAI Workforce", href: "/for-employers" },
  },
  {
    key: "clinics",
    eyebrow: "For clinics",
    product: "CogAI Medical",
    title: "Know which patients need you on Monday. Before Monday.",
    body: "Validated screeners on a cadence. Twelve month trend per patient. Crisis flags surfaced in real time.",
    cta: { label: "Explore CogAI Medical", href: "/for-clinics" },
  },
  {
    key: "insurers",
    eyebrow: "For insurers",
    product: "CogAI Medical",
    title: "Move HEDIS. Before a member shows up in the ER.",
    body: "Validated instruments across a defined member panel. Per patient per month pricing. Real HEDIS movement.",
    cta: { label: "Book an insurer call", href: "/for-insurers" },
  },
];

const screeners = [
  { acronym: "PHQ-9", name: "Depression" },
  { acronym: "GAD-7", name: "Anxiety" },
  { acronym: "PCL-5", name: "Trauma" },
  { acronym: "DAST-10", name: "Drug use" },
  { acronym: "AUDIT", name: "Alcohol use" },
  { acronym: "PSQI", name: "Sleep" },
  { acronym: "Work Wellness", name: "Workplace wellbeing" },
];

const commitments = [
  "No PHI leaves the clinical boundary.",
  "No therapy notes are ever accessible to the employer.",
  "No individual symptom scores are ever accessible to the employer.",
];

export default function HomePage() {
  return (
    <>
      <PageContainer className="pt-8 sm:pt-12 lg:pt-20 pb-16 sm:pb-24">
        <div className="max-w-5xl">
          <Eyebrow>Cognifica</Eyebrow>
          <h1 className="font-heading text-[clamp(36px,8vw,120px)] leading-[0.98] text-white mt-6 uppercase">
            Cognitive health, measured.
            <br />
            Managed. Never surveilled.
          </h1>
          <p className="mt-8 font-body text-lg sm:text-xl text-white/75 font-light leading-relaxed max-w-2xl">
            Cognifica builds validated screening and risk stratification for two
            audiences that have never had the right tool. Employers who want to
            support workforce mental health without violating privacy.
            Clinicians who want to know which patients need them most.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ArrowLink href="/how-it-works" variant="solid">
              How it works
            </ArrowLink>
            <ArrowLink href="https://www.cognifica.ai/demo" variant="ghost" external>
              Try the demo
            </ArrowLink>
            <AggregateOnlyBadge className="ml-1" />
          </div>
        </div>
      </PageContainer>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="audiences-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Three audiences"
            title="One umbrella. Two products."
            lede="CogAI Workforce for employers. CogAI Medical for clinics and for small insurance plans. Same clinical boundary underneath."
            as="h2"
          />
          <ul id="audiences-heading" className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6" role="list">
            {audienceCards.map((c, i) => (
              <li key={c.key}>
                <Reveal delay={i * 80}>
                  <Link
                    href={c.cta.href}
                    className="group flex flex-col h-full border border-white/10 p-8 hover:border-[#E6A91A] transition-colors"
                  >
                    <p className="font-nav text-[10px] tracking-widest uppercase text-[#E6A91A]">
                      {c.eyebrow}
                    </p>
                    <p className="mt-2 font-nav text-xs tracking-widest uppercase text-white/40">
                      {c.product}
                    </p>
                    <h3 className="font-heading text-2xl sm:text-3xl text-white mt-6 leading-tight">
                      {c.title}
                    </h3>
                    <p className="mt-6 font-body text-sm sm:text-base text-white/70 font-light leading-relaxed">
                      {c.body}
                    </p>
                    <span className="mt-auto pt-8 font-nav text-xs tracking-widest uppercase text-white/60 group-hover:text-[#E6A91A] transition-colors">
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
        className="border-t border-white/10"
        aria-labelledby="credibility-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Eyebrow>Built inside a real clinical practice</Eyebrow>
              <h2
                id="credibility-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-white mt-4"
              >
                Clinicians built this. For the thing they needed on Monday.
              </h2>
              <p className="mt-6 font-body text-base sm:text-lg text-white/75 font-light leading-relaxed">
                Cognifica is run on top of Cognifica Health, an active practice
                in Aquebogue and West Harrison, New York. The founder, Dr. John
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
              <div className="border border-white/10 p-6">
                <p className="font-heading text-[10px] tracking-widest text-[#E6A91A]">
                  Founder
                </p>
                <h3 className="font-heading text-xl text-white mt-3">
                  Dr. John Abrahams
                </h3>
                <p className="mt-3 font-body text-sm text-white/70 font-light">
                  Practicing neurosurgeon. Three prior medical device ventures.
                  New York, since 2004.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <p className="font-heading text-[10px] tracking-widest text-[#E6A91A]">
                  Clinician
                </p>
                <h3 className="font-heading text-xl text-white mt-3">
                  Susan Mogan · PMHNP, DNP
                </h3>
                <p className="mt-3 font-body text-sm text-white/70 font-light">
                  Practicing Psychiatric Mental Health Nurse Practitioner at
                  Cognifica Health.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="vignette-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <Eyebrow>What actually happens</Eyebrow>
              <h2
                id="vignette-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-white mt-4"
              >
                A 63 year old patient. A concussion. A conversation that
                otherwise would not have happened.
              </h2>
            </div>
            <div className="space-y-5 font-body text-base sm:text-lg text-white/80 font-light leading-relaxed">
              <p>
                The patient presents after a fall. Concussion. Routine follow
                up six weeks out. The exam is unremarkable. The patient reports
                being &quot;fine&quot; in the room.
              </p>
              <p>
                The clinician opens the panel. The PHQ-9 has drifted from 4 to
                13. The PCL-5 has crossed the validated threshold. The trend
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
        className="border-t border-white/10"
        aria-labelledby="screeners-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Seven validated screeners"
            title="Clinical instruments with research behind them"
            lede="Named. Scored. Tracked. No proprietary questionnaires stand in for them."
            as="h2"
          />
          <ul
            id="screeners-heading"
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3"
            role="list"
          >
            {screeners.map((s, i) => (
              <li key={s.acronym}>
                <Reveal delay={i * 40}>
                  <div className="border border-white/10 p-4 sm:p-5 h-full flex flex-col">
                    <p className="font-heading text-lg sm:text-xl text-white leading-tight">
                      {s.acronym}
                    </p>
                    <p className="mt-2 font-nav text-[10px] tracking-widest uppercase text-[#E6A91A]">
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
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="privacy-tease-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Privacy architecture</Eyebrow>
              <h2
                id="privacy-tease-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-white mt-4"
              >
                The employer never sees an individual score.
              </h2>
              <p className="mt-6 font-body text-base text-white/75 font-light leading-relaxed">
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
                  className="flex items-start gap-6 border-t border-white/10 pt-6"
                >
                  <span className="font-heading text-[10px] tracking-widest text-[#E6A91A] pt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-lg sm:text-xl text-white font-light leading-relaxed">
                    {line}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10 bg-[#E6A91A]"
        aria-label="Next steps"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-nav text-[10px] sm:text-xs tracking-widest uppercase text-[#0A0A0A]/70">
                Start the conversation
              </p>
              <h2 className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-[#0A0A0A] mt-4">
                Pick your lane.
              </h2>
              <p className="mt-6 font-body text-base text-[#0A0A0A]/80 font-light leading-relaxed">
                Three audiences. Three pilots. A real operator on every call.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/for-employers#demo"
                className="group inline-flex items-center gap-3 bg-[#0A0A0A] text-[#E6A91A] py-3 px-6 text-[10px] tracking-widest uppercase font-light hover:gap-5 transition-all"
              >
                Request a demo
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/for-insurers#contact"
                className="group inline-flex items-center gap-3 border border-[#0A0A0A] text-[#0A0A0A] py-3 px-6 text-[10px] tracking-widest uppercase font-light hover:gap-5 transition-all"
              >
                Book a call
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/pilot"
                className="group inline-flex items-center gap-3 border border-[#0A0A0A] text-[#0A0A0A] py-3 px-6 text-[10px] tracking-widest uppercase font-light hover:gap-5 transition-all"
              >
                Schedule a consultation
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
