import { motion } from 'framer-motion';
import { ArrowRight, Users, Anchor, Waves, Coffee, Utensils, Sparkles, Leaf, Award, Heart, Building2, Music, Cake, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptImg from '../Components/OptImg';

/* ─── GPU-accelerated CSS Infinite Marquee ─── */
const MarqueeRow = ({ images, direction = 'left', duration = 35 }) => {
  // Duplicate images for seamless 50% loop
  const slides = [...images, ...images];

  return (
    <div
      className="overflow-hidden w-full group"
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
      }}
    >
      <div
        className={`flex gap-5 w-max group-hover:[animation-play-state:paused] ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
        style={{
          animationDuration: `${duration}s`,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        {slides.map((img, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 rounded-2xl overflow-hidden group/card cursor-pointer"
            style={{ width: 380, height: 260 }}
          >
            <OptImg
              url={img.src}
              alt={img.label}
              className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
              sizes="380px"
              priority={i < 4}
            />
            {/* Hover label overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500 flex items-end p-5">
              <span className="text-white font-serif italic text-lg tracking-wide">{img.label}</span>
            </div>
            {/* Subtle always-on vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};


const Home = () => {
  const categories = [
    {
      title: 'Luxury Suite',
      desc: '2 Guests, 1 Master Bedroom, Private Balcony',
      img: '/images/optimised/IMG_9395-900w.webp'
    },
    {
      title: 'Premium Family',
      desc: '6 Guests, 3 Bedrooms, Upper Deck Lounge',
      img: '/images/optimised/028-900w.webp'
    },
    {
      title: 'Grand Event Vessel',
      desc: 'Up to 100 Guests, Banquet Hall, Open Deck',
      img: '/images/optimised/027-900w.webp'
    }
  ];

  const features = [
    { icon: <Coffee size={24} />, name: 'Rooftop Lounges' },
    { icon: <Waves size={24} />, name: 'Jacuzzi Suites' },
    { icon: <Anchor size={24} />, name: 'Private Cruises' },
    { icon: <Utensils size={24} />, name: 'Gourmet Dining' },
  ];

  // Gallery images — two rows, curated selection
  const rowOne = [
    { src: '/images/optimised/IMG_9395-900w.webp',        label: 'Luxury Suite' },
    { src: '/images/optimised/DSC09363-900w.webp',        label: 'Backwater Sunset' },
    { src: '/images/optimised/053-900w.webp',             label: 'Luxury Deck' },
    { src: '/images/optimised/IMG_9393-copy-900w.webp',   label: 'Premium Interiors' },
    { src: '/images/optimised/050-900w.webp',             label: 'Grand Events' },
    { src: '/images/optimised/045-900w.webp',             label: 'Scenic Voyage' },
    { src: '/images/optimised/040-900w.webp',             label: 'Premium Lounge' },
    { src: '/images/optimised/009-900w.webp',             label: 'Serene Waters' },
    { src: '/images/optimised/006-900w.webp',             label: 'Golden Hour' },
    { src: '/images/optimised/002-900w.webp',             label: 'The Cruise' },
  ];

  const rowTwo = [
    { src: '/images/optimised/DSC09355-copy-900w.webp',   label: 'Evening Cruise' },
    { src: '/images/optimised/031-900w.webp',             label: 'Private Party' },
    { src: '/images/optimised/028-900w.webp',             label: 'Family Cruise' },
    { src: '/images/optimised/IMG_9397-copy-900w.webp',   label: 'Elegant Spaces' },
    { src: '/images/optimised/027-900w.webp',             label: 'Event Vessel' },
    { src: '/images/optimised/0015-900w.webp',            label: 'Sunset Dining' },
    { src: '/images/optimised/019-900w.webp',             label: 'Dining at Sea' },
    { src: '/images/optimised/011-900w.webp',             label: 'Nature Trail' },
    { src: '/images/optimised/007-900w.webp',             label: 'Tropical Calm' },
    { src: '/images/optimised/005-900w.webp',             label: 'Heritage Charm' },
  ];

  return (
    <div className="bg-[#FDFCFB] overflow-hidden">

      {/* ─── Global keyframes ─── */}
      <style>{`
        @keyframes jct-wave-move {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="relative min-h-screen flex items-stretch overflow-hidden" style={{ isolation: 'isolate' }}>

        {/* Slow-drift background boat image */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ scale: [1, 1.06, 1], x: [0, -12, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        >
          <OptImg
            url="/images/optimised/DSC09363-1400w.webp"
            alt="JCT Prakrithi Luxury Cruise — Kerala Backwaters"
            className="w-full h-full object-cover object-[65%_center] md:object-center"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-stone-950/85 via-stone-950/40 to-stone-950/90 md:bg-gradient-to-r md:from-stone-950/93 md:via-stone-900/65 md:to-stone-900/10" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-stone-950/80 via-transparent to-transparent md:from-stone-950/70" />

        {/* Floating glow orbs */}
        <motion.div
          className="absolute z-[2] rounded-full pointer-events-none"
          style={{ width: 420, height: 420, right: '8%', bottom: '15%', background: 'radial-gradient(circle, rgba(202,161,72,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }}
          animate={{ y: [0, -30, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute z-[2] rounded-full pointer-events-none"
          style={{ width: 320, height: 320, right: '22%', top: '10%', background: 'radial-gradient(circle, rgba(56,178,172,0.12) 0%, transparent 70%)', filter: 'blur(50px)' }}
          animate={{ y: [0, 25, 0], x: [0, 15, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        <motion.div
          className="absolute z-[2] rounded-full pointer-events-none"
          style={{ width: 200, height: 200, right: '40%', top: '50%', background: 'radial-gradient(circle, rgba(251,191,36,0.10) 0%, transparent 70%)', filter: 'blur(30px)' }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />

        {/* Floating sparkle particles */}
        {[
          { size: 3, top: '18%', left: '38%', delay: 0 },
          { size: 2, top: '35%', left: '55%', delay: 1.2 },
          { size: 4, top: '55%', left: '70%', delay: 0.5 },
          { size: 2, top: '72%', left: '60%', delay: 2 },
          { size: 3, top: '25%', left: '80%', delay: 1.8 },
          { size: 2, top: '65%', left: '45%', delay: 0.8 },
          { size: 3, top: '45%', left: '88%', delay: 2.5 },
          { size: 2, top: '80%', left: '75%', delay: 1.5 },
        ].map((p, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute z-[3] rounded-full bg-gold-300 pointer-events-none"
            style={{ width: p.size, height: p.size, top: p.top, left: p.left }}
            animate={{ y: [0, -18, 0], opacity: [0, 1, 0], scale: [0.8, 1.4, 0.8] }}
            transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          />
        ))}

        {/* Hero content */}
        <div className="relative z-[4] w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center pt-28 pb-32">
          <div className="max-w-2xl w-full">

            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 text-gold-400 font-semibold tracking-[0.35em] uppercase text-[11px] mb-6"
            >
              <motion.span
                className="inline-block w-8 h-px bg-gold-400"
                animate={{ width: ['2rem', '3.5rem', '2rem'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              Kerala Backwater Tourism
            </motion.span>

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-serif text-white leading-[1.1] mb-3"
            >
              JCT Prakrithi
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl font-serif italic text-gold-300 mb-8"
            >
              Luxury Cruise
            </motion.p>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="w-16 h-px bg-gold-400 mb-8 origin-left"
            />

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-stone-200 text-base md:text-[15px] leading-relaxed font-light mb-5"
            >
              JCT Prakrithi Luxury Cruise is a trusted name in Kerala backwater tourism with over{' '}
              <span className="text-gold-300 font-semibold">25 years of experience</span>{' '}
              in delivering exceptional hospitality and memorable cruising experiences. Our eco-friendly luxury cruise is thoughtfully designed using sustainable materials while offering world-class comfort, elegance, and modern amenities.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-stone-300 text-base md:text-[15px] leading-relaxed font-light mb-10"
            >
              Featuring spacious air-conditioned rooms, stylish interiors, premium dining facilities, and personalized service — every detail is crafted to ensure a relaxing and luxurious experience on the breathtaking Kerala backwaters.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Link
                to="/services"
                className="bg-gold-500 text-stone-900 px-8 py-3.5 rounded-full font-bold flex items-center gap-3 hover:bg-gold-400 transition-all tracking-widest text-xs uppercase shadow-lg shadow-gold-500/30"
              >
                Explore Services <ArrowRight size={15} />
              </Link>
              <a
                href="https://wa.me/919895123012"
                className="border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all tracking-widest text-xs uppercase"
              >
                Private Enquiry
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.85 }}
              className="flex gap-10 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { value: '25+', label: 'Years Experience' },
                { value: '100+', label: 'Guests Capacity' },
                { value: '5★', label: 'Luxury Rating' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-serif font-bold text-gold-400">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* Animated SVG waves */}
        <div className="absolute bottom-0 left-0 w-full z-[5] pointer-events-none" style={{ lineHeight: 0 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            style={{ display: 'block', width: '200%', height: '80px' }}
          >
            <defs>
              <path id="jct-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g>
              <use xlinkHref="#jct-wave" x="50" y="2" fill="rgba(202,161,72,0.08)" style={{ animation: 'jct-wave-move 12s linear infinite' }} />
              <use xlinkHref="#jct-wave" x="50" y="5" fill="rgba(255,255,255,0.06)" style={{ animation: 'jct-wave-move 9s linear infinite reverse' }} />
              <use xlinkHref="#jct-wave" x="50" y="8" fill="#FDFCFB" style={{ animation: 'jct-wave-move 6s linear infinite' }} />
            </g>
          </svg>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-24 right-10 z-[6] flex flex-col items-center gap-2 text-white/50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-[9px] uppercase tracking-[0.3em] rotate-90 mb-3">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} className="text-gold-400" />
          </motion.div>
        </motion.div>

      </section>

      {/* ═══════════════ INTRO / ABOUT SECTION ═══════════════ */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-gold-600 font-bold tracking-[0.35em] uppercase text-xs">About JCT Prakrithi</span>
            <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mt-4 leading-tight">
              A Trusted Name in <br />
              <span className="italic text-gold-600">Kerala Backwater Tourism</span>
            </h2>
            <div className="w-24 h-px bg-gold-400 mx-auto mt-8" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <OptImg url="/images/optimised/053-900w.webp" alt="JCT Prakrithi Luxury Cruise" className="w-full h-full object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-stone-900 text-white px-8 py-6 rounded-2xl shadow-2xl border border-gold-500/20"
              >
                <p className="text-4xl font-serif font-bold text-gold-400">25+</p>
                <p className="text-xs uppercase tracking-[0.25em] text-stone-300 mt-1">Years of Excellence</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                <span className="font-semibold text-stone-900">JCT Prakrithi Luxury Cruise</span> is a trusted name in Kerala backwater tourism with over{' '}
                <span className="text-gold-600 font-semibold">25 years of experience</span> in delivering exceptional hospitality and memorable cruising experiences. Our eco-friendly luxury cruise is thoughtfully designed using sustainable materials while offering world-class comfort, elegance, and modern amenities.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                Featuring spacious air-conditioned rooms, stylish interiors, premium dining facilities, and personalized service, every detail is crafted to ensure a relaxing and luxurious experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-stone-50 border border-stone-100 hover:border-gold-200 hover:bg-gold-50/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-xl flex items-center justify-center mb-3"><Leaf size={22} /></div>
                  <h4 className="font-semibold text-stone-900 text-sm">Eco-Friendly</h4>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">Sustainable materials & green practices</p>
                </div>
                <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-stone-50 border border-stone-100 hover:border-gold-200 hover:bg-gold-50/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-xl flex items-center justify-center mb-3"><Award size={22} /></div>
                  <h4 className="font-semibold text-stone-900 text-sm">World-Class Luxury</h4>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">Premium amenities & elegant interiors</p>
                </div>
                <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-stone-50 border border-stone-100 hover:border-gold-200 hover:bg-gold-50/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-xl flex items-center justify-center mb-3"><Utensils size={22} /></div>
                  <h4 className="font-semibold text-stone-900 text-sm">Authentic Cuisine</h4>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">Traditional Kerala flavours onboard</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Event venue banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-stone-900 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <OptImg url="/images/optimised/DSC09355-copy-1400w.webp" alt="" className="w-full h-full object-cover" sizes="100vw" />
            </div>
            <div className="relative z-10">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <span className="text-gold-400 font-bold tracking-[0.3em] uppercase text-xs">The Perfect Venue</span>
                <h3 className="text-3xl md:text-5xl font-serif leading-tight">
                  A Unique Venue Amidst the <span className="italic text-gold-300">Breathtaking Backwaters</span>
                </h3>
                <p className="text-stone-300 text-lg leading-relaxed font-light">
                  Ideal for corporate conferences, destination weddings, family gatherings, private parties, concerts, cultural events, and special celebrations, JCT Prakrithi provides an unforgettable experience marked by comfort, sustainability, and warm hospitality — whether for business or leisure.
                </p>

                <div className="flex flex-wrap justify-center gap-3 pt-4">
                  {[
                    { icon: <Building2 size={14} />, label: 'Corporate Events' },
                    { icon: <Heart size={14} />, label: 'Destination Weddings' },
                    { icon: <Users size={14} />, label: 'Family Gatherings' },
                    { icon: <Sparkles size={14} />, label: 'Private Parties' },
                    { icon: <Music size={14} />, label: 'Concerts' },
                    { icon: <Cake size={14} />, label: 'Special Celebrations' },
                  ].map((badge, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-2 bg-white/10 border border-white/20 text-stone-200 text-xs px-4 py-2 rounded-full hover:bg-gold-500 hover:text-stone-900 hover:border-gold-500 transition-all duration-300 cursor-default font-medium tracking-wide"
                    >
                      {badge.icon}
                      {badge.label}
                    </motion.span>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-3 bg-gold-500 text-stone-900 px-10 py-4 rounded-full font-bold hover:bg-gold-400 transition-all tracking-widest text-xs uppercase"
                  >
                    Explore Our Services <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════ FEATURED PHOTO ═══════════════ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full overflow-hidden"
        style={{ height: '70vh', minHeight: 400 }}
      >
        {/* Parallax image */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        >
          <OptImg
            url="/images/optimised/DSC09355-copy-1400w.webp"
            alt="JCT Prakrithi — Backwater Evening Cruise"
            className="w-full h-full object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 via-transparent to-stone-950/40" />

        {/* Centered caption */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gold-400 font-semibold tracking-[0.35em] uppercase text-[11px] mb-3"
          >
            — On the Backwaters —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-3xl md:text-5xl font-serif text-white leading-tight"
          >
            Where Every Sunset Tells a <span className="italic text-gold-300">Story</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="w-20 h-px bg-gold-400 mt-6 origin-center"
          />
        </div>
      </motion.section>

      {/* ═══════════════ AUTO-SCROLL GALLERY ═══════════════ */}
      <section className="py-16 bg-stone-950 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 px-6"
        >
          <span className="text-gold-400 font-semibold tracking-[0.35em] uppercase text-[11px]">
            — Visual Journey —
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-3 leading-tight">
            Experience the <span className="italic text-gold-300">Backwaters</span>
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto mt-6" />
        </motion.div>

        {/* Row 1 — scrolls LEFT, fast */}
        <div className="mb-5">
          <MarqueeRow images={rowOne} direction="left" speed={1.5} />
        </div>

        {/* Row 2 — scrolls RIGHT, slightly slower */}
        <MarqueeRow images={rowTwo} direction="right" speed={1.2} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 border border-gold-400/40 text-gold-400 px-8 py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-gold-500 hover:text-stone-900 hover:border-gold-500 transition-all duration-300"
          >
            View Full Gallery <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

      {/* ═══════════════ COLLECTION SECTION ═══════════════ */}
      <section className="py-32 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-6">
              <span className="text-gold-400 font-bold tracking-[0.3em] uppercase text-xs">The Collection</span>
              <h2 className="text-4xl md:text-6xl font-serif">Our Signature Fleet</h2>
            </div>
            <Link to="/services" className="group flex items-center gap-4 text-gold-400">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Explore Services</span>
              <div className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center group-hover:bg-gold-400 group-hover:text-stone-900 transition-all">
                <ArrowRight size={14} />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-8 relative">
                  <OptImg url={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8">
                    <h4 className="text-2xl font-serif">{cat.title}</h4>
                  </div>
                </div>
                <p className="text-stone-400 text-sm mb-6 font-light">{cat.desc}</p>
                <div className="w-8 h-px bg-gold-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CURATED MOMENTS ═══════════════ */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Curated Moments</h2>
            <div className="w-24 h-px bg-gold-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { img: '/images/optimised/0015-900w.webp', title: 'Sunset Dining', tab: 'weddings' },
              { img: '/images/optimised/0013-2-900w.webp', title: 'Luxury Stays', tab: 'weddings' },
              { img: '/images/optimised/050-900w.webp', title: 'Grand Events', tab: 'corporate' },
              { img: '/images/optimised/031-900w.webp', title: 'Private Parties', tab: 'parties' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <Link to="/services" state={{ activeTab: item.tab }}>
                  <OptImg url={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 25vw" />
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-serif italic text-xl">{item.title}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURES BAR ═══════════════ */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group flex flex-col items-center text-center p-8 rounded-3xl hover:bg-stone-50 transition-colors duration-500 border border-transparent hover:border-stone-100"
              >
                <div className="w-16 h-16 rounded-full bg-gold-50 text-gold-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white group-hover:shadow-xl group-hover:shadow-gold-500/20 transition-all duration-500">
                  {f.icon}
                </div>
                <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs text-stone-900 group-hover:text-gold-600 transition-colors">{f.name}</h4>
                <div className="w-8 h-px bg-gold-200 mt-6 group-hover:w-16 group-hover:bg-gold-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative rounded-[3rem] overflow-hidden bg-stone-900 py-24 px-12 text-center">
            <div className="absolute inset-0 opacity-30">
              <OptImg url="/images/optimised/DSC09355-copy-1400w.webp" alt="CTA Background" className="w-full h-full object-cover" sizes="100vw" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">Your Journey Begins <br /> <span className="italic">On the Water</span></h2>
              <p className="text-stone-300 text-lg font-light">
                Experience the magic of Kerala's backwaters with JCT Prakrithi Luxury Cruise. Whether it's a romantic getaway or a grand celebration, we craft experiences that last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <a
                  href="https://wa.me/919895123012"
                  className="bg-gold-500 text-stone-900 px-12 py-4 rounded-full font-bold hover:bg-gold-400 transition-all tracking-widest text-xs uppercase"
                >
                  Book on WhatsApp
                </a>
                <Link
                  to="/services"
                  className="border border-white/30 text-white px-12 py-4 rounded-full font-bold hover:bg-white hover:text-stone-900 transition-all tracking-widest text-xs uppercase"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
