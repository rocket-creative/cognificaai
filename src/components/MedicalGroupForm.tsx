"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

interface FormData {
  contact_name: string;
  title: string;
  practice_name: string;
  phone: string;
  email: string;
  specialty: string;
  patient_panel_size: string;
  integration_needed: string;
  message: string;
}

interface FormErrors {
  contact_name?: string;
  practice_name?: string;
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

export function MedicalGroupForm() {
  const [formData, setFormData] = useState<FormData>({
    contact_name: "", title: "", practice_name: "", phone: "", email: "",
    specialty: "", patient_panel_size: "", integration_needed: "", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.contact_name.trim()) e.contact_name = "Name is required";
    if (!formData.practice_name.trim()) e.practice_name = "Practice name is required";
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
        body: JSON.stringify({ ...formData, form_type: "medical_group" }),
      });
      if (res.ok) {
        setIsSuccess(true);
        setFormData({
          contact_name: "", title: "", practice_name: "", phone: "", email: "",
          specialty: "", patient_panel_size: "", integration_needed: "", message: "",
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
          We&apos;ll be in touch within one business day to discuss your patient panel program.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <h3 className="font-heading text-lg text-[#0A0A0A] mb-4">Medical Group Inquiry</h3>

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
          <label htmlFor="title" className={labelClass}>
            Title <span className="text-[#0A0A0A]/40">(optional)</span>
          </label>
          <input
            type="text" id="title" name="title"
            value={formData.title} onChange={handleChange}
            placeholder="Physician, Practice Administrator…" autoComplete="organization-title"
            style={{ fontSize: "16px" }}
            className={inputClass()}
          />
        </div>
      </div>

      <div>
        <label htmlFor="practice_name" className={labelClass}>Practice Name *</label>
        <input
          type="text" id="practice_name" name="practice_name"
          value={formData.practice_name} onChange={handleChange}
          placeholder="Westside Primary Care Group" autoComplete="organization"
          style={{ fontSize: "16px" }}
          className={inputClass(errors.practice_name)}
          aria-invalid={!!errors.practice_name}
          aria-describedby={errors.practice_name ? "practice_name-error" : undefined}
        />
        {errors.practice_name && <p id="practice_name-error" className={errorClass}>{errors.practice_name}</p>}
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
            placeholder="jane@practice.com" autoComplete="email"
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
          <label htmlFor="specialty" className={labelClass}>
            Specialty <span className="text-[#0A0A0A]/40">(optional)</span>
          </label>
          <select
            id="specialty" name="specialty"
            value={formData.specialty} onChange={handleChange}
            style={{ fontSize: "16px" }}
            className={selectClass(!!formData.specialty)}
          >
            <option value="">Select specialty</option>
            <option value="primary_care">Primary care</option>
            <option value="internal_medicine">Internal medicine</option>
            <option value="multi_specialty">Multi specialty</option>
            <option value="fqhc">FQHC / community health</option>
            <option value="cardiology">Cardiology</option>
            <option value="oncology">Oncology</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="patient_panel_size" className={labelClass}>
            Patient panel size <span className="text-[#0A0A0A]/40">(optional)</span>
          </label>
          <select
            id="patient_panel_size" name="patient_panel_size"
            value={formData.patient_panel_size} onChange={handleChange}
            style={{ fontSize: "16px" }}
            className={selectClass(!!formData.patient_panel_size)}
          >
            <option value="">Select range</option>
            <option value="under_5k">Under 5k</option>
            <option value="5k_15k">5k to 15k</option>
            <option value="15k_50k">15k to 50k</option>
            <option value="50k_150k">50k to 150k</option>
            <option value="over_150k">Over 150k</option>
          </select>
        </div>

        <div>
          <label htmlFor="integration_needed" className={labelClass}>
            EHR integration <span className="text-[#0A0A0A]/40">(optional)</span>
          </label>
          <select
            id="integration_needed" name="integration_needed"
            value={formData.integration_needed} onChange={handleChange}
            style={{ fontSize: "16px" }}
            className={selectClass(!!formData.integration_needed)}
          >
            <option value="">Select EHR</option>
            <option value="epic">Epic</option>
            <option value="cerner">Cerner / Oracle</option>
            <option value="athenahealth">athenahealth</option>
            <option value="eclinicalworks">eClinicalWorks</option>
            <option value="other">Other</option>
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
          placeholder="Anything else you'd like us to know"
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
