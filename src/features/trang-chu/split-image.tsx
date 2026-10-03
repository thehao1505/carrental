import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";

type HeroSectionProps = {
  dict: Dictionary["pages"]["home"]["hero"];
  pricingHref: string;
  contactHref: string;
};

export function HeroSection({ dict, pricingHref, contactHref }: HeroSectionProps) {
  return (
    <div className="relative flex flex-col md:flex-row min-h-[300px] md:h-[650px] rounded-2xl w-auto mx-5 md:mx-10 xl:mx-30 mb-30 bg-lemon-500">
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center md:absolute md:left-0 md:top-0 md:bottom-0">
        <div className="z-10 rounded-2xl">
          <p className="text-moss-500 text-xl mb-2">{dict.eyebrow}</p>
          <p className="text-5xl md:text-6xl font-bold text-moss-500 mb-2">
            {dict.headlineTop}
          </p>
          <p className="text-4xl md:text-5xl font-serif italic text-moss-500 mb-6">
            {dict.headlineBottom}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-forest-500 max-w-[550px] mb-6">
            {dict.h1}
          </h1>
          <p className="text-forest-500 max-w-[450px] md:max-w-[450px] text-xl mb-8">
            {`${dict.intro} `}
            <br />
            {dict.pricingPrompt}{" "}
            <Link href={pricingHref} className="underline hover:font-bold">
              {dict.pricingLinkText}
            </Link>
          </p>
          <p className="text-forest-500 text-sm font-medium mb-6">
            {dict.priceLine}
          </p>
          <div className="flex flex-col">
            <Link
              href={contactHref}
              className="bg-forest-500 cursor-pointer h-[50px] text-base font-semibold px-6 py-2 rounded-3xl text-lemon-500 w-fit hover:scale-105 transition-all duration-200 transform"
            >
              {dict.cta}
            </Link>
          </div>
        </div>
      </div>

      <div
        className="hidden md:block md:w-full relative overflow-hidden md:ml-100 rounded-2xl md:rounded-l-none md:rounded-r-2xl md:[clip-path:polygon(40%_0,100%_0,100%_100%,20%_100%)]"
      >
        <div className="h-full w-full">
          <Image
            src="/images/draynur-waterfall.webp"
            alt={dict.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            quality={75}
            style={{ objectFit: "cover" }}
            priority
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
}
