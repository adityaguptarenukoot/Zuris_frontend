import { Link } from "react-router-dom";
import IndustriesServed from "./Industries";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BackgroundVisuals from "../components/BackgroundVisuals";
import KeyDifferentiators from "../components/Sections/KeyDifferentiators";
import HowWeWork from "../components/HowWeWork";
import AiDevProcess from "../components/Sections/AiDevProcess";
import WhyAI from "../components/Sections/WhyAI";

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
      gsap.to(card, { y: -10, scale: 1.05, duration: 0.15, ease: "power2.out" });
      gsap.to(icon, { scale: 1.2, rotation: 5, duration: 0.1, ease: "back.out(1.7)" });
    } else {
      gsap.to(card, { y: 0, scale: 1, duration: 0.15, ease: "power2.out" });
      gsap.to(icon, { scale: 1, rotation: 0, duration: 0.1, ease: "back.out(1.7)" });
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
    <h2 className="services-title text-5xl font-bold text-center mb-6 text-gray-800">
      Our Core Services
    </h2>
    <p className="text-xl text-center mb-16 text-gray-600 max-w-3xl mx-auto">
      Three pillars of AI excellence that drive business transformation
    </p>
    
    <div className="services-grid grid md:grid-cols-3 gap-8">
      {[
        {
          title: "AI Strategy & Advisory",
          desc: "Strategic roadmaps that align AI initiatives with business objectives, ensuring maximum ROI and competitive advantage.",
          image: "/images/ai_strategy.png", 
          features: [
            "AI Readiness Assessment",
            "Technology Stack Selection", 
            "ROI Optimization"
          ]
        },
        {
          title: "AI Automation & Transformation", 
          desc: "End-to-end automation solutions that eliminate inefficiencies and unlock exponential productivity gains.",
          image: "/images/ai_transformation.png",
          features: [
            "Process Automation",
            "Intelligent Document Processing",
            "Predictive Analytics"
          ]
        },
        {
          title: "Collaborative Development",
          desc: "Partnership-driven approach where your team gains AI expertise while we deliver cutting-edge solutions.",
          image: "/images/collaborative_development.png", 
          features: [
            "Team Augmentation", 
            "Knowledge Transfer",
            "Ongoing Support"
          ]
        }
      ].map((service, index) => (
        <div
          key={index}
          className="service-card bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-160 group cursor-pointer border  relative overflow-hidden bg-gradient-to-br from-blue-50/70 to-purple-50/70 border-blue-200"
          onMouseEnter={(e) => handleServiceHover(e, true)}
          onMouseLeave={(e) => handleServiceHover(e, false)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-160"></div>
          
          {/* Icon and Title Row */}
          <div className="flex items-center mb-6 relative z-10">
            <img 
              src={service.image}
              className="service-icon w-12 h-12 mr-4 rounded-lg object-cover shadow-md" 
              alt={`${service.title} Icon`}
            />
            <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 mb-4 relative z-10">
            {service.desc}
          </p>
          
          {/* Feature List */}
          <ul className="text-sm text-gray-600 space-y-2 relative z-10">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-colors duration-300"></div>
        </div>
      ))}
    </div>
    
    {/* Explore Services Link */}
    <div className="mt-12 text-center">
      <Link 
        to="/services" 
        className="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors text-lg font-semibold group"
      >
        Explore Our Services
        <svg 
          className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </Link>
    </div>
  </div>
</section>


       <KeyDifferentiators />
      <div ref={industriesRef}>
        <IndustriesServed />
      </div>
      <HowWeWork />
      <WhyAI />
      <AiDevProcess />
    </div>
  );
};

export default Home;

