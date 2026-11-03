"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type Status = {
  type: "success" | "error";
  message: string;
} | null;

type ContactFormFields = {
  fname: string;
  lname: string;
  email: string;
  description: string;
  website: string;
  phone_number: string;
};

const initialFields: ContactFormFields = {
  fname: "",
  lname: "",
  email: "",
  description: "",
  website: "",
  phone_number: "",
};

export default function ContactForm() {
  const [fields, setFields] = useState<ContactFormFields>(initialFields);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const updateField = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFields((currentFields) => ({
      ...currentFields,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });

      if (!response.ok) {
        throw new Error("Unexpected response status");
      }

      setFields(initialFields);
      setStatus({
        type: "success",
        message: "Thanks. Your message has been sent successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-lg bg-[#f4f4f6]">
      <form onSubmit={handleSubmit} className="p-6 sm:p-10">
        <p className="m-0 text-sm font-medium tracking-wide text-[#77767e] uppercase">Start a project</p>
        <p className="m-0 mt-2 mb-8 text-[clamp(26px,2.4vw,40px)] leading-[1.1] font-semibold tracking-[-0.03em] text-[#111114]">
          Tell us about it.
        </p>
        {status ? (
          <div
            className={`mb-6 rounded-2xl border px-4 py-3 text-sm font-medium ${
              status.type === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-rose-200 bg-rose-50 text-rose-800"
            }`}
            role="status"
            aria-live="polite"
          >
            {status.message}
          </div>
        ) : null}

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-[#333339]">
              First name <span className="text-[#3200eb]">*</span>
            </span>
            <input
              name="fname"
              value={fields.fname}
              onChange={updateField}
              required
              type="text"
              className="mt-2 h-13 w-full rounded-xl border border-black/10 bg-white px-4 text-[16px] text-[#111114] outline-none transition-colors placeholder:text-[#a5a4ab] focus:border-[#3200eb] focus:ring-2 focus:ring-[#3200eb]/15"
              placeholder="Enter your first name"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#333339]">
              Last name <span className="text-[#3200eb]">*</span>
            </span>
            <input
              name="lname"
              value={fields.lname}
              onChange={updateField}
              required
              type="text"
              className="mt-2 h-13 w-full rounded-xl border border-black/10 bg-white px-4 text-[16px] text-[#111114] outline-none transition-colors placeholder:text-[#a5a4ab] focus:border-[#3200eb] focus:ring-2 focus:ring-[#3200eb]/15"
              placeholder="Enter your last name"
            />
          </label>
        </div>

        <div className="mt-5">
          <label className="block">
            <span className="text-sm font-medium text-[#333339]">
              Email <span className="text-[#3200eb]">*</span>
            </span>
            <input
              name="email"
              value={fields.email}
              onChange={updateField}
              required
              type="email"
              className="mt-2 h-13 w-full rounded-xl border border-black/10 bg-white px-4 text-[16px] text-[#111114] outline-none transition-colors placeholder:text-[#a5a4ab] focus:border-[#3200eb] focus:ring-2 focus:ring-[#3200eb]/15"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <div className="mt-5">
          <label className="block">
            <span className="text-sm font-medium text-[#333339]">
              Tell us a little bit about what you need <span className="text-[#3200eb]">*</span>
            </span>
            <textarea
              name="description"
              value={fields.description}
              onChange={updateField}
              required
              rows={5}
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[16px] text-[#111114] outline-none transition-colors placeholder:text-[#a5a4ab] focus:border-[#3200eb] focus:ring-2 focus:ring-[#3200eb]/15"
              placeholder="Share your goals, timeline, and anything else that matters."
            />
          </label>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-[#333339]">Company Website</span>
            <input
              name="website"
              value={fields.website}
              onChange={updateField}
              type="url"
              className="mt-2 h-13 w-full rounded-xl border border-black/10 bg-white px-4 text-[16px] text-[#111114] outline-none transition-colors placeholder:text-[#a5a4ab] focus:border-[#3200eb] focus:ring-2 focus:ring-[#3200eb]/15"
              placeholder="https://"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#333339]">
              Contact Number <span className="text-[#3200eb]">*</span>
            </span>
            <input
              name="phone_number"
              value={fields.phone_number}
              onChange={updateField}
              required
              type="tel"
              className="mt-2 h-13 w-full rounded-xl border border-black/10 bg-white px-4 text-[16px] text-[#111114] outline-none transition-colors placeholder:text-[#a5a4ab] focus:border-[#3200eb] focus:ring-2 focus:ring-[#3200eb]/15"
              placeholder="Enter your contact number"
            />
          </label>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex items-center gap-3 rounded-full bg-[#111114] py-2 pr-2 pl-7 text-[16px] font-medium text-white transition-colors hover:bg-[#3200eb] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send message"}
            <span className="flex size-10 items-center justify-center rounded-full bg-[#3200eb] transition-transform group-hover:rotate-45 group-hover:bg-white group-hover:text-[#3200eb]">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}