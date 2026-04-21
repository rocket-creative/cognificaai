# Cognifica AI — Forms Reference

All forms POST to `/api/contact`. Each is identified by a `form_type` field which routes
it to a separate Zod schema and email template. Emails are sent via Resend to `info@cognifica.app`
with `reply_to` set to the submitter's email.

Cognifica AI is a proactive mental-health screening platform with two product modes:
an **Employer** mode (screens employees every 90 days, routes high-risk cases to live
care) and a **Provider/Payer** mode (screens an existing patient panel or member
population). Forms below map to both modes plus inbound demo requests.

---

## 1. Demo Request (top-of-funnel)

| Property | Value |
|---|---|
| **Page** | `/demo` |
| **Component** | `src/components/DemoRequestForm.tsx` |
| **form_type** | `demo` (or omitted) |
| **Email subject** | `[Cognifica AI] Demo Request — {organization} — {contact_name}` |

### Fields

| Field | Required | Type | Notes |
|---|---|---|---|
| `contact_name` | Yes | text | |
| `title` | No | text | Job title or role |
| `organization` | Yes | text | Employer, health system, payer, or group |
| `phone` | Yes | tel | |
| `email` | Yes | email | Work email |
| `buyer_type` | No | radio | `employer` — Employer / HR / Benefits · `provider` — Medical group or health system · `payer` — Health plan / insurer · `broker` — Benefits broker or consultant · `other` |
| `population_size` | No | select | Under 500, 500–1,000, 1,001–5,000, 5,001–10,000, Over 10,000 |
| `timeframe` | No | select | Evaluating now, 1–3 months, 3–6 months, Just researching |
| `message` | No | textarea | |

---

## 2. Self-Insured Employer Inquiry

| Property | Value |
|---|---|
| **Page** | `/for-self-insured-employers` |
| **Component** | `src/components/SelfInsuredEmployerForm.tsx` |
| **form_type** | `self_insured_employer` |
| **Email subject** | `[Cognifica AI] Self-Insured Employer — {company_name} — {contact_name}` |

Targeted at employers 500+ who pay their own claims. ROI pitch is 2.5–5% medical
cost reduction plus lost-workday and turnover reduction.

### Fields

| Field | Required | Type | Notes |
|---|---|---|---|
| `contact_name` | Yes | text | HR, Benefits, or Total Rewards contact |
| `title` | No | text | |
| `company_name` | Yes | text | |
| `phone` | Yes | tel | |
| `email` | Yes | email | Work email |
| `employee_count` | No | select | 500–1,000, 1,001–2,500, 2,501–5,000, 5,001–10,000, Over 10,000 |
| `funding_model` | No | radio | `self_funded` — Self-funded / self-insured · `level_funded` — Level-funded · `fully_insured` — Fully insured · `not_sure` |
| `current_eap` | No | select | Have an EAP and it works, Have an EAP and it doesn't, No EAP, Not sure |
| `interest` | No | select | Replace / augment EAP · Reduce medical spend · Reduce absenteeism and turnover · Mental-health pathway for self-funded plan · General inquiry |
| `message` | No | textarea | |

---

## 3. Hospital / Health-System Clinician Program

| Property | Value |
|---|---|
| **Page** | `/for-hospital-systems` |
| **Component** | `src/components/HospitalSystemForm.tsx` |
| **form_type** | `hospital_system_clinicians` |
| **Email subject** | `[Cognifica AI] Hospital Clinician Program — {organization} — {contact_name}` |

The "sweet spot" audience called out on the March 21 call — hospital systems
(Northwell, etc.) deploying Cognifica AI privately for their own stressed physicians
and nurses who don't want mental-health records inside the employer EMR.

### Fields

| Field | Required | Type | Notes |
|---|---|---|---|
| `contact_name` | Yes | text | |
| `title` | Yes | text | e.g., CMO, CWO, Physician Wellness Director, CHRO |
| `organization` | Yes | text | Hospital or system name |
| `phone` | Yes | tel | |
| `email` | Yes | email | Work email |
| `clinician_count` | No | select | Under 500, 500–2,000, 2,001–5,000, 5,001–10,000, Over 10,000 |
| `program_scope` | No | select | Physicians only, Nurses only, All clinicians, All employees, Not sure |
| `current_program` | No | select | Internal EAP, Third-party EAP, Peer-support only, Nothing in place, Not sure |
| `message` | No | textarea | Privacy concerns, goals, etc. |

---

## 4. Health Plan / Payer Inquiry

| Property | Value |
|---|---|
| **Page** | `/for-payers` |
| **Component** | `src/components/PayerForm.tsx` |
| **form_type** | `payer` |
| **Email subject** | `[Cognifica AI] Payer Inquiry — {organization} — {contact_name}` |

Targeted at health plans and case-management leaders who want proactive member
screening to reduce ER and inpatient utilization.

### Fields

| Field | Required | Type | Notes |
|---|---|---|---|
| `contact_name` | Yes | text | |
| `title` | No | text | |
| `organization` | Yes | text | Plan or payer name |
| `phone` | Yes | tel | |
| `email` | Yes | email | Work email |
| `payer_type` | No | select | Commercial, Medicare Advantage, Medicaid MCO, Self-funded TPA, Other |
| `member_count` | No | select | Under 10k, 10k–50k, 50k–250k, 250k–1M, Over 1M |
| `use_case` | No | select | Case management, Care management, Utilization management, ER diversion, Chronic-condition program, Other |
| `message` | No | textarea | |

---

## 5. Medical Group / Provider Panel Screening

| Property | Value |
|---|---|
| **Page** | `/for-medical-groups` |
| **Component** | `src/components/MedicalGroupForm.tsx` |
| **form_type** | `medical_group` |
| **Email subject** | `[Cognifica AI] Medical Group — {practice_name} — {contact_name}` |

For medical groups that want to screen their existing patient panel, keep patients
out of the ER, and capture revenue from previously undiagnosed mental-health cases.

### Fields

| Field | Required | Type | Notes |
|---|---|---|---|
| `contact_name` | Yes | text | |
| `title` | No | text | Physician, practice administrator, etc. |
| `practice_name` | Yes | text | |
| `phone` | Yes | tel | |
| `email` | Yes | email | Work email |
| `specialty` | No | select | Primary care, Internal medicine, Multi-specialty, FQHC / community health, Cardiology, Oncology, Other |
| `patient_panel_size` | No | select | Under 5k, 5k–15k, 15k–50k, 50k–150k, Over 150k |
| `integration_needed` | No | select | Epic, Cerner / Oracle, athenahealth, eClinicalWorks, Other, Not sure |
| `message` | No | textarea | |

---

## API Route

**File:** `src/app/api/contact/route.ts`
**Endpoint:** `POST /api/contact`
**Validation:** Zod — each form_type has its own schema
**Email provider:** Resend (`RESEND_API_KEY` env var)
**Sends to:** `info@cognifica.app`
**Reply-to:** submitter's email address

### form_type routing

```
self_insured_employer      →  SelfInsuredEmployerSchema    →  buildSelfInsuredEmployerEmail()
hospital_system_clinicians →  HospitalSystemSchema         →  buildHospitalSystemEmail()
payer                      →  PayerSchema                  →  buildPayerEmail()
medical_group              →  MedicalGroupSchema           →  buildMedicalGroupEmail()
(default)                  →  DemoRequestSchema            →  buildDemoRequestEmail()
```
