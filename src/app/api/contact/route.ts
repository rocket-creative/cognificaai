import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const TO = "info@cognifica.app";
const FROM = "Cognifica <noreply@cognifica.app>";

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not configured");
  return new Resend(key);
}

// ─── Schemas ──────────────────────────────────────────────────────────────────

const DemoRequestSchema = z.object({
  form_type: z.string().optional(),
  contact_name: z.string().min(1).max(100),
  title: z.string().max(100).optional(),
  organization: z.string().min(1).max(200),
  phone: z.string().min(7).max(30),
  email: z.string().email(),
  buyer_type: z.enum(["employer", "provider", "payer", "broker", "other"]).optional(),
  population_size: z
    .enum(["under_500", "500_1000", "1001_5000", "5001_10000", "over_10000"])
    .optional(),
  timeframe: z
    .enum(["evaluating_now", "1_3_months", "3_6_months", "just_researching"])
    .optional(),
  message: z.string().max(2000).optional(),
});

const SelfInsuredEmployerSchema = z.object({
  form_type: z.literal("self_insured_employer"),
  contact_name: z.string().min(1).max(100),
  title: z.string().max(100).optional(),
  company_name: z.string().min(1).max(200),
  phone: z.string().min(7).max(30),
  email: z.string().email(),
  employee_count: z
    .enum(["500_1000", "1001_2500", "2501_5000", "5001_10000", "over_10000"])
    .optional(),
  funding_model: z
    .enum(["self_funded", "level_funded", "fully_insured", "not_sure"])
    .optional(),
  current_eap: z
    .enum(["have_works", "have_doesnt", "no_eap", "not_sure"])
    .optional(),
  interest: z
    .enum(["replace_augment_eap", "reduce_medical_spend", "reduce_absenteeism", "mh_pathway", "general_inquiry"])
    .optional(),
  message: z.string().max(2000).optional(),
});

const HospitalSystemSchema = z.object({
  form_type: z.literal("hospital_system_clinicians"),
  contact_name: z.string().min(1).max(100),
  title: z.string().min(1).max(100),
  organization: z.string().min(1).max(200),
  phone: z.string().min(7).max(30),
  email: z.string().email(),
  clinician_count: z
    .enum(["under_500", "500_2000", "2001_5000", "5001_10000", "over_10000"])
    .optional(),
  program_scope: z
    .enum(["physicians_only", "nurses_only", "all_clinicians", "all_employees", "not_sure"])
    .optional(),
  current_program: z
    .enum(["internal_eap", "third_party_eap", "peer_support", "nothing", "not_sure"])
    .optional(),
  message: z.string().max(2000).optional(),
});

const PayerSchema = z.object({
  form_type: z.literal("payer"),
  contact_name: z.string().min(1).max(100),
  title: z.string().max(100).optional(),
  organization: z.string().min(1).max(200),
  phone: z.string().min(7).max(30),
  email: z.string().email(),
  payer_type: z
    .enum(["commercial", "medicare_advantage", "medicaid_mco", "self_funded_tpa", "other"])
    .optional(),
  member_count: z
    .enum(["under_10k", "10k_50k", "50k_250k", "250k_1m", "over_1m"])
    .optional(),
  use_case: z
    .enum(["case_management", "care_management", "utilization_management", "er_diversion", "chronic_condition", "other"])
    .optional(),
  message: z.string().max(2000).optional(),
});

const MedicalGroupSchema = z.object({
  form_type: z.literal("medical_group"),
  contact_name: z.string().min(1).max(100),
  title: z.string().max(100).optional(),
  practice_name: z.string().min(1).max(200),
  phone: z.string().min(7).max(30),
  email: z.string().email(),
  specialty: z
    .enum(["primary_care", "internal_medicine", "multi_specialty", "fqhc", "cardiology", "oncology", "other"])
    .optional(),
  patient_panel_size: z
    .enum(["under_5k", "5k_15k", "15k_50k", "50k_150k", "over_150k"])
    .optional(),
  integration_needed: z
    .enum(["epic", "cerner", "athenahealth", "eclinicalworks", "other", "not_sure"])
    .optional(),
  message: z.string().max(2000).optional(),
});

// ─── Email builders ───────────────────────────────────────────────────────────

type Row = [string, string | undefined];

function htmlTable(rows: Row[]): string {
  const cells = rows
    .filter(([, v]) => v)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#666;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;font-size:13px;color:#111">${value}</td></tr>`
    )
    .join("");
  return `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%">${cells}</table>`;
}

function wrap(title: string, body: string): string {
  return `<!DOCTYPE html><html><body style="font-family:sans-serif;background:#f5f5f5;padding:32px 16px">
<div style="max-width:560px;margin:0 auto;background:#fff;border-radius:4px;overflow:hidden">
  <div style="background:#0A0A0A;padding:20px 28px">
    <span style="color:#E6A91A;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:300">Cognifica</span>
    <h2 style="color:#fff;margin:6px 0 0;font-size:18px;font-weight:400">${title}</h2>
  </div>
  <div style="padding:28px">${body}</div>
  <div style="background:#f5f5f5;padding:14px 28px;font-size:11px;color:#999">
    Sent from cognifica.app contact forms
  </div>
</div></body></html>`;
}

