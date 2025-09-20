import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const HowWeWork = () => {
  const workRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(workRef.current.querySelectorAll('.work-step'),
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  const steps = [
    {
      step: 1,
      title: "Define a Bold, Data-First Strategy",
      description: "We align comprehensive AI strategies with your business objectives, market positioning, and organizational capabilities to create sustainable competitive advantages.",
      
    },
    {
      step: 2,
      title: "Build Robust Data Ecosystems",
      description: "Transform raw data into strategic assets by creating unified data architectures that drive decision-making, operational efficiency, and customer intelligence.",
      
    },
    {
      step: 3,
      title: "Deliver Tailored AI Solutions",
      description: "Design and implement custom AI solutions specifically crafted for your unique industry challenges, ensuring scalability and seamless integration.",
      
    },
    {
      step: 4,
      title: "Ensure Continuous Innovation",
      description: "Establish ongoing optimization frameworks through advanced model retraining, performance monitoring, and adaptive learning systems for sustained success.",
      
    },
    {
      step: 5,
      title: "Enable Your People and Processes",
      description: "Provide comprehensive hands-on training, change management support, and knowledge transfer to ensure long-term success and organizational adoption.",
      
    }
  ];

  return (
    <section ref={workRef} className="py-20 bg-white relative">
      {/* Background with your service image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url('/images/collaboration.jpg')` }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            How Zurix Empowers You to Lead the <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">AI-Driven Future</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We partner with you to transform your organization into an AI-powered industry leader through strategic implementation and continuous innovation.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="work-step flex items-center gap-8 bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-100 border border-gray-100">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">{step.step}</span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-4">{step.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        
        
      </div>
    </section>
  );
};

export default HowWeWork;