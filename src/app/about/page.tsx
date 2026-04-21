/* |UXUIDC| AboutPage */
import type { Metadata } from "next";
import Link from "next/link";
import {
  PageContainer,
  Eyebrow,
  SectionHeading,
  ArrowLink,
  Reveal,
} from "@/components/ui";
import { BreadcrumbSchema, MedicalOrganizationSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Cognifica",
  description:
    "Cognifica was founded by Dr. John Abrahams, a practicing neurosurgeon. Built on top of Cognifica Health, an active clinical practice in Aquebogue and West Harrison, New York.",
  alternates: { canonical: "https://www.cognifica.app/about" },
  openGraph: {
    title: "About Cognifica",
    description:
      "Founded by a practicing neurosurgeon. Built on top of an active clinical practice.",
    url: "https://www.cognifica.app/about",
  },
};

const abrahamsCredentials = [
  "MD, neurosurgery in New York since 2004",
  "Biomedical engineering background",
  "Prior device ventures: EndoMedix, Osteomedix, DTX Medical",
  "Practicing clinician at Cognifica Health",
  "Founder of Cognifica",
];

const moganCredentials = [
  "Psychiatric Mental Health Nurse Practitioner",
  "Doctor of Nursing Practice (DNP)",
  "Practicing clinician at Cognifica Health",
];

