/* |UXUIDC| WorkforcePage */
import type { Metadata } from "next";
import Link from "next/link";
import {
  PageContainer,
  Eyebrow,
  SectionHeading,
  ArrowLink,
  NumberedStep,
  Reveal,
  ConsentCommitments,
} from "@/components/ui";
import { DemoRequestForm } from "@/components/DemoRequestForm";
import { HeroVideo } from "@/components/HeroVideo";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "COGAI Workforce | Workplace mental health, measured.",
  description:
    "Seven validated instruments. Monthly check ins on the employee's phone. One composite R Score. The employer never sees an individual score. Ninety day pilot.",
  path: "/workforce",
  ogDescription:
    "Workplace mental health, proactive and measurable, without violating privacy. Aggregate insight for HR. Confidential for the employee.",
  keywords: [
    "COGAI Workforce",
    "workplace mental health",
    "employee wellness",
    "EAP alternative",
    "PHQ 9",
    "GAD 7",
    "R Score",
    "workforce screening",
    "HIPAA aligned",
    "aggregate reporting",
  ],
});

const beliefs = [
  {
    n: "01",
    title: "Mental health has been invisible to the people who need to act on it.",
    body: "HR cannot see it, legally they should not. Clinicians cannot see it between visits. Employees do not volunteer it until it is already bad. They are embarrassed, or they do not want to be seen as a problem. That is why nothing moves.",
  },
  {
    n: "02",
    title: "The tools already exist. They were not operationalized.",
    body: "PHQ 9. GAD 7. PCL 5. DAST 10. AUDIT. PSQI. Work Wellness. Instruments every clinician already uses. COGAI runs them at organizational scale, on the employee's phone, every month.",
  },
  {
    n: "03",
    title: "Privacy is not a feature. It is the architecture.",
    body: "The consent document is the precondition for every other screen. Without it, the product collapses, and so does trust. Consent is captured per user, before any data exists, and the employer is contractually committed to aggregate visibility only.",
  },
  {
    n: "04",
    title: "One number changes the conversation.",
    body: "The R Score lets a CEO talk about workforce wellness without talking about any individual diagnosis. Zero to one, lower is better. Trended over time. Defensible to the board.",
  },
  {
    n: "05",
    title: "AI does not replace clinical judgment. It removes the paperwork.",
    body: "AI inside COGAI is non diagnostic and non emergency. It helps structure the conversation and spot patterns. Every clinical action is initiated by a human. That line is in the consent, not just the marketing.",
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

const gapBlocks = [
  {
    n: "94%",
    title: "The reach gap",
    body: "Less than five percent of employees actually use a traditional EAP, and most of them only because they were forced into it with an incentive. Ninety four percent go unserved. That is not a benefit. It is a gap.",
  },
  {
    n: "1 in 5",
    title: "The diagnosis gap",
    body: "Twenty percent of Americans live with a mental health condition. Five percent live with a severe one. Most are undiagnosed. The last place they are going to share is with their employer.",
  },
  {
    n: "$500K — $2.5M",
    title: "The cost gap",
    body: "For a company doing ten to fifty million in revenue, untreated mental health typically shows up as five hundred thousand to two and a half million per year in absenteeism, low performance, turnover, and unfilled positions.",
  },
];

const views = [
  {
    label: "Employee view",
    title: "Eight minutes a month. The employee owns their score.",
    body: "A private, mobile first check in. The employee sees their own score and a path to help. The record is encrypted at the individual level and is never reconstructable from the employer side. Completion runs above ninety percent in seeded tenants because the cycle is short and the score comes back immediately.",
  },
  {
    label: "Manager and executive view",
    title: "Aggregates only. Subject to a minimum cohort floor.",
    body: "Department and organization level R Score trends, participation, and engagement. No individual scores. No reconstruction of any single employee is possible. This is the dashboard a CHRO opens on Monday morning. This is the slide a CFO takes to the board.",
  },
  {
    label: "Clinician view",
    title: "For medical tenants. Identified panel inside the boundary.",
    body: "When the same product runs in a clinical tenant, a Medical Provider role gets a fourth view: identified panel, R Score sort, twelve month trend, clinical thresholds pre wired. That view never crosses into the workforce tenant. Three audiences, one source of truth, zero cross contamination.",
  },
];

const cadenceOptions = ["Quarterly", "Monthly", "Weekly", "Custom"];

const crisisSteps = [
  {
    t: "Real time clinical alert",
    b: "When a response clears a clinical threshold, our clinical team is paged in real time. Not the employer. Not HR.",
  },
  {
    t: "Live licensed counselor",
    b: "A licensed counselor is available inside the app, around the clock. Chat or phone. The employee chooses.",
  },
  {
    t: "Warm handoff to 988",
    b: "When appropriate, the counselor facilitates the handoff to 988 or local emergency services on the line.",
  },
  {
    t: "Loved one outreach",
    b: "If the employee names a friend or family member, we can intervene with that contact. The employer is not in the loop.",
  },
  {
    t: "Twelve week check in",
    b: "A templated twelve week high risk check in runs after the acute moment. The clinical team owns the loop.",
  },
];

const pricingTiers = [
  { tier: "XS", size: "Up to 25 employees", note: "Small practices, micro teams" },
  { tier: "SM", size: "Up to 150 employees", note: "Schools, nonprofits, small firms" },
  { tier: "MD", size: "Up to 355 employees", note: "Mid sized organizations" },
  { tier: "LG", size: "2,200 or more employees", note: "Enterprise and agencies" },
];

const faqs = [
  {
    question: "We already have an EAP. Why pay for another vendor?",
    answer:
      "Less than five percent of employees actually use a traditional EAP, and most of them only because they were forced into it with an incentive. COGAI Workforce is proactive. We go to the employee, every month, with validated instruments. The reach is the difference. The two can run together, or COGAI Workforce can replace an EAP that is not earning its line item.",
  },
  {
    question: "If we deploy this, what do we see about our people?",
    answer:
      "Aggregates. Nothing else. Department and organization level R Score trends, participation, engagement. The employer never sees an individual score. Not once. Consent is captured per user, timestamped, revocable. The consent document commits the employer contractually to aggregate visibility only. That is what makes employees actually use it. That is what makes your general counsel sign off.",
  },
  {
    question: "What is the R Score, exactly?",
    answer:
      "A composite drawn from seven validated screeners. Zero to one, lower is better. Every employee sees their own immediately after the cycle. Every department over ten people sees an aggregate. The organization sees a single number trended over time. It is the metric your board has been asking for, computed transparently from instruments your clinical advisors already trust.",
  },
  {
    question: "Why these seven instruments?",
    answer:
      "PHQ 9 for depression, GAD 7 for anxiety, PCL 5 for trauma, DAST 10 for drug use, AUDIT for alcohol use, PSQI for sleep, plus a work wellness scale. They are the same instruments every clinician in this field already uses. Each runs in under a minute. The full cycle is eight minutes a month. Validated means they survived peer review and are accepted in clinical practice.",
  },
  {
    question: "How does the AI inside COGAI actually work?",
    answer:
      "AI in COGAI helps structure the conversation and spot patterns across instruments. It does not diagnose. It does not treat. It does not decide. Every clinical action is initiated by a human. That line is written into the consent document, not just the marketing.",
  },
  {
    question: "What if we do not want to see any data at all?",
    answer:
      "Employers can opt out of seeing any data, including aggregate reports. Some tenants prefer this posture, sponsoring the benefit without receiving population level reporting. The architecture supports it.",
  },
  {
    question: "What happens if an employee reports self harm or harm to others?",
    answer:
      "Crisis escalation runs through the COGAI clinical team, not HR. A designated crisis counselor is engaged, live chat is available around the clock, a warm handoff to 988 is available, and a templated twelve week high risk check in runs after the acute moment.",
  },
  {
    question: "What does the pilot look like?",
    answer:
      "Pilot one business unit or one site for sixty days. One full cycle. One decision meeting at day thirty five with a board ready dashboard. If the number does not move and your people do not tell you it was worth doing, you walk away. The clause is written to be used.",
  },
  {
    question: "Mental health is not really our problem.",
    answer:
      "It is the dominant cost driver employers do not measure. Most large employers are too busy to quantify it, so they assume it is not happening. COGAI Workforce is designed to quantify it, address it, and report the return on investment back to the people writing the checks.",
  },
  {
    question: "We cannot afford another vendor.",
    answer:
      "Start with the sixty day pilot. If the cycle does not show movement and the employees do not tell you it was worth doing, you walk away. The pilot is built to surface the offset on your own panel, not against a marketing figure.",
  },
];

export default function WorkforcePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Workforce", url: "https://www.cogai.app/workforce" }]}
      />
      <ServiceSchema
        name="COGAI Workforce"
        description="Workplace mental health, proactive, easy, and measurable, without violating privacy. Seven validated instruments. The R Score. Aggregate only reporting. Sixty day pilot."
        url="https://www.cogai.app/workforce"
      />
      <FAQSchema questions={faqs} />

      <section className="relative bg-black text-white" aria-label="Intro">
        <div className="relative w-full aspect-video overflow-hidden">
          <HeroVideo />
          <div
            className="absolute inset-x-0 bottom-0 bg-white/40 backdrop-blur-md border-t border-white/50"
            role="presentation"
          >
            <PageContainer className="py-6 sm:py-8 lg:py-10">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
                <div className="max-w-3xl">
                  <p className="font-nav text-[10px] sm:text-xs tracking-widest uppercase text-[#0A0A0A]">
                    COGAI Workforce
                  </p>
                  <h1 className="font-heading text-[clamp(28px,5vw,72px)] leading-[0.98] mt-3 uppercase">
                    <span className="gradient-text">Workplace mental health, measured.</span>
                  </h1>
                  <p className="mt-4 font-body text-sm sm:text-base text-[#0A0A0A] font-light leading-relaxed max-w-2xl">
                    Proactive. Easy. Measurable. Without violating privacy. Seven
                    validated instruments. One composite number. The employer
                    never sees an individual score.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 lg:flex-shrink-0">
                  <ArrowLink href="#demo" variant="solid">
                    Request a demo
                  </ArrowLink>
                  <Link
                    href="#privacy"
                    className="group inline-flex items-center gap-3 border border-[#0A0A0A] text-[#0A0A0A] py-3 px-6 text-[10px] sm:text-xs uppercase tracking-widest font-light hover:border-[#3B5A75] text-orange-grad-hover hover:gap-5 transition-all"
                  >
                    The architecture
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </PageContainer>
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#D4D4D4] bg-[#F7F7F7]"
        aria-labelledby="problem-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="The problem"
            title="A CEO can tell you this quarter's revenue to the dollar. They cannot tell you whether their people are okay."
            lede="Every company spends real money on mental health. They pay for an EAP. They run an engagement survey. They send out benefits emails. When you ask them whether any of it is working, the honest answer is nobody knows. Not because they do not care. Because they legally cannot see the data that would tell them."
            as="h2"
          />
          <div
            id="problem-heading"
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {gapBlocks.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="border border-[#D4D4D4] bg-white p-8 h-full flex flex-col">
                  <p className="font-heading text-3xl sm:text-4xl text-orange-grad">
                    {p.n}
                  </p>
                  <h3 className="font-heading text-xl sm:text-2xl text-[#0A0A0A] mt-3">
                    {p.title}
                  </h3>
                  <p className="mt-4 font-body text-sm sm:text-base text-[#404040] font-light leading-relaxed">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 font-body text-xs text-[#737373] font-light italic max-w-2xl">
            Cost figure paraphrased from Dr. John Abrahams on the losses a
            mid market employer typically absorbs in absenteeism, low
            performance, turnover, and unfilled positions.
          </p>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4]"
        aria-labelledby="beliefs-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="What we believe"
            title="Five beliefs the product is built on."
            lede="Workplace mental health does not move because nobody can see it. The instruments to see it already exist. Privacy is the architecture, not a feature. One number changes the conversation. AI does not decide."
            as="h2"
          />
          <ol
            id="beliefs-heading"
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            role="list"
          >
            {beliefs.map((b, i) => (
              <Reveal key={b.n} delay={i * 60}>
                <li className="border border-[#D4D4D4] bg-white p-8 h-full flex flex-col">
                  <p className="font-heading text-[10px] tracking-widest text-orange-grad">
                    {b.n}
                  </p>
                  <h3 className="font-heading text-xl sm:text-2xl text-[#0A0A0A] mt-3 leading-tight">
                    {b.title}
                  </h3>
                  <p className="mt-4 font-body text-sm sm:text-base text-[#404040] font-light leading-relaxed">
                    {b.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4] bg-[#F7F7F7]"
        aria-labelledby="rscore-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-2">
              <Eyebrow>The R Score</Eyebrow>
              <h2
                id="rscore-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.04] text-[#0A0A0A] mt-4"
              >
                One number. Lower is better. Trended over time.
              </h2>
              <p className="mt-6 font-body text-base text-[#404040] font-light leading-relaxed">
                The R Score rolls seven validated screeners into one composite.
                Zero to one. Every employee sees their own immediately after
                the cycle. Every department over ten people sees an aggregate.
                The organization sees a single number trended over time. The
                weights are auditable. The math is not a black box.
              </p>
              <p className="mt-4 font-body text-base text-[#404040] font-light leading-relaxed">
                That is the metric your board has been asking for.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="border border-[#D4D4D4] bg-white p-10 sm:p-14">
                <p className="font-nav text-[10px] tracking-widest uppercase text-[#737373]">
                  Example
                </p>
                <p className="font-heading text-[clamp(72px,12vw,180px)] leading-none text-orange-grad mt-4">
                  0.37
                </p>
                <p className="mt-4 font-nav text-xs tracking-widest uppercase text-[#0A0A0A]">
                  Mild risk · trend down four percent month over month
                </p>
                <ul className="mt-8 grid grid-cols-2 gap-3 font-body text-xs sm:text-sm text-[#525252] font-light">
                  <li>Depression · PHQ 9</li>
                  <li>Anxiety · GAD 7</li>
                  <li>Trauma · PCL 5</li>
                  <li>Drug use · DAST 10</li>
                  <li>Alcohol use · AUDIT</li>
                  <li>Sleep · PSQI</li>
                  <li className="col-span-2">Work wellness</li>
                </ul>
              </div>
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
            title="Named. Scored. Tracked."
            lede="No proprietary questionnaires stand in for them. Each instrument runs in under a minute. The full cycle is eight minutes a month. Decades of clinical research underneath each one."
            as="h2"
          />
          <ul
            id="instruments-heading"
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3"
            role="list"
          >
            {instruments.map((s, i) => (
              <li key={s.acronym}>
                <Reveal delay={i * 40}>
                  <div className="border border-[#D4D4D4] bg-white p-4 sm:p-5 h-full flex flex-col">
                    <p className="font-heading text-base sm:text-lg text-[#0A0A0A] leading-tight">
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
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4] bg-[#F7F7F7]"
        aria-labelledby="views-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Three views</Eyebrow>
              <h2
                id="views-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.04] text-[#0A0A0A] mt-4"
              >
                Three audiences. One source of truth. Zero cross contamination.
              </h2>
              <p className="mt-6 font-body text-base text-[#404040] font-light leading-relaxed">
                The employee, the manager, the executive. In medical tenants,
                add a clinician. The scope changes. The boundary does not.
              </p>
              <div className="mt-8">
                <ArrowLink href="/how-it-works" variant="ghost">
                  See the mechanics
                </ArrowLink>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ul className="space-y-0" role="list">
                {views.map((v, i) => (
                  <li key={v.label}>
                    <NumberedStep index={i + 1} title={v.title}>
                      <p className="font-nav text-[10px] tracking-widest uppercase text-orange-grad mb-2">
                        {v.label}
                      </p>
                      {v.body}
                    </NumberedStep>
                  </li>
                ))}
              </ul>
              <div className="mt-10 border-t border-[#D4D4D4] pt-6">
                <p className="font-nav text-[10px] tracking-widest uppercase text-[#737373]">
                  Cadence options
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cadenceOptions.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center border border-[#D4D4D4] bg-white px-3 py-1 font-body text-xs text-[#262626]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        id="privacy"
        className="border-t border-[#D4D4D4] scroll-mt-32"
        aria-labelledby="privacy-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Privacy architecture</Eyebrow>
              <h2
                id="privacy-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.04] text-[#0A0A0A] mt-4"
              >
                The employer never sees an individual score.
              </h2>
              <p className="mt-6 font-body text-base text-[#404040] font-light leading-relaxed">
                Not once. The consent document commits the employer
                contractually to aggregate, de identified visibility only.
                These three lines live in the contract. They are not a feature
                in a settings panel. They are a boundary the architecture
                enforces.
              </p>
              <ul className="mt-8 space-y-3 font-body text-sm text-[#404040] font-light">
                <li className="flex gap-3">
                  <span className="text-orange-grad" aria-hidden="true">→</span>
                  Consent captured per user, before any data exists.
                  Timestamped. Revocable at any time.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-grad" aria-hidden="true">→</span>
                  HIPAA aligned posture. BAA available on request.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-grad" aria-hidden="true">→</span>
                  Crisis escalation runs through the COGAI clinical team. Not
                  HR.
                </li>
              </ul>
              <div className="mt-8">
                <ArrowLink href="/privacy" variant="ghost">
                  Full privacy architecture
                </ArrowLink>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ConsentCommitments />
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4] bg-[#F7F7F7]"
        aria-labelledby="ai-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <Eyebrow>AI posture</Eyebrow>
              <h2
                id="ai-heading"
                className="font-heading text-[clamp(28px,4vw,52px)] leading-[1.05] text-[#0A0A0A] mt-4"
              >
                People hear AI in healthcare and tense up. They should. We do
                too.
              </h2>
            </div>
            <div className="font-body text-base text-[#404040] font-light leading-relaxed space-y-5">
              <p>
                AI in COGAI helps structure the conversation and spot patterns
                across instruments and across time. It does not diagnose. It
                does not treat. It does not decide.
              </p>
              <p>
                Every clinical action is initiated by a human. That line is
                written into the consent document, not just the marketing.
              </p>
              <p className="font-body text-sm text-[#525252] italic">
                AI in COGAI is non diagnostic and non emergency. Non
                negotiable.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4]"
        aria-labelledby="crisis-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="When someone is at risk"
            title="The clinical team handles it. Not the employer."
            lede="The employer is not the first responder. The employer is not even in the loop. A licensed counselor is, around the clock."
            as="h2"
          />
          <ol
            id="crisis-heading"
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {crisisSteps.map((s, i) => (
              <li
                key={s.t}
                className="border border-[#D4D4D4] bg-white p-6 h-full"
              >
                <p className="font-heading text-[10px] tracking-widest text-orange-grad">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading text-lg text-[#0A0A0A] mt-3">
                  {s.t}
                </h3>
                <p className="mt-3 font-body text-sm text-[#404040] font-light leading-relaxed">
                  {s.b}
                </p>
              </li>
            ))}
          </ol>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4] bg-[#F7F7F7]"
        aria-labelledby="founder-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2">
              <Eyebrow>From the founder</Eyebrow>
              <h2
                id="founder-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-[#0A0A0A] mt-4"
              >
                Built for an altruistic reason.
              </h2>
              <p className="mt-6 font-body text-sm text-[#525252] font-light leading-relaxed">
                Dr. John Abrahams, founder. Practicing neurosurgeon. Built
                COGAI inside the clinical practice he runs day to day in New
                York.
              </p>
            </div>
            <div className="lg:col-span-3">
              <blockquote className="font-heading text-[clamp(20px,2.6vw,36px)] leading-[1.2] text-[#0A0A0A]">
                &ldquo;The current EAPs are not penetrating. There is no reason
                for an employee to use it. They do not trust it. With our
                application, we are proactive. We are going at the employee.
                And we are doing it in the privacy of that employee&rsquo;s
                personal space. They do not have to share it with their
                employer.&rdquo;
              </blockquote>
              <p className="mt-6 font-nav text-[10px] tracking-widest uppercase text-[#737373]">
                Dr. John Abrahams · Founder
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4]"
        aria-labelledby="pilot-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <Eyebrow>Sixty day pilot</Eyebrow>
              <h2
                id="pilot-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-[#0A0A0A] mt-4"
              >
                Sixty days. One cycle. One decision.
              </h2>
              <p className="mt-6 font-body text-base text-[#404040] font-light leading-relaxed">
                Pilot one business unit or one site. One full measurement
                cycle. A Day 35 decision meeting with a board ready dashboard.
                If the number does not move and your people do not tell you it
                was worth doing, you walk away. The clause is written to be
                used.
              </p>
              <p className="mt-4 font-body text-sm text-[#525252] font-light italic">
                Completion in seeded tenants runs above ninety percent because
                the cycle is eight minutes and the employee gets their own
                score back immediately.
              </p>
            </div>
            <ul className="space-y-0" role="list">
              <li>
                <NumberedStep index={1} title="Stand up in days">
                  Tenant configured, consent captured, roster loaded. No EHR
                  integration. No IT lift.
                </NumberedStep>
              </li>
              <li>
                <NumberedStep index={2} title="First cycle inside a month">
                  Eight minute monthly check in goes out. Employees see their
                  own R Score immediately. The aggregate begins to populate.
                </NumberedStep>
              </li>
              <li>
                <NumberedStep index={3} title="Day 35 board ready dashboard">
                  Organization R Score, department aggregates, completion,
                  trend. Continue, adjust, or walk away.
                </NumberedStep>
              </li>
              <li>
                <NumberedStep index={4} title="Day 60 decision">
                  One full cycle complete. The number, the participation, and
                  the employee feedback drive the contract conversation.
                </NumberedStep>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <ArrowLink href="/pilot" variant="ghost">
              Compare the three pilot shapes
            </ArrowLink>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4] bg-[#F7F7F7]"
        aria-labelledby="pricing-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Pricing"
            title="Seat based. Four tiers."
            lede="Per seat pricing is set with the client at pilot scoping. The tier structure is fixed. The dollar figure is in conversation."
            as="h2"
          />
          <div id="pricing-heading" className="mt-12 border-t border-[#D4D4D4]">
            <table className="w-full text-left" aria-label="Workforce pricing tiers">
              <thead className="sr-only">
                <tr>
                  <th>Tier</th>
                  <th>Headcount</th>
                  <th>Typical fit</th>
                  <th>Per seat per month</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((t) => (
                  <tr key={t.tier} className="border-b border-[#D4D4D4]">
                    <td className="py-6 pr-4 font-heading text-3xl sm:text-4xl text-orange-grad align-top">
                      {t.tier}
                    </td>
                    <td className="py-6 pr-4 font-body text-base text-[#0A0A0A] font-light align-top">
                      {t.size}
                    </td>
                    <td className="py-6 pr-4 font-body text-sm text-[#525252] font-light align-top hidden md:table-cell">
                      {t.note}
                    </td>
                    <td className="py-6 font-nav text-xs tracking-widest uppercase text-[#737373] text-right align-top">
                      $TBD / seat / month
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 font-body text-xs text-[#737373] font-light italic">
            Pricing is confirmed during pilot scoping.
          </p>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4]"
        aria-labelledby="faq-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading eyebrow="FAQ" title="What we are usually asked" as="h2" />
          <div id="faq-heading" className="mt-12 divide-y divide-[#E5E5E5] border-y border-[#D4D4D4]">
            {faqs.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3 className="font-body text-base sm:text-lg text-[#0A0A0A] font-light">
                    {item.question}
                  </h3>
                  <span className="font-nav text-xs tracking-widest uppercase text-orange-grad shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 font-body text-sm sm:text-base text-[#404040] font-light leading-relaxed max-w-3xl">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </PageContainer>
      </section>

      <section
        id="demo"
        className="border-t border-[#D4D4D4] bg-[#404040] scroll-mt-32"
        aria-labelledby="demo-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="font-nav text-[10px] sm:text-xs tracking-widest uppercase text-orange-grad">
                Request a demo
              </p>
              <h2
                id="demo-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-white mt-4"
              >
                Show me what this looks like in a real workforce.
              </h2>
              <p className="mt-6 font-body text-base text-white font-light leading-relaxed">
                A product lead walks you through the three views, the consent
                architecture, and a representative dashboard. Forty five
                minutes. No sales cadence after.
              </p>
              <ul className="mt-8 space-y-2 font-body text-sm text-white font-light">
                <li>Three views walk through</li>
                <li>Consent architecture, line by line</li>
                <li>Sixty day pilot scoping, if the fit is right</li>
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