function buildDemoRequestEmail(d: z.infer<typeof DemoRequestSchema>): { subject: string; html: string } {
  return {
    subject: `[Cognifica] Demo Request — ${d.organization} — ${d.contact_name}`,
    html: wrap(
      "Demo Request",
      htmlTable([
        ["Name", d.contact_name],
        ["Title", d.title],
        ["Organization", d.organization],
        ["Phone", d.phone],
        ["Email", d.email],
        ["Buyer type", d.buyer_type],
        ["Population size", d.population_size],
        ["Timeframe", d.timeframe],
        ["Message", d.message],
      ])
    ),
  };
}

function buildSelfInsuredEmployerEmail(d: z.infer<typeof SelfInsuredEmployerSchema>): { subject: string; html: string } {
  return {
    subject: `[Cognifica] Self Insured Employer — ${d.company_name} — ${d.contact_name}`,
    html: wrap(
      "Self Insured Employer Inquiry",
      htmlTable([
        ["Name", d.contact_name],
        ["Title", d.title],
        ["Company", d.company_name],
        ["Phone", d.phone],
        ["Email", d.email],
        ["Employee count", d.employee_count],
        ["Funding model", d.funding_model],
        ["Current EAP", d.current_eap],
        ["Primary interest", d.interest],
        ["Message", d.message],
      ])
    ),
  };
}

function buildHospitalSystemEmail(d: z.infer<typeof HospitalSystemSchema>): { subject: string; html: string } {
  return {
    subject: `[Cognifica] Hospital Clinician Program — ${d.organization} — ${d.contact_name}`,
    html: wrap(
      "Hospital Clinician Program",
      htmlTable([
        ["Name", d.contact_name],
        ["Title", d.title],
        ["Organization", d.organization],
        ["Phone", d.phone],
        ["Email", d.email],
        ["Clinician count", d.clinician_count],
        ["Program scope", d.program_scope],
        ["Current program", d.current_program],
        ["Message", d.message],
      ])
    ),
  };
}

function buildPayerEmail(d: z.infer<typeof PayerSchema>): { subject: string; html: string } {
  return {
    subject: `[Cognifica] Payer Inquiry — ${d.organization} — ${d.contact_name}`,
    html: wrap(
      "Health Plan / Payer Inquiry",
      htmlTable([
        ["Name", d.contact_name],
        ["Title", d.title],
        ["Organization", d.organization],
        ["Phone", d.phone],
        ["Email", d.email],
        ["Payer type", d.payer_type],
        ["Member count", d.member_count],
        ["Use case", d.use_case],
        ["Message", d.message],
      ])
    ),
  };
}

function buildMedicalGroupEmail(d: z.infer<typeof MedicalGroupSchema>): { subject: string; html: string } {
  return {
    subject: `[Cognifica] Medical Group — ${d.practice_name} — ${d.contact_name}`,
    html: wrap(
      "Medical Group Inquiry",
      htmlTable([
        ["Name", d.contact_name],
        ["Title", d.title],
        ["Practice", d.practice_name],
        ["Phone", d.phone],
        ["Email", d.email],
        ["Specialty", d.specialty],
        ["Patient panel size", d.patient_panel_size],
        ["EHR integration", d.integration_needed],
        ["Message", d.message],
      ])
    ),
  };
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const formType: string = body?.form_type ?? "demo";

    let email: { subject: string; html: string };
    let replyTo: string;

    if (formType === "self_insured_employer") {
      const result = SelfInsuredEmployerSchema.safeParse(body);
      if (!result.success) {
        return NextResponse.json(
          { error: "Validation failed", details: result.error.flatten() },
          { status: 400 }
        );
      }
      email = buildSelfInsuredEmployerEmail(result.data);
      replyTo = result.data.email;
    } else if (formType === "hospital_system_clinicians") {
      const result = HospitalSystemSchema.safeParse(body);
      if (!result.success) {
        return NextResponse.json(
          { error: "Validation failed", details: result.error.flatten() },
          { status: 400 }
        );
      }
      email = buildHospitalSystemEmail(result.data);
      replyTo = result.data.email;
    } else if (formType === "payer") {
      const result = PayerSchema.safeParse(body);
      if (!result.success) {
        return NextResponse.json(
          { error: "Validation failed", details: result.error.flatten() },
          { status: 400 }
        );
      }
      email = buildPayerEmail(result.data);
      replyTo = result.data.email;
    } else if (formType === "medical_group") {
      const result = MedicalGroupSchema.safeParse(body);
      if (!result.success) {
        return NextResponse.json(
          { error: "Validation failed", details: result.error.flatten() },
          { status: 400 }
        );
      }
      email = buildMedicalGroupEmail(result.data);
      replyTo = result.data.email;
    } else {
      const result = DemoRequestSchema.safeParse(body);
      if (!result.success) {
        return NextResponse.json(
          { error: "Validation failed", details: result.error.flatten() },
          { status: 400 }
        );
      }
      email = buildDemoRequestEmail(result.data);
      replyTo = result.data.email;
    }

    await getResend().emails.send({
      from: FROM,
      to: [TO],
      replyTo,
      subject: email.subject,
      html: email.html,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