const clinicLocations = [
  {
    name: "Aquebogue",
    region: "Long Island, NY",
    description:
      "Cognifica Health practice location serving eastern Long Island.",
  },
  {
    name: "West Harrison",
    region: "Westchester, NY",
    description:
      "Cognifica Health practice location serving Westchester and the surrounding region.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "About", url: "https://www.cognifica.app/about" }]} />
      <MedicalOrganizationSchema />

      <PageContainer className="pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-4xl">
          <Eyebrow>About</Eyebrow>
          <h1 className="font-heading text-[clamp(32px,6vw,80px)] leading-[1.05] text-white mt-6">
            The practice needed a tool. The tool did not exist. So the practice
            built it.
          </h1>
          <p className="mt-8 font-body text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
            Cognifica is built on top of an active clinical practice and
            operated by practicing clinicians. That is the whole premise. The
            product is the thing the clinic uses every day.
          </p>
        </div>
      </PageContainer>

      <section className="border-t border-white/10 bg-[#111111]" aria-labelledby="abrahams-heading">
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Reveal>
                <Eyebrow>Founder</Eyebrow>
                <h2
                  id="abrahams-heading"
                  className="font-heading text-[clamp(28px,4vw,52px)] leading-[1.1] text-white mt-4"
                >
                  Dr. John Abrahams
                </h2>
                <p className="mt-3 font-nav text-xs tracking-widest uppercase text-[#E6A91A]">
                  MD · Neurosurgery
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-3">
              <Reveal delay={80}>
                <p className="font-body text-base sm:text-lg text-white/80 font-light leading-relaxed">
                  Dr. Abrahams has practiced neurosurgery in New York since
                  2004. Before medicine he trained as a biomedical engineer, and
                  he has founded three medical device companies prior to
                  Cognifica. His current practice, Cognifica Health, is the
                  clinical home where CogAI Medical was built and where it runs
                  every day.
                </p>
                <ul className="mt-8 space-y-4" role="list">
                  {abrahamsCredentials.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 border-t border-white/10 pt-4"
                    >
                      <span className="font-heading text-[10px] tracking-widest text-[#E6A91A] pt-1 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body text-sm sm:text-base text-white font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="border-t border-white/10" aria-labelledby="mogan-heading">
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Reveal>
                <Eyebrow>Clinician</Eyebrow>
                <h2
                  id="mogan-heading"
                  className="font-heading text-[clamp(28px,4vw,52px)] leading-[1.1] text-white mt-4"
                >
                  Susan Mogan
                </h2>
                <p className="mt-3 font-nav text-xs tracking-widest uppercase text-[#E6A91A]">
                  PMHNP · DNP
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-3">
              <Reveal delay={80}>
                <p className="font-body text-base sm:text-lg text-white/80 font-light leading-relaxed">
                  Susan Mogan is the practicing Psychiatric Mental Health Nurse
                  Practitioner at Cognifica Health. She holds a Doctor of
                  Nursing Practice and partners with Dr. Abrahams on clinical
                  delivery. She sees patients in person and by telehealth across
                  both locations.
                </p>
                <ul className="mt-8 space-y-4" role="list">
                  {moganCredentials.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 border-t border-white/10 pt-4"
                    >
                      <span className="font-heading text-[10px] tracking-widest text-[#E6A91A] pt-1 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body text-sm sm:text-base text-white font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="clinic-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Clinical anchor"
            title="Cognifica Health"
            lede="An active psychiatric and behavioral health practice in New York. Two locations. The clinical boundary that the rest of the product sits on top of."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {clinicLocations.map((loc, i) => (
              <Reveal key={loc.name} delay={i * 80}>
                <article className="border border-white/10 p-8 min-h-[220px] flex flex-col">
                  <p className="font-nav text-[10px] tracking-widest uppercase text-[#E6A91A]">
                    {loc.region}
                  </p>
                  <h3 className="font-heading text-2xl sm:text-3xl text-white mt-3">
                    {loc.name}
                  </h3>
                  <p className="mt-4 font-body text-sm sm:text-base text-white/70 font-light leading-relaxed">
                    {loc.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="https://www.cognifica.health?utm_source=cognificaapp&utm_medium=about"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-white/20 text-white px-6 py-3 text-xs tracking-widest uppercase font-light hover:border-[#E6A91A] hover:text-[#E6A91A] hover:gap-5 transition-all"
            >
              Visit Cognifica Health
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10"
        aria-labelledby="story-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Founding</Eyebrow>
            <h2
              id="story-heading"
              className="font-heading text-[clamp(26px,4vw,48px)] leading-[1.1] text-white mt-4"
            >
              How this started
            </h2>
            <div className="mt-8 space-y-6 font-body text-base sm:text-lg text-white/80 font-light leading-relaxed">
              <p>
                The practice needed a way to know which patients on a behavioral
                health panel were deteriorating between visits. Nothing on the
                market did this the way clinicians needed. The screening existed
                in paper packets. The trend lines did not exist at all. Crisis
                flags sat in voicemail.
              </p>
              <p>
                So the practice built it. Validated instruments on a cadence.
                Thresholds pre-wired. Twelve-month trend per patient. The
                clinician sees the panel sorted by risk the moment they log in.
              </p>
              <p>
                Two adjacencies followed. Employers wanted the same proactive
                signal for their workforce, without ever seeing an individual
                score. Insurers wanted population-level movement on HEDIS
                depression measures and on ER admissions. The architecture
                supported both, because the clinical boundary never moves.
              </p>
              <p>
                Cognifica is the umbrella. CogAI Workforce is the employer
                product. CogAI Medical is the clinical product, serving both
                clinics and small insurance plans.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        id="press"
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="contact-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h2
                id="contact-heading"
                className="font-heading text-[clamp(26px,4vw,48px)] leading-[1.1] text-white mt-4"
              >
                Talk to us
              </h2>
              <p className="mt-6 font-body text-base text-white/70 font-light leading-relaxed">
                For product questions, pilot scoping, or a clinical reference,
                call or email. A clinician or the founder will be on the call.
              </p>
            </div>
            <div className="flex flex-col gap-6 self-center">
              <div className="border-t border-white/10 pt-6">
                <p className="font-nav text-[10px] tracking-widest uppercase text-white/40 mb-2">
                  General
                </p>
                <a
                  href="mailto:info@cognifica.app"
                  className="font-heading text-xl sm:text-2xl text-white hover:text-[#E6A91A] transition-colors"
                >
                  info@cognifica.app
                </a>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="font-nav text-[10px] tracking-widest uppercase text-white/40 mb-2">
                  Phone
                </p>
                <a
                  href="tel:+19147056830"
                  className="font-heading text-xl sm:text-2xl text-white hover:text-[#E6A91A] transition-colors"
                >
                  (914) 705 6830
                </a>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="font-nav text-[10px] tracking-widest uppercase text-white/40 mb-2">
                  Press
                </p>
                <a
                  href="mailto:press@cognifica.app"
                  className="font-heading text-xl sm:text-2xl text-white hover:text-[#E6A91A] transition-colors"
                >
                  press@cognifica.app
                </a>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="font-nav text-[10px] tracking-widest uppercase text-white/40 mb-2">
                  Clinical practice
                </p>
                <a
                  href="https://www.cognifica.health?utm_source=cognificaapp&utm_medium=about_contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xl sm:text-2xl text-white hover:text-[#E6A91A] transition-colors"
                >
                  cognifica.health
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <ArrowLink href="/for-employers" variant="solid">
              Explore CogAI Workforce
            </ArrowLink>
            <ArrowLink href="/for-clinics" variant="ghost">
              Explore CogAI Medical
            </ArrowLink>
            <Link
              href="/pilot"
              className="font-nav text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors self-center px-2"
            >
              Schedule a consultation
            </Link>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
