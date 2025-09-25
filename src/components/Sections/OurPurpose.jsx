// import { useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(ScrollTrigger);

// const OurPurpose = () => {
//   const purposeRef = useRef(null);

//   useGSAP(() => {
//     gsap.fromTo(
//       purposeRef.current.querySelector('.purpose-content'),
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: purposeRef.current,
//           start: 'top 80%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );
//   });

//   return (
//     <section
//       ref={purposeRef}
//       className="py-24 bg-gradient-to-br from-white to-white text-black relative overflow-hidden"
//     >
//       {/* Professional Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
//               <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       {/* Enhanced Background Effects */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 text-center relative z-10 purpose-content">
//         <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
//           The Future Is <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Intelligent</span>. 
//           The Future Is <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Now</span>.
//         </h2>
        
//         <p className="text-xl leading-relaxed mb-8 max-w-4xl mx-auto">
//           The world generates over <span className="text-yellow-400 font-bold">2.5 quintillion bytes</span> of data daily, 
//           yet most organizations struggle to transform this data into 
//           <span className="text-cyan-800 font-bold"> actionable business value</span> and competitive advantage.
//         </p>
        
//         <p className="text-lg opacity-90 leading-relaxed mb-12 max-w-3xl mx-auto">
//           Organizations that fail to embed <span className="text-blue-500 font-semibold">Artificial Intelligence strategically</span> into their core operations will inevitably fall behind in today's data-driven economy. 
//           <span className="text-green-600 font-semibold">Raw data without intelligent processing is merely digital noise</span>.
//         </p>

//         {/* <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 mb-12 max-w-6xl mx-auto">
//           <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//             Why AI Is Your Organization's Most Critical Strategic Asset
//           </h3>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6">
//               <h4 className="text-xl font-bold mb-4 text-blue-600">Real-Time Decision Intelligence</h4>
//               <p className="text-base opacity-90 leading-relaxed">
//                 Process billions of data points instantaneously to optimize operations, detect anomalies, and deliver
//                 hyper-personalized customer experiences at enterprise scale.
//               </p>
//             </div>
//             <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6">
//               <h4 className="text-xl font-bold mb-4 text-purple-800">Predictive Business Intelligence</h4>
//               <p className="text-base opacity-90 leading-relaxed">
//                 Leverage advanced machine learning models to predict customer behavior, prevent operational downtime,
//                 and anticipate market trends ahead of competitors.
//               </p>
//             </div>
//             <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6">
//               <h4 className="text-xl font-bold mb-4 text-cyan-900">Intelligent Process Automation</h4>
//               <p className="text-base opacity-90 leading-relaxed">
//                 Replace costly manual workflows with sophisticated automation that accelerates processes,
//                 eliminates human error, and redirects talent to high-value strategic initiatives.
//               </p>
//             </div>
//             <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm border border-green-400/20 rounded-2xl p-6">
//               <h4 className="text-xl font-bold mb-4 text-green-800">Revenue Stream Innovation</h4>
//               <p className="text-base opacity-90 leading-relaxed">
//                 Unlock previously untapped revenue opportunities through predictive maintenance services,
//                 AI-driven product recommendations, and data monetization strategies.
//               </p>
//             </div>
//           </div>
//         </div> */}

//       <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 mb-12 max-w-6xl mx-auto">
//   <h3 className="text-3xl font-black mb-8 text-black drop-shadow-lg">
//     Why AI Is Your Organization's Most Critical Strategic Asset
//   </h3>
  
//   <div className="grid md:grid-cols-2 gap-8">
//     {/* Liquid Glass Cards */}
//     <div className="bg-white/15 backdrop-blur-lg backdrop-saturate-150 border border-white/25 rounded-2xl p-6 shadow-2xl">
//       <h4 className="text-xl font-bold mb-4 text-black">
//         Real-Time Decision Intelligence
//       </h4>
//       <p className="text-base text-black/80 leading-relaxed">
//         Process billions of data points instantaneously to optimize operations, detect anomalies, and deliver
//         hyper-personalized customer experiences at enterprise scale.
//       </p>
//     </div>

