import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Users, Music, Utensils, Camera, Sparkles, ArrowRight,
  Briefcase, Rocket, Award, Coffee, Presentation,
  PartyPopper, Cake, Star, Ghost
} from 'lucide-react';
import OptImg from '../Components/OptImg';

const OurServices = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(null);
  const activeTab = selectedTab || location.state?.activeTab || 'weddings';
  const setActiveTab = (tab) => setSelectedTab(tab);

  const tabs = [
    { id: 'weddings', label: 'Weddings', icon: <Heart size={18} /> },
    { id: 'corporate', label: 'Corporate', icon: <Briefcase size={18} /> },
    { id: 'parties', label: 'Parties', icon: <PartyPopper size={18} /> },
  ];

  const servicesData = {
    weddings: {
      title: "Weddings on Water",
      subtitle: "Bespoke Celebrations",
      heroImg: "/images/optimised/0015-1400w.webp",
      introImg: "/images/optimised/0013-2-900w.webp",
      introTitle: "Your Dream Reimagined",
      introDesc: "Imagine walking down an aisle that gently floats on the emerald waters of Alappuzha. JCT Prakrithi Luxury Cruise specializes in bespoke destination weddings, blending the natural beauty of Kerala with unmatched luxury. From intimate ceremonies to grand receptions of up to 100 guests, every detail — décor, catering, entertainment — is crafted around your vision.",
      offerings: [
        { icon: <Heart size={24} />, title: 'Intimate Ceremonies', desc: 'Exchange vows amidst the serene backwaters with a perfectly decorated deck.' },
        { icon: <Users size={24} />, title: 'Large Receptions', desc: 'Our mega vessels can accommodate up to 100 guests for grand celebrations.' },
        { icon: <Utensils size={24} />, title: 'Traditional Sadya', desc: 'Authentic Kerala wedding feast served on banana leaves for your guests.' },
        { icon: <Music size={24} />, title: 'Live Entertainment', desc: 'Traditional music, DJ, or cultural performances to light up your night.' },
        { icon: <Camera size={24} />, title: 'Photography Spots', desc: 'Stunning backdrops for your wedding album that you won\'t find anywhere else.' },
        { icon: <Sparkles size={24} />, title: 'Custom Decor', desc: 'Floral arrangements and lighting tailored to your wedding theme.' },
      ]
    },
    corporate: {
      title: "Corporate Excellence",
      subtitle: "Professional Meetings",
      heroImg: "/images/optimised/IMG_9395-1400w.webp",
      introImg: "/images/optimised/IMG_9395-900w.webp",
      introTitle: "A Sophisticated Alternative",
      introDesc: "JCT Prakrithi Luxury Cruise offers a uniquely refined venue for corporate conferences, product launches, inaugurations, and team-building events. With spacious air-conditioned facilities, modern AV support, premium catering, and end-to-end event management, we provide the perfect blend of professionalism and the inspiring beauty of Kerala's backwaters.",
      offerings: [
        { icon: <Rocket size={24} />, title: 'Product Launches', desc: 'Make a splash with your new product in a unique, high-impact environment.' },
        { icon: <Award size={24} />, title: 'Inaugurations', desc: 'Celebrate your company\'s milestones with a grand ceremony on the water.' },
        { icon: <Users size={24} />, title: 'Team Building', desc: 'Foster collaboration away from the office in a serene environment.' },
        { icon: <Presentation size={24} />, title: 'Meeting Space', desc: 'Versatile layouts for presentations and workshops with full AV support.' },
        { icon: <Coffee size={24} />, title: 'Premium Catering', desc: 'Gourmet coffee breaks and traditional snacks for your delegates.' },
        { icon: <Briefcase size={24} />, title: 'Event Planning', desc: 'End-to-end management of your corporate itinerary by our experts.' },
      ]
    },
    parties: {
      title: "Parties & Celebrations",
      subtitle: "Unforgettable Moments",
      heroImg: "/images/optimised/IMG_9397-copy-1400w.webp",
      introImg: "/images/optimised/IMG_9397-copy-900w.webp",
      introTitle: "Crafting Memories",
      introDesc: "From birthdays and anniversaries to private parties, concerts, and cultural events, JCT Prakrithi Luxury Cruise transforms any celebration into an unforgettable experience. Enjoy stunning backwater views, authentic Kerala cuisine, vibrant entertainment, and personalized service — all aboard a floating venue unlike any other.",
      offerings: [
        { icon: <Cake size={24} />, title: 'Birthday Bashes', desc: 'Celebrate your milestone in a floating paradise designed for fun.' },
        { icon: <Star size={24} />, title: 'Anniversaries', desc: 'Relive your precious moments with a romantic sunset cruise.' },
        { icon: <Music size={24} />, title: 'Private Gatherings', desc: 'A unique and private space for reunions and casual get-togethers.' },
        { icon: <Ghost size={24} />, title: 'Themed Decor', desc: 'From vibrant parties to elegant galas, we dress the vessel to match.' },
        { icon: <PartyPopper size={24} />, title: 'Entertainment', desc: 'Live music, DJs, and cultural shows to keep the energy high.' },
        { icon: <Utensils size={24} />, title: 'Gourmet Dining', desc: 'Customizable menus ranging from local delicacies to global cuisines.' },
      ]
    }
  };

  const currentService = servicesData[activeTab];

  return (
    <div className="bg-[#FDFCFB]">
      {/* Tab Navigation Header (Acts as space for Navbar & Tabs) */}
      <div className="bg-stone-900 pt-28 pb-4 sticky top-0 z-40 border-b border-stone-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-center gap-4 md:gap-12 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold transition-all relative py-2 ${
                  activeTab === tab.id ? 'text-gold-500' : 'text-stone-400 hover:text-white'
                }`}
              >
                {tab.icon}
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-4 left-0 right-0 h-0.5 bg-gold-500"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.heroImg}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <OptImg
                url={currentService.heroImg}
                alt={currentService.title}
                className="w-full h-full object-cover"
                sizes="100vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-stone-900/55" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.span 
            key={`${activeTab}-subtitle`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] uppercase tracking-[0.5em] mb-6 block font-medium text-gold-400"
          >
            {currentService.subtitle}
          </motion.span>
          <motion.h1 
            key={`${activeTab}-title`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-serif italic mb-4"
          >
            {currentService.title.split(' ')[0]} <span className="not-italic font-bold">{currentService.title.split(' ').slice(1).join(' ')}</span>
          </motion.h1>
          <div className="w-24 h-px bg-gold-500 mx-auto mt-8" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div 
              key={`${activeTab}-intro`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <span className="text-[11px] uppercase tracking-[0.4em] text-gold-700 font-bold">The Experience</span>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight text-stone-900 border-l-4 border-gold-500 pl-8">
                  {currentService.introTitle}
                </h2>
              </div>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                {currentService.introDesc}
              </p>
              <div className="pt-4">
                <a 
                  href="https://wa.me/919895123012" 
                  className="inline-flex items-center gap-6 group"
                >
                  <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-stone-900">Book Your Experience</span>
                  <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-gold-600 group-hover:border-gold-600 group-hover:text-white transition-all duration-500">
                    <ArrowRight size={16} />
                  </div>
                </a>
              </div>
            </motion.div>
            <motion.div
              key={`${activeTab}-image`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <OptImg
                url={currentService.introImg}
                alt="Service Detail"
                className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {currentService.offerings.map((s, i) => (
              <motion.div 
                key={`${activeTab}-offering-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative p-10 bg-white border border-stone-100 rounded-[2rem] hover:shadow-2xl hover:shadow-gold-500/20 hover:border-transparent hover:bg-stone-900 overflow-hidden transition-all duration-700 hover:-translate-y-2 cursor-default"
              >
                {/* Background glow on hover */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gold-50/50 flex items-center justify-center rounded-2xl text-gold-600 mb-8 group-hover:bg-gold-500 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-sm border border-gold-100/50 group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-gold-500/30">
                    {s.icon}
                  </div>
                  <h4 className="text-2xl font-serif text-stone-900 mb-4 group-hover:text-white transition-colors duration-500">{s.title}</h4>
                  <div className="w-8 h-px bg-gold-200 mb-6 group-hover:w-16 group-hover:bg-gold-500 transition-all duration-500" />
                  <p className="text-stone-500 font-light text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gold-500/5 blur-[120px] rounded-full" />
        
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <Sparkles className="text-gold-500 mx-auto mb-8" size={40} />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Ready to Create <br /><span className="italic">Pure Magic?</span></h2>
          <p className="text-stone-400 text-lg mb-12 font-light max-w-2xl mx-auto">
            Our dedicated team is ready to help you craft an experience that exceeds your expectations. Every detail, from the decor to the menu, is tailored to your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/919895123012" 
              className="bg-gold-500 text-stone-900 px-12 py-5 rounded-full font-bold hover:bg-gold-400 transition-all tracking-widest text-xs uppercase shadow-lg shadow-gold-500/20"
            >
              Consult an Expert
            </a>
            <a 
              href="tel:+919895123012" 
              className="border border-white/20 text-white px-12 py-5 rounded-full font-bold hover:bg-white hover:text-stone-900 transition-all tracking-widest text-xs uppercase"
            >
              Call Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
