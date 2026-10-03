import { getCarRentalData } from "@/lib/data";
import { carRentalUrl, routePaths, siteUrl, url } from "@/lib/i18n/routes";

const LOCALE = "en" as const;

export const revalidate = 3600;

// English counterpart of /llms.txt. Every page here exists in English; the only
// Vietnamese-only content left is the blog article bodies, which is stated
// explicitly rather than quietly linked to.
export async function GET() {
  const vehicles = getCarRentalData(LOCALE);

  const lines: string[] = [
    `# DVDL Dai Duong Ban Me`,
    ``,
    `> Car rental with a professional driver in Buon Ma Thuot, Dak Lak, Vietnam. 4, 7, 16, 29 and 45-seat vehicles plus limousines. Airport transfers, sightseeing tours, and inter-provincial trips across the Central Highlands.`,
    `- Vietnamese version: ${siteUrl}/llms.txt`,
    ``,
    `## Main pages`,
    ``,
    `- [Home](${siteUrl}/en): Car rental and tour services in Dak Lak`,
    `- [Car rental](${url("carRental", LOCALE)}): All vehicle classes, reference rates and booking process`,
    `- [Price list](${url("pricing", LOCALE)}): Airport transfers, per-kilometre rates and fixed route prices for 4-45 seat vehicles`,
    `- [Dak Lak tours](${url("tours", LOCALE)}): Private 1-day, 2D1N and 3D2N tour packages with a driver, from 1,200,000 VND per vehicle`,
    `- [Dak Lak tourist car rental](${url("carRentalTravel", LOCALE)}): Sightseeing routes to Buon Don, Lak Lake and Dray Nur, priced per kilometre and per route`,
    `- [Corporate car rental](${url("carRentalCorporate", LOCALE)}): Monthly, quarterly and annual contracts, 10% VAT invoices, staff shuttles and conference transport`,
    `- [About us](${url("about", LOCALE)}): Company background, values and service commitments`,
    `- [Contact](${url("contact", LOCALE)}): Phone, Zalo, email and office address`,
    `- [News](${url("news", LOCALE)}): Travel guides and company news — English page, Vietnamese articles`,
    ``,
    `## Vehicles`,
    ``,
    ...vehicles.map(
      (item) => `- [${item.title}](${carRentalUrl(item.slug, LOCALE)})`,
    ),
    ``,
    `## Policies`,
    ``,
    `- [Privacy policy](${url("privacyPolicy", LOCALE)}): Data collection and your rights under Decree 13/2023/ND-CP`,
    `- [Booking & cancellation policy](${url("shippingPolicy", LOCALE)}): Booking lead times, deposits, cancellation fees and liability`,
    ``,
    `## Notes`,
    ``,
    `- Prices are quoted in Vietnamese dong (VND) and include driver and fuel.`,
    `- Road tolls, parking and sightseeing entry fees are not included.`,
    `- Blog article bodies are published in Vietnamese only; the English listing at ${url("news", LOCALE)} links through to them at ${siteUrl}${routePaths.news.vi}.`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
