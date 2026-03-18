"use client";
import Link from "next/link";
import Image from "next/image";
import { useHeroAnimation, useStaggeredCards, useSectionReveal } from "@/components/animations";
import {
  ArrowRight,
  ArrowDown,
  Shield,
  Users,
  BarChart3,
  Lock,
  Heart,
  Brain,
  Moon,
  Pill,
  Wine,
  AlertTriangle,
  Phone,
  MessageSquare,
  CheckCircle,
  Eye,
  EyeOff,
  Building2,
  Zap,
  ClipboardCheck,
  AlertCircle,
  Check,
  X,
} from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import { DemoRequestForm } from "@/components/DemoRequestForm";
import { ROICalculator } from "@/components/ROICalculator";
import { PricingSection } from "@/components/PricingSection";
import {
  OrganizationSchema,
  WebSiteSchema,
  SoftwareApplicationSchema,
  FAQSchema,
} from "@/components/JsonLd";

const trustStats = [
  { value: "$79.4B", label: "Lost income in NY over 5 years" },
  { value: "$12,700", label: "Per affected worker" },
  { value: "1 in 6", label: "Employees with moderate to severe anxiety" },
  { value: "3–6%", label: "EAP utilization rate" },
];

const employerValues = [
  {
    icon: Shield,
    title: "Reduce Risk with Clinical Governance",
    desc: "Defined safety and escalation protocols. Imminent risk handled by the platform, not HR. No monitoring, surveillance, or individual reporting.",
  },
  {
    icon: Users,
    title: "Increase Engagement",
    desc: "Mobile first, designed for frontline and non desk workers. Short, respectful check ins instead of long surveys. Higher participation than traditional EAPs.",
  },
  {
    icon: BarChart3,
    title: "Gain Meaningful Insights",
    desc: "Receive aggregate, de identified trends. Stress and burnout patterns. Sleep and wellbeing indicators. Engagement with support resources.",
  },
  {
    icon: Zap,
    title: "Zero IT Lift",
    desc: "Deploy in days, not months. Upload your employee roster via CSV or manually. Choose assessments, frequency, and data visibility preferences.",
  },
  {
    icon: Lock,
    title: "HIPAA Compliant",
    desc: "Individual employee data never shared with HR. Built on HIPAA compliant infrastructure from the ground up.",
  },
  {
    icon: AlertCircle,
    title: "24/7 Crisis Safety Net",
    desc: "Immediate crisis resource connection and clinical escalation when needed. Real protocol, not just a hotline number.",
  },
];

const employeeExperience = [
  {
    icon: Lock,
    title: "Truly Confidential Support",
    desc: "Your employer cannot see your identity or responses. Messages, scores, and conversations remain private.",
  },
  {
    icon: ClipboardCheck,
    title: "Evidence Based Check Ins",
    desc: "Clinically validated tools for anxiety, depression, sleep, substance use, and trauma related symptoms.",
  },
  {
    icon: MessageSquare,
    title: "Immediate, Practical Help",
    desc: "Short stress reduction and focus exercises. Cognitive tools to support mood and mental clarity. Optional chat based guidance.",
  },
  {
    icon: Heart,
    title: "Optional Human Support",
    desc: "Matched to licensed mental health professionals based on your responses. No insurance paperwork. Always optional, always private.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Validated Clinical Screening",
    desc: "Employees complete clinically validated assessments including PHQ 9, GAD 7, PSQI, DAST, AUDIT, and PCL 5. Peer reviewed tools providing objective, measurable data.",
  },
  {
    step: "02",
    title: "Proprietary Risk Scoring",
    desc: "Cognifica App integrates results into a dynamic mental health risk score. Stratifies into risk tiers, identifies emerging concerns early, flags high risk responses.",
  },
  {
    step: "03",
    title: "Smart Referral Pathways",
    desc: "Based on risk stratification: low risk gets digital support, moderate risk gets professional referral, high risk gets crisis support and urgent referral.",
  },
  {
    step: "04",
    title: "Employer Dashboard",
    desc: "Anonymized, HIPAA compliant dashboard showing workforce trends, engagement rates, risk distribution — without individual employee data.",
  },
];

