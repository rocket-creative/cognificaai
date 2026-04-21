/* |UXUIDC| ForClinicsPage */
import type { Metadata } from "next";
import Link from "next/link";
import {
  PageContainer,
  Eyebrow,
  SectionHeading,
  ArrowLink,
  NumberedStep,
  Reveal,
} from "@/components/ui";
import { MedicalGroupForm } from "@/components/MedicalGroupForm";
import { BreadcrumbSchema, ServiceSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "CogAI Medical for clinics",
  description:
    "Risk-sorted panel the moment you log in. Validated screeners on a cadence. Automated crisis escalation. Secure clinical messaging. Built by a practicing clinician.",
  alternates: { canonical: "https://www.cognifica.app/for-clinics" },
  openGraph: {
    title: "CogAI Medical for clinics | Cognifica",
    description:
      "Risk-sorted panel the moment you log in. Validated screeners on a cadence. Built by a practicing clinician.",
    url: "https://www.cognifica.app/for-clinics",
  },
};

const dashboardFeatures = [
  {
    title: "Panel sorted by risk",
    body: "R-Score and instrument flags drive the sort. The sickest patient is row one. The trend line is visible without drilling in.",
  },
  {
    title: "Twelve month longitudinal trend",
    body: "Each patient carries a twelve month trend on every instrument. Treatment response shows up on the same chart.",
  },
  {
    title: "Crisis flags surfaced in real time",
    body: "Automated escalation fires the moment a check-in clears a clinical threshold. The crisis counselor is paged immediately, not at the end of the day.",
  },
  {
    title: "Secure Clinical Messaging",
    body: "The inbound channel appears as LiveChat on the user side. On the clinician side, it is the messaging workbench at /secure-messaging. Routed, logged, and persistent.",
  },
  {
    title: "Scheduling in three clicks",
    body: "Configuration, New Schedule, Save. A new instrument run rolls out at the next cycle boundary. No consulting engagement required.",
  },
];

const adjacencies = [
  {
    title: "Physician wellness at hospital systems",
    body: "The same product, pointed at a physician population with organizational sponsorship. Validated screeners. Aggregate only reporting to the hospital system, per the consent architecture.",
  },
  {
    title: "Self-insured plans at medical groups",
    body: "Medical groups that are themselves self-insured can run the workforce product in parallel with the clinical product, without duplicating data.",
  },
];

