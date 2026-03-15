import { NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required").max(200),
  employees: z.enum(["1-50", "51-200", "201-500", "501-1000", "1000+"]),
  message: z.string().max(2000).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, company, employees, message } = result.data;

    // TODO: Integrate with Resend for email delivery
    // Requires RESEND_API_KEY environment variable
    // 
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // 
    // await resend.emails.send({
    //   from: 'Cognifica AI <noreply@cognifica.ai>',
    //   to: ['sales@cognifica.ai'],
    //   subject: `Demo Request: ${company}`,
    //   html: `
    //     <h2>New Demo Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company}</p>
    //     <p><strong>Size:</strong> ${employees} employees</p>
    //     <p><strong>Message:</strong> ${message || 'N/A'}</p>
    //   `,
    // });

    return NextResponse.json(
      { success: true, message: "Demo request received" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
