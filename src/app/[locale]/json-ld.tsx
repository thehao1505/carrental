/** Renders a page's JSON-LD blocks, one <script> each. */
export function JsonLd({ schemas }: { schemas?: Record<string, unknown>[] }) {
  if (!schemas?.length) return null;
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
