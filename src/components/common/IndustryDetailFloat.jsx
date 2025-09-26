// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// const IndustryDetailFloat = ({ industry, position, isVisible, onClose }) => {
//   const [floatPosition, setFloatPosition] = useState({ x: 0, y: 0 });
//   const floatRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (position && isVisible) {
//       const windowWidth = window.innerWidth;
//       const windowHeight = window.innerHeight;
//       const floatWidth = 400;
//       const floatHeight = 500;
      
//       let newX, newY;
      
//       // Mobile positioning - center on screen
//       if (windowWidth < 768) {
//         newX = Math.max(20, (windowWidth - floatWidth) / 2);
//         newY = Math.max(20, (windowHeight - floatHeight) / 2);
//       } else {
//         // Desktop positioning - relative to card
//         const { x, y, cardWidth, cardHeight } = position;
        
//         newX = x + cardWidth + 30; // Position to the right of the card
//         newY = y + (cardHeight / 2) - (floatHeight / 2); // Vertically centered to card
        
//         // If float goes off right edge, position to the left
//         if (newX + floatWidth > windowWidth - 20) {
//           newX = x - floatWidth - 20;
//         }
        
//         // If float goes off bottom edge, adjust upward
//         if (newY + floatHeight > windowHeight - 20) {
//           newY = Math.max(20, windowHeight - floatHeight - 20);
//         }
        
//         // If float goes off top edge, adjust downward
//         if (newY < 20) {
//           newY = 20;
//         }
//       }
      
//       setFloatPosition({ x: newX, y: newY });
//     }
//   }, [position, isVisible]);

//   // Handle click outside to close
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (floatRef.current && !floatRef.current.contains(event.target)) {
//         onClose();
//       }
//     };

//     if (isVisible) {
//       document.addEventListener('mousedown', handleClickOutside);
//       document.addEventListener('touchstart', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.removeEventListener('touchstart', handleClickOutside);
//     };
//   }, [isVisible, onClose]);

//   // Handle escape key
//   useEffect(() => {
//     const handleEscapeKey = (event) => {
//       if (event.key === 'Escape') {
//         onClose();
//       }
//     };

//     if (isVisible) {
//       document.addEventListener('keydown', handleEscapeKey);
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscapeKey);
//     };
//   }, [isVisible, onClose]);

//   // Handle Learn More button click
//   const handleLearnMore = () => {
//     const industrySlug = industry.name.toLowerCase()
//       .replace(/\s+/g, '-')
//       .replace(/&/g, '')
//       .replace(/--+/g, '-');
    
//     onClose(); // Close the float first
//     navigate(`/industry/${industrySlug}`);
//   };

//   if (!isVisible || !industry) return null;

//   return (
//     <>
//       {/* Mobile backdrop */}
//       {window.innerWidth < 768 && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" />
//       )}
      
//       <div 
//         ref={floatRef}
//         className={`fixed z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ease-out ${
//           window.innerWidth < 768 ? 'w-11/12 max-w-sm' : 'w-96'
//         }`}
//         style={{
//           left: `${floatPosition.x}px`,
//           top: `${floatPosition.y}px`,
//           maxHeight: window.innerWidth < 768 ? '80vh' : '500px',
//           overflow: 'auto',
//           transform: isVisible ? 'scale(1) opacity(1)' : 'scale(0.95) opacity(0)'
//         }}
//       >
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
//         >
//           <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         <div className="p-6">
//           {/* Header */}
//           <div className="flex items-center mb-4 pr-8">
//             <img 
//               src={industry.image} 
//               alt={`${industry.name} Icon`}
//               className="w-12 h-12 mr-4"
//             />
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800">{industry.name}</h3>
//               <p className="text-base text-blue-600 font-medium">AI Solutions</p>
//             </div>
//           </div>

//           {/* Description */}
//           <p className="text-gray-600 text-base mb-6 leading-relaxed">
//             {industry.description}
//           </p>

//           {/* Key Features */}
//           <div className="mb-6">
//             <h4 className="text-base font-semibold text-gray-700 mb-3 uppercase tracking-wide">
//               Key Features
//             </h4>
//             <div className="grid grid-cols-1 gap-2">
//               {industry.keyFeatures.map((feature, index) => (
//                 <div key={index} className="flex items-center text-sm text-gray-600">
//                   <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
//                   {feature}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Benefits */}
//           <div className="mb-6">
//             <h4 className="text-base font-semibold text-gray-700 mb-3 uppercase tracking-wide">
//               Key Benefits
//             </h4>
//             <div className="space-y-2">
//               {industry.benefits.map((benefit, index) => (
//                 <div key={index} className="flex items-center text-sm text-gray-600">
//                   <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
//                   {benefit}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Use Cases */}
//           <div className="mb-6">
//             <h4 className="text-base font-semibold text-gray-700 mb-3 uppercase tracking-wide">
//               Use Cases
//             </h4>
//             <div className="space-y-2">
//               {industry.useCases.map((useCase, index) => (
//                 <div key={index} className="flex items-center text-sm text-gray-600">
//                   <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
//                   {useCase}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="pt-4 border-t border-gray-200">
//             <button 
//               onClick={handleLearnMore}
//               className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-semibold rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg"
//             >
//               Learn More About {industry.name}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default IndustryDetailFloat;


