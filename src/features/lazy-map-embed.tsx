"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyMapEmbed() {
  const [showMap, setShowMap] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-gray-100"
    >
      {showMap && (
        <iframe
          title="Bản đồ vị trí DVDL Đại Dương Ban Mê"
          aria-label="Bản đồ vị trí DVDL Đại Dương Ban Mê"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.0844752198745!2d107.9978574!3d12.642462799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31721d3e858f396f%3A0x764224a5c2a39efe!2zRFZETCDEkOG6oEkgRMavxqBORyBCQU4gTcOK!5e0!3m2!1sen!2s!4v1773428162579!5m2!1sen!2s"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
}
