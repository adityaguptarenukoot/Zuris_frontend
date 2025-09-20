import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import aiProcessSteps from '../data/aiProcessSteps'; // <-- Import your steps data

gsap.registerPlugin(ScrollTrigger);

const AIDevProcess = () => {
  const processRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      processRef.current.querySelectorAll('.process-step'),
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
          {aiProcessSteps.map((step, index) => (
            <Link
              to={`/process/${step.key}`}
              key={step.key}
              className="process-step bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group block"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-bl-full opacity-50"></div>
              
              <div className={`w-16 h-16 bg-gradient-to-r ${step.color || 'from-blue-500 to-purple-500'} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white text-2xl">{step.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIDevProcess;
