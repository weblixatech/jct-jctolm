/**
 * JCT Prakrithi — Optimised WebP Image Helper
 * ──────────────────────────────────────────────────────────
 * Derives optimised WebP srcSet paths (500w, 900w, 1400w, 1800w)
 * from any image filename or URL.
 */

export function getOptimisedPaths(url) {
  if (!url) {
    return {
      baseName: '',
      src500: '',
      src900: '',
      src1400: '',
      src1800: '',
      srcSet: '',
      fallback: ''
    };
  }

  const filename = url.split('/').pop();
  let base = filename;

  // Strip ALL extensions (.jpg.jpeg, .webp, .jpg, .png, etc.)
  while (base.includes('.')) {
    base = base.substring(0, base.lastIndexOf('.'));
  }

  // Strip width suffix if already present (-500w, -900w, -1400w, -1800w)
  base = base.replace(/-(500w|900w|1400w|1800w)$/, '');

  // Sanitise filename to match optimise-images.mjs exactly
  const sanitised = base
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  const dir = '/images/optimised';
  const src500 = `${dir}/${sanitised}-500w.webp`;
  const src900 = `${dir}/${sanitised}-900w.webp`;
  const src1400 = `${dir}/${sanitised}-1400w.webp`;
  const src1800 = `${dir}/${sanitised}-1800w.webp`;

  return {
    baseName: sanitised,
    src500,
    src900,
    src1400,
    src1800,
    srcSet: `${src500} 500w, ${src900} 900w, ${src1400} 1400w, ${src1800} 1800w`,
    fallback: src900, // Safe WebP fallback
  };
}
