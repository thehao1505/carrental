"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ContactButton } from "./contact-button";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import LanguageSwitcher from "./language-switcher";

type HeaderProps = {
  dict: Pick<Dictionary, "header" | "contactButton" | "languageSwitcher">;
  homeHref: string;
  contactHref: string;
  locale: Locale;
};

const navLinkClass =
  "text-base font-bold text-forest-500 underline-offset-8 decoration-2 decoration-lemon-600 hover:underline";

export default function Header({
  dict,
  homeHref,
  contactHref,
  locale,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { header } = dict;

  // Close on Escape (returning focus to the toggle) or on a tap outside the header.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 px-5 md:px-10 xl:px-30 h-[90px] flex justify-between items-center gap-4 bg-white"
    >
      <div className="flex items-center gap-6">
        <Link href={homeHref} className="shrink-0">
          <Image
            src="/images/logo-header.svg"
            alt={header.logoAlt}
            width={120}
            height={60}
            priority
            className="w-24 h-auto sm:w-30"
          />
        </Link>
        <nav className="hidden lg:flex gap-5">
          {header.nav.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <LanguageSwitcher dict={dict.languageSwitcher} current={locale} />

        <span className="hidden sm:inline-flex">
          <ContactButton dict={dict.contactButton} href={contactHref} />
        </span>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-forest-500 min-w-12 min-h-12 flex items-center justify-center"
          aria-label={isOpen ? header.closeMenu : header.openMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation-menu"
          className="absolute top-[90px] left-0 w-full bg-white border-t border-forest-100 shadow-[0_12px_24px_-12px_rgb(10_60_35/0.25)] px-6 py-2 flex flex-col lg:hidden z-50"
        >
          <nav className="flex flex-col">
            {header.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-base font-bold text-forest-500 border-b border-forest-50 last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="py-4 sm:hidden">
            <ContactButton
              dict={dict.contactButton}
              href={contactHref}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}
