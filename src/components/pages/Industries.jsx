import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Link } from "react-router-dom";

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

export default IndustriesServed;