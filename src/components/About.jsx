// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";

// const About = () => {
//   const aboutRef = useRef(null);

//   useGSAP(() => {
//     gsap.fromTo(
//       aboutRef.current.querySelector('.about-content'),
//       { y: 30, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: aboutRef.current,
//           start: 'top 80%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );
//   });

//   const differentiators = [
//     {
//       title: "AI-First Approach",
//       description: "We don't just automate processes, we add intelligence to every aspect of your business operations.",
      
//     },
//     {
//       title: "End-to-End Delivery", 
//       description: "From ideation and initial strategy through implementation to ongoing support, we handle the complete journey.",
      
//     },
//     {
//       title: "Enterprise-Grade Security",
//       description: "Built-in governance, compliance and security across all services and implementations.",
      
//     },
//     {
//       title: "Startup Speed with Enterprise Quality",
//       description: "We combine rapid prototyping and agile development with mature engineering practices and governance.",
      
//     }
//   ];

//   return (
//     <div className="pt-20 min-h-screen">
//       <section 
//         ref={aboutRef}
//         className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden"
//       >
//         {/* Background Effects */}
//         <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>

//         <div className="max-w-6xl mx-auto px-6 relative z-10 about-content">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-8 leading-tight">
//               About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zurix</span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//               Your trusted AI partner, turning complexity into clarity, data into insight, and ideas into industry-leading innovation.
//             </p>
//           </div>

//           {/* Mission Statement */}
//           <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-white/20">
//             <h3 className="text-3xl font-bold mb-8 text-center text-white">Our Mission</h3>
//             <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-8">
//               In a world generating over <strong className="text-white">2.5 quintillion bytes</strong> of data daily, 
//               most businesses struggle to transform this data into actionable value. We bridge this gap by empowering 
//               organizations to embed Artificial Intelligence strategically into their core operations.
//             </p>
//             <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
//               We believe that companies who don't embrace AI will fall behind, and that data without intelligence 
//               is merely digital noise. Our role is to ensure your organization leads the AI-driven future.
//             </p>
//           </div>

//           {/* Key Differentiators */}
//           <div className="mb-16">
//             <h3 className="text-3xl font-bold mb-12 text-center text-white">What Sets Us Apart</h3>
//             <div className="grid md:grid-cols-2 gap-8">
//               {differentiators.map((item, index) => (
//                 <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-150">
//                   <div className="flex items-start gap-6">
//                     <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
//                       <span className="text-2xl">{item.icon}</span>
//                     </div>
//                     <div>
//                       <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
//                       <p className="text-gray-300 leading-relaxed">{item.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Our Approach */}
//           <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
//             <h3 className="text-3xl font-bold mb-8 text-center text-white">Our Approach</h3>
//             <div className="grid md:grid-cols-3 gap-8 text-center">
//               <div>
//                 <h4 className="text-xl font-bold mb-4 text-blue-300">Strategic Partnership</h4>
//                 <p className="text-gray-300 leading-relaxed">
//                   We function as your dedicated tech partner, providing both advisory expertise and hands-on execution 
//                   to ensure successful AI transformation.
//                 </p>
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold mb-4 text-purple-300">Innovation-Driven</h4>
//                 <p className="text-gray-300 leading-relaxed">
//                   We embed AI modules early in your product lifecycle and provide ongoing innovation insights, 
//                   governance, and optimization as you scale.
//                 </p>
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold mb-4 text-cyan-300">Future-Ready Solutions</h4>
//                 <p className="text-gray-300 leading-relaxed">
//                   We design cost-efficient, cloud-native architectures that scale with your business, 
//                   ensuring you're prepared for tomorrow's challenges.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="text-center mt-16">
//             <h3 className="text-2xl font-bold mb-4 text-white">Ready to Accelerate Your AI Transformation?</h3>
//             <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
//               Every day you delay adopting AI is a day your competitors leap ahead. The future doesn't wait — and neither should you.
//             </p>
//             <p className="text-lg font-semibold text-blue-300">
//               The future is intelligent. The future is bold. Let's build it, together.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      aboutRef.current.querySelectorAll('.about-animate'),
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  const differentiators = [
    {
      title: "AI-First Approach",
      description: "We don't just automate processes, we add intelligence to every aspect of your business operations.",
      icon: "🤖"
    },
    {
      title: "End-to-End Delivery", 
      description: "From ideation and initial strategy through implementation to ongoing support, we handle the complete journey.",
      icon: "🎯"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Built-in governance, compliance and security across all services and implementations.",
      icon: "🔒"
    },
    {
      title: "Startup Speed with Enterprise Quality",
      description: "We combine rapid prototyping and agile development with mature engineering practices and governance.",
      icon: "⚡"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section ref={aboutRef} className="py-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 text-center mb-20">
          <div className="about-animate">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zurix</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your trusted AI partner, turning complexity into clarity, data into insight, and ideas into industry-leading innovation.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <div className="about-animate bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Mission</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                In a world generating over <strong className="text-blue-600">2.5 quintillion bytes</strong> of data daily, 
                most businesses struggle to transform this data into actionable value. We bridge this gap by empowering 
                organizations to embed Artificial Intelligence strategically into their core operations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                We believe that companies who don't embrace AI will fall behind, and that data without intelligence 
                is merely digital noise. Our role is to ensure your organization leads the AI-driven future.
              </p>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <div className="about-animate text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines cutting-edge technology with proven business strategies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="about-animate group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <div className="about-animate bg-white rounded-3xl p-12 shadow-lg border border-gray-200">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  Strategic Partnership
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We function as your dedicated tech partner, providing both advisory expertise and hands-on execution 
                  to ensure successful AI transformation.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                  Innovation-Driven
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We embed AI modules early in your product lifecycle and provide ongoing innovation insights, 
                  governance, and optimization as you scale.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-cyan-600 transition-colors">
                  Future-Ready Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We design cost-efficient, cloud-native architectures that scale with your business, 
                  ensuring you're prepared for tomorrow's challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <div className="about-animate bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2.5x</div>
                <div className="text-blue-100">Average ROI Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="about-animate bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-12 text-center border border-blue-100">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Ready to Accelerate Your 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Transformation?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Every day you delay adopting AI is a day your competitors leap ahead. The future doesn't wait — and neither should you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
              >
                Start Your AI Journey
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                to="/industries"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300"
              >
                Explore Industries
              </Link>
            </div>
            <p className="text-lg font-semibold text-blue-600">
              The future is intelligent. The future is bold. Let's build it, together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
