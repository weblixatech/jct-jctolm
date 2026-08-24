import { getOptimisedPaths } from '../utils/imageUtils';

/**
 * Drop-in replacement for <img> that serves optimised WebP via <picture>.
 *
 * Props:
 *  url       – image name or path e.g. "040", "/images/optimised/040-900w.webp"
 *  alt       – descriptive alt text
 *  className – CSS classes
 *  sizes     – optional custom srcset sizes attribute
 *  priority  – if true, sets loading="eager" decoding="async" fetchpriority="high"
 */
export default function OptImg({
  url,
  alt = '',
  className = '',
  sizes,
  priority = false,
  width,
  height,
  onClick,
  style,
  role,
  tabIndex,
  onKeyDown,
}) {
  const p = getOptimisedPaths(url);
  const defaultSizes = sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={p.srcSet}
        sizes={defaultSizes}
      />
      <img
        src={p.fallback}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        width={width}
        height={height}
        onClick={onClick}
        style={style}
        role={role}
        tabIndex={tabIndex}
        onKeyDown={onKeyDown}
      />
    </picture>
  );
}
