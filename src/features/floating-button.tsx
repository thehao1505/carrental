"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface FloatingContactButtonsProps {
  phoneNumber?: string;
  zaloNumber?: string;
}

export default function FloatingContactButtons({
  phoneNumber = "0262 3856 789",
}: FloatingContactButtonsProps) {
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);

  return (
    <div className="fixed bottom-50 right-6 flex flex-col">
      {/* Phone Button */}
      <div className="relative group">
        <a
          href={`tel:${phoneNumber}`}
          onMouseEnter={() => setShowPhoneTooltip(true)}
          onMouseLeave={() => setShowPhoneTooltip(false)}
          className={cn(
            "flex p-3 items-center justify-center w-auto h-12 bg-forest-500 text-lemon-500 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300",
            "hover:px-6"
          )}
        >
          {/* Phone SVG Icon */}
          {showPhoneTooltip && (
            <>
              <p className="pr-2">{phoneNumber}</p>
            </>
          )}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>

          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-40 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></div>
        </a>
      </div>
    </div>
  );
}
