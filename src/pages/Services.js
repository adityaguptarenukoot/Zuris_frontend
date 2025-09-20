import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesData } from '../data/servicesData';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

  useGSAP(() => {
    // Header animation
    gsap.from(headerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    // Services cards animation
    gsap.fromTo(servicesRef.current.querySelectorAll('.service-detail-card'),
      { y: 120, opacity: 0, rotationX: 45 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header Section */}
      <section ref={headerRef} className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our AI Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to transform every aspect of your business operations. 
            From strategic consultation to full-scale implementation, we deliver results that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Started Today
            </Link>
            <button className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
       <section id="services" ref={servicesRef} className="py-20 bg-white/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className="service-detail-card group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 relative overflow-hidden"
                onClick={() => handleServiceClick(service)}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                
                {/* Service Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-3xl">{service.icon}</span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description.substring(0, 150)}...
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Button */}
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    Learn More & Get Quote
                  </button>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-3xl transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our AI solutions can drive growth and innovation in your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Schedule Consultation
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedService.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <span className="text-white text-2xl">{selectedService.icon}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">{selectedService.title}</h2>
                </div>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-3xl">×</button>
              </div>

              {/* Service Description */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Sub-Services */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Service Components</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedService.subServices?.map((subService, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">{subService.title}</h4>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{subService.description}</p>
                      <ul className="space-y-2">
                        {subService.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Outcomes */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Expected Outcomes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedService.outcomes?.map((outcome, index) => (
                    <div key={index} className="flex items-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                      <span className="text-gray-700 font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300">
                  Get Quote for This Service
                </Link>
                <button className="flex-1 border-2 border-blue-500 text-blue-600 py-4 px-6 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300">
                  Download Service Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
