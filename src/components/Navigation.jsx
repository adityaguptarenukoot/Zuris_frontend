// import { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navigation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const mobileMenuRef = useRef(null);

//   // Handle mobile menu toggle
//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Handle menu item click - close menu
//   const handleMenuItemClick = () => {
//     setIsMenuOpen(false);
//   };

//   // Close menu when clicking outside
//   const handleOutsideClick = (e) => {
//     if (
//       mobileMenuRef.current &&
//       isMenuOpen &&
//       !mobileMenuRef.current.contains(e.target)
//     ) {
//       setIsMenuOpen(false);
//     }
//   };

//   // Add event listener for outside clicks
//   useEffect(() => {
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, [isMenuOpen]);

//   // Check if current route is active
//   const isActiveRoute = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <>
//       <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
//               <span className="text-white font-bold text-xl">Z</span>
//             </div>
//             <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
//               Zurix
//             </span>
//           </Link>

          
//           <div className="hidden md:flex items-center space-x-8 ml-12">
//             <Link 
//               to="/" 
//               className={`font-medium transition-colors duration-200 ${
//                 isActiveRoute('/') 
//                   ? 'text-blue-600 font-semibold' 
//                   : 'text-gray-700 hover:text-blue-600'
//               }`}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/services" 
//               className={`font-medium transition-colors duration-200 ${
//                 isActiveRoute('/services') 
//                   ? 'text-blue-600 font-semibold' 
//                   : 'text-gray-700 hover:text-blue-600'
//               }`}
//             >
//               Services
//             </Link>
//             <Link 
//               to="/industries" 
//               className={`font-medium transition-colors duration-200 ${
//                 isActiveRoute('/industries') 
//                   ? 'text-blue-600 font-semibold' 
//                   : 'text-gray-700 hover:text-blue-600'
//               }`}
//             >
//               Industry
//             </Link>
//             <Link 
//               to="/process" 
//               className={`font-medium transition-colors duration-200 ${
//                 isActiveRoute('/process') 
//                   ? 'text-blue-600 font-semibold' 
//                   : 'text-gray-700 hover:text-blue-600'
//               }`}
//             >
//               Process
//             </Link>
//             <Link 
//               to="/about" 
//               className={`font-medium transition-colors duration-200 ${
//                 isActiveRoute('/about') 
//                   ? 'text-blue-600 font-semibold' 
//                   : 'text-gray-700 hover:text-blue-600'
//               }`}
//             >
//               About
//             </Link>
//           </div>

//           {/* Right side - Let's Talk Button and Mobile Menu */}
//           <div className="flex items-center space-x-4">
//             {/* Let's Talk Button with click effect */}
//             <Link
//               to="/contact"
//               className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold transform transition-all duration-150 active:scale-95 active:shadow-lg shadow-md hover:shadow-xl"
//             >
//               Let's Talk
//             </Link>