//     <div className="bg-white/15 backdrop-blur-lg backdrop-saturate-150 border border-white/25 rounded-2xl p-6 shadow-2xl">
//       <h4 className="text-xl font-bold mb-4 text-black">
//         Predictive Business Intelligence
//       </h4>
//       <p className="text-base text-black/80 leading-relaxed">
//         Leverage advanced machine learning models to predict customer behavior, prevent operational downtime,
//         and anticipate market trends ahead of competitors.
//       </p>
//     </div>

//     <div className="bg-white/15 backdrop-blur-lg backdrop-saturate-150 border border-white/25 rounded-2xl p-6 shadow-2xl">
//       <h4 className="text-xl font-bold mb-4 text-black">
//         Intelligent Process Automation
//       </h4>
//       <p className="text-base text-black/80 leading-relaxed">
//         Replace costly manual workflows with sophisticated automation that accelerates processes,
//         eliminates human error, and redirects talent to high-value strategic initiatives.
//       </p>
//     </div>

//     <div className="bg-white/15 backdrop-blur-lg backdrop-saturate-150 border border-white/25 rounded-2xl p-6 shadow-2xl">
//       <h4 className="text-xl font-bold mb-4 text-black">
//         Revenue Stream Innovation
//       </h4>
//       <p className="text-base text-black/80 leading-relaxed">
//         Unlock previously untapped revenue opportunities through predictive maintenance services,
//         AI-driven product recommendations, and data monetization strategies.
//       </p>
//     </div>
//   </div>
// </div>



//         <div className="text-center mb-12">
//           <h3 className="text-2xl font-bold mb-4">
//             <span className="text-red-400">Strategic Implementation Is Time-Critical</span>
//           </h3>
//           <p className="text-lg opacity-90 max-w-3xl mx-auto">
//             Every quarter of delayed AI adoption represents <span className="text-yellow-400 font-semibold">lost market position</span> and competitive disadvantage. 
//             The organizations that <span className="text-green-400 font-semibold">act decisively today</span> will define tomorrow's industry standards.
//           </p>
//         </div>

//               <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20">
//           <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
//             <div className="w-10 h-10 bg-white rounded-lg opacity-90"></div>
//           </div>
//           <h3 className="text-xl font-bold mb-4 text-cyan-400">Data-First Strategic Framework</h3>
//           <p className="opacity-90 leading-relaxed">
//             Architect comprehensive strategies aligned with business objectives, market positioning, and organizational
//             capabilities for sustainable competitive advantage.
//           </p>
//         </div>
        
//         <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20">
//           <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
//             <div className="w-10 h-10 bg-white rounded-lg opacity-100"></div>
//           </div>
//           <h3 className="text-xl font-bold mb-4 text-purple-400">Enterprise Data Ecosystem</h3>
//           <p className="opacity-90 leading-relaxed">
//             Transform disparate data sources into unified strategic assets that drive decision-making, operational
//             efficiency, and customer intelligence.
//           </p>
//         </div>
        
//         <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-green-500/20">
//           <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
//             <div className="w-10 h-10 bg-white rounded-lg opacity-90"></div>
//           </div>
//           <h3 className="text-xl font-bold mb-4 text-green-400">Continuous Innovation Engine</h3>
//           <p className="opacity-90 leading-relaxed">
//             Establish ongoing optimization frameworks through advanced model retraining, performance monitoring, and
//             adaptive learning systems.
//           </p>
//         </div>
//       </div>

//       </div>
//     </section>
//   );
// };

// export default OurPurpose;


import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

