/**
 * Image optimization script — Phase 4
 * Converts JPG/PNG in public/images/ to WebP with quality 80.
 * Original files are kept; WebP versions are saved alongside them.
 *
 * Usage:
 *   npm install sharp   (one-time, if not installed)
 *   node scripts/optimize-images.mjs
 *
 * After running, update image src references in:
 *   src/lib/data/car-rental.ts
 *   src/lib/data/articles.ts
 *   src/features/**
 *   src/app/**
 */

import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

let sharp;
try {
  sharp = require("sharp");
} catch {
  console.error(
    "sharp is not installed. Run: npm install sharp --save-dev\nThen re-run this script.",
  );
  process.exit(1);
}

const INPUT_DIR = new URL("../public/images", import.meta.url).pathname;
const QUALITY = 80;
const SKIP_EXTENSIONS = new Set([".svg", ".webp", ".gif"]);

async function optimizeImages() {
  const files = await readdir(INPUT_DIR);
  const targets = files.filter(
    (f) => !SKIP_EXTENSIONS.has(extname(f).toLowerCase()),
  );

  console.log(`Found ${targets.length} images to process...\n`);

  const results = { converted: [], skipped: [], errors: [] };

  for (const file of targets) {
    const inputPath = join(INPUT_DIR, file);
    const outputName = basename(file, extname(file)) + ".webp";
    const outputPath = join(INPUT_DIR, outputName);

    try {
      const inputStat = await stat(inputPath);
      const inputKB = Math.round(inputStat.size / 1024);

      await sharp(inputPath).webp({ quality: QUALITY }).toFile(outputPath);

      const outputStat = await stat(outputPath);
      const outputKB = Math.round(outputStat.size / 1024);
      const saving = Math.round((1 - outputStat.size / inputStat.size) * 100);

      console.log(
        `✅ ${file} → ${outputName}  (${inputKB}KB → ${outputKB}KB, -${saving}%)`,
      );
      results.converted.push({ file, outputName, inputKB, outputKB, saving });
    } catch (err) {
      console.error(`❌ ${file}: ${err.message}`);
      results.errors.push({ file, error: err.message });
    }
  }

  console.log(`\n--- Summary ---`);
  console.log(`Converted : ${results.converted.length}`);
  console.log(`Errors    : ${results.errors.length}`);

  if (results.converted.length > 0) {
    const totalInputKB = results.converted.reduce((s, r) => s + r.inputKB, 0);
    const totalOutputKB = results.converted.reduce((s, r) => s + r.outputKB, 0);
    const totalSaving = Math.round((1 - totalOutputKB / totalInputKB) * 100);
    console.log(
      `Total saved: ${totalInputKB}KB → ${totalOutputKB}KB (-${totalSaving}%)`,
    );
    console.log(
      `\nNext step: Update image src references from .jpg/.png → .webp in:`,
    );
    console.log(`  src/lib/data/car-rental.ts`);
    console.log(`  src/lib/data/articles.ts`);
    console.log(`  src/features/**`);
    console.log(`  src/app/**`);
  }
}

optimizeImages();
