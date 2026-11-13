import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import { interpolate } from "@/lib/i18n/interpolate";

type FleetLineupProps = {
  dict: Dictionary["pages"]["home"]["fleet"];
  items: Dictionary["pages"]["home"]["vehicles"];
  /** Uses the `{vehicle}` placeholder. */
  viewLabel: string;
  /** Locale-correct base path for vehicle detail pages, e.g. /thue-xe. */
  carRentalBasePath: string;
};

// Each cut-out is trimmed to the vehicle, so width alone sets how big it
// stands: the line-up reads small to large the way the cars do in the lot.
// Keyed by image (slugs differ per locale); intrinsic sizes are the trimmed
// files in public/images/fleet/.
const STAND: Record<string, { w: number; h: number; width: string }> = {
  "/images/fleet/thue-xe-4-cho.webp": { w: 1047, h: 548, width: "w-[62%]" },
  "/images/fleet/thue-xe-7-cho.webp": { w: 1080, h: 479, width: "w-[70%]" },
  "/images/fleet/thue-xe-16-cho.webp": { w: 815, h: 624, width: "w-[66%]" },
  "/images/fleet/thue-xe-29-cho.webp": { w: 1176, h: 674, width: "w-[90%]" },
  "/images/fleet/thue-xe-45-cho.webp": { w: 910, h: 580, width: "w-full" },
  "/images/fleet/thue-xe-limousine.webp": { w: 804, h: 567, width: "w-[72%]" },
};
const FALLBACK_STAND = { w: 1000, h: 600, width: "w-3/4" };

export function FleetLineup({
  dict,
  items,
  viewLabel,
  carRentalBasePath,
}: FleetLineupProps) {
  return (
    <section aria-labelledby="fleet-heading" className="bg-white">
      <div className="px-5 py-20 md:px-10 md:py-28 xl:px-30">
        <h2
          id="fleet-heading"
          className="text-3xl font-extrabold tracking-[-0.03em] text-forest-500 md:text-5xl"
        >
          {dict.heading}
        </h2>
        <p className="mt-4 max-w-[36em] text-lg leading-relaxed text-gray-700">
          {dict.lead}
        </p>

        <ul className="mt-10 grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                href={`${carRentalBasePath}/${item.slug}`}
                className="group block px-3"
              >
                {/* Every stand shares one height and one bottom rule, so the
                    vehicles all park on the same line. */}
                <div className="flex h-28 items-end border-b-2 border-forest-500 sm:h-32 lg:h-[150px]">
                  <Image
                    src={item.image}
                    alt=""
                    width={(STAND[item.image] ?? FALLBACK_STAND).w}
                    height={(STAND[item.image] ?? FALLBACK_STAND).h}
                    sizes="(min-width: 1024px) 200px, (min-width: 640px) 30vw, 45vw"
                    className={`${(STAND[item.image] ?? FALLBACK_STAND).width} h-auto transition-transform duration-500 ease-out motion-safe:group-hover:translate-x-2`}
                  />
                </div>
                <p className="mt-4 text-2xl font-extrabold tracking-tight text-forest-500">
                  {item.value}
                </p>
                <p className="mt-1 font-semibold text-forest-600">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-700">
                  {item.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-forest-500 group-hover:underline">
                  {interpolate(viewLabel, { vehicle: item.value })}
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
