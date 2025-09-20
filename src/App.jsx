import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToTop } from './components/ScrollToTop';
import IndustryDetail from './pages/IndustryDetail';
import ProcessStepDetail from "./pages/ProcessStepDetail";
import OurPurpose from './components/Sections/OurPurpose';
import './App.css';
import Policy from './pages/Policy';
import Home from './pages/Home';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './pages/Contact';
import Services from './components/Services';
import Navigation from './components/Navigation';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Microinteractions Hook
export function useMicroInteractions() {
  useEffect(() => {
    // Animate buttons: scale on hover, press effect on click
    gsap.utils.toArray('button, a.button-like, .btn').forEach((btn) => {
      gsap.set(btn, { transformOrigin: 'center center' });
      
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.05, boxShadow: '0 8px 15px rgba(0,0,0,0.1)', duration: 0.3, ease: 'power1.out' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, boxShadow: 'none', duration: 0.3, ease: 'power1.out' });
      });
      btn.addEventListener('mousedown', () => {
        gsap.to(btn, { scale: 0.95, duration: 0.15, ease: 'power1.out' });
      });
      btn.addEventListener('mouseup', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.15, ease: 'power1.out' });
      });
    });

    // Animate links: color and scale on hover
    gsap.utils.toArray('a').forEach((link) => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.03, color: '#4F46E5', duration: 0.3, ease: 'power1.out' });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, color: '', duration: 0.3, ease: 'power1.out' });
      });
    });

    // Animate cards: lift and shadow on hover
    gsap.utils.toArray('.card, .industry-card, .service-card, .process-step, .work-step, .service-detail-card').forEach((card) => {
      card.style.transformOrigin = 'center center';
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -8, boxShadow: '0 15px 25px rgba(0,0,0,0.15)', duration: 0.4, ease: 'power1.out' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, boxShadow: 'none', duration: 0.4, ease: 'power1.out' });
      });
    });

    // Animate inputs: glow on focus
    gsap.utils.toArray('input, textarea, select').forEach((input) => {
      input.addEventListener('focus', () => {
        gsap.to(input, { boxShadow: '0 0 10px 2px rgba(79, 70, 229, 0.6)', duration: 0.3, ease: 'power1.out' });
      });
      input.addEventListener('blur', () => {
        gsap.to(input, { boxShadow: 'none', duration: 0.3, ease: 'power1.out' });
      });
    });

    // Animate nav icons & hamburger button
    const navIcons = gsap.utils.toArray('.nav-icon, .hamburger-btn');
    navIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { rotation: 15, scale: 1.2, duration: 0.25, ease: 'power1.out' });
      });
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { rotation: 0, scale: 1, duration: 0.25, ease: 'power1.out' });
      });
    });
  }, []);
}





  

// Our Purpose Component
    <OurPurpose />

  















// Enhanced Home component with smooth scroll - FIXED BUTTON BUG


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
            <Route path='/terms' element={<Terms/>} />
            <Route path='/cookie-policy' element={<CookiePolicy/>} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industry/:industryName" element={<IndustryDetail />} />
            <Route path="/process/:stepKey" element={<ProcessStepDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;