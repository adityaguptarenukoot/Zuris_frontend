import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const HowWeWork = () => {
  const workRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      workRef.current.querySelectorAll('.work-step'),
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: workRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  const steps = [
    { step: 1, title: 'Discovery & Analysis', description: 'We dive deep into your business challenges, current processes, and strategic objectives to identify AI opportunities.', icon: '🔍' },
    { step: 2, title: 'Strategy Development', description: 'Create a comprehensive AI roadmap aligned with your business goals, including technology selection and implementation timeline.', icon: '📋' },
    { step: 3, title: 'Solution Design', description: 'Design custom AI solutions tailored to your specific needs, ensuring scalability and integration with existing systems.', icon: '⚙️' },
    { step: 4, title: 'Development & Testing', description: 'Build, train, and rigorously test AI models using cutting-edge technologies and best practices.', icon: '🔧' },
    { step: 5, title: 'Deployment & Integration', description: 'Seamlessly deploy solutions into your production environment with minimal disruption to operations.', icon: '🚀' },
    { step: 6, title: 'Support & Optimization', description: 'Provide ongoing support, monitoring, and continuous improvement to ensure optimal performance.', icon: '📈' },
  ];

  return (
    <section ref={workRef} className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15" style={{ backgroundImage: `url('/images/collaboration.jpg')` }}></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            How We{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures successful AI implementation from concept to deployment
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="work-step flex items-center gap-8 bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
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

export default HowWeWork;
