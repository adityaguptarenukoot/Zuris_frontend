// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";

// const HowWeWork = () => {
//   const workRef = useRef(null);

//   useGSAP(() => {
//     gsap.fromTo(workRef.current.querySelectorAll('.work-step'),
//       { x: -100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 0.4,
//         ease: "power2.out",
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: workRef.current,
//           start: "top 90%",
//           toggleActions: "play none none reverse"
//         }
//       }
//     );
//   });

//   const steps = [
//     {
//       step: 1,
//       title: "Define a Bold, Data-First Strategy",
//       description: "We align comprehensive AI strategies with your business objectives, market positioning, and organizational capabilities to create sustainable competitive advantages.",
      
//     },
//     {
//       step: 2,
//       title: "Build Robust Data Ecosystems",
//       description: "Transform raw data into strategic assets by creating unified data architectures that drive decision-making, operational efficiency, and customer intelligence.",
      
//     },
//     {
//       step: 3,
//       title: "Deliver Tailored AI Solutions",
//       description: "Design and implement custom AI solutions specifically crafted for your unique industry challenges, ensuring scalability and seamless integration.",
      
//     },
//     {
//       step: 4,
//       title: "Ensure Continuous Innovation",
//       description: "Establish ongoing optimization frameworks through advanced model retraining, performance monitoring, and adaptive learning systems for sustained success.",
      
//     },
//     {
//       step: 5,
//       title: "Enable Your People and Processes",
//       description: "Provide comprehensive hands-on training, change management support, and knowledge transfer to ensure long-term success and organizational adoption.",
      
//     }
//   ];

//   return (
//     <section ref={workRef} className="py-20 bg-white relative">
//       {/* Background with your service image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
//         style={{ backgroundImage: `url('/images/collaboration.jpg')` }}
//       ></div>
      
//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold text-gray-800 mb-6">
//             How Zurix Empowers You to Lead the <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">AI-Driven Future</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto">
//             We partner with you to transform your organization into an AI-powered industry leader through strategic implementation and continuous innovation.
//           </p>
//         </div>

//         <div className="space-y-8">
//           {steps.map((step, index) => (
//             <div key={index} className="work-step flex items-center gap-8 bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-100 border border-gray-100">
//               <div className="flex-shrink-0">
//                 <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
//                   <span className="text-white text-2xl font-bold">{step.step}</span>
//                 </div>
//               </div>
//               <div className="flex-grow">
//                 <div className="flex items-center mb-3">
//                   <span className="text-3xl mr-4">{step.icon}</span>
//                   <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
//                 </div>
//                 <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

        
        
//       </div>
//     </section>
//   );
// };

// export default HowWeWork;


import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Link } from "react-router-dom";

const HowWeWork = () => {
  const workRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(workRef.current.querySelectorAll('.work-step'),
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate CTA section
    gsap.fromTo(workRef.current.querySelectorAll('.cta-animate'),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: workRef.current.querySelector('.cta-section'),
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  const steps = [
    {
      title: "Define Bold Strategy",
      description: "We align comprehensive AI strategies with your business objectives and organizational capabilities.",
      iconPath: "/images/strategy.png"
    },
    {
      title: "Build Data Ecosystems",
      description: "Transform raw data into strategic assets by creating unified data architectures.",
      iconPath: "/images/data-ecosystem.png"
    },
    {
      title: "Deliver AI Solutions",
      description: "Design and implement custom AI solutions specifically crafted for your unique challenges.",
      iconPath: "/images/ai-solutions.png"
    },
    {
      title: "Ensure Innovation",
      description: "Establish ongoing optimization frameworks through advanced monitoring systems.",
      iconPath: "/images/innovation.png"
    },
    {
      title: "Enable Your Team",
      description: "Provide comprehensive training and change management support for long-term success.",
      iconPath: "/images/team-training.png"
    }
  ];

  return (
    <section ref={workRef} className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            How Zurix Empowers You to Lead the <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">AI-Driven Future</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We partner with you to transform your organization into an AI-powered industry leader through strategic implementation and continuous innovation.
          </p>
        </div>

        {/* Process Flow - Simple Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <WorkCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* See Detailed Process Link */}
        <div className="text-center mb-16">
          <Link 
            to="/how-we-work" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-lg font-semibold group"
          >
            See How We Work 
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>

        {/* CTA Section with Light Background */}
       
      </div>
    </section>
  );
};

const WorkCard = ({ step, index }) => {
  return (
    <div className="work-step group relative">
      <div className="card-hover p-8 rounded-2xl bg-white border border-gray-200 text-center shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
        {/* Icon */}
        <img 
          src={step.iconPath} 
          alt={`${step.title} icon`}
          className="w-20 h-20 mx-auto mb-6 object-contain"
        />
        
        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
        
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default HowWeWork;


