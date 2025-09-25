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
        duration: 1.2, // Reduced from 2.6 for better performance
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
      { y: 50, opacity: 0 }, // Changed from x: -100, rotationY: 45 for better performance
      {
        y: 0,
        opacity: 1,
        duration: 0.8, // Reduced from 1.1
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current.querySelector('.differentiators-container'),
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  const backendUrl = "https://zuris-backend.onrender.com";

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

  // Updated differentiators to match client's requirements
  const differentiators = [
    {
      id: 1,
      title: "Data-First Strategy",
      description: "Turn your data into a strategic weapon with AI models that learn, adapt, and optimize continuously.",
      image: "/images/data_strategy.png"
    },
    {
      id: 2,
      title: "Tailored AI Solutions",
      description: "Custom-built AI that fits your exact business model, not one-size-fits-all platforms.",
      image: "/images/ai_solution.png"
    },
    {
      id: 3,
      title: "Continuous Innovation",
      description: "Stay ahead with AI solutions that evolve with emerging technologies and market demands.",
      image: "/images/innovation.png"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Updated Headline */}
        <div className="mb-16">
          <h2 className="hero-headline text-4xl md:text-5xl font-bold mb-6">
            While Your Competitors<br/>
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Struggle with Yesterday's Tools
            </span><br/>
            We're Building Your AI-Powered Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The difference isn't just technology—it's strategic advantage that compounds over time.
          </p>
        </div>

        {/* Updated 3-Column Grid Layout */}
        <div className="differentiators-container grid md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div key={item.id} className="differentiator-card p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              {/* Icon with white background and rounded corners */}
              <div className="text-4xl mb-4">
                <img 
                  src={item.image}
                  className="w-12 h-12 mx-auto mb-6 rounded-lg"
                  style={{ backgroundColor: 'white', borderRadius: '10px' }}
                  alt={`${item.title} Icon`}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Modal remains the same */}
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
