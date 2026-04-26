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
    <div className="overflow-hidden rounded-[28px]  bg-white">
      <form onSubmit={handleSubmit} className="px-6 py-6 sm:px-10 sm:py-8">
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
            <span className="text-sm font-semibold text-[#212126]">
              First name <span className="text-[#ff1d1d]">*</span>
            </span>
            <input
              name="fname"
              value={fields.fname}
              onChange={updateField}
              required
              type="text"
              className="mt-2 h-12 w-full rounded-xl border border-[#ded9f5] bg-white px-4 text-[15px] text-[#111216] outline-none transition-colors placeholder:text-[#a5a0b8] focus:border-[#3200eb]"
              placeholder="Enter your first name"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-[#212126]">
              Last name <span className="text-[#ff1d1d]">*</span>
            </span>
            <input
              name="lname"
              value={fields.lname}
              onChange={updateField}
              required
              type="text"
              className="mt-2 h-12 w-full rounded-xl border border-[#ded9f5] bg-white px-4 text-[15px] text-[#111216] outline-none transition-colors placeholder:text-[#a5a0b8] focus:border-[#3200eb]"
              placeholder="Enter your last name"
            />
          </label>
        </div>

        <div className="mt-5">
          <label className="block">
            <span className="text-sm font-semibold text-[#212126]">
              Email <span className="text-[#ff1d1d]">*</span>
            </span>
            <input
              name="email"
              value={fields.email}
              onChange={updateField}
              required
              type="email"
              className="mt-2 h-12 w-full rounded-xl border border-[#ded9f5] bg-white px-4 text-[15px] text-[#111216] outline-none transition-colors placeholder:text-[#a5a0b8] focus:border-[#3200eb]"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <div className="mt-5">
          <label className="block">
            <span className="text-sm font-semibold text-[#212126]">
              Tell us a little bit about what you need <span className="text-[#ff1d1d]">*</span>
            </span>
            <textarea
              name="description"
              value={fields.description}
              onChange={updateField}
              required
              rows={5}
              className="mt-2 w-full rounded-xl border border-[#ded9f5] bg-white px-4 py-3 text-[15px] text-[#111216] outline-none transition-colors placeholder:text-[#a5a0b8] focus:border-[#3200eb]"
              placeholder="Share your goals, timeline, and anything else that matters."
            />
          </label>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-[#212126]">Company Website</span>
            <input
              name="website"
              value={fields.website}
              onChange={updateField}
              type="url"
              className="mt-2 h-12 w-full rounded-xl border border-[#ded9f5] bg-white px-4 text-[15px] text-[#111216] outline-none transition-colors placeholder:text-[#a5a0b8] focus:border-[#3200eb]"
              placeholder="https://"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-[#212126]">
              Contact Number <span className="text-[#ff1d1d]">*</span>
            </span>
            <input
              name="phone_number"
              value={fields.phone_number}
              onChange={updateField}
              required
              type="tel"
              className="mt-2 h-12 w-full rounded-xl border border-[#ded9f5] bg-white px-4 text-[15px] text-[#111216] outline-none transition-colors placeholder:text-[#a5a0b8] focus:border-[#3200eb]"
              placeholder="Enter your contact number"
            />
          </label>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-w-44 items-center justify-center rounded-3xl bg-[#3200eb] px-8 py-3 text-[15px] font-semibold text-white transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}