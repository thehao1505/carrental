import { MessageCircle, Phone } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";

type Testimonial = { quote: string; name: string; position: string };

type TestimonialsProps = {
  dict: Dictionary["testimonials"];
  items: readonly Testimonial[];
  callCta: string;
  zaloCta: string;
};

export default function Testimonials({
  dict,
  items,
  callCta,
  zaloCta,
}: TestimonialsProps) {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-forest-500 py-20 text-white md:py-28"
    >
      <h2
        id="testimonials-heading"
        className="max-w-[18ch] px-5 text-3xl font-extrabold tracking-[-0.03em] md:px-10 md:text-5xl xl:px-30"
      >
        {dict.heading}
      </h2>

      <div
        role="region"
        aria-labelledby="testimonials-heading"
        tabIndex={0}
        className="mt-12 flex snap-x snap-mandatory scroll-px-5 gap-8 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:scroll-px-10 md:px-10 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14 lg:overflow-visible xl:px-30 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => (
          <figure
            key={item.name}
            // The desktop grid stops at two full rows; phones scroll through all.
            className={`w-[82vw] max-w-[400px] shrink-0 snap-start border-t border-white/30 pt-6 lg:w-auto lg:max-w-none ${index >= 6 ? "lg:hidden" : ""}`}
          >
            <blockquote className="text-lg leading-snug font-medium md:text-xl">
              {item.quote}
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="block font-bold text-white">{item.name}</span>
              <span className="text-forest-100">{item.position}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-20 flex flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-10 xl:px-30">
        <p className="text-2xl font-extrabold tracking-tight md:text-4xl">
          {dict.closing}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="tel:0941437070"
            className="inline-flex h-14 items-center gap-2 rounded-full bg-lemon-500 px-7 font-extrabold text-forest-700 transition-colors hover:bg-lemon-300"
          >
            <Phone size={20} aria-hidden="true" />
            {callCta}
          </a>
          <a
            href="https://zalo.me/0941437070"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-2 rounded-full border border-white/40 px-7 font-bold transition-colors hover:bg-white/10"
          >
            <MessageCircle size={20} aria-hidden="true" />
            {zaloCta}
          </a>
        </div>
      </div>
    </section>
  );
}