//             {/* Animated Hamburger Menu Button */}
//             <button
//               onClick={handleMenuToggle}
//               className="md:hidden p-2 text-gray-600 relative w-8 h-8 flex flex-col justify-center items-center"
//             >
//               <div className={`w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></div>
//               <div className={`w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
//               <div className={`w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}></div>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         <div
//           ref={mobileMenuRef}
//           className={`md:hidden bg-white shadow-lg border-t transform transition-all duration-300 ease-in-out ${
//             isMenuOpen
//               ? 'opacity-100 max-h-96 translate-y-0'
//               : 'opacity-0 max-h-0 -translate-y-2 pointer-events-none'
//           }`}
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Link 
//               to="/" 
//               className={`block px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
//                 isActiveRoute('/') 
//                   ? 'text-blue-600 bg-blue-50 font-semibold' 
//                   : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
//               }`}
//               onClick={handleMenuItemClick}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/services" 
//               className={`block px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
//                 isActiveRoute('/services') 
//                   ? 'text-blue-600 bg-blue-50 font-semibold' 
//                   : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
//               }`}
//               onClick={handleMenuItemClick}
//             >
//               Services
//             </Link>
//             <Link 
//               to="/industries" 
//               className={`block px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
//                 isActiveRoute('/industries') 
//                   ? 'text-blue-600 bg-blue-50 font-semibold' 
//                   : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
//               }`}
//               onClick={handleMenuItemClick}
//             >
//               Industry
//             </Link>
//             <Link 
//               to="/process" 
//               className={`block px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
//                 isActiveRoute('/process') 
//                   ? 'text-blue-600 bg-blue-50 font-semibold' 
//                   : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
//               }`}
//               onClick={handleMenuItemClick}
//             >
//               Process
//             </Link>
//             <Link 
//               to="/about" 
//               className={`block px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
//                 isActiveRoute('/about') 
//                   ? 'text-blue-600 bg-blue-50 font-semibold' 
//                   : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
//               }`}
//               onClick={handleMenuItemClick}
//             >
//               About
//             </Link>
//             <Link 
//               to="/contact" 
//               className={`block px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
//                 isActiveRoute('/contact') 
//                   ? 'text-blue-600 bg-blue-50 font-semibold' 
//                   : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
//               }`}
//               onClick={handleMenuItemClick}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navigation;

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const hamburgerButtonRef = useRef(null);

  // Handle mobile menu toggle
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle menu item click - close menu
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside - Fixed version
  const handleOutsideClick = (e) => {
    if (
      mobileMenuRef.current &&
      hamburgerButtonRef.current &&
      isMenuOpen &&
      !mobileMenuRef.current.contains(e.target) &&
      !hamburgerButtonRef.current.contains(e.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  // Add event listener for outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Check if current route is active
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zurix
            </span>
          </Link>

          {/* Desktop Navigation with underline for active items */}
          <div className="hidden md:flex items-center space-x-8 ml-12">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 relative ${
                isActiveRoute('/') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
              {isActiveRoute('/') && (
                <span className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-blue-600"></span>
              )}
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition-colors duration-200 relative ${
                isActiveRoute('/services') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Services
              {isActiveRoute('/services') && (
                <span className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-blue-600"></span>
              )}
            </Link>
            <Link 
              to="/industries" 
              className={`font-medium transition-colors duration-200 relative ${
                isActiveRoute('/industries') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Industry
              {isActiveRoute('/industries') && (
                <span className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-blue-600"></span>
              )}
            </Link>
            <Link 
              to="/process" 
              className={`font-medium transition-colors duration-200 relative ${
                isActiveRoute('/process') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Process
              {isActiveRoute('/process') && (
                <span className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-blue-600"></span>
              )}
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors duration-200 relative ${
                isActiveRoute('/about') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
              {isActiveRoute('/about') && (
                <span className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-blue-600"></span>
              )}
            </Link>
          </div>

          {/* Right side - Let's Talk Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Let's Talk Button with click effect */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold transform transition-all duration-150 active:scale-95 active:shadow-lg shadow-md hover:shadow-xl"
            >
              Let's Talk
            </Link>

            {/* Animated Hamburger Menu Button - Fixed with ref */}
            <button
              ref={hamburgerButtonRef}
              onClick={handleMenuToggle}
              className="md:hidden p-2 text-gray-600 relative w-8 h-8 flex flex-col justify-center items-center"
            >
              <div className={`w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden bg-white shadow-lg border-t transform transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 max-h-96 translate-y-0'
              : 'opacity-0 max-h-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className={`block px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
                isActiveRoute('/') 
                  ? 'text-blue-600 bg-blue-50 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={handleMenuItemClick}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
                isActiveRoute('/services') 
                  ? 'text-blue-600 bg-blue-50 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={handleMenuItemClick}
            >
              Services
            </Link>
            <Link 
              to="/industries" 
              className={`block px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
                isActiveRoute('/industries') 
                  ? 'text-blue-600 bg-blue-50 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={handleMenuItemClick}
            >
              Industry
            </Link>
            <Link 
              to="/process" 
              className={`block px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
                isActiveRoute('/process') 
                  ? 'text-blue-600 bg-blue-50 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={handleMenuItemClick}
            >
              Process
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
                isActiveRoute('/about') 
                  ? 'text-blue-600 bg-blue-50 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={handleMenuItemClick}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
                isActiveRoute('/contact') 
                  ? 'text-blue-600 bg-blue-50 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={handleMenuItemClick}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
