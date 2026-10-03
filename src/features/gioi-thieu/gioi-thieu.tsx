"use client";

import Image from "next/image";
import Link from "next/link";
import { Car, Settings, BadgeCheck, Users } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";

type AboutDict = Dictionary["pages"]["about"];

// Icons can't live in the dictionary: dictionaries cross the server→client
// boundary as props and React elements/components aren't serializable there.
// The dictionary names an icon; this map resolves it.
const ICONS: Record<AboutDict["values"]["items"][number]["icon"], typeof Users> = {
  users: Users,
  settings: Settings,
  badgeCheck: BadgeCheck,
  car: Car,
};

type GioiThieuCardProps = {
  dict: AboutDict;
  contactHref: string;
};

export default function GioiThieuCard({ dict, contactHref }: GioiThieuCardProps) {
  const { hero, origin, values, whyRent, services, commitments, cta } = dict;

  return (
    <>
      <main className="text-gray-800">
        {/* Hero section */}
        <section className="relative h-[400px] w-full">
          <Image
            src="/images/daklak-museum.webp"
            alt={hero.imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold text-center px-4">
              {hero.h1}
            </h1>
          </div>
        </section>
        {/* Origin story */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-forest-600 mb-6">
            {origin.h2}
          </h2>
          <p
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: origin.paragraph1Html }}
          />
          <p
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: origin.paragraph2Html }}
          />
          <Image
            src="/images/daklak-museum.webp"
            alt={origin.imageAlt}
            width={1000}
            height={500}
            className="rounded-2xl mt-6 shadow-md mx-auto"
          />
        </section>
        {/* Core values */}
        <section className="bg-moss-500 py-16 rounded-r-[100px]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-pale-500 mb-12">
              {values.h2}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {values.items.map((item, index) => {
                const Icon = ICONS[item.icon];
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="bg-pale-500 rounded-full w-24 h-24 flex items-center justify-center mb-4">
                      <Icon className="w-12 h-12 text-moss-500" />
                    </div>
                    <h3 className="text-lg text-pale-500 font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-pale-500">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-forest-600 mb-6">
            {whyRent.h2}
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            {whyRent.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Services offered */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-forest-600 mb-6">
            {services.h2}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                {services.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src="/images/daklak-museum.webp"
                alt={services.imageAlt}
                width={500}
                height={300}
                className="rounded-xl shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our commitments */}
        <section className="bg-lemon-50 py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-forest-600 mb-6">
              {commitments.h2}
            </h2>

            <div className="space-y-8 text-gray-700">
              {commitments.blocks.map((block) => (
                <div key={block.h3}>
                  <h3 className="text-xl font-semibold text-forest-500 mb-2">
                    {block.h3}
                  </h3>
                  <p
                    className="mb-2"
                    dangerouslySetInnerHTML={{ __html: block.leadHtml }}
                  />
                  {block.bullets && (
                    <ul className="list-disc pl-5 space-y-1">
                      {block.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Illustration */}
            <div className="mt-10">
              <Image
                src="/images/daklak-museum.webp"
                alt={commitments.imageAlt}
                width={1000}
                height={500}
                className="rounded-xl shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-forest-600 mb-4">{cta.h2}</h2>
          <p className="mb-6 text-gray-600 text-lg">{cta.body}</p>
          <Link
            href={contactHref}
            className="inline-block bg-forest-500 text-lemon-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-forest-600 transition hover:scale-105"
          >
            {cta.button}
          </Link>
        </section>
      </main>
    </>
  );
}
