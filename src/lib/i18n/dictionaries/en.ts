import type { Dictionary } from "../types";
import { carRentalPath, path } from "../routes";

/** Throws rather than emitting `undefined` into an href if a page isn't translated. */
const p = (key: Parameters<typeof path>[0]) => {
  const href = path(key, "en");
  if (href === null) {
    throw new Error(`No English path for route "${key}"`);
  }
  return href;
};

// The postal address is deliberately NOT translated or stripped of diacritics:
// it must stay byte-identical to the NAP used in Google Business Profile and
// every citation, otherwise local-SEO consistency breaks.
const ADDRESS = "252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk";

export const en = {
  htmlLang: "en",

  site: {
    titleDefault:
      "Car Rental in Dak Lak | 4-45 Seat Cars With Driver | DVDL",
    titleTemplate: "%s | DVDL Dai Duong Ban Me",
    description:
      "Trusted car rental in Dak Lak – 4 to 45-seat vehicles with professional drivers, local tours, team building and events in Buon Ma Thuot.",
    keywords: [
      "car rental Buon Ma Thuot",
      "car rental Dak Lak",
      "Dak Lak tours",
      "Buon Ma Thuot travel",
      "private driver Vietnam Central Highlands",
      "airport transfer Buon Ma Thuot",
      "minibus rental Dak Lak",
      "DVDL Dai Duong Ban Me",
    ],
    ogTitle:
      "Car Rental in Dak Lak | 4-45 Seat Cars With Driver | DVDL Dai Duong Ban Me",
    ogImageAlt: "DVDL Dai Duong Ban Me - Dak Lak tours and car rental",
    twitterTitle: "Car Rental in Dak Lak | 4-45 Seat Cars With Driver",
  },

  header: {
    // Mirrors the Vietnamese nav one for one. "News" points at the English
    // listing shell; the articles behind it are Vietnamese (see /en/news).
    nav: [
      { label: "About Us", href: p("about") },
      { label: "Car Rental", href: p("carRental") },
      { label: "News", href: p("news") },
      { label: "Dak Lak Tours", href: p("tours") },
      { label: "Prices", href: p("pricing") },
    ],
    logoAlt: "logo",
    avatarAlt: "Profile picture",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },

  contactButton: {
    label: "Contact",
    copied: "Number copied",
  },

  subHeader: {
    address: ADDRESS,
  },

  floating: {
    callAria: "Call us now at {phone}",
    zaloLabel: "Chat on Zalo",
    zaloAria: "Chat on Zalo at {phone}",
  },

  map: {
    title: "Map showing the location of DVDL Dai Duong Ban Me",
  },

  languageSwitcher: {
    label: "Select language",
    options: [
      { locale: "vi", short: "VI", name: "Tiếng Việt" },
      { locale: "en", short: "EN", name: "English" },
    ],
  },

  footer: {
    logoAlt: "logo",
    tagline:
      "Reliable, fast and fairly priced car rental. Book a car in just a few minutes — we're ready to travel with you on every journey!",
    newsletterHeading:
      "Leave your email or phone number to receive our latest offers",
    inputPlaceholder: "example@gmail.com or +84 941 437 070",
    invalidInput: "Please enter a valid email address or phone number.",
    submit: "Send request",
    submitting: "Sending...",
    success: "Request sent! We will get back to you shortly.",
    error: "Something went wrong. Please try again.",
    columns: [
      {
        title: "Pages",
        links: [
          { label: "Home", href: p("home") },
          { label: "About Us", href: p("about") },
          { label: "News", href: p("news") },
          { label: "Contact", href: p("contact") },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "All car rental services", href: p("carRental") },
          { label: "Dak Lak tourist car rental", href: p("carRentalTravel") },
          { label: "Corporate car rental", href: p("carRentalCorporate") },
          { label: "Dak Lak tours", href: p("tours") },
          {
            label: "16-seat car rental",
            href: carRentalPath("car-rental-16-seat", "en"),
          },
          {
            label: "Limousine rental",
            href: carRentalPath("car-rental-limousine", "en"),
          },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Price list", href: p("pricing") },
          { label: "Privacy policy", href: p("privacyPolicy") },
          { label: "Booking & cancellation policy", href: p("shippingPolicy") },
        ],
      },
    ],
    contact: {
      title: "Contact",
      facebook: "Facebook",
      zaloLabel: "Zalo: +84 941 437 070",
      addressLines: ["252/6 Phan Huy Chú,", "Buôn Ma Thuột, Đắk Lắk, Vietnam"],
    },
  },

  newsSection: {
    heading: "Travel News & Guides",
    noImage: "No image yet",
    readMore: "Read more →",
  },

  testimonials: {
    heading: "What our customers say about us",
  },

  pagination: {
    ariaLabel: "Pagination",
    prev: "← Previous",
    next: "Next →",
  },

  notFound: {
    title: "Page not found",
    heading: "We couldn't find that page",
    body: "This address doesn't exist or has moved. Head back to the home page, or call +84 941 437 070 and we'll help you directly.",
    homeCta: "Back to home",
    contactCta: "Contact us",
  },

  pricing: {
    hero: {
      imageAlt: "Car rental price list, Buon Ma Thuot",
      h1: "Car rental price list for Dak Lak, 2026",
    },
    intro: {
      h2: "Rental prices are not fixed.",
      lead: "What you pay for a car depends on:",
      factors: [
        "The type of vehicle.",
        "How many vehicles you need.",
        "The distance travelled.",
        "When you are travelling.",
        "Any extra services on the trip.",
      ],
      example:
        "For example, hiring a car in Buon Ma Thuot to travel to Gia Lai costs considerably less than one to Da Lat, and a one-day hire costs less than two days.",
      advice:
        "For an exact price, talk to us directly — an adviser at DVDL Đại Dương Ban Mê will give you the precise figure for your trip. Or use the price tables below as a guide.",
    },
    tables: [
      {
        h2: "Airport transfer prices",
        headers: ["Route", "Direction", "Km", "4-seat", "7-seat", "16-seat"],
        rows: [
          ["BMT Airport – City centre", "One way", "12km"],
          ["BMT Airport – Buon Ho or Krong Ana", "One way", "40km"],
          ["BMT Airport – Phuoc An, Krong Pak", "One way", "30km"],
          ["BMT Airport – Ea Kar", "One way", "54km"],
          ["BMT Airport – M'Drak", "One way", "90km"],
          ["BMT Airport – Buon Don", "One way", "35km"],
          ["BMT Airport – Ea Sup or Ea H'leo", "One way", "80km"],
          ["BMT Airport – Dak Mil, Dak Nong", "One way", "65km"],
          ["BMT Airport – Gia Nghia, Dak Nong", "One way", "130km"],
          ["BMT Airport – Pleiku, Gia Lai", "One way", "185km"],
        ],
        note: "* Driver and fuel included. Road tolls, parking fees and VAT invoices are not included.",
      },
      {
        h2: "Prices per kilometre and per direction",
        headers: ["Distance", "Directions", "4-seat", "7-seat", "16-seat"],
        rows: [
          ["0-50km", "1"],
          ["50-100km", "1"],
          ["Over 100km", "1"],
          ["0-50km", "2"],
          ["50-100km", "2"],
          ["Over 100km", "2"],
        ],
        note: "* Driver and fuel included. Road tolls, parking fees and VAT invoices are not included.",
      },
      {
        h2: "Fixed route prices from Buon Ma Thuot",
        headers: ["Route", "Duration / distance", "4-seat", "7-seat", "16-seat"],
        rows: [
          ["Airport – around the city centre", "15km"],
          ["City tour (50km)", "1 day"],
          ["Buon Ma Thuot – Dray Nur Waterfall, return", "5h"],
          ["City tour + Dray Nur Waterfall", "1 day"],
          ["Buon Ma Thuot – Buon Don resort, return", "5h"],
          ["City tour + Buon Don", "1 day"],
          ["Buon Ma Thuot – Elephant Rock – Lak Lake, return", "5h"],
          ["City tour + Elephant Rock + Lak Lake", "1 day"],
          ["Dak Lak tour, 2 days 1 night", "2 days"],
          ["Dak Lak tour, 3 days 2 nights", "3 days"],
          ["Buon Ma Thuot – Gia Nghia", "125km"],
          ["Buon Ma Thuot – Pleiku, Gia Lai", "185km"],
          ["Buon Ma Thuot – Nha Trang", "185km"],
          ["Buon Ma Thuot – Da Lat", "330km"],
          ["Buon Ma Thuot – Ho Chi Minh City", "-"],
        ],
        note: "* Driver and fuel included. Road tolls, parking fees and VAT invoices are not included.",
      },
      {
        h2: "How much is a 29-seat or 45-seat coach?",
        headers: ["Service", "29-seat", "45-seat"],
        rows: [
          ["Airport transfer"],
          ["Per km in the city"],
          ["All-inclusive day rate"],
        ],
        note: "Suited to corporate groups, team building, events and large tour parties. Get in touch for a quote against your exact itinerary.",
      },
    ],
    priceFormat: { amount: "{amount}₫", perKm: "{amount}₫/km", from: "from {amount}₫" },
    quoteCta: "Contact us for a quote",
    drivers: {
      h2: "Experienced drivers",
      paragraphs: [
        "Every one of our drivers has years of experience behind the wheel. They are attentive and easy to travel with, and they put your safety and satisfaction first.",
        "Our advisers will gladly help you pick the right vehicle for your trip, and the hotline is staffed 24/7 whenever you need us.",
      ],
    },
    fleet: {
      h2: "A late-model fleet",
      body: "DVDL Đại Dương Ban Mê runs the full range — 4, 7, 16, 29 and 45-seat vehicles, sleeper coaches and limousines, from everyday to premium. Every vehicle is a recent model, inspected and serviced on a regular schedule, so you can pick what suits you and travel safely.",
      imageAlt: "7-seat car for hire",
    },
    cta: {
      h2: "Need advice quickly?",
      body: "Get in touch for a competitive quote and a helping hand.",
      button: "Contact us",
    },
  },
  tourBooking: {
    nameLabel: "Full name",
    namePlaceholder: "Jane Smith",
    phoneLabel: "Phone number",
    phonePlaceholder: "0941 437 070",
    tourLabel: "Choose a tour",
    tourPlaceholder: "-- Choose a tour --",
    tourOptions: [
      {
        value: "Tour 1 ngày – Văn Hóa Buôn Ma Thuột",
        label: "1-day tour – Buon Ma Thuot culture",
      },
      {
        value: "Tour 2 ngày 1 đêm – Phiêu Lưu Tây Nguyên",
        label: "2 days 1 night – Central Highlands adventure",
      },
      {
        value: "Tour 3 ngày 2 đêm – Khám Phá Tây Nguyên Toàn Diện",
        label: "3 days 2 nights – the complete Central Highlands",
      },
      { value: "Tour tùy chỉnh", label: "A custom tour" },
    ],
    groupLabel: "Group size",
    groupPlaceholder: "-- Group size --",
    groupOptions: [
      { value: "1-2 người", label: "1–2 people" },
      { value: "3-4 người", label: "3–4 people" },
      { value: "5-7 người", label: "5–7 people" },
      { value: "8-16 người", label: "8–16 people" },
      { value: "Trên 16 người", label: "More than 16 people" },
    ],
    dateLabel: "Preferred departure date",
    noteLabel: "Anything else (pick-up point, special requests…)",
    notePlaceholder:
      "e.g. pick up at the airport, need a child seat, would like to add the Pink Grass Hills…",
    submit: "Book this tour",
    submitting: "Sending…",
    success:
      "Booking request sent. We will call you to confirm within 30 minutes.",
    error: "Something went wrong. Please try again.",
    errorNetwork:
      "Something went wrong. Please try again or call us on the hotline.",
    hotlineBefore: "Or call us on ",
    hotlineNumber: "0941 437 070",
    hotlineAfter: " for free advice",
  },

  pages: {
    home: {
      hero: {
        eyebrow: "Tourist car rental",
        headlineTop: "Dedicated.",
        headlineBottom: "Professional.",
        h1: "Car Rental in Dak Lak — 4 to 45-Seat Vehicles With Driver",
        intro:
          "Car rental with a professional driver from DVDL Dai Duong Ban Me — 4 to 45-seat vehicles, fair prices, quick paperwork and door-to-door delivery. Book in just a few minutes!",
        pricingPrompt: "See our rates and book",
        pricingLinkText: "here.",
        priceLine:
          "From 800,000 VND/day with driver — 4 to 45 seats",
        cta: "Contact us now",
        imageAlt: "Central Highlands scenery",
      },
      vehicles: [
        {
          value: "4 Seats",
          slug: "car-rental-4-seat",
          title: "Personal travel",
          description:
            "Ideal for business trips, airport transfers and daily travel.",
          image: "/images/thue-xe-4-cho.webp",
        },
        {
          value: "7 Seats",
          slug: "car-rental-7-seat",
          title: "Comfortable small groups",
          description:
            "Well suited to families, groups of friends and short getaways.",
          image: "/images/thue-xe-7-cho.webp",
        },
        {
          value: "16 Seats",
          slug: "car-rental-16-seat",
          title: "Flexible service",
          description:
            "Late-model vehicles, ideal for tours, events and company shuttles.",
          image: "/images/thue-xe-16-cho.webp",
        },
        {
          value: "29 Seats",
          slug: "car-rental-29-seat",
          title: "Mid-size groups",
          description: "Suited to schools, companies and 1-3 day tours.",
          image: "/images/thue-xe-29-cho.webp",
        },
        {
          value: "45 Seats",
          slug: "car-rental-45-seat",
          title: "Long journeys",
          description:
            "Modern coaches for group tours and professional conferences.",
          image: "/images/thue-xe-45-cho.webp",
        },
        {
          value: "Limousine",
          slug: "car-rental-limousine",
          title: "Premium travel",
          description:
            "Luxury interior, massage seats, Wi-Fi and private screens.",
          image: "/images/thue-xe-limousine.webp",
        },
      ],
    },

    carRentalListing: {
      hero: {
        imageAlt: "Car rental service in Buon Ma Thuot",
        h1: "Car Rental Service in Buon Ma Thuot",
        subtitle:
          "A full range of vehicles from 4 to 45 seats plus limousines. Professional drivers, late-model cars, transparent pricing.",
        callCta: "Book now — Call +84 941 437 070",
        zaloCta: "Chat on Zalo",
      },
      intro: {
        h2: "Trusted car rental in Buon Ma Thuot since 2018",
        bodyHtml:
          'DVDL Dai Duong Ban Me has provided trusted <strong>car rental in Buon Ma Thuot</strong> since 2018, serving thousands of individual, family and corporate customers. Our fleet spans 4, 7, 16, 29 and 45-seat vehicles as well as premium limousines, covering every kind of journey — airport transfers, business trips, group outings, and multi-day <strong>Dak Lak travel car rental</strong> through the Central Highlands. Every <strong>car rental with driver</strong> booking comes with an experienced local driver who knows each road, pass and mountain route, and who treats every journey with care. We serve the whole of Dak Lak province and neighbouring provinces including Dak Nong, Gia Lai, Lam Dong and Khanh Hoa, and we happily take long inter-provincial trips. With late-model vehicles, clean interiors, transparent pricing and no hidden fees, DVDL Dai Duong Ban Me aims to give every customer the safest, most comfortable and most dependable rental experience possible.',
      },
      priceTable: {
        h2: "Reference rental rates",
        lead:
          "The starting rate for each vehicle class is listed below so you can quickly match a vehicle to your group size and budget. Rates vary with the itinerary, the number of rental days and peak season — please call our hotline for an exact quote.",
        headers: {
          type: "Vehicle",
          seats: "Seats",
          priceFrom: "From / day",
          bestFor: "Best for",
        },
        rows: [
          { type: "4-seat car", seats: "4", price: "800,000 VND", bestFor: "Individuals & couples" },
          { type: "7-seat car", seats: "7", price: "1,100,000 VND", bestFor: "Small families" },
          { type: "16-seat van", seats: "16", price: "1,500,000 VND", bestFor: "Groups & tours" },
          { type: "29-seat bus", seats: "29", price: "2,500,000 VND", bestFor: "Mid-size groups" },
          { type: "45-seat coach", seats: "45", price: "3,500,000 VND", bestFor: "Large groups & team building" },
          { type: "Limousine", seats: "6", price: "2,000,000 VND", bestFor: "VIP & events" },
        ],
      },
      whyUs: {
        h2: "Why choose DVDL Dai Duong Ban Me?",
        lead:
          "Among the many car rental options in Buon Ma Thuot, what keeps customers coming back is our attentiveness, transparency and consistent service quality on every trip. Here are the four main reasons thousands of customers have chosen us as their travel partner:",
        items: [
          {
            title: "Proven experience since 2018:",
            body:
              "More than six years of continuous operation in Dak Lak tourist transport means we understand what each type of customer needs, have built a professional service process, and have earned real trust across thousands of safe journeys.",
          },
          {
            title: "A diverse fleet:",
            body:
              "From compact 4-seat cars and 7-seat family vehicles to 16, 29 and 45-seat coaches for larger groups and luxury limousines, we always have an option that fits your group size and trip type — all late-model vehicles, serviced on schedule and cleaned before every journey.",
          },
          {
            title: "Professional drivers:",
            body:
              "Our drivers are locals who know the Central Highlands roads inside out. They drive smoothly, arrive on time and are unfailingly courteous. On leisure trips they can also suggest places to eat and visit, acting as an informal guide and making the journey more rewarding.",
          },
          {
            title: "Door-to-door delivery:",
            body:
              "We pick you up at your home, hotel, the airport or anywhere else in Buon Ma Thuot and the surrounding area, so you save time and start your trip conveniently instead of travelling to a pick-up point yourself.",
          },
        ],
      },
      process: {
        h2: "A simple booking process",
        lead:
          "Three quick steps and the right vehicle is ready for your journey. We keep the paperwork light so booking feels effortless from the very first call.",
        steps: [
          {
            title: "Get in touch",
            body:
              "Call our hotline or message us with your itinerary, the number of passengers and the vehicle you have in mind. Our team will help you pick the best balance of cost and comfort.",
          },
          {
            title: "Confirm the details",
            body:
              "We send a transparent quote and confirm the timing, pick-up point and every detail of the trip. All terms are stated up front, with no fees beyond what was agreed.",
          },
          {
            title: "Take the vehicle",
            body:
              "Your driver brings the vehicle to the agreed place at the agreed time. All you have to do is get in and enjoy a safe, comfortable journey with DVDL Dai Duong Ban Me.",
          },
        ],
      },
      cards: {
        priceFrom: "From {price} VND/day",
        readMore: "Read more →",
        excerpts: {
          "car-rental-4-seat":
            "Right for individuals, couples or small families. Flexible, economical and easy to move through the city.",
          "car-rental-7-seat":
            "Ideal for groups of 5–7. Roomy cabin, large luggage compartment, comfortable on longer drives.",
          "car-rental-16-seat":
            "Suited to mid-size groups. Standard seating and strong air conditioning — good for sightseeing and sports events.",
          "car-rental-29-seat":
            "For larger parties. Ideal for team building, group travel and event shuttles.",
          "car-rental-45-seat":
            "A full-size touring coach for large groups, inter-provincial travel and multi-day tours.",
          "car-rental-limousine":
            "Refined and premium. Right for special occasions, VIP transfers and high-end conferences.",
        },
        startingPrices: {
          "car-rental-4-seat": "800,000",
          "car-rental-7-seat": "1,100,000",
          "car-rental-16-seat": "1,500,000",
          "car-rental-29-seat": "2,500,000",
          "car-rental-45-seat": "3,500,000",
          "car-rental-limousine": "2,000,000",
        },
      },
      destinations: {
        h2: "Where can you go from Buon Ma Thuot?",
        lead:
          "Buon Ma Thuot is the gateway to the whole Central Highlands, the natural starting point for a wide range of trips. Whether you want to tour the best-known sights within Dak Lak or head further out across province lines, our fleet will collect you door to door. These are the destinations our rental customers ask for most:",
        items: [
          { name: "Buon Don", body: "— the legendary home of elephant hunting and taming, with its suspension bridge and the Serepok river, about 40km from the centre." },
          { name: "Lak Lake", body: "— the largest natural freshwater lake in the Central Highlands, with dreamlike scenery, elephant rides and dugout canoe trips." },
          { name: "Dray Nur Waterfall", body: "— one of the most majestic waterfalls in the Central Highlands and an unmissable stop in Dak Lak." },
          { name: "Yok Don National Park", body: "— a vast dry dipterocarp forest, ideal for anyone who loves wild nature and forest exploration tours." },
          { name: "Da Lat", body: "— the dreamy city of a thousand flowers, a familiar and much-loved inter-provincial trip from Buon Ma Thuot." },
          { name: "Nha Trang", body: "— a lively coastal city and an ideal seaside break for families and groups of friends." },
          { name: "Pleiku", body: "— the mountain town of Gia Lai, with the clear waters of Bien Ho and distinctive Central Highlands culture, close enough for a day trip." },
        ],
        outro:
          "Beyond these destinations we also take on any itinerary you have in mind, from airport transfers and coffee festival trips to business travel and multi-day tours. Tell us where you want to go and we will advise on the best route and vehicle.",
      },
      featured: {
        title: "Dak Lak travel car rental — good rates, with driver",
        subtitle:
          "From 13,000 VND/km · Buon Don, Lak Lake, inter-provincial · Available 24/7",
      },
      cta: {
        h2: "Not sure which vehicle fits?",
        body: "Get in touch for a fast, accurate quote.",
        button: "Contact us now",
      },
    },

    contact: {
      h1: "Get in touch",
      lead:
        "Contact DVDL Dai Duong Ban Me for tour advice, a car rental quote or any other help you need.",
      labels: {
        phone: "Phone",
        zalo: "Zalo support",
        email: "Email",
        address: "Address",
        facebook: "Facebook",
      },
      facebookLinkText: "Message the driver directly",
      form: {
        heading: "Send a request",
        namePlaceholder: "Full name",
        phonePlaceholder: "Phone number",
        contentPlaceholder: "What do you need?",
        submit: "Send request",
        submitting: "Sending...",
        success: "Request sent! We will get back to you shortly.",
        error: "Something went wrong. Please try again.",
      },
      mapHeading: "Where to find us",
      responseNote: "We aim to reply within one working hour.",
    },

    about: {
      hero: {
        imageAlt: "About our travel company",
        h1: "About Us — DVDL Dai Duong Ban Me",
      },
      origin: {
        h2: "It started with a passion",
        paragraph1Html:
          'Founded in <strong>2018</strong>, <strong>DVDL Dai Duong Ban Me</strong> set out to make every trip more than a journey — a way to discover the culture, nature and people of the Central Highlands. We began as a group of travel lovers determined to build a service that <em>“tailors every single trip”</em>.',
        paragraph2Html:
          'Across <strong>almost ten years</strong> of operation we have proudly served thousands of travellers and created journeys that were memorable, safe and full of feeling. Every trip is a story, and we are always ready to help you write it.',
        imageAlt: "A travel journey",
      },
      values: {
        h2: "Our core values",
        items: [
          {
            icon: "users",
            title: "Customers at the centre",
            description:
              "Every service we offer is designed around the customer's experience and satisfaction.",
          },
          {
            icon: "settings",
            title: "Flexible & personalised",
            description:
              "We adapt to the specific requirements of each individual and each group.",
          },
          {
            icon: "badgeCheck",
            title: "Transparent & clear",
            description:
              "An all-in quote up front, with no unwelcome extras later.",
          },
          {
            icon: "car",
            title: "Consistent quality",
            description:
              "Every vehicle is serviced on schedule and thoroughly cleaned before each trip.",
          },
        ],
      },
      whyRent: {
        h2: "Why rent from DVDL Dai Duong Ban Me",
        items: [
          "The dedication and enthusiasm of our team is a value that keeps growing.",
          "Committed, attentive drivers with thorough professional training.",
          "A 4 to 45-seat fleet built for tourism, with late-model, well-equipped premium vehicles.",
          "We are committed to balancing quality against cost, so customers get what they need at a fair price.",
          "Our customer care covers everything you might need: free consultation, 24/7 support, and multiple ways to reach us — phone, website and, notably, in-person service at your door.",
          "Through the constant effort of our staff, DVDL Dai Duong Ban Me works to give every customer the best possible journey. We hope to have the chance to serve you soon.",
        ],
      },
      services: {
        h2: "Featured services",
        items: [
          "Tours across the Central Highlands and nationwide",
          "Custom-designed tours for individuals and companies",
          "Late-model 4 to 45-seat tourist vehicle rental",
          "For visitors travelling to Dak Lak for leisure, business or work, we also provide the practical information that customers from inside and outside the province need:",
          "Free tour information and itinerary design to match what you want to see. Advice on sights, entertainment, comfortable and affordable restaurants and hotels, and the best travel and shopping options.",
          "Advice and support in organising conferences and seminars at well-located venues that are convenient for meetings and travel.",
          "Reception and coordination for domestic and international individuals, organisations and businesses visiting Dak Lak for work or market research.",
        ],
        imageAlt: "Travel services",
      },
      commitments: {
        h2: "Our commitments",
        blocks: [
          {
            h3: "1. Absolute safety for our customers",
            leadHtml:
              "Our vehicles are serviced on schedule and technically inspected before every trip.<br/> You can rely completely on their safety, reliability and smooth ride on any journey.",
          },
          {
            h3: "2. Consistent, attentive service",
            leadHtml:
              "Every vehicle is carefully prepared to give you the best possible experience:",
            bullets: [
              "Cleaned and freshened before the pick-up time.",
              "Stocked with bottled water, cold towels and free Wi-Fi.",
              "A courteous, professional driver with years of experience who is always on time.",
              "We stay with you and support you for the whole journey.",
            ],
          },
          {
            h3: "3. Transparent and flexible pricing",
            leadHtml:
              "We put clarity and fairness first in every transaction:",
            bullets: [
              "A quote up front — no charges beyond the agreed itinerary.",
              "Flexible rental terms: per trip, per day or per month.",
              "You pay exactly the amount that was agreed.",
            ],
          },
        ],
        imageAlt: "A commitment to service quality",
      },
      cta: {
        h2: "Ready for your next journey?",
        body:
          "Get in touch for advice and help planning the trip you have been dreaming about.",
        button: "Contact us now",
      },
    },
  },

  carRentalDetail: {
    back: "← Back to all services",
    tldrLabel: "In short:",
    ctaHeading: "Need to book a car or get a quote?",
    ctaButton: "Contact us now",
    relatedHeading: "Related services",
    readMore: "Read more →",
  },
} satisfies Dictionary;

export default en;