import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const IndustryDetailFloat = ({ industry, position, isVisible, onClose }) => {
  const [floatPosition, setFloatPosition] = useState({ x: 0, y: 0 });
  const [isClosing, setIsClosing] = useState(false);
  const floatRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (position && isVisible) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const floatWidth = 400;
      const floatHeight = 500;
      
      let newX, newY;
      
      // Mobile positioning - center on screen
      if (windowWidth < 768) {
        newX = Math.max(20, (windowWidth - floatWidth) / 2);
        newY = Math.max(20, (windowHeight - floatHeight) / 2);
      } else {
        // Desktop positioning - relative to card
        const { x, y, cardWidth, cardHeight } = position;
        
        newX = x + cardWidth + 30; // Position to the right of the card
        newY = y + (cardHeight / 2) - (floatHeight / 2); // Vertically centered to card
        
        // If float goes off right edge, position to the left
        if (newX + floatWidth > windowWidth - 20) {
          newX = x - floatWidth - 20;
        }
        
        // If float goes off bottom edge, adjust upward
        if (newY + floatHeight > windowHeight - 20) {
          newY = Math.max(20, windowHeight - floatHeight - 20);
        }
        
        // If float goes off top edge, adjust downward
        if (newY < 20) {
          newY = 20;
        }
      }
      
      setFloatPosition({ x: newX, y: newY });
    }
  }, [position, isVisible]);

  // Smooth close function
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Match the CSS transition duration
  };

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (floatRef.current && !floatRef.current.contains(event.target) && !isClosing) {
        handleClose();
      }
    };

    if (isVisible && !isClosing) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isVisible, isClosing]);

  // Handle escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && !isClosing) {
        handleClose();
      }
    };

    if (isVisible && !isClosing) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isVisible, isClosing]);

  // Handle Learn More button click
  const handleLearnMore = () => {
    const industrySlug = industry.name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/&/g, '')
      .replace(/--+/g, '-');
    
    handleClose(); // Use smooth close
    setTimeout(() => {
      navigate(`/industry/${industrySlug}`);
    }, 300); // Navigate after close animation
  };

  if (!isVisible || !industry) return null;

  return (
    <>
      {/* Mobile backdrop with smooth transition */}
      {window.innerWidth < 768 && (
        <div 
          className={`fixed inset-0 bg-black z-40 md:hidden transition-opacity duration-300 ease-out ${
            isClosing ? 'opacity-0' : 'bg-opacity-50 opacity-100'
          }`} 
        />
      )}
      
      <div 
        ref={floatRef}
        className={`fixed z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ease-out ${
          window.innerWidth < 768 ? 'w-11/12 max-w-sm' : 'w-96'
        } ${
          isClosing 
            ? 'opacity-0 scale-95 translate-y-4' 
            : 'opacity-100 scale-100 translate-y-0'
        }`}
        style={{
          left: `${floatPosition.x}px`,
          top: `${floatPosition.y}px`,
          maxHeight: window.innerWidth < 768 ? '80vh' : '500px',
          overflow: 'auto'
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          disabled={isClosing}
          className={`absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 z-10 ${
            isClosing ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className={`p-6 transition-opacity duration-300 ${isClosing ? 'opacity-75' : 'opacity-100'}`}>
          {/* Header */}
          <div className="flex items-center mb-4 pr-8">
            <img 
              src={industry.image} 
              alt={`${industry.name} Icon`}
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{industry.name}</h3>
              <p className="text-base text-blue-600 font-medium">AI Solutions</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-base mb-6 leading-relaxed">
            {industry.description}
          </p>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-base font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {industry.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h4 className="text-base font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Key Benefits
            </h4>
            <div className="space-y-2">
              {industry.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-6">
            <h4 className="text-base font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Use Cases
            </h4>
            <div className="space-y-2">
              {industry.useCases.map((useCase, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                  {useCase}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-gray-200">
            <button 
              onClick={handleLearnMore}
              disabled={isClosing}
              className={`w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-semibold rounded-lg hover:scale-105 transition-all duration-200 shadow-lg ${
                isClosing ? 'opacity-75 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              Learn More About {industry.name}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryDetailFloat;
