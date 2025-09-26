import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

const ProcessPage = () => {
  const headerRef = useRef(null);
  const processRef = useRef(null);
  
  // Contact modal state
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    company: "",
    service: "AI Development Process Consultation",
    project_details: "I'm interested in learning more about your AI development process for my business."
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
        service: 'AI Development Process Consultation',
        project_details: 'I am interested in learning more about your AI development process for my business.'
      })
      setIsContactModalOpen(false);
    }
  }

  useGSAP(() => {
    // Fast header animation
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.4, // Fast
      ease: "power2.out"
    });

    // Fast process cards animation
    gsap.fromTo(processRef.current.querySelectorAll('.process-detail-card'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.3, // Very fast
        ease: "power1.out",
        stagger: 0.1, // Quick stagger
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Fast CTA animation
    gsap.fromTo('.cta-button-process',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.2, // Very fast
        ease: "power1.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.cta-section-process',
          start: "top 95%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const detailedProcesses = [
    {
      title: "Discover & Strategize",
      subtitle: "Strategic AI Planning & Assessment",
      icon: "/images/strategy.jpg",
      color: "from-blue-500 to-purple-600",
      shadowColor: "shadow-blue-500/30",
      deliverables: "AI Strategy Document, Technical Roadmap, ROI Analysis",
      description: "We begin with a comprehensive analysis of your business challenges, existing infrastructure, and AI opportunity mapping to create a strategic foundation.",
      steps: [
        {
          name: "Business Analysis",
          details: "Deep-dive stakeholder interviews and process mapping to identify pain points and opportunities",
          tools: ["Process Mining Tools", "Stakeholder Interviews", "Business Process Analysis"]
        },
        {
          name: "AI Readiness Assessment", 
          details: "Evaluate current data infrastructure, team capabilities, and technological readiness for AI integration",
          tools: ["Data Audit", "Infrastructure Assessment", "Team Skill Analysis"]
        },
        {
          name: "Opportunity Identification",
          details: "Identify high-impact AI use cases aligned with business objectives and technical feasibility",
          tools: ["Use Case Prioritization", "Feasibility Studies", "ROI Modeling"]
        },
        {
          name: "Strategic Roadmap Creation",
          details: "Develop phased implementation plan with clear milestones, timelines, and success metrics",
          tools: ["Project Planning", "Resource Allocation", "Risk Assessment"]
        }
      ]
    },
    {
      title: "Co-Develop & Co-Create",
      subtitle: "Collaborative AI Model Development",
      icon: "/images/build.jpg",
      color: "from-green-500 to-teal-500",
      shadowColor: "shadow-green-500/30",
    //   duration: "6-12 weeks",
      deliverables: "AI Models, APIs, Documentation, Training Materials",
      description: "Collaborative development phase where we design, build, and train AI models using cutting-edge algorithms and your domain expertise.",
      steps: [
        {
          name: "Data Preparation & Engineering",
          details: "Clean, transform, and structure data for optimal AI model performance and accuracy",
          tools: ["Data Pipelines", "Feature Engineering", "Data Validation", "ETL Processes"]
        },
        {
          name: "Model Architecture Design",
          details: "Design optimal AI model architecture based on use case requirements and performance criteria",
          tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Custom Algorithms"]
        },
        {
          name: "Training & Optimization",
          details: "Train models with rigorous testing, validation, and hyperparameter optimization for best results",
          tools: ["Cross-validation", "Hyperparameter Tuning", "Model Evaluation", "Performance Metrics"]
        },
        {
          name: "Integration Development",
          details: "Build APIs and integration layers for seamless connection with existing business systems",
          tools: ["REST APIs", "GraphQL", "Microservices", "Database Integration"]
        }
      ]
    },
    {
      title: "Deploy & Scale",
      subtitle: "Production Deployment & Optimization",
      icon: "/images/deploy.jpg",
      color: "from-orange-500 to-red-500",
      shadowColor: "shadow-orange-500/30",
    //   duration: "4-8 weeks",
      deliverables: "Production System, Monitoring Dashboard, Support Documentation",
      description: "Production deployment with comprehensive monitoring, optimization, and continuous improvement frameworks to ensure long-term success.",
      steps: [
        {
          name: "Production Deployment",
          details: "Deploy AI models to production environment with proper security, scalability, and reliability measures",
          tools: ["Docker", "Kubernetes", "AWS/Azure/GCP", "CI/CD Pipelines"]
        },
        {
          name: "Monitoring & Analytics",
          details: "Implement comprehensive monitoring systems to track model performance, usage, and business impact",
          tools: ["Monitoring Dashboards", "Performance Metrics", "Alert Systems", "Analytics Tools"]
        },
        {
          name: "Performance Optimization",
          details: "Continuously optimize model performance, speed, and resource utilization based on real-world data",
          tools: ["A/B Testing", "Performance Profiling", "Resource Optimization", "Model Tuning"]
        },
        {
          name: "Support & Maintenance",
          details: "Provide ongoing support, updates, and improvements to ensure sustained AI system performance",
          tools: ["Support Documentation", "Training Programs", "Update Procedures", "Maintenance Plans"]
        }
      ]
    }
  ];

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
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our AI Development Process
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            A comprehensive, systematic approach to developing robust, scalable, and ethical AI solutions that drive real business results.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From strategic planning to production deployment, we guide you through every step of your AI transformation journey.
          </p>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section ref={processRef} className="py-20 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {detailedProcesses.map((process, index) => (
              <div key={index} className={`process-detail-card bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-2xl ${process.shadowColor}`}>
                {/* Process Header */}
                <div className={`bg-gradient-to-r ${process.color} p-8 text-white`}>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className={`w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center shadow-xl`}>
                      <img 
                        src={process.icon}
                        alt={process.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                          Phase {index + 1}
                        </span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                          {process.duration}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">{process.title}</h2>
                      <p className="text-xl opacity-90 mb-3">{process.subtitle}</p>
                      <p className="opacity-80">{process.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Key Deliverables:</h4>
                    <p className="opacity-90">{process.deliverables}</p>
                  </div>
                </div>

                {/* Process Steps */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Detailed Steps</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {process.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-8 h-8 bg-gradient-to-r ${process.color} rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                            {stepIndex + 1}
                          </div>
                          <h4 className="text-lg font-bold text-gray-800">{step.name}</h4>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{step.details}</p>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700 text-sm">Tools & Technologies:</h5>
                          <div className="flex flex-wrap gap-2">
                            {step.tools.map((tool, toolIndex) => (
                              <span key={toolIndex} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-600 border border-gray-200 shadow-sm">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-process py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your AI Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our proven AI development process can transform your business operations and drive measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              to="/"
              className="cta-button-process bg-white/20 text-white px-8 py-3 rounded-full font-semibold shadow-xl"
            >
              Back to Homepage
            </Link>
            <Link to = "/contact" 
              className="cta-button-process bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-2xl"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ProcessPage;
