import { NextResponse } from "next/server";
import { sendLeadConfirmationEmail, sendTeamLeadNotificationEmail } from "@/lib/email";
import { leadSchema } from "@/lib/leadSchema";
import { sendLeadToSlack } from "@/lib/slack";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = leadSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed", details: result.error.flatten() },
      { status: 400 }
    );
  }

  const lead = result.data;
  const timestamp = new Date().toISOString();
  const referrer = request.headers.get("referer") || lead.pageUrl || "Not provided";

  const deliveries = await Promise.allSettled([
    sendLeadToSlack({ lead, referrer, timestamp }),
    sendLeadConfirmationEmail({ lead, referrer, timestamp }),
    sendTeamLeadNotificationEmail({ lead, referrer, timestamp }),
  ]);

  deliveries.forEach((delivery, index) => {
    if (delivery.status === "rejected") {
      console.error(`Lead delivery ${index + 1} failed:`, delivery.reason);
    }
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
