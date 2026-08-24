import { Sun, Moon, Clock, Utensils, MapPin, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../Components/WhatsAppIcon';
import OptImg from '../Components/OptImg';

const Packages = () => {
  const packages = [
    {
      title: 'The Day Escape',
      icon: <Sun className="text-gold-600" size={32} />,
      time: '11:00 AM - 05:00 PM',
      price: 'From ₹ 12,500',
      desc: 'Perfect for a quick getaway to experience the magic of the backwaters in the golden daylight.',
      features: [
        'Welcome Drink on arrival',
        'Traditional Kerala Lunch',
        'Evening Tea & Snacks',
        'Sightseeing of Backwaters',
        'Visit to local villages',
        'Professional Crew'
      ],
      color: 'bg-white',
      borderColor: 'border-stone-200',
      textColor: 'text-stone-900'
    },
    {
      title: 'The Midnight Sojourn',
      icon: <Moon className="text-gold-600" size={32} />,
      time: '12:00 PM - 09:00 AM (Next Day)',
      price: 'From ₹ 18,500',
      desc: 'An immersive overnight experience. Sleep under the stars and wake up to the sound of ripples.',
      features: [
        'Welcome Drink & Lunch',
        'Evening Tea & Snacks',
        'Traditional Kerala Dinner',
        'Breakfast next morning',
        'A/C Bedroom with attached bath',
        'Night stay in the middle of lake'
      ],
      color: 'bg-stone-900',
      borderColor: 'border-stone-800',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="bg-[#FDFCFB]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptImg
            url="/images/optimised/040-1400w.webp"
            alt="Packages hero"
            className="w-full h-full object-cover scale-105"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/55" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] uppercase tracking-[0.5em] mb-6 block font-medium text-gold-400"
          >
            Curated Experiences
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif italic mb-4"
          >
            Our <span className="not-italic font-bold">Packages</span>
          </motion.h1>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {packages.map((pkg, i) => (
              <motion.div 
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`${pkg.color} ${pkg.textColor} border ${pkg.borderColor} rounded-2xl p-12 md:p-20 flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-700 group relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-4 bg-gold-50 rounded-2xl">
                      {pkg.icon}
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-2">Starting From</p>
                      <p className="text-3xl font-serif italic text-gold-600">{pkg.price}</p>
                    </div>
                  </div>

                  <div className="space-y-6 mb-12">
                    <h3 className="text-4xl font-serif italic">{pkg.title}</h3>
                    <div className="flex items-center gap-3 text-stone-500 text-xs uppercase tracking-widest font-medium">
                      <Clock size={16} className="text-gold-500" />
                      <span>{pkg.time}</span>
                    </div>
                    <p className={`text-lg font-light leading-relaxed ${i === 1 ? 'text-stone-400' : 'text-stone-600'}`}>
                      {pkg.desc}
                    </p>
                  </div>

                  <div className="h-px bg-stone-100 mb-12" />

                  <ul className="space-y-6 mb-12">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-sm font-light">
                        <CheckCircle2 size={18} className="text-gold-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 relative z-10">
                  <a 
                    href={`https://wa.me/919895123012?text=I'm interested in the ${pkg.title}`}
                    className={`w-full py-5 rounded-full text-[11px] uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-3 transition-all ${
                      i === 1 ? 'bg-gold-500 text-stone-900 hover:bg-gold-400' : 'bg-stone-900 text-white hover:bg-stone-800'
                    }`}
                  >
                    <WhatsAppIcon size={18} />
                    Request Reservation
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Events Section */}
      <section className="py-32 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <span className="text-gold-400 font-bold tracking-[0.3em] uppercase text-xs">Bespoke Events</span>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">Beyond the <br /> <span className="italic">Standard</span></h2>
              </div>
              <p className="text-stone-400 text-lg leading-relaxed font-light">
                Looking for something truly unique? We specialize in crafting custom itineraries for weddings, corporate retreats, and private celebrations. Tell us your vision, and we'll bring it to life on the water.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Weddings', 'Corporate', 'Parties'].map((type) => (
                  <Link 
                    key={type}
                    to="/services"
                    state={{ activeTab: type.toLowerCase() }}
                    className="px-6 py-3 border border-white/20 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-stone-900 transition-all"
                  >
                    {type}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <OptImg
                  url="/images/optimised/037-900w.webp"
                  alt="Custom Event"
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-500 rounded-full flex items-center justify-center text-stone-900 p-4 text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest">Tailored For You</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Trust Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <Star className="text-gold-500 mx-auto mb-8" size={40} />
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8">Excellence in Every Detail</h2>
          <p className="text-stone-500 text-lg font-light leading-relaxed mb-12">
            All our packages include a dedicated crew, professional chef, and 24/7 support to ensure your journey is seamless and extraordinary.
          </p>
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <p className="text-3xl font-serif text-stone-900 mb-2">100%</p>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Safety Record</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif text-stone-900 mb-2">24/7</p>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">On-call Support</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif text-stone-900 mb-2">5★</p>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Guest Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
