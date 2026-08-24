import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import OptImg from '../Components/OptImg';
import { getOptimisedPaths } from '../utils/imageUtils';

/* ─── Lightbox component (native <dialog>) ─── */
const Lightbox = ({ images, startIndex, onClose }) => {
  const [index, setIndex] = useState(startIndex);
  const dialogRef = useRef(null);

  const current = images[index];
  const paths = getOptimisedPaths(current.url);

  const prev = useCallback(() => setIndex(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex(i => (i + 1) % images.length), [images.length]);

  // Open native dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    // Lock body scroll
    document.body.classList.add('lightbox-open');
    return () => document.body.classList.remove('lightbox-open');
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next, onClose]);

  // Prefetch only next & previous high-res images for instant responsiveness
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const nextIdx = (index + 1) % images.length;
    const prevIdx = (index - 1 + images.length) % images.length;
    const nextImgSrc = getOptimisedPaths(images[nextIdx].url).src1800;
    const prevImgSrc = getOptimisedPaths(images[prevIdx].url).src1800;

    const img1 = new Image();
    img1.src = nextImgSrc;
    const img2 = new Image();
    img2.src = prevImgSrc;
  }, [index, images]);

  // Click backdrop (the <dialog> element itself) to close
  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onCancel={(e) => { e.preventDefault(); onClose(); }}
      style={{
        border: 'none',
        background: 'transparent',
        padding: 0,
        maxWidth: '100vw',
        maxHeight: '100vh',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Backdrop */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(10,10,10,0.92)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.18)',
            color: '#fff',
            borderRadius: '50%',
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(202,161,72,0.7)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
        >
          <X size={20} />
        </button>

        {/* Prev arrow */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous image"
          style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.18)',
            color: '#fff',
            borderRadius: '50%',
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(202,161,72,0.7)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Image container — click on image does NOT close */}
        <div
          onClick={e => e.stopPropagation()}
          style={{
            maxWidth: '90vw',
            maxHeight: '88vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <picture>
            <source
              type="image/webp"
              srcSet={`${paths.src900} 900w, ${paths.src1400} 1400w, ${paths.src1800} 1800w`}
              sizes="(max-width: 1024px) 90vw, 1400px"
            />
            <img
              key={paths.src1800}
              src={paths.src1800}
              alt={current.title}
              loading="eager"
              decoding="async"
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '0.75rem',
                boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
                display: 'block',
              }}
            />
          </picture>

          {/* Caption */}
          <div style={{ textAlign: 'center' }}>
            <span style={{ color: '#CAA148', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 700 }}>
              {current.category}
            </span>
            <p style={{ color: '#fff', fontFamily: 'serif', fontStyle: 'italic', fontSize: '1.1rem', marginTop: '0.2rem' }}>
              {current.title}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', marginTop: '0.25rem' }}>
              {index + 1} / {images.length}
            </p>
          </div>
        </div>

        {/* Next arrow */}
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next image"
          style={{
            position: 'absolute',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.18)',
            color: '#fff',
            borderRadius: '50%',
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(202,161,72,0.7)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </dialog>
  );
};

