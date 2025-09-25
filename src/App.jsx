import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToTop } from './components/ScrollToTop';
import IndustryDetail from './pages/IndustryDetail';
import Policy from './pages/Policy';
import Home from './pages/Home';
import CookiePolicy from './pages/CookiePolicy';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './pages/Contact';
import Services from './components/Services';
import Navigation from './components/Navigation';
import OurPurpose from './components/Sections/OurPurpose';
import IndustryPage from './pages/IndustryPage';


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Main App component
function App() {
  useGSAP(() => {
    gsap.config({
      autoSleep: 60,
      force3D: false,
      nullTargetWarn: false
    });
  });

  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      .animate-blob {
        animation: blob 7s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      .animation-delay-1000 {
        animation-delay: 1s;
      }
      .animation-delay-3000 {
        animation-delay: 3s;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 relative">
        <Navigation />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/policy' element={<Policy/>} />
            <Route path='/industries' element={<IndustryPage/>} />
            <Route path='/cookie-policy' element={<CookiePolicy/>} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industry/:industryName" element={<IndustryDetail />} />
            <Route path="/key-differentiators" element={<OurPurpose />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;