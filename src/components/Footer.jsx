import { useRef } from "react";
import { Link } from "react-router-dom";
import { useMicroInteractions } from "../App";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);

  useMicroInteractions();

  useGSAP(() => {
    gsap.fromTo(footerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          
          start: "top 100%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  return (
    <footer ref={footerRef} className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zurix</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses with intelligent AI solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: FaFacebookF, href: "#", label: "Facebook" },
                { Icon: FaTwitter, href: "#", label: "Twitter" },
                { Icon: FaInstagram, href: "#", label: "Instagram" },
                { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                { Icon: FaYoutube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-150 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Case Studies", path: "/" },
                { name: "Blog", path: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "AI Consultation",
                "Cybersecurity",
                "Automation",
                "Digital Transformation",
                "Startup Growth",
                "Custom AI Development"
              ].map((service, index) => (
                <li key={index}>
                  <a href="/services" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <span className="text-gray-300">contact@zurix.co.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400" />
                <span className="text-gray-300">+91 8625999312</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="text-gray-300">Baner, Pune</span>
                <span className="text-gray-300">Noida</span>
              </div>
            </div>
            
            {/* <div>
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-l-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-r-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Zurix AI Consultancy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to={"/policy"} className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to={'/terms'} className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to={'/cookie-policy'} className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;