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
      image: "/images/ai_strategy.png"  
    },
    {
      title: "End-to-End Delivery", 
      description: "From ideation and initial strategy through implementation to ongoing support, we handle the complete journey.",
      image: "/images/packaging.png"  
    },
    {
      title: "Enterprise-Grade Security",
      description: "Built-in governance, compliance and security across all services and implementations.",
      image: "/images/cyber-security.png"  
    },
    {
      title: "Startup Speed with Enterprise Quality",
      description: "We combine rapid prototyping and agile development with mature engineering practices and governance.",
      image: "/images/connection.png"  
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
                    <div className="w-16 h-16 bg-gradient-to-r from-white to-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <div className="mb-4">
                          <img 
                            src={item.image}
                            className="w-16 h-16 mx-auto rounded-lg object-cover shadow-lg"
                            alt={`${item.title} Icon`}
                          />
                        </div>
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
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <img 
                      src="/images/group.png"
                      alt="Strategic Partnership"
                      className="w-14 h-14 rounded-lg object-cover"
                    />
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
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <img 
                      src="/images/Measurable.png"
                      alt="Innovation-Driven"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
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
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <img 
                      src="/images/project-management.png"
                      alt="Future-Ready Solutions"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
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
  <div className="about-animate bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-indigo-600/80 backdrop-blur-xl rounded-3xl p-12 text-white border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
    
    {/* Glassy overlay effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
    
    {/* Enhanced background blur circles for depth */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl"></div>
    
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center drop-shadow-lg">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl font-bold mb-2 drop-shadow-md group-hover:scale-110 transition-transform duration-200">50+</div>
            <div className="text-blue-100 drop-shadow-sm">Projects Delivered</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold mb-2 drop-shadow-md group-hover:scale-110 transition-transform duration-200">95%</div>
            <div className="text-blue-100 drop-shadow-sm">Client Satisfaction</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold mb-2 drop-shadow-md group-hover:scale-110 transition-transform duration-200">2.5x</div>
            <div className="text-blue-100 drop-shadow-sm">Average ROI Increase</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold mb-2 drop-shadow-md group-hover:scale-110 transition-transform duration-200">24/7</div>
            <div className="text-blue-100 drop-shadow-sm">Support Available</div>
          </div>
        </div>
      </div>
    
    {/* Bottom highlight line for extra glassy effect */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
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
