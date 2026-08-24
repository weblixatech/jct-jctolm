import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';

const links = [
  { name: 'Home',     to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Gallery',  to: '/gallery' },
  { name: 'Contact',  to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const { pathname }              = useLocation();
  const [prevPath, setPrevPath]   = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav shadow-2xl shadow-black/30' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span className="text-white font-serif text-xl tracking-[0.08em] font-semibold group-hover:text-gold-400 transition-colors duration-300">
              JCT Prakrithi
            </span>
            <span className="text-gold-400 text-[9px] font-bold tracking-[0.45em] uppercase -mt-0.5">
              Luxury Cruise
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative text-[11px] uppercase tracking-[0.25em] font-semibold transition-colors duration-300 group ${
                    pathname === link.to ? 'text-gold-400' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gold-400 transition-all duration-300 ${
                    pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919895123012"
              className="hidden md:flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-stone-900 font-bold text-[10px] uppercase tracking-[0.3em] px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/30"
            >
              Book Now
            </a>
            <button
              onClick={() => setOpen(v => !v)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-stone-950 border-l border-gold-400/10 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between px-8 h-20 border-b border-white/5">
                <span className="text-white font-serif text-lg tracking-widest">Menu</span>
                <button onClick={() => setOpen(false)} className="text-stone-400 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 px-8 py-10 flex flex-col gap-2">
                {links.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={link.to}
                      className={`block py-3 text-sm font-semibold uppercase tracking-[0.2em] border-b border-white/5 transition-colors ${
                        pathname === link.to ? 'text-gold-400' : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="px-8 pb-10">
                <a
                  href="https://wa.me/919895123012"
                  className="block text-center bg-gold-400 text-stone-900 font-bold text-[10px] uppercase tracking-[0.3em] px-6 py-4 rounded-full hover:bg-gold-300 transition-all"
                >
                  Book on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
