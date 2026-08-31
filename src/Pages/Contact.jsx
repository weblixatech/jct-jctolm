import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '../Components/WhatsAppIcon';
import OptImg from '../Components/OptImg';

const Contact = () => {
  return (
    <div className="bg-[#FDFCFB] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptImg
            url="/images/optimised/002-1400w.webp"
            alt="Kerala Backwaters"
            className="w-full h-full object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] uppercase tracking-[0.5em] mb-6 block font-medium text-gold-400"
          >
            Contact
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-serif italic mb-4">
            Get  in <span className="not-italic font-bold">Touch</span>
          </h1>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] uppercase tracking-[0.5em] mb-6 block font-medium text-gold-600"
              >
                Get in Touch
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
                Ready to Start Your <br /> <span className="italic">Journey?</span>
              </h1>
              <p className="text-stone-600 text-lg font-light leading-relaxed mb-12 max-w-lg">
                Whether you're planning an intimate escape, a fairytale wedding, or a grand corporate retreat, our team is here to craft an experience that exceeds your expectations.
              </p>

              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gold-50 text-gold-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Our Office</h4>
                    <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
                      KALATHIL, Punnamada, Avalookkunnu PO, Alappuzha
                    </p>
                    <a
                      href="https://maps.app.goo.gl/byeqexcv7j76FZJw8?g_st=ac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gold-600 text-xs font-semibold mt-2 hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gold-50 text-gold-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Call Us</h4>
                    <p className="text-stone-500 text-sm italic">+91 98951 23012</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gold-50 text-gold-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Email</h4>
                    <p className="text-stone-500 text-sm italic">jctindiatours@yahoo.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-stone-900 text-white p-12 md:p-20 rounded-3xl shadow-2xl relative z-10">
                <h3 className="text-3xl font-serif mb-8 text-gold-400">Book on WhatsApp</h3>
                <p className="text-stone-400 mb-12 font-light text-lg">
                  The fastest way to get a quote and check availability is through our dedicated WhatsApp concierge service.
                </p>
                <a
                  href="https://wa.me/919895123012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 text-stone-900 px-12 py-5 rounded-full font-bold hover:bg-gold-400 transition-all text-center flex items-center justify-center gap-4 text-xs uppercase tracking-[0.3em]"
                >
                  Connect Now <WhatsAppIcon size={20} />
                </a>

                <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-3xl font-serif text-gold-500 mb-2">24h</p>
                    <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Response Time</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif text-gold-500 mb-2">15+</p>
                    <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Vessel Options</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 w-full h-full border border-gold-200 rounded-3xl -z-0 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