/* ─── Gallery page ─── */
const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = [
    { url: '/images/optimised/0013-2-900w.webp', title: 'Houseboat Experience', category: 'Backwaters' },
    { url: '/images/optimised/0015-900w.webp',     title: 'Kerala Beauty',        category: 'Exterior'   },
    { url: '/images/optimised/002-900w.webp',      title: 'Premium Interiors',    category: 'Interior'   },
    { url: '/images/optimised/005-900w.webp',      title: 'Luxury Spaces',        category: 'Spaces'     },
    { url: '/images/optimised/006-900w.webp',      title: 'Nature Connection',    category: 'Nature'     },
    { url: '/images/optimised/007-900w.webp',      title: 'Tranquil Waters',      category: 'Backwaters' },
    { url: '/images/optimised/009-900w.webp',      title: 'Boat Exterior',        category: 'Exterior'   },
    { url: '/images/optimised/010-900w.webp',      title: 'Cozy Room',            category: 'Interior'   },
    { url: '/images/optimised/011-900w.webp',      title: 'Dining Area',          category: 'Spaces'     },
    { url: '/images/optimised/013-900w.webp',      title: 'Scenic View',          category: 'Nature'     },
    { url: '/images/optimised/017-900w.webp',      title: 'Backwater Serenity',   category: 'Backwaters' },
    { url: '/images/optimised/019-900w.webp',      title: 'Vessel Tour',          category: 'Exterior'   },
    { url: '/images/optimised/022-900w.webp',      title: 'Living Space',         category: 'Interior'   },
    { url: '/images/optimised/024-900w.webp',      title: 'Spacious Deck',        category: 'Spaces'     },
    { url: '/images/optimised/026-900w.webp',      title: 'Lush Greens',          category: 'Nature'     },
    { url: '/images/optimised/027-900w.webp',      title: 'Morning Light',        category: 'Backwaters' },
    { url: '/images/optimised/028-900w.webp',      title: 'Traditional Design',   category: 'Exterior'   },
    { url: '/images/optimised/031-900w.webp',      title: 'Comfortable Stay',     category: 'Interior'   },
    { url: '/images/optimised/037-900w.webp',      title: 'Event Space',          category: 'Spaces'     },
    { url: '/images/optimised/038-900w.webp',      title: 'Palm Trees',           category: 'Nature'     },
    { url: '/images/optimised/040-900w.webp',      title: 'Sunset Cruise',        category: 'Backwaters' },
    { url: '/images/optimised/043-900w.webp',      title: 'Luxury Fleet',         category: 'Exterior'   },
    { url: '/images/optimised/045-900w.webp',      title: 'Elegant Design',       category: 'Interior'   },
    { url: '/images/optimised/049-900w.webp',      title: 'Gathering Area',       category: 'Spaces'     },
    { url: '/images/optimised/050-900w.webp',      title: 'Natural Beauty',       category: 'Nature'     },
    { url: '/images/optimised/053-900w.webp',      title: 'Peaceful Journey',     category: 'Backwaters' },
    { url: '/images/optimised/056-900w.webp',      title: 'Signature Vessel',     category: 'Exterior'   },
    { url: '/images/optimised/DSC09355-copy-900w.webp', title: 'Premium Comfort', category: 'Interior'   },
    { url: '/images/optimised/DSC09363-900w.webp', title: 'Grand Spaces',         category: 'Spaces'     },
    { url: '/images/optimised/IMG_9391-900w.webp', title: 'Vibrant Views',        category: 'Nature'     },
    { url: '/images/optimised/IMG_9393-copy-900w.webp', title: 'Golden Hour',     category: 'Backwaters' },
    { url: '/images/optimised/IMG_9395-900w.webp', title: 'Majestic Boat',        category: 'Exterior'   },
    { url: '/images/optimised/IMG_9397-copy-900w.webp', title: 'Modern Amenities',category: 'Interior'   },
  ];

  return (
    <div className="bg-[#FDFCFB]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptImg
            url="/images/optimised/DSC09363-1400w.webp"
            alt="Gallery hero"
            className="w-full h-full object-cover object-[65%_center] md:object-center scale-105"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/50" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] uppercase tracking-[0.5em] mb-6 block font-medium text-gold-400"
          >
            Visual Journey
          </motion.span>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif italic mb-4"
          >
            Our <span className="not-italic font-bold">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-stone-300 text-sm mt-2 tracking-wide"
          >
            Click any image to view full-size
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.05, 0.4) }}
                  className="relative group overflow-hidden rounded-xl break-inside-avoid cursor-pointer"
                  onClick={() => setLightboxIndex(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${img.title} in lightbox`}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxIndex(i); }}
                >
                  <OptImg
                    url={img.url}
                    alt={img.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={i < 4}
                  />

                  <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <span className="text-gold-400 text-[10px] uppercase tracking-widest font-bold mb-2">
                      {img.category}
                    </span>
                    <h4 className="text-white text-2xl font-serif italic">{img.title}</h4>
                    {/* Zoom hint icon */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {/* Trust Quote */}
      <section className="py-32 bg-stone-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-8">
          <Camera className="text-gold-500 mx-auto mb-8" size={40} />
          <h2 className="text-4xl md:text-5xl font-serif italic mb-8">
            Capturing the Essence of Kerala
          </h2>
          <p className="text-stone-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Every corner of our vessels is designed to be a frame-worthy moment. From the morning
            mist to the golden sunsets, witness the beauty of Alleppey through our lens.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
