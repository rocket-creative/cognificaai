import { z } from "zod";

const optionalText = (max: number) =>
  z.preprocess(
    (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
    z.string().trim().max(max).optional()
  );

export const exploringOptions = [
  "COGAI Workforce (for employers)",
  "COGAI Medical (for clinics)",
  "COGAI Medical (for insurers)",
  "Just curious — tell me what fits",
] as const;

export const leadSchema = z.object({
  fullName: z.string().trim().min(1, "Please enter your full name").max(100),
  workEmail: z.string().trim().min(1, "Please enter your work email").email("Please enter a valid email"),
  organization: z.string().trim().min(1, "Please enter your organization").max(160),
  roleTitle: z.string().trim().min(1, "Please enter your role or title").max(120),
  exploring: z.enum(exploringOptions, {
    error: "Please choose what you are exploring",
  }),
  phone: optionalText(40),
  notes: optionalText(240),
  pageUrl: optionalText(300),
});

export type LeadInput = z.input<typeof leadSchema>;
export type Lead = z.output<typeof leadSchema>;
