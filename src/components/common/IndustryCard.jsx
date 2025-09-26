import { useState, useRef } from 'react';

const IndustryCard = ({ industry, onHover, onLeave }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    const rect = cardRef.current.getBoundingClientRect();
    const position = {
      x: rect.left,
      y: rect.top,
      cardWidth: rect.width,
      cardHeight: rect.height
    };
    onHover(industry, position);
  };

  const handleMouseLeave = () => {
    onLeave();
  };

  return (
    <div 
      ref={cardRef}
      className="industry-card group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Industry Image */}
      <div className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <img 
          src={industry.image} 
          alt={`${industry.name} Icon`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Industry Name */}
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
        {industry.name}
      </h3>

      {/* Brief Description */}
      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
        {industry.brief}
      </p>

      {/* Key Features Preview */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {industry.keyFeatures.slice(0, 2).map((feature, index) => (
            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
              {feature}
            </span>
          ))}
          {industry.keyFeatures.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{industry.keyFeatures.length - 2} more
            </span>
          )}
        </div>
      </div>

      {/* Hover Indicator */}
      <div className="flex items-center justify-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Hover for details</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </div>
  );
};

export default IndustryCard;
