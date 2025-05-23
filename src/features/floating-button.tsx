'use client'
import { useState } from 'react'

interface FloatingContactButtonsProps {
  phoneNumber?: string
  zaloNumber?: string
}

export default function FloatingContactButtons({ 
  phoneNumber = "0262 3856 789",
}: FloatingContactButtonsProps) {
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      
      {/* Phone Button */}
      <div className="relative group">
        <a
          href={`tel:${phoneNumber}`}
          onMouseEnter={() => setShowPhoneTooltip(true)}
          onMouseLeave={() => setShowPhoneTooltip(false)}
          className="flex items-center justify-center px-6 w-auto h-12 bg-gradient-to-r from-forest-400 to-forest-400 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 animate-float"
        >
          {/* Phone SVG Icon */}
          {showPhoneTooltip && (
            <>
              <p className='pr-2'>{phoneNumber}</p>
            </>
          )}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          
          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></div>
        </a>
        
        {/* Phone Tooltip */}
        
      </div>
    </div>
  )
}