export default function ForClinicsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "For clinics", url: "https://www.cognifica.app/for-clinics" }]}
      />
      <ServiceSchema
        name="CogAI Medical for clinics"
        description="Panel triage for behavioral health and primary care. Validated screeners. Twelve month longitudinal trend. Automated crisis escalation."
        url="https://www.cognifica.app/for-clinics"
      />

      <PageContainer className="pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24">
        <div className="max-w-4xl">
          <Eyebrow>CogAI Medical for clinics</Eyebrow>
          <h1 className="font-heading text-[clamp(32px,6vw,88px)] leading-[1.02] text-white mt-6">
            Know which patients need you on Monday. Before Monday.
          </h1>
          <p className="mt-8 font-body text-base sm:text-lg text-white/75 font-light leading-relaxed max-w-2xl">
            CogAI Medical is the clinical console the practice uses every day.
            Validated screeners run on a cadence. The panel is sorted by risk
            the moment you log in. Deterioration surfaces before the visit,
            not after.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ArrowLink href="#demo" variant="solid">
              Request a demo
            </ArrowLink>
            <ArrowLink href="/how-it-works" variant="ghost">
              How the mechanics work
            </ArrowLink>
          </div>
        </div>
      </PageContainer>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="built-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <Eyebrow>Built inside a real practice</Eyebrow>
              <h2
                id="built-heading"
                className="font-heading text-[clamp(28px,4vw,52px)] leading-[1.1] text-white mt-4"
              >
                The tool the practice wanted. So the practice built it.
              </h2>
              <p className="mt-6 font-body text-base text-white/75 font-light leading-relaxed">
                Cognifica Health is the clinical home of Dr. John Abrahams, a
                practicing neurosurgeon, and of Susan Mogan, a practicing
                Psychiatric Mental Health Nurse Practitioner. The product runs
                every day in that practice. Feature requests come from the
                exam room, not the conference room.
              </p>
              <div className="mt-6">
                <Link
                  href="/about"
                  className="font-nav text-xs tracking-widest uppercase text-[#E6A91A] hover:text-white transition-colors"
                >
                  Meet the team →
                </Link>
              </div>
            </div>
            <div className="border border-white/10 p-8">
              <p className="font-nav text-[10px] tracking-widest uppercase text-white/40">
                Vignette
              </p>
              <h3 className="font-heading text-xl sm:text-2xl text-white mt-3">
                A 63 year old patient after a concussion
              </h3>
              <div className="mt-4 space-y-4 font-body text-sm sm:text-base text-white/75 font-light leading-relaxed">
                <p>
                  The patient presents after a fall. Concussion. Routine visit
                  six weeks out. Exam unremarkable. Patient reports being
                  &quot;fine&quot; in the room.
                </p>
                <p>
                  The clinician opens the panel and sees a PHQ-9 that has
                  drifted from 4 to 13 over the last two months. A PCL-5
                  crossing the validated threshold. The trend sits next to the
                  note. The conversation that would not have happened does.
                </p>
                <p>
                  The patient is scheduled for follow up with Susan. A plan is
                  in motion by the end of the day, not three weeks later.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10"
        aria-labelledby="console-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Medical Provider console</Eyebrow>
              <h2
                id="console-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.1] text-white mt-4"
              >
                One surface. The whole panel.
              </h2>
              <p className="mt-6 font-body text-base text-white/75 font-light leading-relaxed">
                The Medical Provider role is the only role that resolves
                individual identity to a score. Scoped, logged, and auditable.
                Five features sit on that surface.
              </p>
            </div>
            <div className="lg:col-span-3">
              <ul className="space-y-0" role="list">
                {dashboardFeatures.map((f, i) => (
                  <li key={f.title}>
                    <NumberedStep index={i + 1} title={f.title}>
                      {f.body}
                    </NumberedStep>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="crisis-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Crisis protocol"
            title="Automated the moment it clears threshold"
            lede="The escalation does not wait for a human to notice. The crisis counselor is paged, LiveChat is open, and a safety check in is already on the calendar."
            as="h2"
          />
          <ol
            id="crisis-heading"
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { t: "Automated in-app escalation", b: "Crisis flag fires on submission. The counselor is paged in real time." },
              { t: "LiveChat 24 by 7", b: "The user facing channel. Logged and routed inside the clinical boundary." },
              { t: "Warm handoff to 988", b: "When appropriate, the counselor facilitates the handoff on the line." },
              { t: "Safety check in at 24 to 48 hours", b: "Follow up appointment is placed on the calendar automatically." },
            ].map((s, i) => (
              <li key={s.t} className="border border-white/10 p-6 h-full">
                <p className="font-heading text-[10px] tracking-widest text-[#E6A91A]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading text-lg text-white mt-3">{s.t}</h3>
                <p className="mt-3 font-body text-sm text-white/70 font-light leading-relaxed">
                  {s.b}
                </p>
              </li>
            ))}
          </ol>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10"
        aria-labelledby="adjacency-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Adjacencies"
            title="Two shapes the clinical product takes"
            lede="The same engine serves two adjacent use cases. Hospital systems wanting physician wellness. Medical groups that are themselves self-insured."
            as="h2"
          />
          <div id="adjacency-heading" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {adjacencies.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <article className="border border-white/10 p-8 h-full">
                  <h3 className="font-heading text-xl sm:text-2xl text-white">
                    {a.title}
                  </h3>
                  <p className="mt-4 font-body text-sm sm:text-base text-white/75 font-light leading-relaxed">
                    {a.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="pricing-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Pricing"
            title="Seat based for clinic seats"
            lede="Same four tier structure as the workforce product. For insurance plan customers, see the per-patient model on the insurers page."
            as="h2"
          />
          <div id="pricing-heading" className="mt-10 flex flex-wrap gap-4 items-center">
            <span className="inline-flex items-center border border-white/15 px-4 py-2 font-nav text-xs tracking-widest uppercase text-white/70">
              XS · SM · MD · LG
            </span>
            <span className="font-nav text-xs tracking-widest uppercase text-white/40">
              $TBD / seat / month · confirmed at pilot scoping
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ArrowLink href="/for-employers#pricing-heading" variant="ghost">
              See seat tiers
            </ArrowLink>
            <ArrowLink href="/for-insurers" variant="ghost">
              Insurer pricing
            </ArrowLink>
          </div>
        </PageContainer>
      </section>

      <section
        id="demo"
        className="border-t border-white/10 bg-[#E6A91A]"
        aria-labelledby="demo-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="font-nav text-[10px] sm:text-xs tracking-widest uppercase text-[#0A0A0A]/70">
                Request a demo
              </p>
              <h2
                id="demo-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-[#0A0A0A] mt-4"
              >
                Let us run through the Medical Provider console with you.
              </h2>
              <p className="mt-6 font-body text-base text-[#0A0A0A]/80 font-light leading-relaxed">
                A clinician will be on the call. We open a real anonymized
                panel, show the sort, the trends, and the crisis flag path.
                Forty-five minutes.
              </p>
              <ul className="mt-8 space-y-2 font-body text-sm text-[#0A0A0A] font-light">
                <li>Medical Provider console walk through</li>
                <li>Crisis protocol live</li>
                <li>Pilot scoping, if the fit is right</li>
              </ul>
              <div className="mt-8">
                <Link
                  href="tel:+19147056830"
                  className="font-nav text-xs tracking-widest uppercase text-[#0A0A0A] border-b border-[#0A0A0A]/30 hover:border-[#0A0A0A] transition-colors"
                >
                  Or call (914) 705 6830
                </Link>
              </div>
            </div>
            <div>
              <MedicalGroupForm />
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
