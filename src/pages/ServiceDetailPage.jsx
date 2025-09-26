import { useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  
  // Contact modal state
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    company: "",
    service: "Service Inquiry",
    project_details: "I'm interested in learning more about your services."
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
        service: 'Service Inquiry',
        project_details: 'I am interested in learning more about your services.'
      })
      setIsContactModalOpen(false);
    }
  }

  useGSAP(() => {
    // Very fast header animation
    gsap.from(headerRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.2, // Very fast
      ease: "power1.out"
    });

    // Super fast content animation
    gsap.fromTo(contentRef.current.querySelectorAll('.service-section'),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.15, // Super fast
        ease: "power1.out",
        stagger: 0.05, // Quick stagger
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Fast floating animations for interactive elements
    gsap.to('.floating-card', {
      y: -5,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.3
    });
  }, []);

  // Service data mapping with vibrant colors
  const serviceData = {
    'ai-consultation-advisory': {
      title: 'AI Consultation & Advisory',
      subtitle: 'Strategic AI Guidance for Business Transformation',
      image: '/images/ai_strategy.jpg',
      color: 'from-cyan-500 via-blue-500 to-purple-600',
      shadowColor: 'shadow-cyan-500/30',
      description: 'Strategic AI guidance that transforms business challenges into competitive advantages through comprehensive assessment and data-driven roadmaps.',
      overview: 'Our AI Consultation & Advisory service provides organizations with strategic direction to successfully implement AI solutions. We conduct comprehensive assessments of your current capabilities, identify high-impact opportunities, and create detailed roadmaps for AI transformation.',
      phases: [
        {
          title: 'Assessment & Discovery',
          // duration: '1-2 weeks',
          description: 'Comprehensive evaluation of current state, capabilities, and opportunities.',
          deliverables: ['Current State Analysis', 'AI Readiness Assessment', 'Opportunity Identification', 'Stakeholder Interviews']
        },
        {
          title: 'Strategy Development',
          // duration: '2-3 weeks',
          description: 'Development of comprehensive AI strategy and implementation roadmap.',
          deliverables: ['AI Strategy Document', 'Implementation Roadmap', 'ROI Analysis', 'Risk Assessment']
        },
        {
          title: 'Planning & Recommendations',
          // duration: '1 week',
          description: 'Detailed planning and actionable recommendations for implementation.',
          deliverables: ['Detailed Project Plans', 'Resource Requirements', 'Technology Recommendations', 'Success Metrics']
        }
      ],
      benefits: [
        'Clear AI strategy aligned with business objectives',
        'Identification of high-ROI AI opportunities',
        'Risk mitigation and compliance guidance',
        'Technology stack recommendations',
        'Implementation roadmap with timelines',
        'ROI projections and success metrics'
      ],
      technologies: ['Machine Learning Platforms', 'Cloud Services (AWS, Azure, GCP)', 'Data Analytics Tools', 'AI/ML Frameworks'],
      targetIndustries: ['Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Technology', 'Energy']
    },
    'cybersecurity-services': {
      title: 'Cybersecurity Services',
      subtitle: 'AI-Powered Security Operations',
      image: '/images/ai_transformation.jpg',
      color: 'from-emerald-500 via-teal-500 to-cyan-600',
      shadowColor: 'shadow-emerald-500/30',
      description: 'AI-powered security operations that detect, respond, and prevent threats faster than traditional human-only approaches.',
      overview: 'Our Cybersecurity Services leverage artificial intelligence to enhance your security posture, automate threat detection, and respond to incidents faster than traditional methods. We integrate AI engines with your existing security infrastructure.',
      phases: [
        {
          title: 'Security Assessment',
          // duration: '1-2 weeks',
          description: 'Comprehensive security audit and vulnerability assessment.',
          deliverables: ['Security Audit Report', 'Vulnerability Assessment', 'Risk Analysis', 'Compliance Review']
        },
        {
          title: 'AI Integration',
          // duration: '3-4 weeks',
          description: 'Integration of AI-powered security tools and systems.',
          deliverables: ['AI Security Engine', 'SIEM Integration', 'Automated Response Systems', 'Threat Intelligence']
        },
        {
          title: 'Monitoring & Optimization',
          // duration: '2 weeks',
          description: 'Implementation of continuous monitoring and system optimization.',
          deliverables: ['Monitoring Dashboard', 'Alert Systems', 'Performance Reports', 'Optimization Recommendations']
        }
      ],
      benefits: [
        '99.9% threat detection accuracy',
        'Automated incident response',
        'Real-time threat intelligence',
        'Reduced false positive rates',
        '24/7 security monitoring',
        'Compliance automation'
      ],
      technologies: ['AI Security Platforms', 'SIEM Systems', 'Threat Intelligence Tools', 'Behavioral Analytics'],
      targetIndustries: ['Finance', 'Healthcare', 'Government', 'Technology', 'Energy', 'Retail']
    },
    'ai-automation-digital-transformation': {
      title: 'AI Automation & Digital Transformation',
      subtitle: 'Intelligent Process Automation',
      image: '/images/build.jpg',
      color: 'from-violet-500 via-purple-500 to-fuchsia-600',
      shadowColor: 'shadow-violet-500/30',
      description: 'Modern AI/MLOps implementations that identify automation opportunities and transform complex, fragmented business processes.',
      overview: 'Transform your business operations with intelligent automation that goes beyond traditional RPA. We implement AI-driven solutions that can handle complex, unstructured tasks and continuously improve performance.',
      phases: [
        {
          title: 'Process Analysis',
          // duration: '2-3 weeks',
          description: 'Deep analysis of existing processes and automation opportunities.',
          deliverables: ['Process Maps', 'Automation Opportunities', 'ROI Analysis', 'Implementation Plan']
        },
        {
          title: 'AI Development',
          // duration: '4-6 weeks',
          description: 'Development of AI-powered automation solutions.',
          deliverables: ['AI Models', 'Automation Workflows', 'Integration APIs', 'Testing Results']
        },
        {
          title: 'Deployment & Optimization',
          // duration: '2-3 weeks',
          description: 'Production deployment and performance optimization.',
          deliverables: ['Production System', 'Monitoring Tools', 'Performance Reports', 'User Training']
        }
      ],
      benefits: [
        'Up to 80% reduction in manual tasks',
        'Improved accuracy and consistency',
        'Faster processing times',
        'Cost savings through automation',
        'Scalable intelligent workflows',
        'Continuous process improvement'
      ],
      technologies: ['RPA Platforms', 'Machine Learning', 'Process Mining Tools', 'Workflow Automation'],
      targetIndustries: ['Manufacturing', 'Finance', 'Healthcare', 'Retail', 'Logistics', 'Insurance']
    },
    'connect-collaborate-co-develop': {
      title: 'Connect, Collaborate & Co-develop',
      subtitle: 'End-to-End Product Development',
      image: '/images/collaborative_development.jpg',
      color: 'from-rose-500 via-pink-500 to-red-500',
      shadowColor: 'shadow-rose-500/30',
      description: 'End-to-end product development from concept to enterprise-grade architecture using agile methodologies and AI/MLOps practices.',
      overview: 'Partner with us for comprehensive product development that combines strategic planning with hands-on execution. We work collaboratively to build scalable, production-ready solutions using modern development practices.',
      phases: [
        {
          title: 'Discovery & Planning',
          // duration: '2-3 weeks',
          description: 'Comprehensive product discovery and development planning.',
          deliverables: ['Product Requirements', 'Technical Architecture', 'Development Roadmap', 'Resource Plan']
        },
        {
          title: 'MVP Development',
          // duration: '4-8 weeks',
          description: 'Rapid development of minimum viable product.',
          deliverables: ['MVP Product', 'Core Features', 'Testing Suite', 'Documentation']
        },
        {
          title: 'Scaling & Enterprise',
          // duration: '4-6 weeks',
          description: 'Scaling to enterprise-grade production system.',
          deliverables: ['Production System', 'Scalability Features', 'Security Implementation', 'Deployment Pipeline']
        }
      ],
      benefits: [
        'Faster time to market',
        'Scalable architecture design',
        'Modern development practices',
        'Continuous integration/deployment',
        'Quality assurance and testing',
        'Knowledge transfer and training'
      ],
      technologies: ['Cloud Platforms', 'Modern Frameworks', 'DevOps Tools', 'AI/ML Platforms'],
      targetIndustries: ['Technology', 'Startups', 'Healthcare', 'Finance', 'E-commerce', 'SaaS']
    },
    'startup-growth-acceleration': {
      title: 'Startup Growth & Acceleration',
      subtitle: 'Comprehensive Tech Partnership',
      image: '/images/innovation.jpg',
      color: 'from-amber-500 via-orange-500 to-red-500',
      shadowColor: 'shadow-amber-500/30',
      description: 'Comprehensive tech partnership combining strategic advisory and hands-on execution to build scalable, cloud-native architectures with embedded AI.',
      overview: 'Act as your dedicated technology partner, providing both strategic guidance and hands-on development to accelerate your startup growth. We help you build scalable systems while embedding AI capabilities from day one.',
      phases: [
        {
          title: 'Strategic Assessment',
          // duration: '2-4 weeks',
          description: 'Comprehensive assessment of technology needs and growth strategy.',
          deliverables: ['Technology Assessment', 'Growth Strategy', 'Architecture Plan', 'Investment Roadmap']
        },
        {
          title: 'Foundation Building',
          // duration: '6-12 weeks',
          description: 'Building scalable technology foundation and core systems.',
          deliverables: ['Core Platform', 'Scalable Architecture', 'AI Integration', 'Security Framework']
        },
        {
          title: 'Growth & Optimization',
          // duration: '6-12 weeks',
          description: 'Optimization for scale and continuous improvement.',
          deliverables: ['Performance Optimization', 'Advanced Features', 'Analytics Platform', 'Growth Tools']
        }
      ],
      benefits: [
        'Accelerated product development',
        'Scalable cloud-native architecture',
        'Embedded AI capabilities',
        'Investment readiness',
        'Technical team augmentation',
        'Strategic technology guidance'
      ],
      technologies: ['Cloud Platforms', 'Microservices', 'AI/ML Services', 'Analytics Tools'],
      targetIndustries: ['Technology Startups', 'SaaS', 'E-commerce', 'FinTech', 'HealthTech', 'EdTech']
    },
    'data-intelligence-analytics-platform': {
      title: 'Data Intelligence & Analytics Platform',
      subtitle: 'Transform Data into Actionable Insights',
      image: '/images/data_strategy.jpg',
      color: 'from-indigo-500 via-blue-500 to-purple-600',
      shadowColor: 'shadow-indigo-500/30',
      description: 'Transform raw data into actionable business intelligence through advanced analytics platforms, predictive modeling, and real-time decision support systems.',
      overview: 'Build comprehensive data intelligence platforms that turn your raw data into strategic assets. We create unified analytics systems with advanced AI models for predictive insights and real-time decision support.',
      phases: [
        {
          title: 'Data Assessment',
          // duration: '2-3 weeks',
          description: 'Comprehensive analysis of data sources and requirements.',
          deliverables: ['Data Audit', 'Architecture Design', 'Requirements Analysis', 'Implementation Plan']
        },
        {
          title: 'Platform Development',
          // duration: '6-8 weeks',
          description: 'Development of unified data platform and analytics systems.',
          deliverables: ['Data Platform', 'Analytics Engine', 'ML Pipelines', 'Dashboard System']
        },
        {
          title: 'Optimization & Training',
          // duration: '2-4 weeks',
          description: 'Performance optimization and team training.',
          deliverables: ['Optimized System', 'Training Materials', 'Documentation', 'Support Plan']
        }
      ],
      benefits: [
        'Unified data lake and warehouse',
        'Real-time analytics and insights',
        'Predictive modeling capabilities',
        'Automated reporting systems',
        'Self-service analytics',
        'Data-driven decision making'
      ],
      technologies: ['Data Warehouses', 'Analytics Platforms', 'ML Frameworks', 'Visualization Tools'],
      targetIndustries: ['Retail', 'Finance', 'Healthcare', 'Manufacturing', 'Technology', 'Media']
    }
  };

  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The requested service page could not be found.</p>
          <Link to="/services" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>
      
      {/* Header Section */}
      <section ref={headerRef} className="py-20 text-center relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-8">
            <div className="floating-card">
              <img 
                src={service.image} 
                alt={service.title} 
                className={`w-28 h-28 rounded-3xl shadow-2xl object-cover ${service.shadowColor} hover:shadow-3xl transition-all duration-200`} 
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-3">
                <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  {service.title}
                </span>
              </h1>
              <p className="text-2xl text-gray-700 font-medium">{service.subtitle}</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {service.overview}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section ref={contentRef} className="py-20 bg-white/90 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Service Phases */}
          <div className="service-section mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Implementation Phases
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {service.phases.map((phase, index) => (
                <div key={index} className={`floating-card bg-white rounded-3xl border-2 border-transparent bg-gradient-to-br from-white to-gray-50 overflow-hidden shadow-2xl ${service.shadowColor} hover:shadow-3xl hover:scale-105 transition-all duration-200`}>
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}>
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full filter blur-2xl animate-pulse"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-white/30 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                          Phase {index + 1}
                        </span>
                        <span className="bg-white/30 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                          {phase.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                      <p className="opacity-95 font-medium">{phase.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-gray-800 mb-4 text-lg">Deliverables:</h4>
                    <ul className="space-y-3">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className={`w-3 h-3 bg-gradient-to-r ${service.color} rounded-full mr-4 shadow-lg animate-pulse`}></div>
                          <span className="font-medium">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className={`service-section bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-12 mb-20 border-2 border-transparent shadow-2xl ${service.shadowColor} floating-card`}>
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Key Benefits
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="group flex items-center bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 border border-white/50">
                  <div className={`w-4 h-4 bg-gradient-to-r ${service.color} rounded-full mr-4 group-hover:animate-spin shadow-lg`}></div>
                  <span className="text-gray-800 font-semibold group-hover:text-gray-900 transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Industries */}
          <div className="service-section grid md:grid-cols-2 gap-8">
            <div className="floating-card bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-200">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Technologies Used
              </h3>
              <div className="space-y-4">
                {service.technologies.map((tech, index) => (
                  <div key={index} className="group flex items-center bg-white/70 backdrop-blur-sm p-4 rounded-xl hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4 group-hover:animate-pulse"></div>
                    <span className="text-gray-800 font-semibold">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="floating-card bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-200">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Target Industries
              </h3>
              <div className="space-y-4">
                {service.targetIndustries.map((industry, index) => (
                  <div key={index} className="group flex items-center bg-white/70 backdrop-blur-sm p-4 rounded-xl hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 group-hover:animate-pulse"></div>
                    <span className="text-gray-800 font-semibold">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 text-white relative z-10 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Let's discuss how our {service.title} can transform your business operations and drive measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              to="/services"
              className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full font-semibold shadow-2xl hover:shadow-3xl hover:scale-110 hover:bg-white/30 transition-all duration-200 border border-white/30">
              Back to Services
            </Link>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className={`bg-gradient-to-r ${service.color} text-white px-10 py-4 rounded-full font-semibold shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-200`}>
              Get Quote & Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border-2 border-gray-200">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  Get Quote for {service.title}
                </h3>
                <button 
                  onClick={() => setIsContactModalOpen(false)} 
                  className="text-gray-400 hover:text-gray-600 text-2xl hover:scale-110 transition-all duration-200 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center" >
                  ×
                </button>
              </div>
              
              <form className="space-y-6" onSubmit={submithandler}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Full Name *</label>
                  <input 
                    value={form.fullname} 
                    onChange={(e) => setForm({...form, fullname: e.target.value})} 
                    type="text" 
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800 hover:border-gray-300 transition-colors" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Email Address *</label>
                  <input 
                    value={form.email} 
                    onChange={(e) => setForm({...form, email: e.target.value})} 
                    type="email" 
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800 hover:border-gray-300 transition-colors" 
                    placeholder="your@email.com" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Company *</label>
                  <input 
                    value={form.company} 
                    onChange={(e) => setForm({...form, company: e.target.value})} 
                    type="text" 
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800 hover:border-gray-300 transition-colors" 
                    placeholder="Your Company" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Project Requirements</label>
                  <textarea 
                    value={form.project_details} 
                    onChange={(e) => setForm({...form, project_details: e.target.value})} 
                    rows="4" 
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800 hover:border-gray-300 transition-colors" 
                    placeholder={`Describe your ${service.title} requirements...`}
                    required 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-4 px-6 rounded-xl font-bold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Get Quote & Schedule Consultation"}
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-6 text-center">
                🔒 Your information is secure. We'll contact you within 24 hours with a detailed proposal.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetailPage;
