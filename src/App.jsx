import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import WhatsAppButton from './Components/WhatsAppButton';
import Home from './Pages/Home';
import OurServices from './Pages/OurServices';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/packages" element={<Navigate to="/services" replace />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </div>
    </Router>
  );
}
