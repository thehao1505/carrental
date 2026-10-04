import { client } from "./client";

const SLUGS_QUERY = `*[_type == "post" && defined(slug.current)].slug.current`;

/**
 * How long a fetched slug list is trusted. Matches the 30s revalidate of the
 * article page, so a newly published post 404s for at most as long as its page
 * content would be stale anyway.
 */
const TTL_MS = 30_000;

let cache: { slugs: ReadonlySet<string>; fetchedAt: number } | null = null;
let inflight: Promise<ReadonlySet<string>> | null = null;

async function fetchSlugs(): Promise<ReadonlySet<string>> {
  const slugs = new Set(await client.fetch<string[]>(SLUGS_QUERY));
  cache = { slugs, fetchedAt: Date.now() };
  return slugs;
}

/**
 * Whether a published post has this slug. Used by src/proxy.ts to 404 unknown
 * article URLs before they reach the router: a notFound() from inside the
 * matched article route renders as a client-side error shell, not real HTML.
 *
 * Answers from an in-memory slug list refreshed at most every TTL_MS, so it
 * costs one Sanity query per instance per 30s rather than one per request.
 * Fails open: if Sanity can't be reached the request goes through and the
 * article page does its own 404.
 */
export async function postExists(slug: string): Promise<boolean> {
  if (cache && Date.now() - cache.fetchedAt < TTL_MS) {
    return cache.slugs.has(slug);
  }

  try {
    inflight ??= fetchSlugs().finally(() => {
      inflight = null;
    });
    return (await inflight).has(slug);
  } catch {
    return true;
  }
}
