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
    gsap.from(headerRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.2,
      ease: "power1.out"
    });

    gsap.fromTo(contentRef.current.querySelectorAll('.service-section'),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.15,
        ease: "power1.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.to('.floating-card', {
      y: -5,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.3
    });
  }, []);

  const serviceData = {
    'ai-consultation-advisory': {
      title: 'AI Consultation & Advisory',
      subtitle: 'Strategic AI Guidance for Business Transformation',
      description: 'Strategic AI guidance that transforms business challenges into competitive advantages through comprehensive assessment and data-driven roadmaps.',
      overview: 'Our AI Consultation & Advisory service provides organizations with strategic direction to successfully implement AI solutions. We conduct comprehensive assessments of your current capabilities, identify high-impact opportunities, and create detailed roadmaps for AI transformation.',
      phases: [
        {
          title: 'Assessment & Discovery',
          description: 'Comprehensive evaluation of current state, capabilities, and opportunities.',
          deliverables: ['Current State Analysis', 'AI Readiness Assessment', 'Opportunity Identification', 'Stakeholder Interviews']
        },
        {
          title: 'Strategy Development',
          description: 'Development of comprehensive AI strategy and implementation roadmap.',
          deliverables: ['AI Strategy Document', 'Implementation Roadmap', 'ROI Analysis', 'Risk Assessment']
        },
        {
          title: 'Planning & Recommendations',
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
      description: 'AI-powered security operations that detect, respond, and prevent threats faster than traditional human-only approaches.',
      overview: 'Our Cybersecurity Services leverage artificial intelligence to enhance your security posture, automate threat detection, and respond to incidents faster than traditional methods. We integrate AI engines with your existing security infrastructure.',
      phases: [
        {
          title: 'Security Assessment',
          description: 'Comprehensive security audit and vulnerability assessment.',
          deliverables: ['Security Audit Report', 'Vulnerability Assessment', 'Risk Analysis', 'Compliance Review']
        },
        {
          title: 'AI Integration',
          description: 'Integration of AI-powered security tools and systems.',
          deliverables: ['AI Security Engine', 'SIEM Integration', 'Automated Response Systems', 'Threat Intelligence']
        },
        {
          title: 'Monitoring & Optimization',
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
      description: 'Modern AI/MLOps implementations that identify automation opportunities and transform complex, fragmented business processes.',
      overview: 'Transform your business operations with intelligent automation that goes beyond traditional RPA. We implement AI-driven solutions that can handle complex, unstructured tasks and continuously improve performance.',
      phases: [
        {
          title: 'Process Analysis',
          description: 'Deep analysis of existing processes and automation opportunities.',
          deliverables: ['Process Maps', 'Automation Opportunities', 'ROI Analysis', 'Implementation Plan']
        },
        {
          title: 'AI Development',
          description: 'Development of AI-powered automation solutions.',
          deliverables: ['AI Models', 'Automation Workflows', 'Integration APIs', 'Testing Results']
        },
        {
          title: 'Deployment & Optimization',
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
      description: 'End-to-end product development from concept to enterprise-grade architecture using agile methodologies and AI/MLOps practices.',
      overview: 'Partner with us for comprehensive product development that combines strategic planning with hands-on execution. We work collaboratively to build scalable, production-ready solutions using modern development practices.',
      phases: [
        {
          title: 'Discovery & Planning',
          description: 'Comprehensive product discovery and development planning.',
          deliverables: ['Product Requirements', 'Technical Architecture', 'Development Roadmap', 'Resource Plan']
        },
        {
          title: 'MVP Development',
          description: 'Rapid development of minimum viable product.',
          deliverables: ['MVP Product', 'Core Features', 'Testing Suite', 'Documentation']
        },
        {
          title: 'Scaling & Enterprise',
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
      description: 'Comprehensive tech partnership combining strategic advisory and hands-on execution to build scalable, cloud-native architectures with embedded AI.',
      overview: 'Act as your dedicated technology partner, providing both strategic guidance and hands-on development to accelerate your startup growth. We help you build scalable systems while embedding AI capabilities from day one.',
      phases: [
        {
          title: 'Strategic Assessment',
          description: 'Comprehensive assessment of technology needs and growth strategy.',
          deliverables: ['Technology Assessment', 'Growth Strategy', 'Architecture Plan', 'Investment Roadmap']
        },
        {
          title: 'Foundation Building',
          description: 'Building scalable technology foundation and core systems.',
          deliverables: ['Core Platform', 'Scalable Architecture', 'AI Integration', 'Security Framework']
        },
        {
          title: 'Growth & Optimization',
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
      description: 'Transform raw data into actionable business intelligence through advanced analytics platforms, predictive modeling, and real-time decision support systems.',
      overview: 'Build comprehensive data intelligence platforms that turn your raw data into strategic assets. We create unified analytics systems with advanced AI models for predictive insights and real-time decision support.',
      phases: [
        {
          title: 'Data Assessment',
          description: 'Comprehensive analysis of data sources and requirements.',
          deliverables: ['Data Audit', 'Architecture Design', 'Requirements Analysis', 'Implementation Plan']
        },
        {
          title: 'Platform Development',
          description: 'Development of unified data platform and analytics systems.',
          deliverables: ['Data Platform', 'Analytics Engine', 'ML Pipelines', 'Dashboard System']
        },
        {
          title: 'Optimization & Training',
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
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <section ref={headerRef} className="py-20 text-center relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {service.title}
            </span>
          </h1>
          <p className="text-2xl text-gray-700 font-medium mb-6">{service.subtitle}</p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {service.overview}
          </p>
        </div>
      </section>

      <section ref={contentRef} className="py-20 bg-white/95 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="service-section mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Implementation Phases
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {service.phases.map((phase, index) => (
                <div key={index} className="floating-card bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
                  <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                        Phase {index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                    <p className="opacity-95">{phase.description}</p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Deliverables:</h4>
                    <ul className="space-y-3">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 flex-shrink-0 mt-1.5"></div>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="service-section bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 mb-20 border border-gray-200 shadow-lg floating-card">
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-10">
              Key Benefits
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 flex-shrink-0 mt-1.5"></div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="service-section grid md:grid-cols-2 gap-8">
            <div className="floating-card bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">
                Technologies Used
              </h3>
              <div className="space-y-4">
                {service.technologies.map((tech, index) => (
                  <div key={index} className="flex items-start bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 flex-shrink-0 mt-1.5"></div>
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="floating-card bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">
                Target Industries
              </h3>
              <div className="space-y-4">
                {service.targetIndustries.map((industry, index) => (
                  <div key={index} className="flex items-start bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 flex-shrink-0 mt-1.5"></div>
                    <span className="text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Let's discuss how our {service.title} can transform your business operations and drive measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              to="/services"
              className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30">
              Back to Services
            </Link>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-purple-600 px-10 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-200">
              Get Quote & Consultation
            </button>
          </div>
        </div>
      </section>

      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Get Quote for {service.title}
                </h3>
                <button 
                  onClick={() => setIsContactModalOpen(false)} 
                  className="text-gray-400 hover:text-gray-600 text-2xl bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
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
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
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
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
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
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                    placeholder="Your Company" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Requirements</label>
                  <textarea 
                    value={form.project_details} 
                    onChange={(e) => setForm({...form, project_details: e.target.value})} 
                    rows="4" 
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                    placeholder={`Describe your ${service.title} requirements...`}
                    required 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Get Quote & Schedule Consultation"}
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-6 text-center">
                🔒 Your information is secure. We'll contact you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetailPage;
