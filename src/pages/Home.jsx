import { Link } from "react-router-dom";
import IndustriesServed from "../components/pages/Industries";
import OurPurpose from "../components/Sections/OurPurpose";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BackgroundVisuals from "../components/BackgroundVisuals";
import KeyDifferentiators from "../components/Sections/KeyDifferentiators";
import HowWeWork from "../components/HowWeWork";
import AIDevProcess from "../components/AiDevProcess";

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

export default Home;