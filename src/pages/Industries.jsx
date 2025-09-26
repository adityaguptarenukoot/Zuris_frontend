// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";
// import { Link } from "react-router-dom";

// const IndustriesServed = () => {
//   const industriesRef = useRef(null);

//   useGSAP(() => {
//     gsap.fromTo(industriesRef.current.querySelectorAll('.industry-card'),
//       { y: 30, opacity: 0, scale: 0.9 },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.6, // Reduced for better performance
//         ease: "power2.out",
//         stagger: 0.1, // Reduced stagger for quicker sequential animation
//         scrollTrigger: {
//           trigger: industriesRef.current,
//           start: "top 85%", // Trigger earlier
//           toggleActions: "play none none reverse"
//         }
//       }
//     );
//   });

//   const industries = [
//     {
//       name: "Finance",
//       slug: "finance", 
//       image: "/images/finance.png"
//     },
//     {
//       name: "Healthcare",
//       slug: "healthcare",
//       image: "/images/healthcare.png"
//     },
//     {
//       name: "Automotive",
//       slug: "automotive",
//       image: "/images/automotive.png"
//     },
//     {
//       name: "Manufacturing",
//       slug: "manufacturing",
//       image: "/images/manufacturing.png"
//     },
//     {
//       name: "Energy",
//       slug: "energy",
//       image: "/images/energy.png"
//     }
//   ];

//   return (
//     <section ref={industriesRef} id="industries" className="py-20 px-6 bg-white">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           Industries We Transform
//         </h2>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
//           We deliver AI solutions across diverse industries, helping organizations unlock new possibilities and drive innovation
//         </p>
        
//         {/* Simplified Card Grid Layout */}
//         <div className="max-w-4xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
//             {industries.map((industry, index) => (
//               <div 
//                 key={index}
//                 className="industry-card group p-3 rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all cursor-pointer"
//               >
//                 <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
//                   <img 
//                     src={industry.image} 
//                     className="w-10 h-10 mx-auto mb-6" 
//                     alt={`${industry.name} Icon`}
//                   />
//                 </div>
//                 <div className="font-medium text-sm text-gray-800 group-hover:text-blue-600">
//                   {industry.name}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Explore All Industries Link */}
//         <Link 
//           to="/industries" 
//           className="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors text-lg font-semibold group"
//         >
//           Explore All Industries 
//           <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//           </svg>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default IndustriesServed;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { getAllIndustries } from "../data/industriesData";

const IndustriesServed = () => {
  const industriesRef = useRef(null);
  const industries = getAllIndustries();

  useGSAP(() => {
    gsap.fromTo(industriesRef.current.querySelectorAll('.industry-card'),
      { y: 30, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: industriesRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  return (
    <section ref={industriesRef} id="industries" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Industries We Transform
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          We deliver AI solutions across diverse industries, helping organizations unlock new possibilities and drive innovation
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {industries.map((industry, index) => (
              <div 
                key={industry.id}
                className="industry-card group p-3 rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  <img 
                    src={industry.image} 
                    className="w-10 h-10 mx-auto mb-6" 
                    alt={`${industry.name} Icon`}
                  />
                </div>
                <div className="font-medium text-sm text-gray-800 group-hover:text-blue-600">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <Link 
          to="/industries" 
          className="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors text-lg font-semibold group"
        >
          Explore All Industries 
          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default IndustriesServed;
