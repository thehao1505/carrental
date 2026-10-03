import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Accented Latin letters, covering every Vietnamese diacritic (U+00C0–U+1EF9).
const ACCENTED = "/[\\u00C0-\\u1EF9]/";
const NO_HARDCODED_COPY =
  "Hardcoded Vietnamese in a shared component renders on English pages too. " +
  "Move it to the dictionary (src/lib/i18n/dictionaries) or the page's content.ts.";

const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "out/**", "build/**", "next-env.d.ts"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Components in src/features render for every locale, so user-facing copy
    // has to come in through props. Comments are not checked; a deliberate
    // exception (e.g. the brand name, or text only staff read) takes an
    // eslint-disable comment saying why.
    files: ["src/features/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        { selector: `JSXText[value=${ACCENTED}]`, message: NO_HARDCODED_COPY },
        { selector: `Literal[value=${ACCENTED}]`, message: NO_HARDCODED_COPY },
        { selector: `TemplateElement[value.raw=${ACCENTED}]`, message: NO_HARDCODED_COPY },
      ],
    },
  },
];

export default eslintConfig;
