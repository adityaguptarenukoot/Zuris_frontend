import { useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

const IndustryDetailPage = () => {
  const { industrySlug } = useParams();
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  
  // Contact modal state
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    company: "",
    service: "Industry-Specific AI Solutions",
    project_details: "I'm interested in AI solutions for my industry."
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
        service: 'Industry-Specific AI Solutions',
        project_details: 'I am interested in AI solutions for my industry.'
      })
      setIsContactModalOpen(false);
    }
  }

  useGSAP(() => {
    // Fast header animation
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out"
    });

    // Fast content animation
    gsap.fromTo(contentRef.current.querySelectorAll('.industry-section'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  // Industry data mapping
  const industryData = {
    'healthcare': {
      name: 'Healthcare',
      title: 'Healthcare AI Solutions',
      subtitle: 'Transforming Patient Care Through Intelligent Technology',
      image: '/images/healthcare.jpg',
      color: 'from-blue-500 to-teal-500',
      description: 'Our AI solutions for healthcare focus on improving patient outcomes, reducing costs, and streamlining operations through cutting-edge technology.',
      solutions: [
        {
          title: 'AI-Powered Diagnostics',
          description: 'Advanced machine learning algorithms that assist medical professionals in accurate and early disease detection with 95% accuracy.',
          features: ['Medical Image Analysis', 'Predictive Health Analytics', 'Risk Assessment Models', 'Clinical Decision Support']
        },
        {
          title: 'Patient Care Optimization',
          description: 'Intelligent systems that personalize treatment plans and monitor patient progress in real-time.',
          features: ['Personalized Treatment Plans', 'Remote Patient Monitoring', 'Medication Management', 'Care Coordination']
        },
        {
          title: 'Medical Research Acceleration',
          description: 'Data analytics and AI models that speed up drug discovery and clinical research processes.',
          features: ['Drug Discovery Acceleration', 'Clinical Trial Optimization', 'Research Data Analysis', 'Biomarker Identification']
        }
      ],
      benefits: [
        'Improved diagnostic accuracy by up to 95%',
        'Reduced treatment costs by 30%',
        '24/7 patient monitoring capabilities',
        'Faster drug discovery timelines',
        'Enhanced patient safety and care quality',
        'Streamlined clinical workflows'
      ],
      useCases: [
        'Medical imaging and radiology analysis',
        'Predictive analytics for patient outcomes',
        'Automated clinical documentation',
        'Drug interaction and dosage optimization',
        'Hospital resource management',
        'Telemedicine and remote diagnostics'
      ]
    },
    'finance': {
      name: 'Finance',
      title: 'Financial Services AI',
      subtitle: 'Secure, Intelligent Financial Solutions',
      image: '/images/finance.jpg',
      color: 'from-green-500 to-blue-500',
      description: 'Revolutionize financial services with AI-driven risk management, fraud detection, and customer insights.',
      solutions: [
        {
          title: 'Risk Management',
          description: 'Advanced algorithms that assess and mitigate financial risks in real-time with precision.',
          features: ['Real-time Risk Assessment', 'Portfolio Optimization', 'Credit Scoring Models', 'Stress Testing']
        },
        {
          title: 'Fraud Detection',
          description: 'AI systems that identify and prevent fraudulent transactions with 99.9% accuracy.',
          features: ['Transaction Monitoring', 'Behavioral Analytics', 'Pattern Recognition', 'Real-time Alerts']
        },
        {
          title: 'Algorithmic Trading',
          description: 'Intelligent trading systems that optimize investment strategies and market analysis.',
          features: ['Market Prediction Models', 'Automated Trading', 'Sentiment Analysis', 'Portfolio Management']
        }
      ],
      benefits: [
        '99.9% fraud detection accuracy',
        '50% reduction in risk assessment time',
        'Automated compliance monitoring',
        'Enhanced customer insights',
        'Improved investment returns',
        'Reduced operational costs'
      ],
      useCases: [
        'Automated fraud detection and prevention',
        'Credit risk assessment and scoring',
        'Algorithmic trading and investment',
        'Customer behavior analysis',
        'Regulatory compliance automation',
        'Market sentiment analysis'
      ]
    },
    'manufacturing': {
      name: 'Manufacturing',
      title: 'Manufacturing AI Solutions',
      subtitle: 'Smart Factories, Intelligent Production',
      image: '/images/manufacturing.jpg',
      color: 'from-orange-500 to-red-500',
      description: 'Transform manufacturing operations with AI-powered automation, predictive maintenance, and quality control.',
      solutions: [
        {
          title: 'Smart Factory Systems',
          description: 'IoT-integrated AI that optimizes production lines and reduces downtime significantly.',
          features: ['Production Optimization', 'Resource Allocation', 'Workflow Automation', 'Performance Monitoring']
        },
        {
          title: 'Predictive Maintenance',
          description: 'Machine learning models that predict equipment failures before they occur.',
          features: ['Equipment Health Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization']
        },
        {
          title: 'Quality Control',
          description: 'Computer vision systems that detect defects with superhuman accuracy.',
          features: ['Defect Detection', 'Quality Assessment', 'Process Control', 'Standards Compliance']
        }
      ],
      benefits: [
        '40% reduction in equipment downtime',
        '95% quality control accuracy',
        '30% increase in production efficiency',
        'Significant cost savings',
        'Improved worker safety',
        'Enhanced product quality'
      ],
      useCases: [
        'Predictive maintenance scheduling',
        'Quality control and defect detection',
        'Supply chain optimization',
        'Production planning and scheduling',
        'Energy efficiency optimization',
        'Safety monitoring and compliance'
      ]
    },
    'automotive': {
      name: 'Automotive',
      title: 'Automotive AI Solutions',
      subtitle: 'Driving the Future of Transportation',
      image: '/images/automotive.jpg',
      color: 'from-purple-500 to-indigo-500',
      description: 'Advanced AI solutions for autonomous vehicles, smart manufacturing, and connected car technologies.',
      solutions: [
        {
          title: 'Autonomous Driving Systems',
          description: 'AI-powered systems for self-driving vehicles with advanced perception and decision-making.',
          features: ['Computer Vision', 'Sensor Fusion', 'Path Planning', 'Safety Systems']
        },
        {
          title: 'Connected Vehicle Platform',
          description: 'IoT and AI integration for enhanced vehicle connectivity and user experience.',
          features: ['Telematics', 'Predictive Analytics', 'Remote Diagnostics', 'User Personalization']
        },
        {
          title: 'Smart Manufacturing',
          description: 'AI-driven production optimization and quality control for automotive manufacturing.',
          features: ['Production Planning', 'Quality Assurance', 'Supply Chain Management', 'Cost Optimization']
        }
      ],
      benefits: [
        'Enhanced vehicle safety and reliability',
        'Improved fuel efficiency and performance',
        'Reduced manufacturing costs',
        'Better customer experience',
        'Predictive maintenance capabilities',
        'Advanced driver assistance features'
      ],
      useCases: [
        'Autonomous vehicle development',
        'Predictive vehicle maintenance',
        'Traffic optimization systems',
        'Driver behavior analysis',
        'Supply chain optimization',
        'Quality control in manufacturing'
      ]
    },
    'energy': {
      name: 'Energy',
      title: 'Energy Sector AI Solutions',
      subtitle: 'Powering Sustainable Energy Future',
      image: '/images/energy.jpg',
      color: 'from-yellow-500 to-orange-500',
      description: 'AI solutions for renewable energy optimization, grid management, and sustainable energy production.',
      solutions: [
        {
          title: 'Smart Grid Management',
          description: 'AI-powered systems for efficient energy distribution and grid optimization.',
          features: ['Load Forecasting', 'Grid Optimization', 'Demand Response', 'Fault Detection']
        },
        {
          title: 'Renewable Energy Optimization',
          description: 'Machine learning models for maximizing renewable energy production and efficiency.',
          features: ['Weather Prediction', 'Energy Forecasting', 'Asset Optimization', 'Performance Analytics']
        },
        {
          title: 'Energy Trading & Analytics',
          description: 'AI-driven energy trading platforms and market analysis tools.',
          features: ['Price Forecasting', 'Trading Algorithms', 'Market Analysis', 'Risk Management']
        }
      ],
      benefits: [
        'Improved energy efficiency by 25%',
        'Reduced operational costs',
        'Enhanced grid reliability',
        'Optimized renewable energy usage',
        'Better demand forecasting',
        'Sustainable energy management'
      ],
      useCases: [
        'Smart grid optimization',
        'Renewable energy forecasting',
        'Energy consumption analysis',
        'Predictive maintenance for equipment',
        'Carbon footprint optimization',
        'Energy trading automation'
      ]
    }
  };

  const industry = industryData[industrySlug];

  if (!industry) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Industry Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The requested industry page could not be found.</p>
          <Link to="/" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Header Section */}
      <section ref={headerRef} className="py-20 text-center relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <img src={industry.image} alt={industry.name} className="w-20 h-20 mr-6 rounded-2xl shadow-lg" />
            <div className="text-left">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className={`bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>
                  {industry.title}
                </span>
              </h1>
              <p className="text-2xl text-gray-600 mt-2">{industry.subtitle}</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {industry.description}
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section ref={contentRef} className="py-20 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored specifically for the {industry.name.toLowerCase()} industry
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {industry.solutions.map((solution, index) => (
              <div key={index} className={`industry-section bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-2xl`}>
                <div className={`bg-gradient-to-r ${industry.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="opacity-90">{solution.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="industry-section bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-16 border border-gray-200 shadow-2xl">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Key Benefits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industry.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-xl shadow-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="industry-section bg-white rounded-3xl p-12 border border-gray-200 shadow-2xl">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Common Use Cases</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industry.useCases.map((useCase, index) => (
                <div key={index} className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your {industry.name} Operations?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can revolutionize your {industry.name.toLowerCase()} operations and drive measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              to="/"
              className="bg-white/20 text-white px-8 py-3 rounded-full font-semibold shadow-xl"
            >
              Back to Homepage
            </Link>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-2xl"
            >
              Get Started
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
                <h3 className="text-2xl font-bold text-gray-800">Get Started with {industry.name} AI</h3>
                <button onClick={() => setIsContactModalOpen(false)} className="text-gray-500 text-2xl">×</button>
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your needs</label>
                  <textarea 
                    value={form.project_details} 
                    onChange={(e) => setForm({...form, project_details: e.target.value})} 
                    rows="4" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800" 
                    placeholder={`Describe your ${industry.name.toLowerCase()} AI requirements...`}
                    required 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : `Get ${industry.name} AI Solutions`}
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                🔒 Your information is secure. We'll contact you within 24 hours with tailored solutions.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndustryDetailPage;
