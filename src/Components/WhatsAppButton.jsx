import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919895123012"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors group"
    >
      <WhatsAppIcon size={32} />
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg shadow-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        Book on WhatsApp
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
