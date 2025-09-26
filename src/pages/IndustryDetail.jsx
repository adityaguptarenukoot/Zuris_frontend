import React from 'react';
import { useParams, Link } from 'react-router-dom';

const IndustryDetail = () => {
  const { industryName } = useParams();
  
 const industryData = {
    finance: {
      title: "Finance AI Solutions",
      hero: "Transforming Financial Services Through Intelligent Technology",
      image: "/images/finance.png",
      overview: "Our AI solutions for finance focus on risk management, fraud detection, algorithmic trading, and regulatory compliance through cutting-edge technology that enhances decision-making and operational efficiency.",
      solutions: [
        {
          title: "AI-Powered Risk Assessment",
          description: "Advanced machine learning models that analyze market conditions, customer behavior, and historical data to provide real-time risk assessments and credit scoring."
        },
        {
          title: "Fraud Detection & Prevention", 
          description: "Intelligent systems that detect suspicious transactions and patterns in real-time, protecting both institutions and customers with 99.9% accuracy."
        },
        {
          title: "Algorithmic Trading Systems",
          description: "Sophisticated AI algorithms that execute trades at optimal times based on market analysis, predictive modeling, and automated decision-making."
        }
      ],
      benefits: [
        "Reduce financial risks by up to 75%",
        "99.9% fraud detection accuracy with minimal false positives",
        "Automated regulatory compliance monitoring",
        "Real-time portfolio optimization and management"
      ]
    },
    healthcare: {
      title: "Healthcare AI Solutions",
      hero: "Revolutionizing Patient Care Through Intelligent Diagnostics",
      image: "/images/healthcare.png",
      overview: "Transform healthcare delivery with AI-powered diagnostics, personalized treatment plans, and operational efficiency solutions that improve patient outcomes while reducing costs.",
      solutions: [
        {
          title: "AI Medical Imaging & Diagnostics",
          description: "Advanced computer vision systems that analyze medical images with superhuman accuracy to detect diseases early and assist in clinical decision-making."
        },
        {
          title: "Personalized Treatment Planning",
          description: "AI systems that analyze patient data to recommend personalized treatment plans based on individual characteristics, medical history, and genetic factors."
        },
        {
          title: "Drug Discovery Acceleration",
          description: "AI-accelerated drug discovery platforms that identify promising compounds and predict their effectiveness, reducing development time and costs."
        }
      ],
      benefits: [
        "Improve diagnosis accuracy by up to 40%",
        "Reduce treatment costs through personalized medicine",
        "Accelerate drug discovery by 50%",
        "24/7 patient monitoring and early warning systems"
      ]
    },
    automotive: {
      title: "Automotive AI Solutions", 
      hero: "Driving Innovation in Smart Mobility and Manufacturing",
      image: "/images/automotive.png",
      overview: "Accelerate automotive innovation with AI-powered autonomous systems, predictive maintenance, and intelligent manufacturing solutions for the future of mobility.",
      solutions: [
        {
          title: "Autonomous Driving Systems",
          description: "Advanced AI systems that enable self-driving capabilities with real-time decision making, sensor fusion, and safety-critical performance."
        },
        {
          title: "Predictive Maintenance",
          description: "AI-powered systems that predict vehicle maintenance needs before failures occur, optimizing fleet operations and reducing downtime."
        },
        {
          title: "Smart Manufacturing & Quality Control",
          description: "Intelligent manufacturing systems that optimize production processes, automate quality inspection, and reduce manufacturing defects."
        }
      ],
      benefits: [
        "Enhance vehicle safety through autonomous features",
        "Reduce maintenance costs by up to 30%",
        "Improve manufacturing quality and reduce defects by 60%",
        "Optimize supply chain and inventory management"
      ]
    },
    manufacturing: {
      title: "Manufacturing AI Solutions",
      hero: "Smart Factories and Intelligent Production Systems",
      image: "/images/manufacturing.png",
      overview: "Transform manufacturing operations with AI-driven automation, predictive analytics, and quality control systems that optimize efficiency and reduce operational costs.",
      solutions: [
        {
          title: "Smart Factory Automation",
          description: "AI-powered systems that automate and optimize manufacturing processes for maximum efficiency, reducing human error and increasing throughput."
        },
        {
          title: "Predictive Quality Control",
          description: "AI systems that predict and prevent quality issues before they occur in the production line, ensuring consistent product quality."
        },
        {
          title: "Demand Forecasting & Planning",
          description: "Advanced AI models that accurately predict demand patterns for better inventory management, production planning, and resource allocation."
        }
      ],
      benefits: [
        "Increase production efficiency by up to 45%",
        "Reduce manufacturing defects and waste significantly",
        "Optimize inventory management and reduce stockouts",
        "Minimize equipment downtime through predictive maintenance"
      ]
    },
    energy: {
      title: "Energy AI Solutions",
      hero: "Powering the Future with Intelligent Grid Management",
      image: "/images/energy.png",
      overview: "Optimize energy operations with AI-driven grid management, renewable integration, and intelligent energy trading systems for sustainable power solutions.",
      solutions: [
        {
          title: "Smart Grid Management",
          description: "AI systems that optimize energy distribution, grid stability, and real-time load balancing for efficient power delivery across networks."
        },
        {
          title: "Renewable Energy Integration",
          description: "AI-powered systems that seamlessly integrate renewable energy sources into the grid while maintaining stability and optimizing performance."
        },
        {
          title: "Predictive Asset Management",
          description: "AI systems that predict equipment failures and optimize maintenance schedules for power generation and distribution infrastructure."
        }
      ],
      benefits: [
        "Improve grid stability and reduce outages by up to 70%",
        "Optimize energy distribution and reduce operational costs",
        "Increase renewable energy integration by 40%",
        "Predictive maintenance reduces asset downtime significantly"
      ]
    }
  };

  const industry = industryData[industryName];

  if (!industry) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Industry Not Found</h1>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('${industry.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold text-white mb-6">{industry.title}</h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto">{industry.hero}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Overview</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {industry.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industry.solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {industry.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our AI solutions can revolutionize your industry operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </Link>
            <Link to="/" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;



