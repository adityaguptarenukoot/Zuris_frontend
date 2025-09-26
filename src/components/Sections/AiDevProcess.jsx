import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Link } from "react-router-dom";

const AiDevProcess = () => {
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

    // Animate connecting arrows
    gsap.fromTo(processRef.current.querySelectorAll('.connecting-arrow'),
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.3,
        delay: 0.8,
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate CTA section
    gsap.fromTo(processRef.current.querySelectorAll('.cta-animate'),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: processRef.current.querySelector('.cta-section'),
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  const processes = [
    { 
      title: "Discover & Strategize", 
      description: "Deep-dive analysis of business challenges and AI opportunity mapping.",
      iconPath: "/images/strategy.png",
      color: "from-blue-500 to-purple-600"
    },
    { 
      title: "Co-Develop & Co-Create", 
      description: "Designing and training AI models using state-of-the-art algorithms.",
      iconPath: "/images/build.png",
      color: "from-green-500 to-teal-500"
    },
    { 
      title: "Deploy & Scale", 
      description: "Production deployment with monitoring, optimization, and continuous improvement.",
      iconPath: "/images/deploy.png",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={processRef} className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our AI Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to developing robust, scalable, and ethical AI solutions
          </p>
        </div>

        {/* Process Flow - 3 Cards Grid with Arrows */}
        <div className="relative mb-12">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {processes.map((process, index) => (
              <div key={index} className="relative">
                <ProcessCard process={process} index={index} />
                
                {/* Connecting Arrows - Only between cards, not after the last one */}
                {index < processes.length - 1 && (
                  <>
                    {/* Desktop Arrow */}
                    <div className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2 z-10">
                      <div className="connecting-arrow flex items-center">
                        {/* Solid Line */}
                        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600"></div>
                        {/* Arrow Head */}
                        <div className="ml-2 w-0 h-0 border-l-[12px] border-l-purple-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
                      </div>
                    </div>

                    {/* Mobile Arrow */}
                    <div className="md:hidden flex justify-center mt-6 mb-6">
                      <div className="connecting-arrow flex flex-col items-center">
                        {/* Vertical Solid Line */}
                        <div className="w-0.5 h-12 bg-gradient-to-b from-blue-400 to-purple-600"></div>
                        {/* Arrow Head */}
                        <div className="mt-2 w-0 h-0 border-t-[12px] border-t-purple-600 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent"></div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* See Detailed Process Link */}
        <div className="text-center mb-16">
          <Link 
            to="/process" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-lg font-semibold group"
          >
            See Detailed Process 
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>

        {/* CTA Section with Light Background */}
        <div className="cta-section mt-20 pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl px-8 py-12 relative overflow-hidden border border-blue-100">
          {/* Light Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-indigo-200 to-blue-300 rounded-full blur-3xl"></div>
          </div>

          <div className="text-center relative z-10">
            <div className="cta-animate mb-8">
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Let's Transform Your Business with 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Solutions</span>
              </h3>
              
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Don't let your competitors get ahead. Schedule a free consultation and discover how our proven AI development process can revolutionize your business operations.
              </p>
            </div>

            {/* Contact Us Button */}
            <div className="cta-animate">
              <Link 
                to="/contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center">
                  ✨ Contact Us
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessCard = ({ process, index }) => {
  return (
    <div className="process-step group relative">
      <div className="card-hover p-8 rounded-2xl bg-white border border-gray-200 text-center shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
        {/* Icon */}
        <img 
          src={process.iconPath} 
          alt={`${process.title} icon`}
          className="w-20 h-20 mx-auto mb-6 object-contain"
        />
        
        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{process.title}</h3>
        <p className="text-gray-600">{process.description}</p>
        
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default AiDevProcess;

