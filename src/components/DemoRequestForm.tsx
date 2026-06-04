"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

interface FormData {
  contact_name: string;
  title: string;
  organization: string;
  phone: string;
  email: string;
  buyer_type: string;
  population_size: string;
  timeframe: string;
  message: string;
}

interface FormErrors {
  contact_name?: string;
  organization?: string;
  phone?: string;
  email?: string;
}

const inputClass = (error?: string) =>
  `w-full h-12 bg-[#F5F5F7] border ${
    error ? "border-red-400" : "border-[#404040]"
  } px-4 text-[#0A0A0A] placeholder:text-[#737373] font-body font-light focus:outline-none focus:border-[#525252] transition-colors`;

const selectClass = (hasValue: boolean, error?: string) =>
  `w-full h-12 bg-[#F5F5F7] border ${
    error ? "border-red-400" : "border-[#404040]"
  } px-4 font-body font-light focus:outline-none focus:border-[#525252] transition-colors cursor-pointer ${
    hasValue ? "text-[#0A0A0A]" : "text-[#737373]"
  }`;

const labelClass = "block font-body text-xs text-[#404040] mb-1";
const errorClass = "text-red-700 text-xs mt-1";

const BUYER_TYPES = [
  { value: "employer", label: "Employer / HR / Benefits" },
  { value: "provider", label: "Medical group or health system" },
  { value: "payer", label: "Health plan / insurer" },
  { value: "broker", label: "Benefits broker or consultant" },
  { value: "other", label: "Other" },
];

export function DemoRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    contact_name: "",
    title: "",
    organization: "",
    phone: "",
    email: "",
    buyer_type: "",
    population_size: "",
    timeframe: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.contact_name.trim()) e.contact_name = "Name is required";
    if (!formData.organization.trim()) e.organization = "Organization is required";
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
        body: JSON.stringify({ ...formData, form_type: "demo" }),
      });
      if (res.ok) {
        setIsSuccess(true);
        setFormData({
          contact_name: "", title: "", organization: "", phone: "",
          email: "", buyer_type: "", population_size: "", timeframe: "", message: "",
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
        <CheckCircle className="w-12 h-12 text-orange-grad mx-auto mb-4" aria-hidden="true" />
        <h3 className="font-heading text-xl text-[#0A0A0A] mb-2">Thank You</h3>
        <p className="font-body text-sm text-[#404040] font-light">
          We&apos;ll be in touch within one business day to schedule your demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <h3 className="font-heading text-lg text-[#0A0A0A] mb-4">Request a Demo</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact_name" className={labelClass}>Full Name *</label>
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
            Title <span className="text-[#737373]">(optional)</span>
          </label>
          <input
            type="text" id="title" name="title"
            value={formData.title} onChange={handleChange}
            placeholder="VP of Benefits" autoComplete="organization-title"
            style={{ fontSize: "16px" }}
            className={inputClass()}
          />
        </div>
      </div>

      <div>
        <label htmlFor="organization" className={labelClass}>Organization *</label>
        <input
          type="text" id="organization" name="organization"
          value={formData.organization} onChange={handleChange}
          placeholder="Acme Corp" autoComplete="organization"
          style={{ fontSize: "16px" }}
          className={inputClass(errors.organization)}
          aria-invalid={!!errors.organization}
          aria-describedby={errors.organization ? "organization-error" : undefined}
        />
        {errors.organization && <p id="organization-error" className={errorClass}>{errors.organization}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone (optional)</label>
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

      <fieldset>
        <legend className={`${labelClass} mb-2`}>
          I am a… <span className="text-[#737373]">(optional)</span>
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {BUYER_TYPES.map(({ value, label }) => (
            <label key={value} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio" name="buyer_type" value={value}
                checked={formData.buyer_type === value}
                onChange={handleChange}
                className="accent-[#3B5A75] w-4 h-4"
              />
              <span className="font-body text-xs text-[#262626] group-hover:text-[#0A0A0A] transition-colors">
                {label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="population_size" className={labelClass}>
            Population size <span className="text-[#737373]">(optional)</span>
          </label>
          <select
            id="population_size" name="population_size"
            value={formData.population_size} onChange={handleChange}
            style={{ fontSize: "16px" }}
            className={selectClass(!!formData.population_size)}
          >
            <option value="">Select range</option>
            <option value="under_500">Under 500</option>
            <option value="500_1000">500 to 1,000</option>
            <option value="1001_5000">1,001 to 5,000</option>
            <option value="5001_10000">5,001 to 10,000</option>
            <option value="over_10000">Over 10,000</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeframe" className={labelClass}>
            Timeframe <span className="text-[#737373]">(optional)</span>
          </label>
          <select
            id="timeframe" name="timeframe"
            value={formData.timeframe} onChange={handleChange}
            style={{ fontSize: "16px" }}
            className={selectClass(!!formData.timeframe)}
          >
            <option value="">Select timeframe</option>
            <option value="evaluating_now">Evaluating now</option>
            <option value="1_3_months">1 to 3 months</option>
            <option value="3_6_months">3 to 6 months</option>
            <option value="just_researching">Just researching</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-[#737373]">(optional)</span>
        </label>
        <textarea
          id="message" name="message"
          value={formData.message} onChange={handleChange}
          placeholder="Tell us about your needs"
          rows={3} autoComplete="off" style={{ fontSize: "16px" }}
          className="w-full bg-[#F5F5F7] border border-[#404040] px-4 py-3 text-[#0A0A0A] placeholder:text-[#737373] font-body font-light focus:outline-none focus:border-[#525252] transition-colors resize-none"
        />
      </div>

      <button
        type="submit" disabled={isSubmitting}
        className="w-full min-h-[48px] bg-orange-grad text-white py-4 px-8 text-[11px] tracking-widest uppercase font-light bg-orange-grad-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />Submitting...</>
        ) : (
          <>Request Demo<ArrowRight className="w-3 h-3" aria-hidden="true" /></>
        )}
      </button>

      <p className="text-[10px] text-[#525252] text-center">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-[#262626]">Privacy Policy</a>
      </p>
    </form>
  );
}