const OurPurpose = () => {
  const headerRef = useRef(null);
  const purposeRef = useRef(null);
  
  // Contact modal state
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    company: "",
    service: "AI Readiness Assessment",
    project_details: "I'm interested in getting a FREE AI Readiness Assessment for my business."
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

  useGSAP(() => {
    // Header animation
    gsap.from(headerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    // Cards animation
    gsap.fromTo(purposeRef.current.querySelectorAll('.purpose-detail-card'),
      { y: 120, opacity: 0, rotationX: 45 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: purposeRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // CTA animation
    gsap.fromTo(purposeRef.current.querySelectorAll('.cta-button'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: purposeRef.current.querySelector('.cta-section'),
          start: "top 95%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const purposeItems = [
    {
      title: "Data-First Strategic Framework",
      desc: "Architect comprehensive strategies aligned with business objectives, market positioning, and organizational capabilities for sustainable competitive advantage.",
      iconImage: "/images/data_strategy.jpg",
      iconBg: "from-blue-500 to-cyan-500",
      shadowColor: "hover:shadow-blue-500/75",
      features: [
        "Process billions of data points instantaneously to optimize operations",
        "Detect anomalies and deliver hyper-personalized customer experiences", 
        "Scale enterprise-wide decision intelligence capabilities",
        "Integrate real-time analytics with existing business workflows"
      ]
    },
    {
      title: "Enterprise Data Ecosystem", 
      desc: "Transform disparate data sources into unified strategic assets that drive decision-making, operational efficiency, and customer intelligence.",
      iconImage: "/images/ai_solution.jpg",
      iconBg: "from-purple-500 to-pink-500",
      shadowColor: "hover:shadow-purple-500/75",
      features: [
        "Leverage advanced machine learning models for predictive insights",
        "Prevent operational downtime through intelligent monitoring systems",
        "Anticipate market trends ahead of competitors with AI forecasting", 
        "Create unified data lakes for comprehensive business intelligence"
      ]
    },
    {
      title: "Continuous Innovation Engine",
      desc: "Establish ongoing optimization frameworks through advanced model retraining, performance monitoring, and adaptive learning systems.",
      iconImage: "/images/innovation.jpg",
      iconBg: "from-green-500 to-teal-500",
      shadowColor: "hover:shadow-green-500/75",
      features: [
        "Replace costly manual workflows with sophisticated automation",
        "Accelerate processes while eliminating human error completely",
        "Redirect talent to high-value strategic initiatives and innovation",
        "Implement continuous improvement through AI-driven optimization"
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative">
      {/* Custom Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Header Section */}
      <section ref={headerRef} className="py-20 text-center relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            The Future Is <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Intelligent</span>.
            The Future Is <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Now</span>.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            The world generates over <span className="text-yellow-600 font-bold">2.5 quintillion bytes</span> of data daily, 
            yet most organizations struggle to transform this data into actionable business value and competitive advantage.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Organizations that fail to embed <span className="text-blue-600 font-semibold">Artificial Intelligence strategically</span> into their core operations will inevitably fall behind in today's data-driven economy.
          </p>
        </div>
      </section>

      {/* Main Purpose Section */}
      <section ref={purposeRef} className="py-20 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why AI Is Your Organization's Most Critical Strategic Asset
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic Implementation Is Time-Critical - Every quarter of delayed AI adoption represents lost market position and competitive disadvantage.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {purposeItems.map((item, index) => (
              <div
                key={index}
                className={`purpose-detail-card group bg-white rounded-3xl border border-gray-200 relative overflow-hidden shadow-2xl ${item.shadowColor} hover:shadow-3xl transform hover:scale-105 transition-all duration-300`}
              >
                {/* Icon Image at Top */}
                <div className="p-8 pb-0">
                  <div className={`w-20 h-20 bg-gradient-to-r ${item.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-3xl transition-shadow duration-300`}>
                    <img 
                      src={item.iconImage}
                      alt={item.title}
                      className="w-12 h-12 rounded-lg object-cover shadow-lg"
                    />
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-center">
                    {item.desc}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Content Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-16 border border-gray-200 shadow-2xl hover:shadow-purple-500/20 hover:shadow-3xl transition-shadow duration-300">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Strategic Implementation Is Time-Critical
            </h3>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
              Every quarter of delayed AI adoption represents <span className="text-orange-600 font-semibold">lost market position</span> and competitive disadvantage. 
              The organizations that <span className="text-green-600 font-semibold">act decisively today</span> will define tomorrow's industry standards.
              <span className="text-red-600 font-semibold"> Raw data without intelligent processing is merely digital noise</span>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can revolutionize your operations and drive measurable results for your organization.
          </p>
          
          {/* CTA Buttons */}
          <div className="cta-section flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              to="/"
              className="cta-button bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-2xl hover:shadow-white/10 hover:shadow-3xl hover:scale-105"
            >
              Back to Homepage
            </Link>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="cta-button bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-2xl hover:shadow-blue-500/20 hover:shadow-3xl hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
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
    </div>
  );
};

export default OurPurpose;
