import { Resend } from "resend";
import type { Lead } from "@/lib/leadSchema";

interface LeadEmailInput {
  lead: Lead;
  referrer: string;
  timestamp: string;
}

const INTERNAL_EMAIL_RECIPIENT = "jma@nybrainspine.com";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  return new Resend(apiKey);
}

function escapeHtml(value: string | undefined) {
  return (value || "Not provided")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function row(label: string, value: string | undefined) {
  return `<tr><td style="padding:8px 16px 8px 0;color:#6B7280;font-size:13px;vertical-align:top">${label}</td><td style="padding:8px 0;color:#0F0F14;font-size:13px;vertical-align:top">${escapeHtml(value)}</td></tr>`;
}

function wrap(title: string, body: string) {
  return `<!doctype html><html><body style="margin:0;background:#F4F5F7;font-family:Arial,sans-serif;color:#0F0F14">
  <div style="max-width:600px;margin:0 auto;padding:32px 16px">
    <div style="background:#FFFFFF;padding:28px">
      <p style="margin:0 0 8px;color:#FF4F00;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:700">COGAI</p>
      <h1 style="margin:0 0 24px;color:#2A2D34;font-size:24px;line-height:1.2">${title}</h1>
      ${body}
    </div>
  </div>
</body></html>`;
}

export async function sendLeadConfirmationEmail({ lead }: LeadEmailInput) {
  const resend = getResend();
  const from = process.env.FROM_EMAIL || "hello@cogai.health";

  await resend.emails.send({
    from,
    to: [INTERNAL_EMAIL_RECIPIENT],
    replyTo: lead.workEmail,
    subject: "COGAI intro received",
    text: "Thanks. A real operator will reach out within one business day.",
    html: wrap(
      "Thanks. We received your intro request.",
      '<p style="margin:0;color:#0F0F14;font-size:15px;line-height:1.6">A real operator will reach out within one business day.</p>'
    ),
  });
}

export async function sendTeamLeadNotificationEmail({ lead, referrer, timestamp }: LeadEmailInput) {
  const resend = getResend();
  const from = process.env.FROM_EMAIL || "hello@cogai.health";

  await resend.emails.send({
    from,
    to: [INTERNAL_EMAIL_RECIPIENT],
    replyTo: lead.workEmail,
    subject: `COGAI intro lead: ${lead.organization}`,
    text: [
      `Full name: ${lead.fullName}`,
      `Work email: ${lead.workEmail}`,
      `Organization: ${lead.organization}`,
      `Role or title: ${lead.roleTitle}`,
      `Exploring: ${lead.exploring}`,
      `Phone: ${lead.phone || "Not provided"}`,
      `Notes: ${lead.notes || "Not provided"}`,
      `Referrer: ${referrer}`,
      `Timestamp: ${timestamp}`,
    ].join("\n"),
    html: wrap(
      "New COGAI intro lead",
      `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%">
        ${row("Full name", lead.fullName)}
        ${row("Work email", lead.workEmail)}
        ${row("Organization", lead.organization)}
        ${row("Role or title", lead.roleTitle)}
        ${row("Exploring", lead.exploring)}
        ${row("Phone", lead.phone)}
        ${row("Notes", lead.notes)}
        ${row("Referrer", referrer)}
        ${row("Timestamp", timestamp)}
      </table>`
    ),
  });
}
