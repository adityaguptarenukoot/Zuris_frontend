import React from 'react';
import { useParams, Link } from 'react-router-dom';

const IndustryDetail = () => {
  const { industryName } = useParams();
  
  const industryData = {
    healthcare: {
      title: "Healthcare AI Solutions",
      hero: "Transforming Patient Care Through Intelligent Technology",
      image: "/images/ai-consultation.jpg",
      overview: "Our AI solutions for healthcare focus on improving patient outcomes, reducing costs, and streamlining operations through cutting-edge technology.",
      solutions: [
        {
          title: "AI-Powered Diagnostics",
          description: "Advanced machine learning algorithms that assist medical professionals in accurate and early disease detection."
        },
        {
          title: "Patient Care Optimization", 
          description: "Intelligent systems that personalize treatment plans and monitor patient progress in real-time."
        },
        {
          title: "Medical Research Acceleration",
          description: "Data analytics and AI models that speed up drug discovery and clinical research processes."
        }
      ],
      benefits: [
        "Improved diagnostic accuracy by up to 95%",
        "Reduced treatment costs by 30%", 
        "24/7 patient monitoring capabilities",
        "Faster drug discovery timelines"
      ]
    },
    "financial-services": {
      title: "Financial Services AI",
      hero: "Secure, Intelligent Financial Solutions",
      image: "/images/cybersecurity.jpg",
      overview: "Revolutionize financial services with AI-driven risk management, fraud detection, and customer insights.",
      solutions: [
        {
          title: "Risk Management",
          description: "Advanced algorithms that assess and mitigate financial risks in real-time."
        },
        {
          title: "Fraud Detection",
          description: "AI systems that identify and prevent fraudulent transactions with 99.9% accuracy."
        },
        {
          title: "Algorithmic Trading",
          description: "Intelligent trading systems that optimize investment strategies and market analysis."
        }
      ],
      benefits: [
        "99.9% fraud detection accuracy",
        "50% reduction in risk assessment time",
        "Automated compliance monitoring", 
        "Enhanced customer insights"
      ]
    },
    manufacturing: {
      title: "Manufacturing AI Solutions",
      hero: "Smart Factories, Intelligent Production",
      image: "/images/automation.jpg",
      overview: "Transform manufacturing operations with AI-powered automation, predictive maintenance, and quality control.",
      solutions: [
        {
          title: "Smart Factory Systems",
          description: "IoT-integrated AI that optimizes production lines and reduces downtime."
        },
        {
          title: "Predictive Maintenance",
          description: "Machine learning models that predict equipment failures before they occur."
        },
        {
          title: "Quality Control",
          description: "Computer vision systems that detect defects with superhuman accuracy."
        }
      ],
      benefits: [
        "40% reduction in equipment downtime",
        "95% quality control accuracy",
        "30% increase in production efficiency",
        "Significant cost savings"
      ]
    },
    "retail-ecommerce": {
      title: "Retail & E-commerce AI", 
      hero: "Personalized Shopping Experiences",
      image: "/images/collaboration.jpg",
      overview: "Enhance customer experiences and optimize operations with AI-driven personalization and inventory management.",
      solutions: [
        {
          title: "Personalized Recommendations",
          description: "AI algorithms that suggest products based on customer behavior and preferences."
        },
        {
          title: "Inventory Management", 
          description: "Smart systems that optimize stock levels and predict demand patterns."
        },
        {
          title: "Customer Experience Enhancement",
          description: "Chatbots and AI assistants that provide 24/7 customer support."
        }
      ],
      benefits: [
        "25% increase in conversion rates",
        "30% reduction in inventory costs",
        "24/7 customer support availability",
        "Improved customer satisfaction"
      ]
    },
    technology: {
      title: "Technology Sector AI",
      hero: "Accelerating Innovation Through AI", 
      image: "/images/startup-growth.jpg",
      overview: "Empower tech companies with AI solutions for product development, user experience, and innovation acceleration.",
      solutions: [
        {
          title: "Product Development",
          description: "AI-assisted development tools that accelerate time-to-market."
        },
        {
          title: "User Experience Optimization",
          description: "Machine learning systems that personalize user interfaces and interactions."
        },
        {
          title: "Innovation Acceleration",
          description: "AI platforms that identify market opportunities and optimize R&D processes."
        }
      ],
      benefits: [
        "50% faster product development",
        "Improved user engagement rates",
        "Data-driven innovation strategies",
        "Competitive market advantages"
      ]
    },
    transportation: {
      title: "Transportation AI Solutions",
      hero: "Smart Mobility and Logistics",
      image: "/images/ai-consultation.jpg", 
      overview: "Optimize transportation and logistics with AI-driven route optimization, autonomous systems, and intelligence.",
      solutions: [
        {
          title: "Route Optimization",
          description: "AI algorithms that find the most efficient routes and reduce fuel consumption."
        },
        {
          title: "Autonomous Systems",
          description: "Self-driving technology and automated vehicle management systems."
        },
        {
          title: "Logistics Intelligence",
          description: "Smart supply chain management and predictive logistics planning."
        }
      ],
      benefits: [
        "30% reduction in fuel costs",
        "Improved delivery times",
        "Enhanced safety measures",
        "Optimized fleet management"
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
