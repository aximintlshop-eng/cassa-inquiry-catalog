
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import cassaLogo from '@/assets/cassa-logo.png';
import aximLogo from '@/assets/axim-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-cassa-blue text-white py-2 hidden md:block">
        <div className="container-custom flex justify-end items-center space-x-6">
          <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-cassa-yellow transition-colors">
            <Phone size={14} />
            <span className="text-sm">+123 456 7890</span>
          </a>
          <a href="mailto:info@cassa.com" className="flex items-center space-x-2 hover:text-cassa-yellow transition-colors">
            <Mail size={14} />
            <span className="text-sm">info@cassa.com</span>
          </a>
        </div>
      </div>
      
      {/* Main navbar */}
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-4">
            <img src={cassaLogo} alt="Cassa Logo" className="h-16" />
            <img src={aximLogo} alt="Axim International" className="h-12 hidden sm:block" />
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium hover:text-cassa-yellow transition-colors">Home</Link>
            <Link to="/products" className="font-medium hover:text-cassa-yellow transition-colors">Products</Link>
            <Link to="/about" className="font-medium hover:text-cassa-yellow transition-colors">About Us</Link>
            <Link to="/contact" className="font-medium hover:text-cassa-yellow transition-colors">Contact</Link>
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
            <Link to="/" className="font-medium hover:text-cassa-yellow transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/products" className="font-medium hover:text-cassa-yellow transition-colors" onClick={toggleMenu}>Products</Link>
            <Link to="/about" className="font-medium hover:text-cassa-yellow transition-colors" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" className="font-medium hover:text-cassa-yellow transition-colors" onClick={toggleMenu}>Contact</Link>
            <div className="pt-4 border-t flex flex-col space-y-2">
              <a href="tel:+1234567890" className="flex items-center space-x-2 text-sm">
                <Phone size={14} />
                <span>+123 456 7890</span>
              </a>
              <a href="mailto:info@cassa.com" className="flex items-center space-x-2 text-sm">
                <Mail size={14} />
                <span>info@cassa.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
