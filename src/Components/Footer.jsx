import { Ship, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white relative overflow-hidden">

      {/* WhatsApp CTA Strip */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 border-y border-gold-400/10 py-8">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl text-white">Ready to set sail?</p>
            <p className="text-stone-400 text-sm font-light mt-1">Get an instant quote on WhatsApp — we reply within minutes.</p>
          </div>
          <a
            href="https://wa.me/919895123012"
            className="shrink-0 bg-gold-400 hover:bg-gold-300 text-stone-900 font-bold text-[10px] uppercase tracking-[0.3em] px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/25"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">

          {/* Brand col */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/" className="flex flex-col leading-none group">
              <span className="text-3xl font-serif font-bold tracking-[0.1em] group-hover:text-gold-400 transition-colors">
                JCT Prakrithi
              </span>
              <span className="text-gold-400/60 text-[9px] tracking-[0.4em] uppercase mt-1 font-semibold">
                Luxury Cruise · Alappuzha, Kerala
              </span>
            </Link>
            <p className="text-stone-400 text-base font-light leading-relaxed max-w-sm">
              A trusted name in Kerala backwater tourism for over 25 years. Our eco-friendly luxury cruise blends sustainable design with world-class comfort, authentic Kerala cuisine, and warm hospitality — ideal for weddings, corporate events, and private celebrations.
            </p>
            <div className="flex gap-5">
              {[
                { icon: Facebook,  href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube,   href: '#' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-500 hover:border-gold-400 hover:text-gold-400 transition-all duration-300 hover:scale-110"
                >
                  <item.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav col */}
          <div className="md:col-span-3 space-y-7">
            <h4 className="text-[10px] uppercase tracking-[0.35em] font-bold text-gold-500">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: 'Home',        to: '/' },
                { label: 'Our Services', to: '/services' },
                { label: 'Gallery',     to: '/gallery' },
                { label: 'Contact',     to: '/contact' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-stone-400 font-light hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold-400 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className="md:col-span-4 space-y-7">
            <h4 className="text-[10px] uppercase tracking-[0.35em] font-bold text-gold-500">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-9 h-9 rounded-xl bg-stone-800 flex items-center justify-center shrink-0 group-hover:bg-gold-400/10 transition-colors">
                  <MapPin size={16} className="text-gold-500" />
                </div>
                <span className="text-stone-400 font-light text-sm leading-relaxed">
                  KALATHIL, Punnamada,<br />Avalookkunnu PO, Alappuzha
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-9 h-9 rounded-xl bg-stone-800 flex items-center justify-center shrink-0 group-hover:bg-gold-400/10 transition-colors">
                  <Phone size={16} className="text-gold-500" />
                </div>
                <a href="tel:+919895123012" className="text-stone-400 hover:text-white transition-colors text-sm font-light">
                  +91 98951 23012
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-9 h-9 rounded-xl bg-stone-800 flex items-center justify-center shrink-0 group-hover:bg-gold-400/10 transition-colors">
                  <Mail size={16} className="text-gold-500" />
                </div>
                <a href="mailto:jctindiatours@yahoo.com" className="text-stone-400 hover:text-white transition-colors text-sm font-light">
                  jctindiatours@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-800/60 flex flex-col md:flex-row justify-between items-center gap-5 text-stone-600 text-[10px] uppercase tracking-[0.2em] font-semibold">
          <p>© 2025 JCT House Boat. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