const assessments = [
  {
    abbr: "GAD-7",
    name: "Generalized Anxiety Disorder Scale",
    tag: "Anxiety",
    icon: Brain,
    desc: "Seven item instrument for identifying anxiety and severity.",
  },
  {
    abbr: "PHQ-9",
    name: "Patient Health Questionnaire",
    tag: "Depression",
    icon: Heart,
    desc: "Validated depression screening mapped to DSM 5 criteria.",
  },
  {
    abbr: "PSQI",
    name: "Pittsburgh Sleep Quality Index",
    tag: "Sleep",
    icon: Moon,
    desc: "Assesses sleep quality and disturbances over one month.",
  },
  {
    abbr: "AUDIT",
    name: "Alcohol Use Disorders Test",
    tag: "Alcohol",
    icon: Wine,
    desc: "WHO validated screening for hazardous alcohol consumption.",
  },
  {
    abbr: "DAST-10",
    name: "Drug Abuse Screening Test",
    tag: "Substance",
    icon: Pill,
    desc: "Brief screening for drug misuse problems.",
  },
  {
    abbr: "PCL-5",
    name: "PTSD Checklist DSM 5",
    tag: "Trauma",
    icon: Shield,
    desc: "20 item measure assessing PTSD symptoms.",
  },
];

const riskTiers = [
  {
    level: "Low Risk",
    color: "bg-[#E6A91A]/30",
    action: "Self guided digital support",
    desc: "All scores within normal range. Wellness tips and psychoeducation.",
  },
  {
    level: "Moderate Risk",
    color: "bg-[#E6A91A]/60",
    action: "Referral to mental health professionals",
    desc: "One or more scores at subclinical elevation. Targeted self help resources.",
  },
  {
    level: "High Risk",
    color: "bg-[#E6A91A]",
    action: "Crisis support and urgent referral",
    desc: "Severe scores or crisis indicators. Immediate connection to 24/7 support.",
  },
];

const escalationProtocol = [
  {
    title: "Automated In App Escalation",
    desc: "When responses cross a risk threshold, the Clinical Team is alerted in real time to a designated crisis counselor on the platform, not to the employer.",
  },
  {
    title: "Live Chat 24/7",
    desc: "Licensed crisis counselor available around the clock. Many people in distress will text but not call. Embedded directly in the platform.",
  },
  {
    title: "Warm Handoff to 988",
    desc: "Platform counselor connects with the user, then bridges them to 988 or local emergency services, staying on the line during the handoff.",
  },
  {
    title: "Scheduled Safety Check Ins",
    desc: "After a high risk response, automatic check ins within 24 to 48 hours via counselor, chatbot, or push notification with escalation if no response.",
  },
];

const faqItems = [
  {
    question: "Can employers see individual employee data or identities?",
    answer:
      "No. Employers receive only anonymized, aggregated insights. No names, messages, scores, or identifiers are accessible.",
  },
  {
    question: "What if we do not want to see employee results?",
    answer:
      "Employers can opt to not see any data and simply let employees use it for self assessment with direct referral to mental health professionals.",
  },
  {
    question: "What happens if an employee reports self harm or harm to others?",
    answer:
      "The platform follows a clinically governed escalation protocol managed by the vendor, not the employer. Imminent risk triggers immediate crisis support. Anonymity may be paused only to connect emergency resources. Employers are not notified of individuals.",
  },
  {
    question: "Are we responsible if an employee discloses substance use?",
    answer:
      "No. Individual disclosures remain confidential unless there is imminent risk. The platform is not a monitoring or compliance tool.",
  },
  {
    question: "Does this create a duty to act for HR or managers?",
    answer:
      "No. The vendor assumes responsibility for clinical risk triage and response.",
  },
  {
    question: "What data do employers receive?",
    answer:
      "Depression, Anxiety, Sleep, Alcohol Abuse, Substance Abuse, PTSD, and Workplace Satisfaction trends. No individual level or actionable surveillance data is provided.",
  },
  {
    question: "Is this a replacement for our EAP?",
    answer:
      "No. It is an employee first access layer that complements existing benefits and improves engagement.",
  },
  {
    question: "How do we get started?",
    answer:
      "Upload your employee roster using a CSV file or manually. Choose which assessments to engage, over what time period, and frequency. Employers can opt to view data or not.",
  },
  {
    question: "My company is too small for department divisions. Can we still use it?",
    answer:
      "Yes. The software only assigns divisional departments if there are a minimum of 25 employees per department. Otherwise, employees are grouped together as one unit.",
  },
];

