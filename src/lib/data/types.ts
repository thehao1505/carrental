/** Per-locale copy for one vehicle. Slug and image live in the shared registry. */
export type CarRentalCopy = {
  title: string;
  /** Plain-text summary; also the source of the price range in prices.ts. */
  tldr: string;
  /** Trusted, hand-written HTML rendered on the detail page. */
  content: string;
};
