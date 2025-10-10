

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllIndustries } from "../data/industriesData";


const IndustriesServed = () => {
  const industriesRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const industries = getAllIndustries();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);


  useGSAP(() => {
    gsap.fromTo(industriesRef.current.querySelectorAll('.industry-card'),
      { y: 10, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: "power1.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: industriesRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });


  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };


  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 320;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };


  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (
    <section ref={industriesRef} id="industries" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Industries We Transform
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          We deliver AI solutions across diverse industries, helping organizations unlock new possibilities and drive innovation
        </p>
        
        <div className="max-w-6xl mx-auto mb-8 relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-blue-600 hover:text-white transition-all duration-300 border-2 border-gray-300 hover:border-blue-600"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-blue-600 hover:text-white transition-all duration-300 border-2 border-gray-300 hover:border-blue-600"
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
              {industries.map((industry) => (
                <div 
                  key={industry.id}
                  className="industry-card group p-5 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center min-w-[160px] w-[160px] bg-white cursor-pointer">
                  <div className="mb-3 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={industry.image} 
                      className="w-12 h-12 mx-auto" 
                      alt={`${industry.name} Icon`}/>
                  </div>
                  <div className="font-semibold text-sm text-gray-800 group-hover:text-blue-600 text-center leading-tight">
                    {industry.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Link 
          to="/industries" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors text-lg font-semibold group">
          Explore All Industries 
          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
};


export default IndustriesServed;
