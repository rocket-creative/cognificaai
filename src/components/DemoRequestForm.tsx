"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  employees: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  employees?: string;
}

export function DemoRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    employees: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.employees) {
      newErrors.employees = "Please select company size";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          employees: "",
          message: "",
        });
      }
    } catch {
      console.error("Form submission error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle
          className="w-12 h-12 text-[#E6A91A] mx-auto mb-4"
          aria-hidden="true"
        />
        <h3 className="font-heading text-xl text-[#0A0A0A] mb-2">
          Thank You
        </h3>
        <p className="font-body text-sm text-[#0A0A0A]/70 font-light">
          We&apos;ll be in touch within one business day to schedule your demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <h3 className="font-heading text-lg text-[#0A0A0A] mb-4">
        Request a Demo
      </h3>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-body text-xs text-[#0A0A0A]/70 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Jane Smith"
          autoComplete="name"
          inputMode="text"
          style={{ fontSize: "16px" }}
          className={`w-full h-12 bg-[#0A0A0A]/20 border ${
            errors.name ? "border-red-400" : "border-[#0A0A0A]/30"
          } px-4 text-[#0A0A0A] placeholder:text-[#0A0A0A]/50 font-body font-light focus:outline-none focus:border-[#0A0A0A]/60 transition-colors`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-700 text-xs mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-body text-xs text-[#0A0A0A]/70 mb-1">
          Work Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jane@company.com"
          autoComplete="email"
          inputMode="email"
          style={{ fontSize: "16px" }}
          className={`w-full h-12 bg-[#0A0A0A]/20 border ${
            errors.email ? "border-red-400" : "border-[#0A0A0A]/30"
          } px-4 text-[#0A0A0A] placeholder:text-[#0A0A0A]/50 font-body font-light focus:outline-none focus:border-[#0A0A0A]/60 transition-colors`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-700 text-xs mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block font-body text-xs text-[#0A0A0A]/70 mb-1">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Acme Corp"
          autoComplete="organization"
          inputMode="text"
          style={{ fontSize: "16px" }}
          className={`w-full h-12 bg-[#0A0A0A]/20 border ${
            errors.company ? "border-red-400" : "border-[#0A0A0A]/30"
          } px-4 text-[#0A0A0A] placeholder:text-[#0A0A0A]/50 font-body font-light focus:outline-none focus:border-[#0A0A0A]/60 transition-colors`}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "company-error" : undefined}
        />
        {errors.company && (
          <p id="company-error" className="text-red-700 text-xs mt-1">
            {errors.company}
          </p>
        )}
      </div>

      {/* Company Size */}
      <div>
        <label htmlFor="employees" className="block font-body text-xs text-[#0A0A0A]/70 mb-1">
          Company Size
        </label>
        <select
          id="employees"
          name="employees"
          value={formData.employees}
          onChange={handleChange}
          autoComplete="off"
          style={{ fontSize: "16px" }}
          className={`w-full h-12 bg-[#0A0A0A]/20 border ${
            errors.employees ? "border-red-400" : "border-[#0A0A0A]/30"
          } px-4 text-[#0A0A0A] font-body font-light focus:outline-none focus:border-[#0A0A0A]/60 transition-colors cursor-pointer ${
            !formData.employees ? "text-[#0A0A0A]/50" : ""
          }`}
          aria-invalid={!!errors.employees}
          aria-describedby={errors.employees ? "employees-error" : undefined}
        >
          <option value="" disabled>
            Select company size
          </option>
          <option value="1-50">1 to 50 employees</option>
          <option value="51-200">51 to 200 employees</option>
          <option value="201-500">201 to 500 employees</option>
          <option value="501-1000">501 to 1,000 employees</option>
          <option value="1000+">1,000+ employees</option>
        </select>
        {errors.employees && (
          <p id="employees-error" className="text-red-700 text-xs mt-1">
            {errors.employees}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-body text-xs text-[#0A0A0A]/70 mb-1">
          Message <span className="text-[#0A0A0A]/40">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your needs"
          rows={3}
          inputMode="text"
          autoComplete="off"
          style={{ fontSize: "16px" }}
          className="w-full bg-[#0A0A0A]/20 border border-[#0A0A0A]/30 px-4 py-3 text-[#0A0A0A] placeholder:text-[#0A0A0A]/50 font-body font-light focus:outline-none focus:border-[#0A0A0A]/60 transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[48px] bg-[#0A0A0A] text-white py-4 px-8 text-[11px] tracking-widest uppercase font-light hover:bg-[#0A0A0A]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          <>
            Request Demo
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-[10px] text-[#0A0A0A]/60 text-center">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-[#0A0A0A]/80">
          Privacy Policy
        </a>
      </p>
    </form>
  );
}
