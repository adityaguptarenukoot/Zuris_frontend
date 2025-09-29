import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyAI = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Faster headline animation with earlier trigger
    gsap.fromTo(sectionRef.current.querySelector('.why-headline'),
      { y: 30, opacity: 0 }, // Reduced movement
      {
        y: 0,
        opacity: 1,
        duration: 0.3, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%", 
          toggleActions: "play none none reverse"
        }
      }
    );

    
    gsap.fromTo(sectionRef.current.querySelectorAll('.why-card'),
      { y: 20, opacity: 0 }, 
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: sectionRef.current.querySelector('.why-cards-container'),
          start: "top 100%", 
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  const whyPoints = [
    {
      id: 1,
      title: "Measurable Impact",
      description: "Reduce costs with automation, unlock new revenue streams and deliver quantifiable ROI that improves each quarter.",
      image: "/images/impact.png"
    },
    {
      id: 2,
      title: "Move Fast or Fall Behind",
      description: "Competitors already use AI to predict, personalize, and scale. Every quarter of delay risks lost market share and slower growth.",
      image: "/images/faster.png"
    },
    {
      id: 3,
      title: "Lead the Future",
      description: "Turn data into foresight and resilience. Use intelligence to convert challenges into competitive advantage and long-term differentiation.",
      image: "/images/lead.png"
    }
  ];

  return (
    <>
      {/* Optimized CSS for faster hover effects */}
      <style jsx>{`
        .card-hover {
          transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                      box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.2);
        }

        .icon-hover {
          transition: transform 0.1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover .icon-hover {
          transform: scale(1.05);
        }
      `}</style>

      <section ref={sectionRef} id="solutions" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="why-headline text-4xl md:text-5xl font-bold mb-6">
              Why AI, Why Now?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data without intelligence is noise. AI turns it into foresight, measurable ROI and competitive speed.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="why-cards-container grid md:grid-cols-3 gap-8">
            {whyPoints.map((point, index) => (
              <div key={point.id} className="why-card card-hover p-8 rounded-2xl bg-gradient-to-br from-blue-50/70 to-purple-50/70 border border-blue-200">
                <div className="flex items-center mb-6">
                  <img 
                    src={point.image}
                    className="icon-hover w-16 h-16 mr-4 rounded-lg" 
                    alt={`${point.title} Icon`}
                  />
                  <h3 className="text-xl font-bold">{point.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Explore Details Button */}
          <div className="mt-12 text-center"> 
            <Link 
              to="/key-differentiators" 
              className="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors text-lg font-semibold group"
            >
              Explore details
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyAI;
