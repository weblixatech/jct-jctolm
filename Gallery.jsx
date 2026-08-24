import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import OptImg from './src/Components/OptImg';

/* ─── Gallery page ─── */
const Gallery = () => {
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
            className="w-full h-full object-cover scale-105"
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
                className="relative group overflow-hidden rounded-xl break-inside-avoid"
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
