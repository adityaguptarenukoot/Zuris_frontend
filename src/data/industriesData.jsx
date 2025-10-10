
export const industriesData = [
  {
    id: 1,
    name: "Finance",
    slug: "finance",
    image: "/images/finance.png",
    brief: "Transform financial services with AI-powered risk assessment and fraud detection.",
    description: "Revolutionize your financial operations with cutting-edge AI solutions that enhance decision-making, reduce risk, and improve customer experiences through intelligent automation and predictive analytics.",
    keyFeatures: [
      "AI-Powered Risk Assessment", 
      "Real-time Fraud Detection", 
      "Algorithmic Trading", 
      "Customer Analytics"
    ],
    benefits: [
      "Reduce financial risks by 75%",
      "Detect fraud in real-time",
      "Automate trading decisions",
      "Enhance customer experience"
    ],
    useCases: [
      "Credit scoring and loan approval",
      "Anti-money laundering detection", 
      "Portfolio optimization",
      "Regulatory compliance automation"
    ]
  },
  {
    id: 2,
    name: "Healthcare",
    slug: "healthcare",
    image: "/images/healthcare.png", 
    brief: "Revolutionize healthcare with AI-driven diagnostics, personalized treatment plans, and operational efficiency.",
    description: "Transform patient care and medical outcomes with AI-powered diagnostics, treatment planning, and operational efficiency solutions that improve accuracy and reduce costs.",
    keyFeatures: [
      "AI Medical Imaging",
      "Drug Discovery Platform", 
      "Personalized Treatment",
      "Predictive Analytics"
    ],
    benefits: [
      "Improve diagnosis accuracy by 40%",
      "Reduce treatment costs",
      "Accelerate drug discovery", 
      "Personalize patient care"
    ],
    useCases: [
      "Medical image analysis",
      "Clinical decision support",
      "Drug compound identification",
      "Patient risk stratification"
    ]
  },
  {
    id: 3,
    name: "Automotive",
    slug: "automotive",
    image: "/images/automotive.png",
    brief: "Drive innovation in automotive industry with autonomous systems, predictive maintenance, and smart manufacturing.",
    description: "Accelerate automotive innovation with AI-powered autonomous systems, predictive maintenance, and intelligent manufacturing solutions for the future of mobility.",
    keyFeatures: [
      "Autonomous Driving Systems",
      "Predictive Maintenance",
      "Quality Control AI",
      "Supply Chain Optimization"
    ],
    benefits: [
      "Enhance vehicle safety",
      "Reduce maintenance costs by 30%", 
      "Improve manufacturing quality",
      "Optimize supply chain efficiency"
    ],
    useCases: [
      "Self-driving vehicle technology",
      "Predictive vehicle maintenance",
      "Automated quality inspection",
      "Smart factory operations"
    ]
  },
  {
    id: 4,
    name: "Manufacturing",
    slug: "manufacturing", 
    image: "/images/manufacturing.png",
    brief: "Optimize manufacturing processes with intelligent automation, quality control, and demand forecasting.",
    description: "Transform manufacturing operations with AI-driven automation, quality control, and predictive analytics for optimal efficiency and reduced waste.",
    keyFeatures: [
      "Smart Factory Automation",
      "Predictive Quality Control",
      "Demand Forecasting",
      "Equipment Monitoring"
    ],
    benefits: [
      "Increase productivity by 45%",
      "Reduce defects and waste",
      "Optimize inventory management",
      "Minimize equipment downtime"
    ],
    useCases: [
      "Automated production lines",
      "Real-time quality monitoring", 
      "Demand prediction modeling",
      "Preventive maintenance scheduling"
    ]
  },
  {
    id: 5,
    name: "Energy", 
    slug: "energy",
    image: "/images/energy.png",
    brief: "Power the future with AI-enhanced energy management, grid optimization, and renewable energy solutions.",
    description: "Optimize energy operations with AI-driven grid management, renewable integration, and intelligent energy trading systems for sustainable power solutions.",
    keyFeatures: [
      "Smart Grid Management",
      "Renewable Integration", 
      "Energy Trading AI",
      "Asset Management"
    ],
    benefits: [
      "Improve grid stability by 60%",
      "Optimize energy distribution",
      "Integrate renewable sources",
      "Reduce operational costs"
    ],
    useCases: [
      "Smart grid optimization",
      "Renewable energy forecasting",
      "Energy trading algorithms", 
      "Asset performance monitoring"
    ]
  },
  {
    id: 6,
    name: "Transportation",
    slug: "transportation",
    image: "/images/transportation.jpeg",
    brief: "Revolutionize transportation with AI-powered route optimization, fleet management, and logistics automation.",
    description: "Transform transportation and logistics operations with AI-driven route optimization, predictive maintenance, and intelligent fleet management for enhanced efficiency and reduced costs.",
    keyFeatures: [
      "Route Optimization AI",
      "Fleet Management Systems",
      "Predictive Maintenance",
      "Real-time Tracking"
    ],
    benefits: [
      "Reduce fuel costs by 25%",
      "Optimize delivery routes",
      "Improve fleet utilization",
      "Enhance customer satisfaction"
    ],
    useCases: [
      "Dynamic route planning",
      "Fleet performance monitoring",
      "Demand-based scheduling",
      "Last-mile delivery optimization"
    ]
  },
  {
    id: 7,
    name: "Telecommunications",
    slug: "telecommunications",
    image: "/images/telecommunication.png",
    brief: "Transform telecom networks with AI-driven network optimization, customer service automation, and predictive analytics.",
    description: "Enhance telecommunications infrastructure with AI-powered network management, intelligent customer service, and predictive maintenance for superior connectivity and customer experience.",
    keyFeatures: [
      "Network Optimization AI",
      "Intelligent Customer Support",
      "Predictive Network Maintenance",
      "Fraud Detection Systems"
    ],
    benefits: [
      "Improve network uptime by 50%",
      "Reduce customer churn",
      "Automate customer support",
      "Detect network anomalies"
    ],
    useCases: [
      "Self-optimizing networks",
      "AI-powered chatbots",
      "Network traffic prediction",
      "Automated fraud prevention"
    ]
  },
  {
    id: 8,
    name: "Education",
    slug: "education",
    image: "/images/education.png",
    brief: "Transform education with AI-powered personalized learning, student analytics, and intelligent tutoring systems.",
    description: "Revolutionize educational experiences with AI-driven personalized learning paths, student performance analytics, and intelligent assessment systems for improved learning outcomes.",
    keyFeatures: [
      "Personalized Learning Paths",
      "AI Tutoring Systems",
      "Student Performance Analytics",
      "Automated Grading"
    ],
    benefits: [
      "Improve learning outcomes by 35%",
      "Personalize education experience",
      "Reduce administrative workload",
      "Identify at-risk students early"
    ],
    useCases: [
      "Adaptive learning platforms",
      "Intelligent tutoring systems",
      "Automated essay grading",
      "Student engagement tracking"
    ]
  }
];


export const getIndustryBySlug = (slug) => {
  return industriesData.find(industry => industry.slug === slug);
};


export const getAllIndustries = () => {
  return industriesData;
};
