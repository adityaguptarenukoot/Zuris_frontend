import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getAllIndustries } from "../data/industriesData";
import IndustryCard from "../components/common/IndustryCard";
import IndustryDetailFloat from "../components/common/IndustryDetailFloat";

const IndustryPage = () => {
  const pageRef = useRef(null);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const [floatPosition, setFloatPosition] = useState(null);
  const [isFloatVisible, setIsFloatVisible] = useState(false);
  
  const industries = getAllIndustries();

  useGSAP(() => {
    gsap.fromTo(pageRef.current.querySelectorAll('.industry-card'),
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.15,
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  const handleCardHover = (industry, position) => {
    setHoveredIndustry(industry);
    setFloatPosition(position);
    setIsFloatVisible(true);
  };

  const handleCardLeave = () => {
    setIsFloatVisible(false);
    setTimeout(() => {
      setHoveredIndustry(null);
      setFloatPosition(null);
    }, 300); // Delay to allow smooth transition
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Industries We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transform</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover how we're revolutionizing diverse industries with cutting-edge AI solutions tailored to unique challenges and opportunities.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-gray-600">Hover over any industry card for detailed insights</span>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                onHover={handleCardHover}
                onLeave={handleCardLeave}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We work across many more sectors. Let's discuss how AI can transform your specific industry challenges.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
          >
            Discuss Your Industry
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Floating Detail Component */}
      <IndustryDetailFloat
        industry={hoveredIndustry}
        position={floatPosition}
        isVisible={isFloatVisible}
      />
    </div>
  );
};

export default IndustryPage;
