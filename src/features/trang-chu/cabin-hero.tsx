"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import { interpolate } from "@/lib/i18n/interpolate";

type Vehicle = Dictionary["pages"]["home"]["vehicles"][number];

type CabinHeroProps = {
  dict: Dictionary["pages"]["home"]["hero"];
  vehicles: Dictionary["pages"]["home"]["vehicles"];
  pricingHref: string;
  /** Locale-correct base path for vehicle detail pages, e.g. /thue-xe. */
  carRentalBasePath: string;
};

// The limousine cabin is the sharpest photo we have, so it opens the page.
// Matched on the photo rather than the slug, which differs per locale.
const DEFAULT_INTERIOR = "/images/noi-that-xe-limousine-hd.webp";

function ActiveVehicle({
  vehicle,
  href,
  linkLabel,
  className,
}: {
  vehicle: Vehicle;
  href: string;
  linkLabel: string;
  className: string;
}) {
  return (
    <p aria-live="polite" className={className}>
      <span>
        <strong className="font-semibold text-white">{vehicle.title}</strong>
        {" — "}
        {vehicle.description}
      </span>
      <Link
        href={href}
        className="inline-flex items-center gap-1 self-start font-bold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white md:self-end"
      >
        {linkLabel}
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </p>
  );
}

export function CabinHero({
  dict,
  vehicles,
  pricingHref,
  carRentalBasePath,
}: CabinHeroProps) {
  const [activeSlug, setActiveSlug] = useState(
    (vehicles.find((v) => v.interior === DEFAULT_INTERIOR) ?? vehicles[0]).slug,
  );
  // The first paint is the LCP image: it must not fade in. Only a switch does.
  const [hasSwitched, setHasSwitched] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  // On phones the rail scrolls sideways and the default stop is the last one:
  // bring it into view on load so the lit stop matches the cabin shown.
  useEffect(() => {
    const rail = railRef.current;
    const pressed = rail?.querySelector<HTMLElement>("[aria-pressed=true]");
    if (rail && pressed) rail.scrollLeft = pressed.offsetLeft - 20;
  }, []);
  const activeIndex = Math.max(
    0,
    vehicles.findIndex((v) => v.slug === activeSlug),
  );
  const active = vehicles[activeIndex];
  const activeHref = `${carRentalBasePath}/${active.slug}`;
  const activeLinkLabel = interpolate(dict.viewVehicle, {
    vehicle: active.value,
  });

  return (
    <section
      aria-labelledby="home-h1"
      className="relative isolate overflow-hidden bg-forest-950 text-white"
    >
      {/* Phones get a clear band of cabin at the top; wider screens get it on
          the right 62%, the part the gradient leaves visible. Several cabin photos
          are only 1200–1400px wide, so stretching them under the copy too would
          just blur them. */}
      <div className="absolute inset-x-0 top-0 -z-20 h-[240px] md:inset-y-0 md:left-auto md:h-auto md:w-[62%]">
        <Image
          key={active.slug}
          src={active.interior}
          alt={interpolate(dict.interiorAlt, { vehicle: active.value })}
          fill
          sizes="(min-width: 768px) 62vw, 100vw"
          quality={90}
          priority={!hasSwitched}
          className={`object-cover object-[65%_50%] ${hasSwitched ? "cabin-in" : ""}`}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[240px] bg-gradient-to-b from-forest-950/10 via-forest-950/30 to-forest-950 md:inset-0 md:h-auto md:bg-gradient-to-r md:from-forest-950 md:from-38% md:via-forest-950/70 md:via-50% md:to-forest-950/0 md:to-72%"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 hidden h-64 bg-gradient-to-t from-forest-950/90 to-forest-950/0 md:block"
      />

      <div className="flex flex-col px-5 pt-[150px] pb-4 md:min-h-[640px] md:px-10 md:pt-12 xl:min-h-[calc(100svh-170px)] xl:px-30">
        <div className="md:flex md:items-end md:justify-between md:gap-10">
          <div className="max-w-[660px]">
            <h1
              id="home-h1"
              className="text-[32px] leading-[1.06] font-extrabold tracking-[-0.03em] md:text-[56px] md:leading-[1.04]"
            >
              {dict.h1.replace(" - ", " - ")}
            </h1>
            <p className="mt-4 max-w-[34em] text-[15px] leading-relaxed text-forest-100 md:mt-6 md:text-xl">
              <strong className="font-semibold text-white">{dict.tagline}</strong>{" "}
              {dict.intro}
            </p>

            <div className="mt-5 flex flex-wrap gap-2 md:mt-8 md:gap-3">
              <a
                href="tel:0941437070"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-lemon-500 px-4 text-[15px] font-extrabold text-forest-700 transition-colors hover:bg-lemon-300 md:h-14 md:px-7 md:text-lg"
              >
                <Phone size={20} aria-hidden="true" />
                {dict.callCta}
              </a>
              <a
                href="https://zalo.me/0941437070"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 text-[15px] font-bold text-white transition-colors hover:bg-white/20 md:h-14 md:px-7 md:text-lg"
              >
                <MessageCircle size={20} aria-hidden="true" />
                {dict.zaloCta}
              </a>
            </div>

            <p className="mt-4 pr-16 text-sm text-forest-100 md:mt-6 md:pr-0 md:text-base">
              {dict.priceLine}
              <span aria-hidden="true"> · </span>
              <Link
                href={pricingHref}
                className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                {dict.pricingPrompt}
              </Link>
            </p>
            <p className="mt-2 pr-16 text-sm text-forest-200 md:pr-0">{dict.facts}</p>
          </div>

          <ActiveVehicle
            vehicle={active}
            href={activeHref}
            linkLabel={activeLinkLabel}
            className="hidden max-w-[380px] shrink-0 flex-col gap-1 rounded-2xl bg-forest-950/75 px-5 py-4 text-right text-forest-100 backdrop-blur-sm md:flex"
          />
        </div>

        <div className="mt-6 md:mt-auto md:pt-8">
          <div
            ref={railRef}
            role="group"
            aria-label={dict.seatRailLabel}
            className="relative -mx-5 flex snap-x scroll-px-5 overflow-x-auto border-t border-white/20 px-5 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-6 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {/* Desktop: one lemon rule slides between stops. */}
            <span
              aria-hidden="true"
              className="absolute -top-px left-0 hidden h-1 w-1/6 bg-lemon-500 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none md:block"
              style={{ transform: `translateX(${activeIndex * 100}%)` }}
            />
            {vehicles.map((v) => {
              const isActive = v.slug === active.slug;
              return (
                <button
                  key={v.slug}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => {
                    setActiveSlug(v.slug);
                    setHasSwitched(true);
                  }}
                  className={`-mt-px flex w-[31%] shrink-0 snap-start flex-col items-start justify-start border-t-4 py-3 pr-3 text-left transition-colors md:w-auto md:border-transparent ${
                    isActive
                      ? "border-lemon-500"
                      : "border-transparent md:hover:border-white/30"
                  }`}
                >
                  <span
                    className={`text-xl font-extrabold tracking-tight md:text-3xl ${
                      isActive ? "text-lemon-500" : "text-white"
                    }`}
                  >
                    {v.value}
                  </span>
                  <span className="mt-1 text-xs text-forest-100 md:text-sm">
                    {v.useCase}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <ActiveVehicle
          vehicle={active}
          href={activeHref}
          linkLabel={activeLinkLabel}
          className="mt-4 flex flex-col gap-1 text-sm text-forest-100 md:hidden"
        />
      </div>
    </section>
  );
}
