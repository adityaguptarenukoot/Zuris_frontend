import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundVisuals from "./BackgroundVisuals";


const Services = () => {
  const headerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  }, []);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 10);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 450;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleCardClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const services = [
    {
      id: "ai-consultation-advisory",
      title: "AI Consultation & Advisory",
      desc: "Strategic AI guidance that transforms business challenges into competitive advantages through comprehensive assessment and data-driven roadmaps.",
      image: "/images/ai_strategy.jpg",
      features: [
        "Conduct stakeholder workshops to capture business objectives",
        "Assess organization's AI readiness and current capabilities", 
        "Map AI solutions to specific processes and expected outcomes",
        "Create prioritized implementation roadmap with detailed ROI model"
      ]
    },
    {
      id: "cybersecurity-services",
      title: "Cybersecurity Services", 
      desc: "AI-powered security operations that detect, respond, and prevent threats faster than traditional human-only approaches.",
      image: "/images/ai_transformation.jpg",
      features: [
        "Integrate AI engines with SIEM and incident management systems",
        "Enhance security alerts with contextual threat intelligence data",
        "Automate incident responses through dynamic security playbooks", 
        "Continuously refine AI models with feedback and incident history"
      ]
    },
    {
      id: "ai-automation-digital-transformation",
      title: "AI Automation & Digital Transformation",
      desc: "Modern AI/MLOps implementations that identify automation opportunities and transform complex, fragmented business processes.",
      image: "/images/ai_automation_and_digital.jpeg",
      features: [
        "Use advanced process mining to identify automation opportunities",
        "Build intelligent AI agents for complex, fragmented tasks and workflows",
        "Implement modern AI/MLOps practices for reliability and continuous improvement",
        "Transform operations with intelligent workflow automation and optimization"
      ]
    },
    // {
    //   id: "connect-collaborate-co-develop",
    //   title: "Connect, Collaborate & Co-develop",
    //   desc: "End-to-end product development from concept to enterprise-grade architecture using agile methodologies and AI/MLOps practices.",
    //   image: "/images/collaborative_development1.jpeg",
    //   features: [
    //     "Conduct comprehensive discovery workshops to define product roadmaps",
    //     "Build minimum viable products using lean and agile development principles",
    //     "Streamline delivery pipelines with modern AI/MLOps best practices",
    //     "Scale solutions from MVPs to enterprise-grade, production-ready architectures"
    //   ]
    // },
    // {
    //   id: "startup-growth-acceleration",
    //   title: "Startup Growth & Acceleration",
    //   desc: "Comprehensive tech partnership combining strategic advisory and hands-on execution to build scalable, cloud-native architectures with embedded AI.",
    //   image: "/images/innovation.jpg",
    //   features: [
    //     "Function as dedicated tech partner for both advisory and execution phases",
    //     "Design and implement scalable, cloud-native architectures that grow with business",
    //     "Embed AI modules and capabilities early in the product development lifecycle",
    //     "Provide ongoing innovation insights, governance frameworks and performance optimization"
    //   ]
    // },
    {
      id: "data-intelligence-analytics-platform",
      title: "Data Intelligence & Analytics Platform",
      desc: "Transform raw data into actionable business intelligence through advanced analytics platforms, predictive modeling, and real-time decision support systems.",
      image: "/images/data_strategy.jpg",
      features: [
        "Design unified data lakes and warehouses for enterprise-wide analytics",
        "Implement predictive models for forecasting and trend analysis",
        "Build real-time dashboards and business intelligence reporting systems",
        "Deploy machine learning pipelines for automated insights and anomaly detection"
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

      <section className="py-20 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            {/* Left Arrow */}
            {showLeftArrow && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white shadow-xl rounded-full p-4 hover:bg-blue-600 hover:text-white transition-all duration-300 border-2 border-gray-300 hover:border-blue-600"
                aria-label="Scroll left">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Right Arrow */}
            {showRightArrow && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white shadow-xl rounded-full p-4 hover:bg-blue-600 hover:text-white transition-all duration-300 border-2 border-gray-300 hover:border-blue-600"
                aria-label="Scroll right">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide scroll-smooth">
              <div className="flex gap-6 py-4">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    onClick={() => handleCardClick(service.id)}
                    className="service-detail-card flex-shrink-0 w-[420px] group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-blue-300 relative overflow-hidden">
                    
                    {/* Number Badge */}
                    {/* <div className="absolute top-6 left-6 z-10">
                      <div className="text-6xl font-bold text-white/30 backdrop-blur-sm">
                        0{index + 1}
                      </div>
                    </div> */}

                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden rounded-t-3xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Click Indicator */}
                      <div className="flex items-center justify-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Click to view details</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
