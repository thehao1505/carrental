"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// Sits in the bottom-right slot under the floating call/Zalo stack (see
// floating-button.tsx), so the two never overlap.
export default function BackToTopButton({ label }: { label: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-forest-500 text-lemon-500 shadow-lg shadow-forest-900/20 hover:bg-forest-600 active:scale-95 transition-[background-color,transform] duration-200"
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
