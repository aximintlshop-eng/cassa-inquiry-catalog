
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, Search } from 'lucide-react';
import cassaLogo from '@/assets/cassa-logo.png';
import aximLogo from '@/assets/axim-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
      setIsMenuOpen(false);
    }
  };
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-cassa-blue text-white py-1.5 hidden md:block overflow-hidden">
        <div className="container-custom flex justify-between items-center">
          {/* Animated phone numbers */}
          <div className="flex items-center space-x-6 animate-marquee">
            <a href="tel:+971589275323" className="flex items-center space-x-2 animate-rgb-text">
              <Phone size={14} />
              <span className="text-sm font-medium">+971 58 927 5323</span>
            </a>
            <a href="tel:+971589209109" className="flex items-center space-x-2 animate-rgb-text animation-delay-200">
              <Phone size={14} />
              <span className="text-sm font-medium">+971 58 920 9109</span>
            </a>
            <a href="tel:+97142225410" className="flex items-center space-x-2 animate-rgb-text animation-delay-400">
              <Phone size={14} />
              <span className="text-sm font-medium">+971 4 222 5410</span>
            </a>
          </div>
          <a href="mailto:aximinternationaltr@gmail.com" className="flex items-center space-x-2 hover:text-cassa-yellow transition-colors">
            <Mail size={14} />
            <span className="text-sm">aximinternationaltr@gmail.com</span>
          </a>
        </div>
      </div>
      
      {/* Main navbar */}
      <div className="container-custom py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={cassaLogo} alt="Cassa Logo" className="h-12" />
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-cassa-yellow transition-colors">Home</Link>
            <Link to="/products" className="font-medium hover:text-cassa-yellow transition-colors">Products</Link>
            <Link to="/about" className="font-medium hover:text-cassa-yellow transition-colors">About Us</Link>
            <Link to="/contact" className="font-medium hover:text-cassa-yellow transition-colors">Contact</Link>
            
            {/* Desktop Search */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-48 px-3 py-1.5 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-cassa-yellow"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="bg-cassa-blue text-white p-1.5 rounded-r-md hover:bg-cassa-blue/90"
                  >
                    <Search size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X size={18} />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-cassa-blue hover:text-cassa-yellow transition-colors"
                >
                  <Search size={20} />
                </button>
              )}
            </div>
          </div>
          
          {/* Axim logo on right - Desktop */}
          <div className="hidden md:flex items-center">
            <img src={aximLogo} alt="Axim International" className="h-10" />
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-cassa-blue"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cassa-yellow"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-cassa-blue text-white p-1.5 rounded-md"
              >
                <Search size={16} />
              </button>
            </form>
            
            <Link to="/" className="font-medium hover:text-cassa-yellow transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/products" className="font-medium hover:text-cassa-yellow transition-colors" onClick={toggleMenu}>Products</Link>
            <Link to="/about" className="font-medium hover:text-cassa-yellow transition-colors" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" className="font-medium hover:text-cassa-yellow transition-colors" onClick={toggleMenu}>Contact</Link>
            <div className="pt-4 border-t flex flex-col space-y-2">
              <a href="tel:+971589275323" className="flex items-center space-x-2 text-sm">
                <Phone size={14} />
                <span>+971 58 927 5323</span>
              </a>
              <a href="mailto:aximinternationaltr@gmail.com" className="flex items-center space-x-2 text-sm">
                <Mail size={14} />
                <span>aximinternationaltr@gmail.com</span>
              </a>
            </div>
            <div className="pt-2">
              <img src={aximLogo} alt="Axim International" className="h-8" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
