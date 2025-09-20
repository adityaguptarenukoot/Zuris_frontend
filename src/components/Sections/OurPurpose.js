import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const OurPurpose = () => {
  const purposeRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      purposeRef.current.querySelector('.purpose-content'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: purposeRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  return (
    <section
      ref={purposeRef}
      className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 purpose-content">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          The Future Is <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Intelligent</span>. 
          The Future Is <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Now</span>.
        </h2>
        
        <p className="text-xl leading-relaxed mb-8 max-w-4xl mx-auto">
          The world generates over <span className="text-yellow-400 font-bold">2.5 quintillion bytes</span> of data daily, 
          yet most organizations struggle to transform this data into 
          <span className="text-cyan-400 font-bold"> actionable business value</span> and competitive advantage.
        </p>
        
        <p className="text-lg opacity-90 leading-relaxed mb-12 max-w-3xl mx-auto">
          Organizations that fail to embed <span className="text-blue-300 font-semibold">Artificial Intelligence strategically</span> into their core operations will inevitably fall behind in today's data-driven economy. 
          <span className="text-red-300 font-semibold">Raw data without intelligent processing is merely digital noise</span>.
        </p>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 mb-12 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Why AI Is Your Organization's Most Critical Strategic Asset
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4 text-blue-300">Real-Time Decision Intelligence</h4>
              <p className="text-base opacity-90 leading-relaxed">
                Process billions of data points instantaneously to optimize operations, detect anomalies, and deliver
                hyper-personalized customer experiences at enterprise scale.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4 text-purple-300">Predictive Business Intelligence</h4>
              <p className="text-base opacity-90 leading-relaxed">
                Leverage advanced machine learning models to predict customer behavior, prevent operational downtime,
                and anticipate market trends ahead of competitors.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4 text-cyan-300">Intelligent Process Automation</h4>
              <p className="text-base opacity-90 leading-relaxed">
                Replace costly manual workflows with sophisticated automation that accelerates processes,
                eliminates human error, and redirects talent to high-value strategic initiatives.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm border border-green-400/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4 text-green-300">Revenue Stream Innovation</h4>
              <p className="text-base opacity-90 leading-relaxed">
                Unlock previously untapped revenue opportunities through predictive maintenance services,
                AI-driven product recommendations, and data monetization strategies.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-red-400">Strategic Implementation Is Time-Critical</span>
          </h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Every quarter of delayed AI adoption represents <span className="text-yellow-400 font-semibold">lost market position</span> and competitive disadvantage. 
            The organizations that <span className="text-green-400 font-semibold">act decisively today</span> will define tomorrow's industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-white rounded-lg opacity-90"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Data-First Strategic Framework</h3>
            <p className="opacity-90 leading-relaxed">
              Architect comprehensive strategies aligned with business objectives, market positioning, and organizational
              capabilities for sustainable competitive advantage.
            </p>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-white rounded-lg opacity-90"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">Enterprise Data Ecosystem</h3>
            <p className="opacity-90 leading-relaxed">
              Transform disparate data sources into unified strategic assets that drive decision-making, operational
              efficiency, and customer intelligence.
            </p>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-white rounded-lg opacity-90"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Continuous Innovation Engine</h3>
            <p className="opacity-90 leading-relaxed">
              Establish ongoing optimization frameworks through advanced model retraining, performance monitoring, and
              adaptive learning systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;
