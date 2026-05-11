"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { exploringOptions, leadSchema, type LeadInput } from "@/lib/leadSchema";
import { SuccessState } from "./SuccessState";

const inputClass =
  "mt-2 w-full border border-[#D1D5DB] bg-white px-4 py-4 font-[var(--font-work-sans)] text-base font-light text-[#0F0F14] outline-none transition focus:border-[#2A2D34] focus:ring-2 focus:ring-[#2A2D34]";

const labelClass = "font-[var(--font-work-sans)] text-sm font-bold text-[#2A2D34]";

function ErrorMessage({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} className="mt-2 font-[var(--font-work-sans)] text-sm font-normal text-[#B42318]">
      {message}
    </p>
  );
}

export function IntroLeadForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      workEmail: "",
      organization: "",
      roleTitle: "",
      phone: "",
      notes: "",
    },
  });

  const onSubmit = async (values: LeadInput) => {
    setSubmitError(null);

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        pageUrl: window.location.href,
      }),
    });

    if (!response.ok) {
      setSubmitError("Something went wrong. Please try again.");
      return;
    }

    setIsSuccess(true);
  };

  if (isSuccess) return <SuccessState />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div>
        <label htmlFor="fullName" className={labelClass}>
          Full name
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          className={inputClass}
          {...register("fullName")}
        />
        <ErrorMessage id="fullName-error" message={errors.fullName?.message} />
      </div>

      <div>
        <label htmlFor="workEmail" className={labelClass}>
          Work email
        </label>
        <input
          id="workEmail"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.workEmail)}
          aria-describedby={errors.workEmail ? "workEmail-error" : undefined}
          className={inputClass}
          {...register("workEmail")}
        />
        <ErrorMessage id="workEmail-error" message={errors.workEmail?.message} />
      </div>

      <div>
        <label htmlFor="organization" className={labelClass}>
          Organization
        </label>
        <input
          id="organization"
          type="text"
          autoComplete="organization"
          aria-invalid={Boolean(errors.organization)}
          aria-describedby={errors.organization ? "organization-error" : undefined}
          className={inputClass}
          {...register("organization")}
        />
        <ErrorMessage id="organization-error" message={errors.organization?.message} />
      </div>

      <div>
        <label htmlFor="roleTitle" className={labelClass}>
          Role / title
        </label>
        <input
          id="roleTitle"
          type="text"
          autoComplete="organization-title"
          aria-invalid={Boolean(errors.roleTitle)}
          aria-describedby={errors.roleTitle ? "roleTitle-error" : undefined}
          className={inputClass}
          {...register("roleTitle")}
        />
        <ErrorMessage id="roleTitle-error" message={errors.roleTitle?.message} />
      </div>

      <fieldset>
        <legend className={labelClass}>I am exploring</legend>
        <div className="mt-3 space-y-3">
          {exploringOptions.map((option) => (
            <label
              key={option}
              className="flex min-h-12 items-start gap-3 border border-[#D1D5DB] bg-white p-4 font-[var(--font-work-sans)] text-sm font-light leading-relaxed text-[#0F0F14] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#2A2D34]"
            >
              <input
                type="radio"
                value={option}
                className="mt-1 size-4 accent-[#FF4F00]"
                aria-describedby={errors.exploring ? "exploring-error" : undefined}
                {...register("exploring")}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <ErrorMessage id="exploring-error" message={errors.exploring?.message} />
      </fieldset>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={inputClass}
          {...register("phone")}
        />
        <ErrorMessage id="phone-error" message={errors.phone?.message} />
      </div>

      <div>
        <label htmlFor="notes" className={labelClass}>
          Anything we should know?
        </label>
        <textarea
          id="notes"
          rows={4}
          maxLength={240}
          aria-invalid={Boolean(errors.notes)}
          aria-describedby={errors.notes ? "notes-error" : undefined}
          className={inputClass}
          {...register("notes")}
        />
        <ErrorMessage id="notes-error" message={errors.notes?.message} />
      </div>

      {submitError ? (
        <p className="font-[var(--font-work-sans)] text-sm font-normal text-[#B42318]" role="alert">
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        aria-busy={isSubmitting}
        className="group inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#FF4F00] px-8 py-4 font-[var(--font-work-sans)] text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#D94300] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A2D34] disabled:cursor-not-allowed disabled:bg-[#D1D5DB] sm:w-auto"
      >
        <span>{isSubmitting ? "Sending" : "Talk to a real operator"}</span>
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
