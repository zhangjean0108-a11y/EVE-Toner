"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { company } from "@/data/site";
import { useTranslation } from "@/lib/i18n";

type InquiryFormState = {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  country: string;
  product: string;
  message: string;
  website: string;
};

type InquiryErrors = Partial<Record<keyof InquiryFormState, string>>;

const initialForm: InquiryFormState = {
  name: "",
  email: "",
  phone: "",
  companyName: "",
  country: "",
  product: "",
  message: "",
  website: ""
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9\s().-]{7,20}$/;

function validateForm(form: InquiryFormState, copy: ReturnType<typeof useTranslation>["dictionary"]["inquiry"]["form"]) {
  const errors: InquiryErrors = {};

  if (!form.name.trim()) {
    errors.name = copy.nameError;
  }

  if (!form.email.trim()) {
    errors.email = copy.emailEmpty;
  } else if (!emailPattern.test(form.email.trim())) {
    errors.email = copy.emailInvalid;
  }

  if (!form.phone.trim()) {
    errors.phone = copy.phoneEmpty;
  } else if (!phonePattern.test(form.phone.trim())) {
    errors.phone = copy.phoneInvalid;
  }

  return errors;
}

export function InquiryForm({ endpoint = "/api/inquiry" }: { endpoint?: string }) {
  const { dictionary: dict } = useTranslation();
  const copy = dict.inquiry.form;
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState<Partial<Record<keyof InquiryFormState, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const errors = useMemo(() => validateForm(form, copy), [copy, form]);

  const updateField = (field: keyof InquiryFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const markTouched = (field: keyof InquiryFormState) => {
    setTouched((current) => ({ ...current, [field]: true }));
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(form, copy);

    setTouched({
      name: true,
      email: true,
      phone: true
    });

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage(copy.completeRequired);
      return;
    }

    setStatus("submitting");
    setStatusMessage(copy.sending);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.ok === false) {
        throw new Error(result.message || "Submission failed.");
      }

      setStatus("success");
      setStatusMessage(
        result.preview
          ? copy.previewSuccess
          : copy.success
      );
      setForm(initialForm);
      setTouched({});
    } catch {
      setStatus("error");
      setStatusMessage(`${copy.failedPrefix} ${company.email} ${copy.failedSuffix}`);
    }
  };

  return (
    <form
      onSubmit={submitForm}
      noValidate
      className="rounded-lg border border-slate-200/90 bg-white/88 p-6 shadow-2xl shadow-cyan-950/10 backdrop-blur md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <TextField
          label={copy.name}
          name="name"
          value={form.name}
          placeholder={copy.namePlaceholder}
          required
          requiredText={copy.required}
          optionalText={copy.optional}
          error={touched.name ? errors.name : undefined}
          onBlur={() => markTouched("name")}
          onChange={(value) => updateField("name", value)}
        />
        <TextField
          label={copy.email}
          name="email"
          type="email"
          value={form.email}
          placeholder={copy.emailPlaceholder}
          required
          requiredText={copy.required}
          optionalText={copy.optional}
          error={touched.email ? errors.email : undefined}
          onBlur={() => markTouched("email")}
          onChange={(value) => updateField("email", value)}
        />
        <TextField
          label={copy.phone}
          name="phone"
          type="tel"
          value={form.phone}
          placeholder={copy.phonePlaceholder}
          required
          requiredText={copy.required}
          optionalText={copy.optional}
          error={touched.phone ? errors.phone : undefined}
          onBlur={() => markTouched("phone")}
          onChange={(value) => updateField("phone", value)}
        />
        <TextField
          label={copy.company}
          name="companyName"
          value={form.companyName}
          placeholder={copy.companyPlaceholder}
          requiredText={copy.required}
          optionalText={copy.optional}
          onBlur={() => markTouched("companyName")}
          onChange={(value) => updateField("companyName", value)}
        />
        <TextField
          label={copy.country}
          name="country"
          value={form.country}
          placeholder={copy.countryPlaceholder}
          requiredText={copy.required}
          optionalText={copy.optional}
          onBlur={() => markTouched("country")}
          onChange={(value) => updateField("country", value)}
        />
        <TextField
          label={copy.product}
          name="product"
          value={form.product}
          placeholder={copy.productPlaceholder}
          requiredText={copy.required}
          optionalText={copy.optional}
          onBlur={() => markTouched("product")}
          onChange={(value) => updateField("product", value)}
        />
      </div>

      <label className="mt-5 grid gap-2 text-sm font-black text-slate-900">
        {copy.message}
        <textarea
          name="message"
          rows={5}
          value={form.message}
          placeholder={copy.messagePlaceholder}
          onBlur={() => markTouched("message")}
          onChange={(event) => updateField("message", event.target.value)}
          className="resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--brand-cyan)] focus:ring-4 focus:ring-cyan-100"
        />
      </label>

      <label className="hidden" aria-hidden="true">
        {copy.website}
        <input
          tabIndex={-1}
          autoComplete="off"
          name="website"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-[52px] items-center justify-center gap-3 rounded-md bg-[var(--brand-cyan)] px-7 text-sm font-black text-white shadow-[0_14px_28px_rgba(7,136,184,0.22)] transition hover:bg-[var(--brand-cyan-dark)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send size={18} />}
          {status === "submitting" ? copy.submitting : copy.submit}
        </button>
        <p className="text-xs font-semibold leading-5 text-slate-500">
          {copy.requiredMarked} <span className="text-[var(--brand-magenta)]">*</span>.
        </p>
      </div>

      {statusMessage ? (
        <div
          className={`mt-5 flex items-start gap-3 rounded-md border px-4 py-3 text-sm font-semibold ${
            status === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-rose-200 bg-rose-50 text-rose-800"
          }`}
          role="status"
        >
          {status === "success" ? <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" /> : <AlertCircle className="mt-0.5 h-5 w-5 flex-none" />}
          <span>{statusMessage}</span>
        </div>
      ) : null}
    </form>
  );
}

function TextField({
  label,
  name,
  type = "text",
  value,
  placeholder,
  requiredText,
  optionalText,
  required = false,
  error,
  onBlur,
  onChange
}: {
  label: string;
  name: keyof InquiryFormState;
  type?: string;
  value: string;
  placeholder: string;
  requiredText: string;
  optionalText: string;
  required?: boolean;
  error?: string;
  onBlur: () => void;
  onChange: (value: string) => void;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="grid gap-2 text-sm font-black text-slate-900">
      <span>
        {label}
        {required ? <span className="ml-1 text-[var(--brand-magenta)]">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
        className={`h-12 rounded-md border bg-white px-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
          error
            ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100"
            : "border-slate-300 focus:border-[var(--brand-cyan)] focus:ring-cyan-100"
        }`}
      />
      <span id={errorId} className={`min-h-5 text-xs font-semibold ${error ? "text-rose-600" : "text-slate-400"}`}>
        {error || (required ? requiredText : optionalText)}
      </span>
    </label>
  );
}