const employerDataItems = [
  "Depression trends",
  "Anxiety trends",
  "Sleep patterns",
  "Alcohol use risk",
  "Substance use risk",
  "PTSD indicators",
  "Workplace satisfaction",
];

export default function HomePage() {
  const heroRef = useHeroAnimation();
  const employerRef = useStaggeredCards();
  const assessmentsRef = useStaggeredCards();

  return (
    <>
      {/* Schema Markup */}
      <OrganizationSchema />
      <WebSiteSchema />
      <SoftwareApplicationSchema />
      <FAQSchema questions={faqItems} />

      {/* Hero Section with Waveform Animation */}
      <section
        ref={heroRef}
        className="relative min-h-[80dvh] sm:min-h-dvh bg-[#0A0A0A] overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Animated Waveform Background */}
        <HeroBackground color="230, 169, 26" />

        {/* Glass Effect Content Panel */}
        <div className="relative z-10 min-h-[80dvh] sm:min-h-dvh flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
            <div className="backdrop-blur-md bg-black/40 border border-white/10 p-5 sm:p-8 lg:p-14 max-w-xl">
              <div className="mb-6 sm:mb-8" data-hero-title>
                <Image
                  src="/cognifica-app-logo.svg"
                  alt="Cognifica App"
                  width={260}
                  height={80}
                  className="w-[160px] sm:w-[200px] lg:w-[260px] h-auto"
                  priority
                />
              </div>
              <p data-hero-eyebrow className="text-xs tracking-widest uppercase text-white/50 mb-4 sm:mb-6">
                Employee Mental Health Hub
              </p>

              <h1
                data-hero-title
                id="hero-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4"
              >
                Intelligent Mental Health Screening & Risk Stratification
              </h1>

              <p data-hero-description className="font-body text-sm sm:text-base text-white/70 font-light leading-relaxed mb-4">
                Smarter mental health support for the modern workforce.
                Proactively assess, stratify, and support employee mental
                wellness using validated clinical tools and intelligent risk
                modeling.
              </p>

              <p data-hero-subtitle className="font-body text-xs text-[#E6A91A] font-light leading-relaxed mb-6 sm:mb-8">
                Employees get meaningful support. Employers get anonymized
                insights — never individual data.
              </p>

              <div data-hero-cta className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#demo"
                  className="inline-flex items-center justify-center gap-4 bg-[#E6A91A] text-[#0A0A0A] py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-6 transition-all w-full sm:w-fit focus:outline-none focus:ring-2 focus:ring-[#E6A91A] focus:ring-offset-2 focus:ring-offset-black/40"
                >
                  Request Demo
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#how"
                  className="inline-flex items-center justify-center gap-2 text-white/60 py-3 sm:py-4 uppercase tracking-widest text-xs hover:text-white transition-colors focus:outline-none focus:text-white"
                >
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - Stats */}
      <section
        className="py-10 sm:py-12 lg:py-16 bg-[#161616] border-y border-white/5"
        aria-labelledby="challenge-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-scroll-fade
            id="challenge-heading"
            className="text-xs tracking-widest uppercase text-white/40 mb-6 sm:mb-8 text-center"
          >
            What is the mental health challenge?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {trustStats.map((stat) => (
              <div
                data-stagger-card
                key={stat.value}
                className="text-center hover:bg-white/5 p-4 -m-4 transition-colors"
              >
                <div className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#E6A91A] mb-1">
                  {stat.value}
                </div>
                <p className="font-body text-[10px] sm:text-xs text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] sm:text-xs text-white/50 mt-6 sm:mt-8 max-w-2xl mx-auto">
            The average employer has no idea that 1 in 6 of their employees is
            experiencing moderate to severe anxiety right now. They find out
            when the person quits — or doesn&apos;t.
          </p>
        </div>
      </section>

      {/* Two Column Value Props */}
      <section ref={employerRef} className="py-16 lg:py-24 bg-[#262626]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* For Employers */}
            <div id="employers">
              <p data-section-header className="text-xs tracking-widest uppercase text-white/50 mb-4">
                For Employers
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl text-white mb-8">
                Why do employers choose this program?
              </h2>

              <div className="space-y-4">
                {employerValues.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div
                      data-stagger-card
                      key={value.title}
                      className="flex gap-4 p-3 -m-3 hover:bg-white/5 transition-colors"
                    >
                      <div className="w-10 h-10 bg-[#E6A91A]/20 flex items-center justify-center flex-shrink-0">
                        <Icon
                          className="w-4 h-4 text-[#E6A91A]/60"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="font-heading text-sm text-white mb-1">
                          {value.title}
                        </h3>
                        <p className="font-body text-xs text-white/60 font-light">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* For Employees */}
            <div id="employees">
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
                For Employees
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl text-white mb-8">
                What do employees experience?
              </h2>

              <div className="space-y-4">
                {employeeExperience.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 p-3 -m-3 hover:bg-white/5 transition-colors"
                    >
                      <div className="w-10 h-10 bg-[#E6A91A]/20 flex items-center justify-center flex-shrink-0">
                        <Icon
                          className="w-4 h-4 text-[#E6A91A]/60"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="font-heading text-sm text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="font-body text-xs text-white/60 font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section
        id="comparison"
        className="py-16 lg:py-24 bg-[#0A0A0A]"
        aria-labelledby="comparison-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-nav text-xs tracking-widest uppercase text-[#E6A91A] mb-4">
            The Difference
          </p>
          <h2
            id="comparison-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
          >
            Why choose Cognifica App?
          </h2>
          <p className="font-body text-sm text-white/60 font-light mb-12 max-w-2xl">
            Our proactive model reaches 3 to 5 times more employees than hotline only EAPs.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto border-collapse">
              <thead>
                <tr>
                  <th scope="col" className="text-left py-4 px-4 font-nav text-xs tracking-widest uppercase text-white/60 border-b border-white/10">
                    Feature
                  </th>
                  <th scope="col" className="text-left py-4 px-4 font-nav text-xs tracking-widest uppercase text-white/40 border-b border-white/10">
                    Traditional EAP
                  </th>
                  <th scope="col" className="text-left py-4 px-4 font-nav text-xs tracking-widest uppercase text-[#E6A91A] border-b border-[#E6A91A]">
                    Cognifica App
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 font-body text-sm text-white/70">Proactive employee outreach</td>
                  <td className="py-4 px-4">
                    <X className="w-5 h-5 text-white/30" aria-hidden="true" />
                  </td>
                  <td className="py-4 px-4 border-l border-[#E6A91A]/30">
                    <Check className="w-5 h-5 text-[#E6A91A]" aria-hidden="true" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 font-body text-sm text-white/70">Quarterly survey data</td>
                  <td className="py-4 px-4">
                    <X className="w-5 h-5 text-white/30" aria-hidden="true" />
                  </td>
                  <td className="py-4 px-4 border-l border-[#E6A91A]/30">
                    <Check className="w-5 h-5 text-[#E6A91A]" aria-hidden="true" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 font-body text-sm text-white/70">Aggregate trend analytics</td>
                  <td className="py-4 px-4">
                    <X className="w-5 h-5 text-white/30" aria-hidden="true" />
                  </td>
                  <td className="py-4 px-4 border-l border-[#E6A91A]/30">
                    <Check className="w-5 h-5 text-[#E6A91A]" aria-hidden="true" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 font-body text-sm text-white/70">Live chat support</td>
                  <td className="py-4 px-4">
                    <span className="text-white/40 font-body text-sm">Rarely</span>
                  </td>
                  <td className="py-4 px-4 border-l border-[#E6A91A]/30">
                    <Check className="w-5 h-5 text-[#E6A91A]" aria-hidden="true" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 font-body text-sm text-white/70">Managed clinical referrals</td>
                  <td className="py-4 px-4">
                    <X className="w-5 h-5 text-white/30" aria-hidden="true" />
                  </td>
                  <td className="py-4 px-4 border-l border-[#E6A91A]/30">
                    <Check className="w-5 h-5 text-[#E6A91A]" aria-hidden="true" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 font-body text-sm text-white/70">Employer dashboard & reporting</td>
                  <td className="py-4 px-4">
                    <X className="w-5 h-5 text-white/30" aria-hidden="true" />
                  </td>
                  <td className="py-4 px-4 border-l border-[#E6A91A]/30">
                    <Check className="w-5 h-5 text-[#E6A91A]" aria-hidden="true" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 font-body text-sm text-white/70">Individual privacy protected</td>
                  <td className="py-4 px-4">
                    <Check className="w-5 h-5 text-white/40" aria-hidden="true" />
                  </td>
                  <td className="py-4 px-4 border-l border-[#E6A91A]/30">
                    <Check className="w-5 h-5 text-[#E6A91A]" aria-hidden="true" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 90-Day Pilot Banner */}
      <section
        id="pilot"
        className="py-16 lg:py-24 bg-gradient-to-b from-[#0A0A0A] to-[#110d14] border-y border-white/10"
        aria-labelledby="pilot-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="pilot-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
          >
            How do you start with zero risk?
          </h2>
          <p className="font-body text-sm text-white/60 font-light mb-12 max-w-2xl">
            We offer a 90 day pilot program for qualifying employers. See real
            workforce mental health data before committing to an annual contract.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#E6A91A]/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#E6A91A]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading text-sm text-white mb-1">Free workforce mental health assessment</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#E6A91A]/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#E6A91A]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading text-sm text-white mb-1">ROI analysis specific to your company size and industry</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#E6A91A]/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#E6A91A]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading text-sm text-white mb-1">Pilot program available for 25–100 employees</p>
              </div>
            </div>
          </div>

          <Link
            href="#demo"
            className="inline-flex items-center justify-center gap-4 bg-[#E6A91A] text-[#0A0A0A] py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-6 transition-all focus:outline-none focus:ring-2 focus:ring-[#E6A91A] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
          >
            Request Your 90 Day Pilot
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how"
        className="py-16 lg:py-24 bg-[#0A0A0A]"
        aria-labelledby="how-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              The Process
            </p>
            <h2
              id="how-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-4"
            >
              How does Cognifica App work?
            </h2>
            <p className="font-body text-sm text-white/50 font-light max-w-2xl">
              Move from reactive crisis management to proactive prevention with
              intelligent risk stratification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {howItWorks.map((item) => (
              <article
                key={item.step}
                className="bg-[#161616] p-6 border-l-2 border-[#E6A91A] hover:bg-[#161616]/80 hover:border-[#E6A91A]/80 transition-colors"
              >
                <span
                  className="text-[60px] font-heading text-white/[0.05] leading-none block -mb-8"
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <h3 className="font-heading text-lg text-white mb-2 relative z-10">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-white/50 font-light">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Assessments */}
      <section
        id="assessments"
        className="py-16 lg:py-24 bg-[#161616]"
        aria-labelledby="assessments-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Clinical Instruments
            </p>
            <h2
              id="assessments-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-4"
            >
              What validated tools are used?
            </h2>
            <p className="font-body text-sm text-white/50 font-light max-w-2xl">
              Every assessment is a peer reviewed clinical instrument validated
              for both clinical and population level screening contexts.{" "}
              <Link href="#faq" className="text-[#E6A91A] hover:text-[#E6A91A]/80 underline">
                See our FAQ
              </Link>{" "}
              for employer questions.
            </p>
          </div>

          <div className="mb-8 p-6 bg-[#0A0A0A] border border-white/10">
            <p className="font-nav text-xs tracking-widest uppercase text-[#E6A91A] mb-2">
              Medical review
            </p>
            <p className="font-body text-xs text-white/60 font-light">
              Clinical content reviewed by licensed mental health professionals. Assessment instruments are peer reviewed and validated for screening use. This platform is not a substitute for professional diagnosis or treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {assessments.map((test) => {
              const Icon = test.icon;
              return (
                <article
                  key={test.abbr}
                  className="bg-[#0A0A0A] border border-white/5 p-4 sm:p-6 hover:border-[#E6A91A]/20 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-heading text-xl sm:text-2xl lg:text-3xl text-[#E6A91A]">
                      {test.abbr}
                    </span>
                    <Icon
                      className="w-5 h-5 text-[#E6A91A]/40"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-body font-bold text-white text-xs sm:text-sm mb-2">
                    {test.name}
                  </h3>
                  <p className="font-body text-[10px] sm:text-xs text-white/50 font-light mb-4">
                    {test.desc}
                  </p>
                  <span className="inline-block text-[9px] sm:text-[10px] tracking-widest uppercase text-[#E6A91A] bg-[#E6A91A]/10 px-2 py-1">
                    {test.tag}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk Stratification */}
      <section className="py-16 lg:py-24 bg-[#262626]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
              Smart Referral Pathways
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              How does data become action?
            </h2>
            <p className="font-body text-sm text-white/60 font-light max-w-2xl">
              Our structured triage model ensures employees receive the right
              level of care at the right time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {riskTiers.map((tier) => (
              <article
                key={tier.level}
                className="bg-[#404040] p-6 hover:bg-[#525252] transition-colors"
              >
                <div className={`w-4 h-4 ${tier.color} mb-4`} />
                <h3 className="font-heading text-lg text-white mb-2">
                  {tier.level}
                </h3>
                <p className="font-body text-xs text-white/60 font-light mb-4">
                  {tier.desc}
                </p>
                <span className="text-xs text-[#E6A91A] font-bold">
                  {tier.action}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Escalation Protocol */}
      <section
        className="py-16 lg:py-24 bg-[#0A0A0A]"
        aria-labelledby="escalation-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Mental Health Escalation
            </p>
            <h2
              id="escalation-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-4"
            >
              What happens in a crisis?
            </h2>
            <p className="font-body text-sm text-white/50 font-light max-w-2xl">
              A hotline number is not sufficient. We define escalation steps:
              what triggers an alert, who is notified, what actions are taken,
              and within what timeframe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {escalationProtocol.map((item, i) => (
              <article
                key={item.title}
                className="bg-[#161616] p-6 border-l-2 border-[#E6A91A]/50 hover:bg-[#161616]/80 hover:border-[#E6A91A] transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Phone
                    className="w-4 h-4 text-[#E6A91A]/60"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs text-[#E6A91A]/60">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-base text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-white/50 font-light">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[#161616] border border-white/10">
            <div className="flex items-start gap-4">
              <AlertTriangle
                className="w-5 h-5 text-[#E6A91A] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <h4 className="font-heading text-sm text-white mb-2">
                  If an employee indicates immediate risk of harm:
                </h4>
                <p className="font-body text-xs text-white/50 font-light">
                  The platform may temporarily pause anonymity only to connect
                  urgent clinical or crisis support. Employers can choose not to
                  be notified and refer directly to mental health professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Confidentiality */}
      <section
        className="py-16 lg:py-24 bg-[#161616]"
        aria-labelledby="privacy-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
                Privacy First
              </p>
              <h2
                id="privacy-heading"
                className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-6"
              >
                Why is confidentiality the gating requirement?
              </h2>
              <p className="font-body text-sm text-white/50 font-light mb-6">
                If employees perceive this as a tool that gives HR or management
                visibility into their mental health, adoption will fail. True
                confidentiality must be demonstrable, not just claimed.{" "}
                <Link href="/privacy" className="text-[#E6A91A] hover:text-[#E6A91A]/80 underline">
                  Read our privacy policy
                </Link>{" "}
                for full details.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <EyeOff
                    className="w-5 h-5 text-[#E6A91A]"
                    aria-hidden="true"
                  />
                  <span className="font-body text-sm text-white/70">
                    Employer cannot see individual identities or responses
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Lock
                    className="w-5 h-5 text-[#E6A91A]"
                    aria-hidden="true"
                  />
                  <span className="font-body text-sm text-white/70">
                    Messages, scores, and conversations remain private
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Shield
                    className="w-5 h-5 text-[#E6A91A]"
                    aria-hidden="true"
                  />
                  <span className="font-body text-sm text-white/70">
                    HIPAA compliant infrastructure from the ground up
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Eye
                    className="w-5 h-5 text-[#E6A91A]"
                    aria-hidden="true"
                  />
                  <span className="font-body text-sm text-white/70">
                    Employers see only aggregate, de identified data
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#0A0A0A] p-6 sm:p-8">
              <p className="text-xs tracking-widest uppercase text-white/40 mb-6">
                What Employers Receive
              </p>
              <div className="space-y-3">
                {employerDataItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between py-2 border-b border-white/5"
                  >
                    <span className="text-sm text-white/70">{item}</span>
                    <span className="text-xs text-[#E6A91A]">
                      Aggregate only
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/50 mt-4">
                No individual level or actionable surveillance data is provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ROICalculator />

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-12 sm:py-16 lg:py-24 bg-[#262626]"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
              Employer Liability & Safety
            </p>
            <h2
              id="faq-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white"
            >
              Frequently Asked Questions
            </h2>
          </header>

          <div className="space-y-3 sm:space-y-4" role="list">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="bg-[#404040] p-4 sm:p-6 hover:bg-[#525252] transition-colors"
              >
                <h3 className="font-heading text-sm sm:text-base text-white mb-2">
                  {item.question}
                </h3>
                <p className="font-body text-xs sm:text-sm text-white/60 font-light">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      {/* Author / Credentials */}
      <section className="py-12 bg-[#161616] border-y border-white/5" aria-labelledby="credentials-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="credentials-heading" className="sr-only">Content credentials</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <p className="font-nav text-xs tracking-widest uppercase text-white/40">
              Content developed by Cognifica App clinical team. Contributors include licensed clinicians and workplace mental health specialists. Built in partnership with Kronos Group.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Summary */}
      <section className="py-16 lg:py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-6">
            What is the value proposition?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="p-6 bg-[#161616] hover:bg-[#161616]/80 transition-colors">
              <Building2
                className="w-8 h-8 text-[#E6A91A]/60 mx-auto mb-4"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="font-heading text-lg text-white mb-2">
                For Employers
              </h3>
              <p className="font-body text-sm text-white/50 font-light">
                Support employee mental health, reduce burnout risk, and gain
                insight — without surveillance or liability.
              </p>
            </div>
            <div className="p-6 bg-[#161616] hover:bg-[#161616]/80 transition-colors">
              <Users
                className="w-8 h-8 text-[#E6A91A]/60 mx-auto mb-4"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="font-heading text-lg text-white mb-2">
                For Employees
              </h3>
              <p className="font-body text-sm text-white/50 font-light">
                A private, judgment free space to check in, build skills, and
                access real support on your terms.
              </p>
            </div>
          </div>
          <p className="font-body text-sm text-[#E6A91A] mt-8">
            Mental health support employees will actually use. Insight employers
            can responsibly trust.{" "}
            <Link href="/terms" className="text-white/80 hover:text-white underline">
              Terms of Service
            </Link>
            {" · "}
            <Link href="/privacy" className="text-white/80 hover:text-white underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="demo"
        className="py-16 lg:py-24 bg-[#E6A91A]"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2
                id="cta-heading"
                className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#0A0A0A] mb-4"
              >
                Mental Health Shouldn&apos;t Be Invisible
              </h2>
              <p className="font-body text-sm sm:text-base text-[#0A0A0A]/70 font-light mb-4">
                Cognifica App makes it measurable — and manageable. Join forward
                thinking employers using Cognifica App to proactively support
                their workforce.
              </p>
              <ul className="space-y-2 mb-4" role="list">
                <li className="flex items-center gap-2 text-sm text-[#0A0A0A]/80">
                  <CheckCircle className="w-4 h-4" aria-hidden="true" />
                  Evidence based assessments
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0A0A0A]/80">
                  <CheckCircle className="w-4 h-4" aria-hidden="true" />
                  Data driven risk modeling
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0A0A0A]/80">
                  <CheckCircle className="w-4 h-4" aria-hidden="true" />
                  Scalable across large organizations
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0A0A0A]/80">
                  <CheckCircle className="w-4 h-4" aria-hidden="true" />
                  Actionable analytics for leadership
                </li>
              </ul>
              <div className="mb-6 p-4 bg-[#0A0A0A]/10 rounded-sm">
                <p className="font-body text-xs text-[#0A0A0A]/80 font-light">
                  Trusted by EAPA aligned employers. Assessments use peer reviewed instruments (PHQ 9, GAD 7, PSQI, AUDIT, DAST, PCL 5) validated in clinical and population settings.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="tel:+19147056830"
                  className="inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-5 transition-all"
                >
                  (914) 705 6830
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="bg-[#0A0A0A]/10 p-4 sm:p-6">
              <DemoRequestForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
