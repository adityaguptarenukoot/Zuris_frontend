import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle mobile menu toggle
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle menu item click - close menu
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const searchableContent = [
    { title: "AI Consultation & Advisory", url: "/services", type: "Service" },
    { title: "Cybersecurity Services", url: "/services", type: "Service" },
    { title: "AI Automation & Digital Transformation", url: "/services", type: "Service" },
    { title: "Collaborative Development", url: "/services", type: "Service" },
    { title: "Startup Growth & Acceleration", url: "/services", type: "Service" },
    { title: "About Zurix", url: "/about", type: "Page" },
    { title: "Contact Us", url: "/contact", type: "Page" },
  ];

  const filteredResults = searchableContent.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  

  

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

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/services" className="font-medium text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-600 hover:text-blue-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <Link
              // onClick={() => setIsContactModalOpen(true)}
              to={'/contact'}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg"
            >
              Let's Talk
            </Link>

            <button
              onClick={handleMenuToggle}
              className="md:hidden p-2 text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Simple Show/Hide */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50" 
                onClick={handleMenuItemClick}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50" 
                onClick={handleMenuItemClick}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50" 
                onClick={handleMenuItemClick}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50" 
                onClick={handleMenuItemClick}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-96 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search services, technologies, or pages..."
                  className="flex-1 text-lg border-none outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl">
                  ×
                </button>
              </div>
              
              {searchQuery && (
                <div className="max-h-64 overflow-y-auto">
                  {filteredResults.length > 0 ? (
                    <div className="space-y-2">
                      {filteredResults.map((result, index) => (
                        <Link
                          key={index}
                          to={result.url}
                          className="block p-3 hover:bg-blue-50 rounded-lg"
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-800">{result.title}</h4>
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">{result.type}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>No results found for "{searchQuery}"</p>
                      <p className="text-sm mt-2">Try searching for services, technologies, or pages</p>
                    </div>
                  )}
                </div>
              )}
              
              {!searchQuery && (
                <div className="text-gray-500 text-center py-8">
                  <p>Start typing to search our services and content</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Get In Touch</h3>
                <button onClick={() => setIsContactModalOpen(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Navigation;