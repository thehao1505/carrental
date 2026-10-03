import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";

// components/StatsGrid.tsx
type StatsGridProps = {
  items: Dictionary["pages"]["home"]["vehicles"];
  /** Locale-correct base path for vehicle detail pages, e.g. /thue-xe. */
  carRentalBasePath: string;
};

export default function StatsGrid({ items, carRentalBasePath }: StatsGridProps) {
  return (
    <section className="px-5 md:px-10 xl:px-30 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Link
            key={index}
            href={`${carRentalBasePath}/${item.slug}`}
            className="relative rounded-2xl overflow-hidden h-64 shadow-md cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-moss-500/80 hover:bg-moss-500/30 hover:scale-105 transition-all duration-300 flex flex-col justify-center items-center text-center text-lime-300 p-4">
              <h2 className="text-3xl font-bold">{item.value}</h2>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-sm mt-1 ">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
