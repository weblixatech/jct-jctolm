/**
 * JCT Gallery — Image Optimisation Script
 * ─────────────────────────────────────────
 * Run once after dropping HD photos into public/images/
 *
 *   npm install --save-dev sharp
 *   node optimise-images.mjs
 *
 * What it does:
 *   • Converts every .jpg / .jpeg / .png in public/images/ to WebP
 *   • Generates 3 sizes per image: 900w · 1400w · 1800w
 *   • Outputs into public/images/optimised/
 *   • Sanitises filenames (spaces → hyphens, drops double extensions)
 *   • Prints a before/after size comparison for each file
 *
 * Nothing in your original public/images/ folder is touched.
 */

import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { existsSync } from 'fs';
import { join, parse, basename } from 'path';

// ── Config ──────────────────────────────────────────────────────────────────
const INPUT_DIR  = existsSync('./raw_images') ? './raw_images' : './public/images';
const OUTPUT_DIR = './public/images/optimised';

const SIZES = [
  { suffix: '-500w',  width: 500  },   // thumbnail / mobile grid
  { suffix: '-900w',  width: 900  },   // tablet / standard column
  { suffix: '-1400w', width: 1400 },   // high-DPI desktop
  { suffix: '-1800w', width: 1800 },   // full-res lightbox / hero
];

const WEBP_QUALITY = 82;   // visually lossless; sweet spot for size vs quality
const EXTENSIONS   = new Set(['.jpg', '.jpeg', '.png']);
// ────────────────────────────────────────────────────────────────────────────

/** Sanitise a filename:
 *  "0013 (2).jpg.jpeg"  →  "0013-2"
 *  "IMG_9393 copy.jpg.jpeg"  →  "IMG_9393-copy"
 */
function sanitiseName(filename) {
  let name = basename(filename);

  // Strip ALL extensions (handles .jpg.jpeg double extension)
  while (parse(name).ext) {
    name = parse(name).name;
  }

  return name
    .replace(/\s+/g, '-')      // spaces → hyphens
    .replace(/[()]/g, '')      // remove parentheses
    .replace(/-+/g, '-')       // collapse multiple hyphens
    .replace(/^-|-$/g, '');    // trim leading/trailing hyphens
}

function formatBytes(bytes) {
  if (bytes < 1024)       return `${bytes} B`;
  if (bytes < 1048576)    return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(2)} MB`;
}

async function run() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = (await readdir(INPUT_DIR)).filter(f => {
    const ext = parse(f).ext.toLowerCase();
    // Skip the optimised subfolder itself and non-image files
    return EXTENSIONS.has(ext) && !f.startsWith('.');
  });

  if (files.length === 0) {
    console.log('⚠️  No images found in', INPUT_DIR);
    console.log('    Drop your HD photos there and re-run.');
    return;
  }

  console.log(`\n📸  Found ${files.length} image(s) — generating ${SIZES.length} WebP sizes each\n`);
  console.log('─'.repeat(72));

  let totalIn = 0, totalOut = 0;

  for (const file of files) {
    const inputPath = join(INPUT_DIR, file);
    const baseName  = sanitiseName(file);
    const { size: originalSize } = await stat(inputPath);
    totalIn += originalSize;

    let fileOut = 0;
    const generated = [];

    for (const { suffix, width } of SIZES) {
      const outName = `${baseName}${suffix}.webp`;
      const outPath = join(OUTPUT_DIR, outName);

      await sharp(inputPath)
        .rotate()                                     // auto-orient based on EXIF
        .resize({ width, withoutEnlargement: true })  // never upscale
        .webp({ quality: WEBP_QUALITY, effort: 5 })   // effort 5 = good compression, not slow
        .toFile(outPath);

      const { size } = await stat(outPath);
      fileOut += size;
      generated.push(`${outName} (${formatBytes(size)})`);
    }

    totalOut += fileOut;
    const saving = Math.round((1 - fileOut / (originalSize * SIZES.length)) * 100);

    console.log(`✅  ${file}`);
    console.log(`    Original : ${formatBytes(originalSize)}`);
    generated.forEach(g => console.log(`    → ${g}`));
    console.log(`    Avg saving vs original : ~${saving}%\n`);
  }

  console.log('─'.repeat(72));
  console.log(`\n🎉  Done!`);
  console.log(`    Total input  : ${formatBytes(totalIn)}`);
  console.log(`    Total output : ${formatBytes(totalOut)} (all sizes combined)`);
  console.log(`    Output folder: ${OUTPUT_DIR}\n`);
}

run().catch(err => {
  console.error('❌  Error:', err.message);
  process.exit(1);
});
