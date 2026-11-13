import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";

export function ContactButton({
  dict,
  href,
  onClick,
}: {
  dict: Dictionary["contactButton"];
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="inline-flex items-center justify-center bg-forest-500 h-12 text-sm font-semibold px-6 rounded-full text-lemon-500 whitespace-nowrap hover:bg-forest-600 active:scale-95 transition-[background-color,transform] duration-200"
    >
      {dict.label}
    </Link>
  );
}
