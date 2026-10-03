"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

interface FormData {
  name: string;
  phone: string;
  tourType: string;
  groupSize: string;
  date: string;
  note: string;
}

const EMPTY: FormData = {
  name: "",
  phone: "",
  tourType: "",
  groupSize: "",
  date: "",
  note: "",
};

/**
 * The enquiry body is written for the inbox, not for the visitor, so it stays
 * Vietnamese in every locale — the person reading it works in Vietnamese. The
 * heading notes which language the visitor was browsing in, so a reply can go
 * out in the right one. (The API route also tags the subject; see
 * src/app/api/contact/route.ts.)
 */
const enquiryHeading: Record<Locale, string> = {
  vi: "[YÊU CẦU ĐẶT TOUR ĐẮK LẮK]",
  en: "[YÊU CẦU ĐẶT TOUR ĐẮK LẮK — khách gửi từ trang tiếng Anh]",
};

type Props = {
  dict: Dictionary["tourBooking"];
  locale: Locale;
};

export default function TourBookingForm({ dict, locale }: Props) {
  const [formData, setFormData] = useState<FormData>(EMPTY);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // A status flag rather than matching on the message text — string matching
  // breaks the moment the copy is translated.
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    const content = `${enquiryHeading[locale]}
Tour: ${formData.tourType}
Số người: ${formData.groupSize}
Ngày dự kiến: ${formData.date || "Chưa xác định"}
Ghi chú: ${formData.note || "Không có"}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          content,
          locale,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setMessage(dict.success);
        setFormData(EMPTY);
      } else {
        setStatus("error");
        setMessage(dict.error);
      }
    } catch {
      setStatus("error");
      setMessage(dict.errorNetwork);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-400 text-gray-800 text-sm bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {dict.nameLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={dict.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {dict.phoneLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder={dict.phonePlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {dict.tourLabel} <span className="text-red-500">*</span>
          </label>
          <select
            name="tourType"
            value={formData.tourType}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">{dict.tourPlaceholder}</option>
            {dict.tourOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {dict.groupLabel} <span className="text-red-500">*</span>
          </label>
          <select
            name="groupSize"
            value={formData.groupSize}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">{dict.groupPlaceholder}</option>
            {dict.groupOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {dict.dateLabel}
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {dict.noteLabel}
        </label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          rows={3}
          placeholder={dict.notePlaceholder}
          className={inputClass + " resize-none"}
        />
      </div>

      {message && (
        <div
          className={`px-4 py-3 rounded-xl text-sm font-medium ${
            status === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-lemon-500 text-forest-700 font-bold py-3.5 rounded-xl text-base hover:bg-lemon-400 transition hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? dict.submitting : dict.submit}
      </button>
      <p className="text-xs text-gray-400 text-center">
        {dict.hotlineBefore}
        <a
          href="tel:0941437070"
          className="text-forest-600 font-semibold hover:underline"
        >
          {dict.hotlineNumber}
        </a>
        {dict.hotlineAfter}
      </p>
    </form>
  );
}
