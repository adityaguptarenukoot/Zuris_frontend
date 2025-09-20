import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const KeyDifferentiators = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    company: "",
    service: "AI Readiness Assessment",
    project_details: "I'm interested in getting a FREE AI Readiness Assessment for my business."
  });

  // Animation ref
  const sectionRef = useRef(null);

  // GSAP animations
  useGSAP(() => {
    // Animate headline
    gsap.fromTo(sectionRef.current.querySelector('.hero-headline'),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate differentiator cards with stagger
    gsap.fromTo(sectionRef.current.querySelectorAll('.differentiator-card'),
      { x: -100, opacity: 0, rotationY: 45 },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1.1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current.querySelector('.differentiators-container'),
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate CTA section
    gsap.fromTo(sectionRef.current.querySelector('.cta-section'),
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2.0,
        ease: "back.out(2.0)",
        scrollTrigger: {
          trigger: sectionRef.current.querySelector('.cta-section'),
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  const backendUrl = "http://localhost:4000";

  const submithandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {fullname, email, company, service, project_details} = form;
      const response = await axios.post(backendUrl + '/api/form/submit', {fullname, email, company, service, project_details});
      if(response.data.success){
        console.log(response.data.message)
      } else {
        console.log(response.data.message)
      }
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false);
      setForm({
        fullname: '',
        email: '',
        company: '',
        service: 'AI Readiness Assessment',
        project_details: 'I am interested in getting a FREE AI Readiness Assessment for my business.'
      })
      setIsContactModalOpen(false);
    }
  }

  const differentiators = [
    {
      id: 1,
      title: "AI-First Approach",
      description: "We don't just automate processes—we inject intelligence into every facet of your business operations. While others bolt on AI as an afterthought, we architect your entire competitive advantage around artificial intelligence from day one.",
      icon: "/images/ai-brain.jpg",   
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "End-to-End Mastery", 
      description: "From ideation through implementation to ongoing optimization—we own your complete AI journey. No vendor juggling, no integration nightmares, no excuses. One partner, one vision, total accountability.",
      icon: "/images/end-to-end.jpeg",  
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Enterprise-Grade Security",
      description: "Built-in governance, compliance, and security across every service and implementation. Your data remains yours, your competitive advantage stays protected, and your regulatory requirements are never an afterthought.",
      icon: "/images/security-shield.jpg",  
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Startup Speed, Enterprise Quality",
      description: "We move at the speed of opportunity with the precision of experience. Rapid prototyping meets battle-tested engineering practices. Get to market faster without cutting corners.",
      icon: "/images/speed-quality.jpeg",  
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-white  to-white text-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Bold Headline */}
        <div className="text-center mb-20">
          <h2 className="hero-headline text-5xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
            While Your Competitors 
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Struggle with Yesterday's Tools
            </span>
            We're Building Your AI-Powered Future
          </h2>
          <p className="text-2xl text-black max-w-4xl mx-auto leading-relaxed">
            The AI revolution isn't coming—it's here. Every day you delay is market share lost, 
            efficiency sacrificed, and opportunities handed to smarter competitors.
          </p>
        </div>

        {/* 4 Key Differentiators */}
        <div className="differentiators-container space-y-12">
          {differentiators.map((item, index) => (
            <div key={item.id} className="differentiator-card bg-white/15 backdrop-blur-md rounded-3xl p-10 md:p-14 border border-white/30 shadow-2xl">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                <div className={`w-24 h-24 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <img src={item.icon} alt={item.title} className="w-21 h-21" />
                </div>
                <div className={`flex-grow text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-3xl font-bold mb-4 text-black">{item.title}</h3>
                  <p className="text-lg text-black-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Stop Wondering. Start Knowing.
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get your <strong>FREE AI Readiness Assessment</strong> and discover exactly where your business stands 
                in the AI revolution—and what you need to do to lead your industry.
              </p>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
                Claim Your FREE Assessment
              </button>
              <p className="text-sm text-blue-200 mt-4">
                Results in 48 hours • No obligations • Industry-specific insights
              </p>
            </div>
          </div>
        </div>
      </div>

      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">FREE AI Readiness Assessment</h3>
                <button onClick={() => setIsContactModalOpen(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>
              
              <form className="space-y-6" onSubmit={submithandler}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input 
                    value={form.fullname} 
                    onChange={(e) => setForm({...form, fullname: e.target.value})} 
                    type="text" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input 
                    value={form.email} 
                    onChange={(e) => setForm({...form, email: e.target.value})} 
                    type="email" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800" 
                    placeholder="your@email.com" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company *</label>
                  <input 
                    value={form.company} 
                    onChange={(e) => setForm({...form, company: e.target.value})} 
                    type="text" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800" 
                    placeholder="Your Company" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your business</label>
                  <textarea 
                    value={form.project_details} 
                    onChange={(e) => setForm({...form, project_details: e.target.value})} 
                    rows="4" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800" 
                    placeholder="Industry, size, current AI usage, main challenges..." 
                    required 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Get My FREE AI Assessment"}
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                🔒 Your information is secure. We'll contact you within 48 hours with your personalized assessment.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default KeyDifferentiators;
