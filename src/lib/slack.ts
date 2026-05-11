import type { Lead } from "@/lib/leadSchema";

interface SendLeadToSlackInput {
  lead: Lead;
  referrer: string;
  timestamp: string;
}

function field(label: string, value: string | undefined) {
  return `*${label}:* ${value || "Not provided"}`;
}

export async function sendLeadToSlack({ lead, referrer, timestamp }: SendLeadToSlackInput) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error("SLACK_WEBHOOK_URL is not configured");
  }

  const text = [
    "*New COGAI intro lead*",
    field("Full name", lead.fullName),
    field("Work email", lead.workEmail),
    field("Organization", lead.organization),
    field("Role or title", lead.roleTitle),
    field("Exploring", lead.exploring),
    field("Phone", lead.phone),
    field("Notes", lead.notes),
    field("Referrer", referrer),
    field("Timestamp", timestamp),
  ].join("\n");

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error(`Slack webhook failed with ${response.status}`);
  }
}
