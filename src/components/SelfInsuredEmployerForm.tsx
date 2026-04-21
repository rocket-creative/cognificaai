"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

interface FormData {
  contact_name: string;
  title: string;
  company_name: string;
  phone: string;
  email: string;
  employee_count: string;
  funding_model: string;
  current_eap: string;
  interest: string;
  message: string;
}

interface FormErrors {
  contact_name?: string;
  company_name?: string;
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

const FUNDING_MODELS = [
  { value: "self_funded", label: "Self funded or self insured" },
  { value: "level_funded", label: "Level-funded" },
  { value: "fully_insured", label: "Fully insured" },
  { value: "not_sure", label: "Not sure" },
];

export function SelfInsuredEmployerForm() {
  const [formData, setFormData] = useState<FormData>({
    contact_name: "", title: "", company_name: "", phone: "", email: "",
    employee_count: "", funding_model: "", current_eap: "", interest: "", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.contact_name.trim()) e.contact_name = "Name is required";
    if (!formData.company_name.trim()) e.company_name = "Company name is required";
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
        body: JSON.stringify({ ...formData, form_type: "self_insured_employer" }),
      });
      if (res.ok) {
        setIsSuccess(true);
        setFormData({
          contact_name: "", title: "", company_name: "", phone: "", email: "",
          employee_count: "", funding_model: "", current_eap: "", interest: "", message: "",
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
          We&apos;ll reach out within one business day to discuss your program.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <h3 className="font-heading text-lg text-[#0A0A0A] mb-4">Get in Touch</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact_name" className={labelClass}>Contact Name *</label>
          <input
            type="text" id="contact_name" name="contact_name"
            value={formData.contact_name} onChange={handleChange}
            placeholder="Jane Smith" autoComplete="name"
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
            placeholder="Director of Benefits" autoComplete="organization-title"
            style={{ fontSize: "16px" }}
            className={inputClass()}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company_name" className={labelClass}>Company Name *</label>
        <input
          type="text" id="company_name" name="company_name"
          value={formData.company_name} onChange={handleChange}
          placeholder="Acme Corp" autoComplete="organization"
          style={{ fontSize: "16px" }}
          className={inputClass(errors.company_name)}
          aria-invalid={!!errors.company_name}
          aria-describedby={errors.company_name ? "company_name-error" : undefined}
        />
        {errors.company_name && <p id="company_name-error" className={errorClass}>{errors.company_name}</p>}
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
            placeholder="jane@company.com" autoComplete="email"
            inputMode="email" style={{ fontSize: "16px" }}
            className={inputClass(errors.email)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className={errorClass}>{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="employee_count" className={labelClass}>
          Employee count <span className="text-[#0A0A0A]/40">(optional)</span>
        </label>
        <select
          id="employee_count" name="employee_count"
          value={formData.employee_count} onChange={handleChange}
          style={{ fontSize: "16px" }}
          className={selectClass(!!formData.employee_count)}
        >
          <option value="">Select range</option>
          <option value="500_1000">500 to 1,000</option>
          <option value="1001_2500">1,001 to 2,500</option>
          <option value="2501_5000">2,501 to 5,000</option>
          <option value="5001_10000">5,001 to 10,000</option>
          <option value="over_10000">Over 10,000</option>
        </select>
      </div>

      <fieldset>
        <legend className={`${labelClass} mb-2`}>
          Funding model <span className="text-[#0A0A0A]/40">(optional)</span>
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {FUNDING_MODELS.map(({ value, label }) => (
            <label key={value} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio" name="funding_model" value={value}
                checked={formData.funding_model === value}
                onChange={handleChange}
                className="accent-[#E6A91A] w-4 h-4"
              />
              <span className="font-body text-xs text-[#0A0A0A]/80 group-hover:text-[#0A0A0A] transition-colors">
                {label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="current_eap" className={labelClass}>
            Current EAP status <span className="text-[#0A0A0A]/40">(optional)</span>
          </label>
          <select
            id="current_eap" name="current_eap"
            value={formData.current_eap} onChange={handleChange}
            style={{ fontSize: "16px" }}
            className={selectClass(!!formData.current_eap)}
          >
            <option value="">Select status</option>
            <option value="have_works">Have an EAP and it works</option>
            <option value="have_doesnt">Have an EAP and it doesn&apos;t</option>
            <option value="no_eap">No EAP</option>
            <option value="not_sure">Not sure</option>
          </select>
        </div>

        <div>
          <label htmlFor="interest" className={labelClass}>
            Primary interest <span className="text-[#0A0A0A]/40">(optional)</span>
          </label>
          <select
            id="interest" name="interest"
            value={formData.interest} onChange={handleChange}
            style={{ fontSize: "16px" }}
            className={selectClass(!!formData.interest)}
          >
            <option value="">Select interest</option>
            <option value="replace_augment_eap">Replace / augment EAP</option>
            <option value="reduce_medical_spend">Reduce medical spend</option>
            <option value="reduce_absenteeism">Reduce absenteeism and turnover</option>
            <option value="mh_pathway">Mental health pathway for self funded plan</option>
            <option value="general_inquiry">General inquiry</option>
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
