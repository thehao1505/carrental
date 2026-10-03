"use client";

import { Mail, MapPin, Phone, MessageSquareText, Facebook } from "lucide-react";
import Link from "next/link";
import LazyMapEmbed from "@/features/lazy-map-embed";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { ChangeEvent, FormEvent, useState } from "react";

export interface ContactFormData {
  name: string;
  phone: string;
  content: string;
}

export interface ApiResponse {
  message: string;
  success: boolean;
}

type LienHeCardProps = {
  dict: Pick<Dictionary, "map" | "subHeader"> & {
    contact: Dictionary["pages"]["contact"];
  };
  locale: Locale;
};

export default function LienHeCard({ dict, locale }: LienHeCardProps) {
  const { contact } = dict;
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  // A flag rather than word-matching the message string, which would break as
  // soon as the message is translated.
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, locale }),
      });

      const data: ApiResponse = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", phone: "", content: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold text-forest-600 mb-6 text-center">
        {contact.h1}
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10">{contact.lead}</p>

      {/* Contact details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Phone className="text-moss-500 mt-1" />
            <div>
              <p className="font-semibold">{contact.labels.phone}</p>
              <a
                href="tel:0941437070"
                className="text-forest-500 hover:underline"
              >
                0941 437 070
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MessageSquareText className="text-moss-500 mt-1" />
            <div>
              <p className="font-semibold">{contact.labels.zalo}</p>
              <Link
                href="https://zalo.me/0941437070"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-500 hover:underline"
              >
                zalo.me/0941437070
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-moss-500 mt-1" />
            <div>
              <p className="font-semibold">{contact.labels.email}</p>
              <a
                href="mailto:dvdldaiduong@gmail.com"
                className="text-forest-500 hover:underline"
              >
                dvdldaiduong@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-moss-500 mt-1" />
            <div>
              <p className="font-semibold">{contact.labels.address}</p>
              <a
                href="https://maps.app.goo.gl/7AeopSFXS4vKVxwL6"
                className="text-forest-500  hover:underline"
              >
                {dict.subHeader.address}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Facebook className="text-moss-500 mt-1" />
            <div>
              <p className="font-semibold">{contact.labels.facebook}</p>
              <a
                href="https://www.facebook.com/share/1AczYur4wu/"
                className="text-forest-500  hover:underline"
              >
                {contact.facebookLinkText}
              </a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-gray-50 p-6 rounded-xl shadow"
        >
          <h2 className="text-lg font-semibold text-moss-600 mb-2">
            {contact.form.heading}
          </h2>

          {status !== "idle" && (
            <div
              className={`p-3 rounded-md ${
                status === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {status === "success" ? contact.form.success : contact.form.error}
            </div>
          )}

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={contact.form.namePlaceholder}
            className="w-full border px-4 py-2 rounded-md focus:outline-moss-500"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={contact.form.phonePlaceholder}
            className="w-full border px-4 py-2 rounded-md focus:outline-moss-500"
            required
          />

          <textarea
            rows={4}
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder={contact.form.contentPlaceholder}
            className="w-full border px-4 py-2 rounded-md focus:outline-moss-500"
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-forest-500 text-white px-6 py-2 rounded-full hover:bg-forest-600 transition disabled:opacity-50"
          >
            {isSubmitting ? contact.form.submitting : contact.form.submit}
          </button>
        </form>
      </div>

      {/* Google Maps */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-forest-600 mb-4 flex items-center gap-2">
          <MapPin size={18} />
          {contact.mapHeading}
        </h2>
        <LazyMapEmbed dict={dict.map} />
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-gray-600">{contact.responseNote}</p>
      </div>
    </main>
  );
}
