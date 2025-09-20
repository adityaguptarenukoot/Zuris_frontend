import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToTop } from './components/ScrollToTop';
import IndustryDetail from './pages/IndustryDetail';
import ProcessStepDetail from "./pages/ProcessStepDetail";
import KeyDifferentiators from './components/Sections/KeyDifferentiators';
import OurPurpose from './components/Sections/OurPurpose';




import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt 
} from 'react-icons/fa';
import './App.css';
import Policy from './pages/Policy';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Microinteractions Hook
function useMicroInteractions() {
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

// Professional Background Visuals Component
const BackgroundVisuals = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Tech grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated gradient blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-bl from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      
      {/* Subtle tech elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-ping animation-delay-1000"></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-ping animation-delay-3000"></div>
    </div>
  );
};

// Industries We Serve Component
const IndustriesServed = () => {
  const industriesRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(industriesRef.current.querySelectorAll('.industry-card'),
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: industriesRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  const industries = [
    {
      name: "Healthcare",
      slug: "healthcare", 
      description: "AI-powered diagnostics, patient care optimization, and medical research acceleration",
      image: "/images/ai-consultation.jpg",
      icon: "🏥"
    },
    {
      name: "Financial Services",
      slug: "financial-services",
      description: "Risk management, fraud detection, algorithmic trading, and customer insights",
      image: "/images/cybersecurity.jpg", 
      icon: "🏦"
    },
    {
      name: "Manufacturing",
      slug: "manufacturing",
      description: "Smart factories, predictive maintenance, quality control, and supply chain optimization",
      image: "/images/automation.jpg",
      icon: "🏭"
    },
    {
      name: "Retail & E-commerce",
      slug: "retail-ecommerce",
      description: "Personalized recommendations, inventory management, and customer experience enhancement",
      image: "/images/collaboration.jpg",
      icon: "🛍️"
    },
    {
      name: "Technology",
      slug: "technology",
      description: "Product development, user experience optimization, and innovation acceleration",
      image: "/images/startup-growth.jpg",
      icon: "💻"
    },
    {
      name: "Transportation",
      slug: "transportation",
      description: "Route optimization, autonomous systems, and logistics intelligence",
      image: "/images/ai-consultation.jpg",
      icon: "🚗"
    }
  ];

  return (
    <section ref={industriesRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url('/images/automation.jpg')` }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Industries We <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Transform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver AI solutions across diverse industries, helping organizations unlock new possibilities and drive innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-3xl mb-2">{industry.icon}</div>
                  <h3 className="text-xl font-bold">{industry.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                 <Link 
                        to={`/industry/${industry.slug}`} 
                        className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                        >
                        Learn More →
                        </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How We Work Component
const HowWeWork = () => {
  const workRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(workRef.current.querySelectorAll('.work-step'),
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  const steps = [
    {
      step: 1,
      title: "Define a Bold, Data-First Strategy",
      description: "We align comprehensive AI strategies with your business objectives, market positioning, and organizational capabilities to create sustainable competitive advantages.",
      
    },
    {
      step: 2,
      title: "Build Robust Data Ecosystems",
      description: "Transform raw data into strategic assets by creating unified data architectures that drive decision-making, operational efficiency, and customer intelligence.",
      
    },
    {
      step: 3,
      title: "Deliver Tailored AI Solutions",
      description: "Design and implement custom AI solutions specifically crafted for your unique industry challenges, ensuring scalability and seamless integration.",
      
    },
    {
      step: 4,
      title: "Ensure Continuous Innovation",
      description: "Establish ongoing optimization frameworks through advanced model retraining, performance monitoring, and adaptive learning systems for sustained success.",
      
    },
    {
      step: 5,
      title: "Enable Your People and Processes",
      description: "Provide comprehensive hands-on training, change management support, and knowledge transfer to ensure long-term success and organizational adoption.",
      
    }
  ];

  return (
    <section ref={workRef} className="py-20 bg-white relative">
      {/* Background with your service image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url('/images/collaboration.jpg')` }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            How Zurix Empowers You to Lead the <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">AI-Driven Future</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We partner with you to transform your organization into an AI-powered industry leader through strategic implementation and continuous innovation.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="work-step flex items-center gap-8 bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-100 border border-gray-100">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">{step.step}</span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-4">{step.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        
        
      </div>
    </section>
  );
};
  

// Our Purpose Component
    <OurPurpose />

  


// AI Development Process Component
const AIDevProcess = () => {
  const processRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(processRef.current.querySelectorAll('.process-step'),
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  const processes = [
    { 
      title: "Research & Discovery", 
      description: "Understanding business requirements, data landscape, and technical constraints",
      icon: "🔬",
      color: "from-red-500 to-pink-500"
    },
    { 
      title: "Data Preparation", 
      description: "Collecting, cleaning, and preparing high-quality datasets for model training",
      icon: "📊",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Model Development", 
      description: "Designing and training AI models using state-of-the-art algorithms",
      icon: "🧠",
      color: "from-green-500 to-teal-500"
    },
    { 
      title: "Testing & Validation", 
      description: "Rigorous testing for accuracy, fairness, and robustness across scenarios",
      icon: "🔬",
      color: "from-purple-500 to-indigo-500"
    },
    { 
      title: "Deployment", 
      description: "Seamless integration into production environments with monitoring systems",
      icon: "🚀",
      color: "from-orange-500 to-red-500"
    },
    { 
      title: "Optimization", 
      description: "Continuous monitoring, feedback collection, and model improvements",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section ref={processRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
      {/* Background with your startup growth image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url('/images/startup-growth.jpg')` }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Our AI <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Development Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to developing robust, scalable, and ethical AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="process-step bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-bl-full opacity-50"></div>
              
              <div className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white text-2xl">{process.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{process.title}</h3>
              <p className="text-gray-600 leading-relaxed">{process.description}</p>
              
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Footer Component
const Footer = () => {
  const footerRef = useRef(null);

  useMicroInteractions();

  useGSAP(() => {
    gsap.fromTo(footerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          
          start: "top 100%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  return (
    <footer ref={footerRef} className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zurix</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses with intelligent AI solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: FaFacebookF, href: "#", label: "Facebook" },
                { Icon: FaTwitter, href: "#", label: "Twitter" },
                { Icon: FaInstagram, href: "#", label: "Instagram" },
                { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                { Icon: FaYoutube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-150 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Case Studies", path: "/" },
                { name: "Blog", path: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "AI Consultation",
                "Cybersecurity",
                "Automation",
                "Digital Transformation",
                "Startup Growth",
                "Custom AI Development"
              ].map((service, index) => (
                <li key={index}>
                  <a href="/services" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <span className="text-gray-300">contact@zurix.co.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400" />
                <span className="text-gray-300">+91 8625999312</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="text-gray-300">Baner, Pune</span>
                <span className="text-gray-300">Noida</span>
              </div>
            </div>
            
            {/* <div>
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-l-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-r-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Zurix AI Consultancy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to={"/policy"} className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Simple page about components
const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      aboutRef.current.querySelector('.about-content'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  const differentiators = [
    {
      title: "AI-First Approach",
      description: "We don't just automate processes, we add intelligence to every aspect of your business operations.",
      
    },
    {
      title: "End-to-End Delivery", 
      description: "From ideation and initial strategy through implementation to ongoing support, we handle the complete journey.",
      
    },
    {
      title: "Enterprise-Grade Security",
      description: "Built-in governance, compliance and security across all services and implementations.",
      
    },
    {
      title: "Startup Speed with Enterprise Quality",
      description: "We combine rapid prototyping and agile development with mature engineering practices and governance.",
      
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <section 
        ref={aboutRef}
        className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 about-content">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zurix</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your trusted AI partner, turning complexity into clarity, data into insight, and ideas into industry-leading innovation.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-white/20">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-8">
              In a world generating over <strong className="text-white">2.5 quintillion bytes</strong> of data daily, 
              most businesses struggle to transform this data into actionable value. We bridge this gap by empowering 
              organizations to embed Artificial Intelligence strategically into their core operations.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              We believe that companies who don't embrace AI will fall behind, and that data without intelligence 
              is merely digital noise. Our role is to ensure your organization leads the AI-driven future.
            </p>
          </div>

          {/* Key Differentiators */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-12 text-center text-white">What Sets Us Apart</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-150">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">Our Approach</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-xl font-bold mb-4 text-blue-300">Strategic Partnership</h4>
                <p className="text-gray-300 leading-relaxed">
                  We function as your dedicated tech partner, providing both advisory expertise and hands-on execution 
                  to ensure successful AI transformation.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-purple-300">Innovation-Driven</h4>
                <p className="text-gray-300 leading-relaxed">
                  We embed AI modules early in your product lifecycle and provide ongoing innovation insights, 
                  governance, and optimization as you scale.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-cyan-300">Future-Ready Solutions</h4>
                <p className="text-gray-300 leading-relaxed">
                  We design cost-efficient, cloud-native architectures that scale with your business, 
                  ensuring you're prepared for tomorrow's challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Accelerate Your AI Transformation?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Every day you delay adopting AI is a day your competitors leap ahead. The future doesn't wait — and neither should you.
            </p>
            <p className="text-lg font-semibold text-blue-300">
              The future is intelligent. The future is bold. Let's build it, together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};



const Contact = () => {

const backendUrl = "https://zuris-backend.onrender.com";
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    company: "",
    service: "",
    project_details: ""
  });


const submithandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {fullname, email, company, service, project_details, phoneNumber} = form;
      const response = await axios.post(backendUrl + '/api/form/submit', {fullname, email, company, service, project_details, phoneNumber});
      if(response.data.success){
        console.log(response.data.message)
      } else {
        console.log(response.data.message)
      }
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false);
      setForm({
        fullname: '',
        email: '',
        company: '',
        service: '',
        project_details: '',
        phoneNumber: ''
      })
    }
  }
  return (

  <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20 relative">
    <BackgroundVisuals />
    <div className="max-w-4xl mx-auto px-4 relative z-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </span>
        </h1>
        <p className="text-xl text-gray-600">Ready to transform your business with AI? Let's start the conversation.</p>
      </div>
      
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
        <form className="space-y-6" onSubmit={submithandler}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input value={form.fullname} onChange={(e) => setForm({...form, fullname: e.target.value})} type="text" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} type="email" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
              <input value={form.company} onChange={(e) => setForm({...form, company: e.target.value})} type="text" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your Company" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input value={form.phoneNumber} onChange={(e) => setForm({...form, phoneNumber: e.target.value})} type="tel" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+91 xxxxx xxxxx" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interest</label>
            <select value={form.service} onChange={(e) => setForm({...form, service: e.target.value})} className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Select a service</option>
                    <option value={"AI Consultation & Advisory"}>AI Consultation & Advisory</option>
                    <option value={"Cybersecurity Services"}>Cybersecurity Services</option>
                    <option value={"AI Automation & Transformation"}>AI Automation & Transformation</option>
                    <option value={"Collaborative Development"}>Collaborative Development</option>
                    <option value={"Startup Growth & Acceleration"}>Startup Growth & Acceleration</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
            <textarea value={form.project_details} onChange={(e) => setForm({...form, project_details: e.target.value})} rows="6" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your AI project, goals, timeline, and any specific requirements..."></textarea>
          </div>
          
          <button disabled={loading} type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
           {loading ? "Sending..." : "Send Message & Schedule Consultation"}
          </button>
        </form>
      </div>
    </div>
  </div>
)
}

