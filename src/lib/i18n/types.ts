/**
 * Shape shared by every dictionary. `en.ts` is declared `satisfies Dictionary`,
 * so a missing translation is a compile error rather than a string that silently
 * falls back to Vietnamese in production.
 *
 * Every value must be plain JSON-serializable data. Dictionaries are handed from
 * Server Components to Client Components as props, and React cannot serialize a
 * function across that boundary — so strings that need a runtime value use a
 * `{placeholder}` token and `interpolate()` from ./interpolate instead.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type Dictionary = {
  /** hreflang / <html lang> value. */
  htmlLang: string;

  /** Site-wide SEO defaults applied by the root layout. */
  site: {
    titleDefault: string;
    /** Next.js title template, must contain "%s". */
    titleTemplate: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogImageAlt: string;
    twitterTitle: string;
  };

  header: {
    nav: NavLink[];
    logoAlt: string;
    avatarAlt: string;
    openMenu: string;
    closeMenu: string;
  };

  contactButton: {
    label: string;
    copied: string;
  };

  subHeader: {
    address: string;
  };

  floating: {
    /** Uses the `{phone}` placeholder. */
    callAria: string;
    zaloLabel: string;
    /** Uses the `{phone}` placeholder. */
    zaloAria: string;
  };

  map: {
    title: string;
  };

  languageSwitcher: {
    /** aria-label on the switcher control. */
    label: string;
    /** Short code shown in the UI, e.g. "EN". */
    options: { locale: string; short: string; name: string }[];
  };

  /**
   * Banner offering this locale to a visitor whose browser prefers it while
   * they read another one. Rendered in the language it offers, so the copy is
   * taken from the *target* locale's dictionary, not the page's.
   */
  localeSuggestion: {
    message: string;
    switchCta: string;
    /** aria-label of the close button. */
    dismiss: string;
  };

  footer: {
    logoAlt: string;
    tagline: string;
    newsletterHeading: string;
    inputPlaceholder: string;
    /** Shown when the input is neither a valid email nor a phone number. */
    invalidInput: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    columns: { title: string; links: NavLink[] }[];
    contact: {
      title: string;
      facebook: string;
      zaloLabel: string;
      addressLines: string[];
    };
  };

  newsSection: {
    heading: string;
    noImage: string;
    readMore: string;
  };

  testimonials: {
    heading: string;
  };

  pagination: {
    ariaLabel: string;
    prev: string;
    next: string;
  };

  notFound: {
    title: string;
    heading: string;
    body: string;
    homeCta: string;
    contactCta: string;
  };

  /**
   * Tour enquiry form on the tours page.
   *
   * `tourOptions` / `groupOptions` keep their `value` in Vietnamese on purpose:
   * that value is what gets posted to the inbox, and the person reading the
   * enquiries works in Vietnamese. Only `label`, what the visitor reads, is
   * translated — so both language feeds stay comparable.
   */
  /**
   * The /bang-gia price tables.
   *
   * The prices themselves are numbers shared by every locale, in
   * src/features/bang-gia/price-tables.ts. `rows` here holds only the leading
   * label cells of each row (route, duration, distance); the price cells are
   * appended at render time.
   */
  pricing: {
    hero: { imageAlt: string; h1: string };
    intro: {
      h2: string;
      lead: string;
      factors: string[];
      example: string;
      advice: string;
    };
    tables: {
      h2: string;
      headers: string[];
      /** Label cells only; prices come from price-tables.ts. */
      rows: string[][];
      note: string;
    }[];
    /**
     * How a VND amount is written. `{amount}` is the number with digit grouping
     * from `Intl.NumberFormat` (1.400.000 / 1,400,000); the symbol and its
     * placement are per-locale copy.
     */
    priceFormat: { amount: string; perKm: string; from: string };
    /** Button under the 29/45-seat table. */
    quoteCta: string;
    drivers: { h2: string; paragraphs: string[] };
    fleet: { h2: string; body: string; imageAlt: string };
    cta: { h2: string; body: string; button: string };
  };
  tourBooking: {
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    tourLabel: string;
    tourPlaceholder: string;
    tourOptions: { value: string; label: string }[];
    groupLabel: string;
    groupPlaceholder: string;
    groupOptions: { value: string; label: string }[];
    dateLabel: string;
    noteLabel: string;
    notePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    errorNetwork: string;
    /** The hotline line is split because the number itself is a link. */
    hotlineBefore: string;
    hotlineNumber: string;
    hotlineAfter: string;
  };

  pages: {
    home: {
      hero: {
        eyebrow: string;
        headlineTop: string;
        headlineBottom: string;
        h1: string;
        intro: string;
        pricingPrompt: string;
        pricingLinkText: string;
        priceLine: string;
        cta: string;
        imageAlt: string;
      };
      /** The six vehicle tiles under the hero. */
      vehicles: {
        value: string;
        slug: string;
        title: string;
        description: string;
        image: string;
      }[];
    };

    carRentalListing: {
      hero: {
        imageAlt: string;
        h1: string;
        subtitle: string;
        callCta: string;
        zaloCta: string;
      };
      /**
       * `*Html` fields hold authored rich text with inline <strong> emphasis.
       * They are repo-authored content, never user input, and are rendered with
       * dangerouslySetInnerHTML the same way src/lib/data/car-rental.ts is.
       */
      intro: { h2: string; bodyHtml: string };
      priceTable: {
        h2: string;
        lead: string;
        headers: {
          type: string;
          seats: string;
          priceFrom: string;
          bestFor: string;
        };
        rows: {
          type: string;
          seats: string;
          price: string;
          bestFor: string;
        }[];
      };
      whyUs: {
        h2: string;
        lead: string;
        items: { title: string; body: string }[];
      };
      process: {
        h2: string;
        lead: string;
        steps: { title: string; body: string }[];
      };
      cards: {
        /** Uses the `{price}` placeholder. */
        priceFrom: string;
        readMore: string;
        /** Keyed by vehicle slug for the current locale. */
        excerpts: Record<string, string>;
        startingPrices: Record<string, string>;
      };
      destinations: {
        h2: string;
        lead: string;
        items: { name: string; body: string }[];
        outro: string;
      };
      featured: { title: string; subtitle: string };
      cta: { h2: string; body: string; button: string };
    };

    contact: {
      h1: string;
      lead: string;
      labels: {
        phone: string;
        zalo: string;
        email: string;
        address: string;
        facebook: string;
      };
      facebookLinkText: string;
      form: {
        heading: string;
        namePlaceholder: string;
        phonePlaceholder: string;
        contentPlaceholder: string;
        submit: string;
        submitting: string;
        success: string;
        error: string;
      };
      mapHeading: string;
      responseNote: string;
    };

    about: {
      hero: { imageAlt: string; h1: string };
      origin: {
        h2: string;
        paragraph1Html: string;
        paragraph2Html: string;
        imageAlt: string;
      };
      values: {
        h2: string;
        /** `icon` selects a lucide component in the component's icon map. */
        items: {
          icon: "users" | "settings" | "badgeCheck" | "car";
          title: string;
          description: string;
        }[];
      };
      whyRent: { h2: string; items: string[] };
      services: { h2: string; items: string[]; imageAlt: string };
      commitments: {
        h2: string;
        blocks: {
          h3: string;
          /** Rendered as rich text; may contain <br />. */
          leadHtml: string;
          bullets?: string[];
        }[];
        imageAlt: string;
      };
      cta: { h2: string; body: string; button: string };
    };
  };

  carRentalDetail: {
    back: string;
    tldrLabel: string;
    ctaHeading: string;
    ctaButton: string;
    relatedHeading: string;
    readMore: string;
  };
};
