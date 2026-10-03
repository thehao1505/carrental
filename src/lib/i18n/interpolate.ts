/**
 * Fills `{name}` placeholders in a dictionary string.
 *
 * Dictionaries hold data only (see ./types), so anything that needs a runtime
 * value is expressed as a token and substituted at render time.
 */
export function interpolate(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
