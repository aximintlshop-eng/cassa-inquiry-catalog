
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 lg:py-20">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Professional <span className="text-cassa-yellow">Tools</span> for Every Job
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Discover Cassa® premium hardware solutions for professionals and DIY enthusiasts.
            Quality that lasts, performance that impresses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="btn-primary flex items-center justify-center sm:justify-start gap-2">
              Browse Products
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-secondary flex items-center justify-center sm:justify-start gap-2">
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="relative h-64 md:h-96 overflow-hidden rounded-lg shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Cassa Tools Collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-6">
              <span className="bg-cassa-yellow text-black px-3 py-1 rounded-full text-sm font-medium">
                Featured Products
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
