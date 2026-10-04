"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, Fragment, FormEvent, useState } from "react";
import LazyMapEmbed from "@/features/lazy-map-embed";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export interface ContactFormData {
  name: string;
  phone: string;
  content: string;
}

export interface ApiResponse {
  message: string;
  success: boolean;
}

// The newsletter box only collects one free-text field, so name/phone are sent
// as fixed markers the inbox owner recognises. Kept in Vietnamese in every
// locale so the received emails stay uniform.
const ANONYMOUS_NAME = "SOMEONE";
// eslint-disable-next-line no-restricted-syntax -- inbox marker, see above
const ANONYMOUS_PHONE = "KHÔNG CÓ";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Vietnamese numbers (0xxxxxxxxx / +84xxxxxxxxx) or any international number in
// E.164 form. Spaces, dots, dashes and parentheses are stripped first so
// "+84 941 437 070" and "0941.437.070" both pass.
const PHONE_PATTERN = /^(?:(?:\+?84|0)\d{9}|\+\d{8,14})$/;

function isEmailOrPhone(value: string) {
  const trimmed = value.trim();
  return (
    EMAIL_PATTERN.test(trimmed) ||
    PHONE_PATTERN.test(trimmed.replace(/[\s.\-()]/g, ""))
  );
}

type FooterProps = {
  dict: Pick<Dictionary, "footer" | "map">;
  locale: Locale;
};

export default function Footer({ dict, locale }: FooterProps) {
  const router = useRouter();
  const { footer } = dict;
  const [formData, setFormData] = useState<ContactFormData>({
    name: ANONYMOUS_NAME,
    phone: ANONYMOUS_PHONE,
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  // Tracked as a flag rather than by matching words in the message string, which
  // would silently break the moment the message is translated.
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setIsInvalid(false);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");
    if (!isEmailOrPhone(formData.content)) {
      setIsInvalid(true);
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          content: formData.content.trim(),
          locale,
        }),
      });

      const data: ApiResponse = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({
          name: ANONYMOUS_NAME,
          phone: ANONYMOUS_PHONE,
          content: "",
        });
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
    <footer className="bg-forest-500 text-white px-6 md:px-10 xl:px-30 pt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-light.webp"
              alt={footer.logoAlt}
              width={200}
              height={100}
            />
          </div>
          <p className="text-sm text-moss-100 max-w-sm">{footer.tagline}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <h3 className="font-semibold">{footer.newsletterHeading}</h3>
            {status !== "idle" && (
              <div
                className={`py-3 px-6 rounded-r-3xl ${
                  status === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status === "success" ? footer.success : footer.error}
              </div>
            )}
            <input
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder={footer.inputPlaceholder}
              aria-label={footer.inputPlaceholder}
              aria-invalid={isInvalid}
              aria-describedby={isInvalid ? "footer-input-error" : undefined}
              className={`w-full p-3 rounded-r-3xl bg-white text-black placeholder-gray-400 px-6 ${
                isInvalid ? "ring-2 ring-red-500" : ""
              }`}
            />
            {isInvalid && (
              <p id="footer-input-error" className="text-sm text-red-300">
                {footer.invalidInput}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-lemon-500 hover:bg-lemon-400 text-black font-semibold px-6 py-2 rounded-r-3xl"
            >
              {isSubmitting ? footer.submitting : footer.submit}
            </button>
          </div>
        </form>
      </div>

      <hr className="my-10 border-moss-100/20" />

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm pb-10">
        {footer.columns.map((column) => (
          <div key={column.title}>
            <h4 className="font-semibold mb-4">{column.title}</h4>
            <ul className="space-y-2 text-moss-100">
              {column.links.map((link) => (
                <li
                  key={link.href}
                  onClick={() => router.push(link.href)}
                  className="transition-all duration-300 cursor-pointer hover:text-lemon-500 hover:underline"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="font-semibold mb-4">{footer.contact.title}</h4>
          <ul className="space-y-2 text-moss-100">
            <li>
              <a
                href="https://www.facebook.com/share/1AczYur4wu/"
                className="hover:text-lemon-400 hover:underline"
              >
                {footer.contact.facebook}
              </a>
            </li>
            <li>
              <a
                href="tel:0941437070"
                className="hover:text-lemon-400 hover:underline"
              >
                0941 437 070
              </a>
            </li>
            <li>
              <a
                href="mailto:dvdldaiduong@gmail.com"
                className="hover:text-lemon-400 hover:underline"
              >
                dvdldaiduong@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://zalo.me/0941437070"
                className="hover:text-lemon-400 hover:underline"
              >
                {footer.contact.zaloLabel}
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/7AeopSFXS4vKVxwL6"
                className="hover:text-lemon-400 hover:underline"
              >
                {footer.contact.addressLines.map((line, i) => (
                  <Fragment key={line}>
                    {i > 0 && <br />}
                    {line}
                  </Fragment>
                ))}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full pb-10 max-w-7xl mx-auto">
        <LazyMapEmbed dict={dict.map} />
      </div>

      {/* eslint-disable-next-line no-restricted-syntax -- brand name, not translated */}
      <div className="py-3 text-center text-sm text-moss-100 border-t border-moss-100/20">
        Copyright © DVDL Đại Dương Ban Mê | Powered by{" "}
        <span className="text-lemon-400">The Hao</span> | Designed by The Hao
        Nguyen
      </div>
    </footer>
  );
}
