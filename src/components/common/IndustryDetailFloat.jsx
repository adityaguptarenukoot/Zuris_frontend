import { useState, useEffect } from 'react';

const IndustryDetailFloat = ({ industry, position, isVisible }) => {
  const [floatPosition, setFloatPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (position && isVisible) {
      // Calculate optimal position for the floating card
      const { x, y, cardWidth, cardHeight } = position;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const floatWidth = 400;
      const floatHeight = 500;
      
      let newX = x + cardWidth + 20; // Position to the right of the card
      let newY = y;
      
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
      
      setFloatPosition({ x: newX, y: newY });
    }
  }, [position, isVisible]);

  if (!isVisible || !industry) return null;

  return (
    <div 
      className="fixed z-50 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 transition-all duration-300 ease-out"
      style={{
        left: `${floatPosition.x}px`,
        top: `${floatPosition.y}px`,
        maxHeight: '500px',
        overflow: 'auto'
      }}
    >
      {/* Header */}
      <div className="flex items-center mb-4">
        <img 
          src={industry.image} 
          alt={`${industry.name} Icon`}
          className="w-12 h-12 mr-4"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-800">{industry.name}</h3>
          <p className="text-sm text-blue-600">AI Solutions</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {industry.description}
      </p>

      {/* Key Features */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
          Key Features
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {industry.keyFeatures.map((feature, index) => (
            <div key={index} className="flex items-center text-xs text-gray-600">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
          Key Benefits
        </h4>
        <div className="space-y-1">
          {industry.benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="flex items-center text-xs text-gray-600">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
              {benefit}
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
          Use Cases
        </h4>
        <div className="space-y-1">
          {industry.useCases.slice(0, 3).map((useCase, index) => (
            <div key={index} className="flex items-center text-xs text-gray-600">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 flex-shrink-0"></div>
              {useCase}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="pt-4 border-t border-gray-200">
        <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:scale-105 transition-transform duration-200">
          Learn More About {industry.name}
        </button>
      </div>
    </div>
  );
};

export default IndustryDetailFloat;
