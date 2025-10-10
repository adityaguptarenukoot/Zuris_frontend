import { useRef } from 'react';

const IndustryCard = ({ industry, onClick, isSelected, isOthersSelected }) => {
  const cardRef = useRef(null);

  const handleClick = () => {
    const rect = cardRef.current.getBoundingClientRect();
    const position = {
      x: rect.left,
      y: rect.top,
      cardWidth: rect.width,
      cardHeight: rect.height
    };
    onClick(industry, position);
    
  };

  return (
    <div 
      ref={cardRef}
      className={`industry-card group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border relative ${
        isSelected 
          ? 'border-blue-500 shadow-blue-200 ring-2 ring-blue-200 scale-105 z-10' 
          : isOthersSelected 
          ? 'border-gray-100 opacity-50' 
          : 'border-gray-100 hover:border-blue-200'
      }`}
      onClick={handleClick}>
    
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}

      {/* Industry Image */}
      <div className={`w-16 h-16 mx-auto mb-4 transition-transform duration-300 ${
        isSelected ? 'scale-110' : 'group-hover:scale-110'}`}>
        <img 
          src={industry.image} 
          alt={`${industry.name} Icon`}
          className="w-full h-full object-contain"/>
      </div>

      {/* Industry Name */}
      <h3 className={`text-xl font-bold mb-3 transition-colors ${
        isSelected 
          ? 'text-blue-600' 
          : 'text-gray-800 group-hover:text-blue-600'
      }`}>
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
            <span key={index} className={`px-2 py-1 text-xs rounded-full ${
              isSelected 
                ? 'bg-blue-200 text-blue-800' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              {feature}
            </span>
          ))}
          {/* {industry.keyFeatures.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{industry.keyFeatures.length - 2} more
            </span>
          )} */}
        </div>
      </div>

      {/* Click Indicator */}
      <div className={`flex items-center justify-center text-sm font-medium transition-opacity duration-300 ${
        isSelected 
          ? 'text-blue-600 opacity-100' 
          : 'text-blue-600 opacity-0 group-hover:opacity-100'
      }`}>
        <span>{isSelected ? 'Selected' : 'Click for details'}</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </div>
  );
};

export default IndustryCard;
