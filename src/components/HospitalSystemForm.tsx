"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

interface FormData {
  contact_name: string;
  title: string;
  organization: string;
  phone: string;
  email: string;
  clinician_count: string;
  program_scope: string;
  current_program: string;
  message: string;
}

interface FormErrors {
  contact_name?: string;
  title?: string;
  organization?: string;
  phone?: string;
  email?: string;
}

const inputClass = (error?: string) =>
  `w-full h-12 bg-[#0A0A0A]/20 border ${
    error ? "border-red-400" : "border-[#0A0A0A]/30"
  } px-4 text-[#0A0A0A] placeholder:text-[#0A0A0A]/50 font-body font-light focus:outline-none focus:border-[#0A0A0A]/60 transition-colors`;

const selectClass = (hasValue: boolean) =>
  `w-full h-12 bg-[#0A0A0A]/20 border border-[#0A0A0A]/30 px-4 font-body font-light focus:outline-none focus:border-[#0A0A0A]/60 transition-colors cursor-pointer ${
    hasValue ? "text-[#0A0A0A]" : "text-[#0A0A0A]/50"
  }`;

const labelClass = "block font-body text-xs text-[#0A0A0A]/70 mb-1";
const errorClass = "text-red-700 text-xs mt-1";

export function HospitalSystemForm() {
  const [formData, setFormData] = useState<FormData>({
    contact_name: "", title: "", organization: "", phone: "", email: "",
    clinician_count: "", program_scope: "", current_program: "", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.contact_name.trim()) e.contact_name = "Name is required";
    if (!formData.title.trim()) e.title = "Title is required";
    if (!formData.organization.trim()) e.organization = "Organization is required";
    if (!formData.phone.trim()) e.phone = "Phone number is required";
    if (!formData.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Please enter a valid email address";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, form_type: "hospital_system_clinicians" }),
      });
      if (res.ok) {
        setIsSuccess(true);
        setFormData({
          contact_name: "", title: "", organization: "", phone: "", email: "",
          clinician_count: "", program_scope: "", current_program: "", message: "",
        });
      }
    } catch {
      console.error("Form submission error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = ev.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-[#E6A91A] mx-auto mb-4" aria-hidden="true" />
        <h3 className="font-heading text-xl text-[#0A0A0A] mb-2">Thank You</h3>
        <p className="font-body text-sm text-[#0A0A0A]/70 font-light">
          We&apos;ll be in touch within one business day to discuss your clinician program.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <h3 className="font-heading text-lg text-[#0A0A0A] mb-4">Clinician Program Inquiry</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact_name" className={labelClass}>Contact Name *</label>
          <input
            type="text" id="contact_name" name="contact_name"
            value={formData.contact_name} onChange={handleChange}
            placeholder="Dr. Jane Smith" autoComplete="name"
            style={{ fontSize: "16px" }}
            className={inputClass(errors.contact_name)}
            aria-invalid={!!errors.contact_name}
            aria-describedby={errors.contact_name ? "contact_name-error" : undefined}
          />
          {errors.contact_name && <p id="contact_name-error" className={errorClass}>{errors.contact_name}</p>}
        </div>

        <div>
          <label htmlFor="title" className={labelClass}>Title *</label>
          <input
            type="text" id="title" name="title"
            value={formData.title} onChange={handleChange}
            placeholder="CMO, CWO, Physician Wellness Director…" autoComplete="organization-title"
            style={{ fontSize: "16px" }}
            className={inputClass(errors.title)}
            aria-invalid={!!errors.title}
            aria-describedby={errors.title ? "title-error" : undefined}
          />
          {errors.title && <p id="title-error" className={errorClass}>{errors.title}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="organization" className={labelClass}>Hospital or System Name *</label>
        <input
          type="text" id="organization" name="organization"
          value={formData.organization} onChange={handleChange}
          placeholder="Northwell Health" autoComplete="organization"
          style={{ fontSize: "16px" }}
          className={inputClass(errors.organization)}
          aria-invalid={!!errors.organization}
          aria-describedby={errors.organization ? "organization-error" : undefined}
        />
        {errors.organization && <p id="organization-error" className={errorClass}>{errors.organization}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone *</label>
          <input
            type="tel" id="phone" name="phone"
            value={formData.phone} onChange={handleChange}
            placeholder="(555) 123 4567" autoComplete="tel"
            inputMode="tel" style={{ fontSize: "16px" }}
            className={inputClass(errors.phone)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && <p id="phone-error" className={errorClass}>{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>Work Email *</label>
          <input
            type="email" id="email" name="email"
            value={formData.email} onChange={handleChange}
            placeholder="jane@northwell.edu" autoComplete="email"
            inputMode="email" style={{ fontSize: "16px" }}
            className={inputClass(errors.email)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className={errorClass}>{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="clinician_count" className={labelClass}>
            Clinician count <span className="text-[#0A0A0A]/40">(optional)</span>
          </label>
          <select
            id="clinician_count" name="clinician_count"
            value={formData.clinician_count} onChange={handleChange}
            style={{ fontSize: "16px" }}
            className={selectClass(!!formData.clinician_count)}
          >
            <option value="">Select range</option>
            <option value="under_500">Under 500</option>
            <option value="500_2000">500 to 2,000</option>
            <option value="2001_5000">2,001 to 5,000</option>
            <option value="5001_10000">5,001 to 10,000</option>
            <option value="over_10000">Over 10,000</option>
          </select>
        </div>

        <div>
          <label htmlFor="program_scope" className={labelClass}>
            Program scope <span className="text-[#0A0A0A]/40">(optional)</span>
          </label>
          <select
            id="program_scope" name="program_scope"
            value={formData.program_scope} onChange={handleChange}
            style={{ fontSize: "16px" }}
            className={selectClass(!!formData.program_scope)}
          >
            <option value="">Select scope</option>
            <option value="physicians_only">Physicians only</option>
            <option value="nurses_only">Nurses only</option>
            <option value="all_clinicians">All clinicians</option>
            <option value="all_employees">All employees</option>
            <option value="not_sure">Not sure</option>
          </select>
        </div>

        <div>
          <label htmlFor="current_program" className={labelClass}>
            Current program <span className="text-[#0A0A0A]/40">(optional)</span>
          </label>
          <select
            id="current_program" name="current_program"
            value={formData.current_program} onChange={handleChange}
            style={{ fontSize: "16px" }}
            className={selectClass(!!formData.current_program)}
          >
            <option value="">Select current</option>
            <option value="internal_eap">Internal EAP</option>
            <option value="third_party_eap">Third-party EAP</option>
            <option value="peer_support">Peer-support only</option>
            <option value="nothing">Nothing in place</option>
            <option value="not_sure">Not sure</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-[#0A0A0A]/40">(optional)</span>
        </label>
        <textarea
          id="message" name="message"
          value={formData.message} onChange={handleChange}
          placeholder="Privacy concerns, goals, or questions"
          rows={3} autoComplete="off" style={{ fontSize: "16px" }}
          className="w-full bg-[#0A0A0A]/20 border border-[#0A0A0A]/30 px-4 py-3 text-[#0A0A0A] placeholder:text-[#0A0A0A]/50 font-body font-light focus:outline-none focus:border-[#0A0A0A]/60 transition-colors resize-none"
        />
      </div>

      <button
        type="submit" disabled={isSubmitting}
        className="w-full min-h-[48px] bg-[#0A0A0A] text-white py-4 px-8 text-[11px] tracking-widest uppercase font-light hover:bg-[#0A0A0A]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />Submitting...</>
        ) : (
          <>Request Information<ArrowRight className="w-3 h-3" aria-hidden="true" /></>
        )}
      </button>

      <p className="text-[10px] text-[#0A0A0A]/60 text-center">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-[#0A0A0A]/80">Privacy Policy</a>
      </p>
    </form>
  );
}
