
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Axim International</h3>
            <p className="text-gray-600 mb-2 font-medium">Trading as CASSA®</p>
            <p className="text-gray-600 mb-4">
              Premium hardware tools, furniture fittings, screws & fasteners, and professional tools for the industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cassa-blue hover:text-cassa-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cassa-blue hover:text-cassa-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cassa-blue hover:text-cassa-yellow transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-cassa-blue hover:text-cassa-yellow transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-cassa-yellow transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-cassa-yellow transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-cassa-yellow transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-cassa-yellow transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-cassa-blue mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-600">Naif Bazar Centre - Showroom No. 40 - Naif Rd - Naif - Deira - Dubai</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-cassa-blue flex-shrink-0" size={18} />
                <div className="flex flex-col">
                  <a href="tel:+971589275323" className="text-gray-600 hover:text-cassa-yellow transition-colors">+971 58 927 5323</a>
                  <a href="tel:+971589209109" className="text-gray-600 hover:text-cassa-yellow transition-colors">+971 58 920 9109</a>
                  <a href="tel:+97142225410" className="text-gray-600 hover:text-cassa-yellow transition-colors">+971 4 222 5410</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-cassa-blue flex-shrink-0" size={18} />
                <a href="mailto:aximinternationaltr@gmail.com" className="text-gray-600 hover:text-cassa-yellow transition-colors">aximinternationaltr@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="text-cassa-blue flex-shrink-0" size={18} />
                <a href="https://aximintltr.ae" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cassa-yellow transition-colors">aximintltr.ae</a>
              </li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock className="text-cassa-blue mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-600">Monday - Friday:</p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="text-cassa-blue mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-600">Saturday:</p>
                  <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="text-cassa-blue mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-600">Sunday:</p>
                  <p className="text-gray-600">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-600">
            © {currentYear} CASSA® by Axim International. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
