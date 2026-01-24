import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroSlide1 from '@/assets/hero-slide-1.png';
import heroSlide2 from '@/assets/hero-slide-2.png';
import heroSlide3 from '@/assets/hero-slide-3.png';
import heroSlide4 from '@/assets/hero-slide-4.png';
import heroSlide5 from '@/assets/hero-slide-5.png';
import heroSlide6 from '@/assets/hero-slide-6.png';
import heroSlide7 from '@/assets/hero-slide-7.png';
import heroSlide8 from '@/assets/hero-slide-8.png';
import heroSlide9 from '@/assets/hero-slide-9.png';

const slides = [
  {
    title: "Door Handles & Locks",
    description: "Discover a premium range of door handles and locks. Stylish, durable, and reliable hardware solutions for homes, offices, and commercial spaces.",
    image: heroSlide1,
    category: "door-hardware-locks"
  },
  {
    title: "Furniture Fittings & Hinges",
    description: "High-quality hinges, bolts, brackets, and fittings for modern furniture and cabinetry solutions. Smooth, durable, and reliable hardware.",
    image: heroSlide2,
    category: "furniture-fittings-hinges"
  },
  {
    title: "Drawer Slides & Sliding Systems",
    description: "Explore our high-quality drawer slides and sliding systems. Smooth, reliable, and durable solutions for cabinets, furniture, and sliding doors.",
    image: heroSlide3,
    category: "drawer-slides-sliding-systems"
  },
  {
    title: "Glass & Aluminum Fittings",
    description: "High-quality glass hinges, lifters, spacers, aluminum handles, profiles, and window accessories for smooth operation and modern design.",
    image: heroSlide4,
    category: "glass-aluminum-fittings"
  },
  {
    title: "Drilling & Cutting Tools",
    description: "Explore CASSA's premium drilling and cutting tools for professional and DIY projects. Quality that lasts, performance that impresses.",
    image: heroSlide5,
    category: "drilling-cutting-tools"
  },
  {
    title: "Hand Tools",
    description: "High-quality hammers, chisels, pliers, screwdrivers, wrenches, ladders, and utility tools for reliable performance and professional results.",
    image: heroSlide6,
    category: "hand-tools"
  },
  {
    title: "Painting & Finishing Tools",
    description: "High-quality brushes, rollers, scrapers, silicon guns, sandpaper, and finishing accessories for perfect results every time.",
    image: heroSlide7,
    category: "painting-finishing-tools"
  },
  {
    title: "Screws & Fasteners (CASSA®)",
    description: "High-quality drywall screws, self-drilling and tapping screws, expansion bolts, wall plugs, nails, pins, hose clips, and binding wire.",
    image: heroSlide8,
    category: "screws-fasteners"
  },
  {
    title: "CASSA MACHINERY",
    description: "Premium airless putty and painting machines, injection grouting machines, sanding and grinding equipment, and machinery spare parts.",
    image: heroSlide9,
    category: "cassa-machinery"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 lg:py-16">
        {/* Left side - Text Content */}
        <div className="animate-fade-in relative z-10">
          <div className="transition-all duration-500 ease-in-out">
            <span className="inline-block bg-cassa-yellow text-black px-4 py-1 rounded-full text-sm font-medium mb-4">
              Featured Category
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to={`/products?category=${slides[currentSlide].category}`} 
                className="btn-primary flex items-center justify-center sm:justify-start gap-2"
              >
                Browse Products
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-secondary flex items-center justify-center sm:justify-start gap-2">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Right side - Image */}
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-2xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-gray-800" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-gray-800" />
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-cassa-yellow w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
