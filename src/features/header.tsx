"use client";

import { useState } from "react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ContactButton } from "./contact-button";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import LanguageSwitcher from "./language-switcher";

type HeaderProps = {
  dict: Pick<Dictionary, "header" | "contactButton" | "languageSwitcher">;
  homeHref: string;
  locale: Locale;
};

export default function Header({ dict, homeHref, locale }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { header } = dict;

  return (
    <header className="sticky top-0 z-50 px-5 md:px-10 xl:px-30 py-5 h-[90px] flex justify-between items-center bg-white">
      <div className="flex items-center gap-4">
        <Link href={homeHref} className="w-30 h-15">
          <Image
            src="/images/logo-header.svg"
            alt={header.logoAlt}
            width={120}
            height={60}
          />
        </Link>
        <nav className="hidden md:flex gap-4">
          {header.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-bold text-forest-500 hover:scale-105 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <LanguageSwitcher dict={dict.languageSwitcher} current={locale} />

        <ContactButton dict={dict.contactButton} />

        <Avatar className="hidden xl:block w-12 h-12 rounded-full overflow-hidden">
          <AvatarImage
            src="/images/avatar-default.svg"
            alt={header.avatarAlt}
            className="object-cover"
            width={48}
            height={48}
          />
        </Avatar>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden text-forest-500 min-w-[48px] min-h-[48px] flex items-center justify-center"
          aria-label={isOpen ? header.closeMenu : header.openMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation-menu"
          className="absolute top-[90px] left-0 w-full bg-white border-t px-6 py-4 flex flex-col gap-4 xl:hidden z-50"
        >
          {header.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold text-forest-500 hover:scale-105 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
          <ContactButton dict={dict.contactButton} />
        </div>
      )}
    </header>
  );
}