// Services Component with Images
const Services = () => {
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  
  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.fromTo(servicesRef.current.querySelectorAll('.service-detail-card'),
      { y: 120, opacity: 0, rotationX: 45 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const services = [
  {
    title: "AI Consultation & Advisory",
    desc: "Strategic AI guidance that transforms business challenges into competitive advantages through comprehensive assessment and data-driven roadmaps.",
    image: "/images/ai-consultation.jpg",
    icon: "🎯",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Conduct stakeholder workshops to capture business objectives",
      "Assess organization's AI readiness and current capabilities", 
      "Map AI solutions to specific processes and expected outcomes",
      "Create prioritized implementation roadmap with detailed ROI model"
    ]
  },
  {
    title: "Cybersecurity Services", 
    desc: "AI-powered security operations that detect, respond, and prevent threats faster than traditional human-only approaches.",
    image: "/images/cybersecurity.jpg",
    icon: "🔒",
    color: "from-red-500 to-pink-500",
    features: [
      "Integrate AI engines with SIEM and incident management systems",
      "Enhance security alerts with contextual threat intelligence data",
      "Automate incident responses through dynamic security playbooks", 
      "Continuously refine AI models with feedback and incident history"
    ]
  },
  {
    title: "AI Automation & Digital Transformation",
    desc: "Modern AI/MLOps implementations that identify automation opportunities and transform complex, fragmented business processes.",
    image: "/images/automation.jpg",
    icon: "⚙️", 
    color: "from-green-500 to-teal-500",
    features: [
      "Use advanced process mining to identify automation opportunities",
      "Build intelligent AI agents for complex, fragmented tasks and workflows",
      "Implement modern AI/MLOps practices for reliability and continuous improvement",
      "Transform operations with intelligent workflow automation and optimization"
    ]
  },
  {
    title: "Connect, Collaborate & Co-develop",
    desc: "End-to-end product development from concept to enterprise-grade architecture using agile methodologies and AI/MLOps practices.",
    image: "/images/collaboration.jpg",
    icon: "🤝",
    color: "from-purple-500 to-indigo-500", 
    features: [
      "Conduct comprehensive discovery workshops to define product roadmaps",
      "Build minimum viable products using lean and agile development principles",
      "Streamline delivery pipelines with modern AI/MLOps best practices",
      "Scale solutions from MVPs to enterprise-grade, production-ready architectures"
    ]
  },
  {
    title: "Startup Growth & Acceleration",
    desc: "Comprehensive tech partnership combining strategic advisory and hands-on execution to build scalable, cloud-native architectures with embedded AI.",
    image: "/images/startup-growth.jpg",
    icon: "🚀",
    color: "from-orange-500 to-yellow-500",
    features: [
      "Function as dedicated tech partner for both advisory and execution phases",
      "Design and implement scalable, cloud-native architectures that grow with business",
      "Embed AI modules and capabilities early in the product development lifecycle",
      "Provide ongoing innovation insights, governance frameworks and performance optimization"
    ]
  }
];


  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative">
      <BackgroundVisuals />
      <section ref={headerRef} className="py-20 text-center relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our AI Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to transform every aspect of your business operations. 
            From strategic consultation to full-scale implementation.
          </p>
        </div>
      </section>

      <section ref={servicesRef} className="py-20 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-detail-card group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 relative overflow-hidden"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <span className="text-white text-xl">{service.icon}</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact" className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    Learn More & Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Enhanced Navigation component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle mobile menu toggle
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle menu item click - close menu
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const searchableContent = [
    { title: "AI Consultation & Advisory", url: "/services", type: "Service" },
    { title: "Cybersecurity Services", url: "/services", type: "Service" },
    { title: "AI Automation & Digital Transformation", url: "/services", type: "Service" },
    { title: "Collaborative Development", url: "/services", type: "Service" },
    { title: "Startup Growth & Acceleration", url: "/services", type: "Service" },
    { title: "About Zurix", url: "/about", type: "Page" },
    { title: "Contact Us", url: "/contact", type: "Page" },
  ];

  const filteredResults = searchableContent.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  

  

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zurix
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/services" className="font-medium text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-600 hover:text-blue-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <Link
              // onClick={() => setIsContactModalOpen(true)}
              to={'/contact'}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg"
            >
              Let's Talk
            </Link>

            <button
              onClick={handleMenuToggle}
              className="md:hidden p-2 text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Simple Show/Hide */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50" 
                onClick={handleMenuItemClick}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50" 
                onClick={handleMenuItemClick}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50" 
                onClick={handleMenuItemClick}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50" 
                onClick={handleMenuItemClick}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-96 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search services, technologies, or pages..."
                  className="flex-1 text-lg border-none outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl">
                  ×
                </button>
              </div>
              
              {searchQuery && (
                <div className="max-h-64 overflow-y-auto">
                  {filteredResults.length > 0 ? (
                    <div className="space-y-2">
                      {filteredResults.map((result, index) => (
                        <Link
                          key={index}
                          to={result.url}
                          className="block p-3 hover:bg-blue-50 rounded-lg"
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-800">{result.title}</h4>
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">{result.type}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>No results found for "{searchQuery}"</p>
                      <p className="text-sm mt-2">Try searching for services, technologies, or pages</p>
                    </div>
                  )}
                </div>
              )}
              
              {!searchQuery && (
                <div className="text-gray-500 text-center py-8">
                  <p>Start typing to search our services and content</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Get In Touch</h3>
                <button onClick={() => setIsContactModalOpen(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>
              
              {/* <form className="space-y-6" onSubmit={submithandler}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input value={form.fullname} onChange={(e) => setForm({...form, fullname: e.target.value})} type="text" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your Name" required />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} type="email" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com" required />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                  <input value={form.company} onChange={(e) => setForm({...form, company: e.target.value})} type="text" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your Company" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interest</label>
                  <select value={form.service} onChange={(e) => setForm({...form, service: e.target.value})} className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
                    <option>Select a service</option>
                    <option value={"AI Consultation & Advisory"}>AI Consultation & Advisory</option>
                    <option value={"Cybersecurity Services"}>Cybersecurity Services</option>
                    <option value={"AI Automation & Transformation"}>AI Automation & Transformation</option>
                    <option value={"Collaborative Development"}>Collaborative Development</option>
                    <option value={"Startup Growth & Acceleration"}>Startup Growth & Acceleration</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
                  <textarea value={form.project_details} onChange={(e) => setForm({...form, project_details: e.target.value})} rows="4" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your AI project, goals, and timeline..." required />
                </div>
                
                <button  type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg">
                  {loading ? "submitting" : "Send Message & Schedule Consultation"}
                </button>
              </form> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};


// Enhanced Home component with smooth scroll - FIXED BUTTON BUG
const Home = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const industriesRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(heroRef.current.querySelector('.hero-title'), 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 }
    );
    gsap.fromTo(heroRef.current.querySelector('.hero-subtitle'), 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.3 }
    );
    gsap.fromTo(heroRef.current.querySelectorAll('.hero-button'), 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)", stagger: 0.1, delay: 0.6 }
    );
    gsap.fromTo(servicesRef.current.querySelector('.services-title'),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
    gsap.fromTo(servicesRef.current.querySelectorAll('.service-card'),
      { y: 50, opacity: 0, rotationX: 30 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: servicesRef.current.querySelector('.services-grid'),
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const handleServiceHover = (e, isHover) => {
    const card = e.currentTarget;
    const icon = card.querySelector('.service-icon');
    
    if (isHover) {
      gsap.to(card, { y: -10, scale: 1.05, duration: 0.0, ease: "power2.out" });
      gsap.to(icon, { scale: 1.2, rotation: 5, duration: 0.2, ease: "back.out(1.7)" });
    } else {
      gsap.to(card, { y: 0, scale: 1, duration: 0.0, ease: "power2.out" });
      gsap.to(icon, { scale: 1, rotation: 0, duration: 0.2, ease: "back.out(1.7)" });
    }
  };

  const scrollToIndustries = () => {
    industriesRef.current.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  };

  return (
    <div className="pt-16 relative">
      <BackgroundVisuals />
      
      {/* Hero Section */}
      <main ref={heroRef} className="py-20 text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: `url('/images/ai-consultation.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-purple-50/90"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="hero-title text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Transform Your Business
            </span>
            <br />
            <span className="text-gray-800">with AI Excellence</span>
          </h1>
          <p className="hero-subtitle text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Zurix delivers cutting-edge AI solutions that drive innovation, automate processes, 
            and unlock exponential growth for forward-thinking organizations worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* FIXED BUG: Changed to="/contact" instead of="/services" */}
            <Link to="/contact" className="hero-button bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Get Started Today</span>
              {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div> */}
            </Link>
            <button 
              onClick={scrollToIndustries}
              className="hero-button border-2 border-blue-500 text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-200 hover:scale-105 transition-all duration-150"
            >
              View Our Services
            </button>
          </div>
        </div>
      </main>

      {/* Core Services Preview */}
      <section ref={servicesRef} className="py-20 bg-white/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="services-title text-5xl font-bold text-center mb-16 text-gray-800">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Core Services</span>
          </h2>
          <div className="services-grid grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
             {[
                { 
                    title: "AI Consultation & Advisory", 
                    desc: "Strategic AI roadmaps that transform business challenges into competitive advantages. From assessment to implementation, we architect your AI-powered future.", 
                    color: "from-blue-500 to-cyan-500" 
                  },
                  { 
                    title: "Cybersecurity Services", 
                    desc: "AI-powered security that detects and responds to threats faster than human-only approaches. Intelligent protection for the modern enterprise.", 
                    color: "from-red-500 to-pink-500" 
                  },
                  { 
                    title: "AI Automation & Transformation", 
                    desc: "Modern AI/MLOps that identifies opportunities and automates complex business processes. Transform operations with intelligent workflow automation.", 
                    color: "from-green-500 to-teal-500" 
                  },
                  { 
                    title: "Collaborative Development", 
                    desc: "End-to-end product development from MVP to enterprise architecture. Agile methodologies meet AI/MLOps for scalable solutions.", 
                    color: "from-purple-500 to-indigo-500" 
                  },
                  { 
                    title: "Startup Growth & Acceleration", 
                    desc: "Tech partnership that builds scalable, cloud-native architectures with embedded AI. From vision to market-leading execution.", 
                    color: "from-orange-500 to-yellow-500" 
                  }
                ].map((service, index) => (

              <div
                key={index}
                className="service-card bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group cursor-pointer border border-gray-100 relative overflow-hidden"
                onMouseEnter={(e) => handleServiceHover(e, true)}
                onMouseLeave={(e) => handleServiceHover(e, false)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className={`service-icon w-20 h-20 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10`}>
                  <span className="text-white text-3xl font-bold">{service.title.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg relative z-10">{service.title}</h3>
                <div className="text-sm text-gray-600 leading-relaxed relative z-10">
                        {service.desc.split('. ').map((sentence, idx) => (
                          <div key={idx} className="flex items-start mb-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{sentence}{idx < service.desc.split('. ').length - 1 ? '.' : ''}</span>
                          </div>
                        ))}
                      </div>
                
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-colors duration-300"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/services" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>
       <KeyDifferentiators />
      <div ref={industriesRef}>
        <IndustriesServed />
      </div>
      <HowWeWork />
      <OurPurpose />
      <AIDevProcess />
    </div>
  );
};

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