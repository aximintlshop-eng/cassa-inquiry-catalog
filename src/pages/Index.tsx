
import { ArrowRight, Mail, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import { getFeaturedCategories } from '@/data/categories';
import { products } from '@/data/products';

const Index = () => {
  // Get a subset of featured products (first 3)
  const featuredProducts = products.slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Featured Categories */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive range of door hardware, furniture fittings, tools, and fasteners for professionals and contractors.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {getFeaturedCategories().map((category) => (
                <CategoryCard 
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  image={category.image}
                  productCount={category.productCount}
                />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/products" className="btn-primary inline-flex items-center">
                View All Categories
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our most popular products, crafted with precision and built to last.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  category={product.category}
                  shortDescription={product.shortDescription}
                />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/products" className="btn-primary inline-flex items-center">
                View All Products
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* About the Brand */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-4">About CASSA<sup>®</sup></h2>
                <p className="text-gray-600 mb-4">
                  CASSA® is a premium brand under Axim International, your trusted partner for high-quality furniture hardware, furniture fittings, screws & fasteners, and professional tools.
                </p>
                <p className="text-gray-600 mb-6">
                  Located in the heart of Dubai's Deira district, we serve contractors, carpenters, and hardware professionals across the UAE with our comprehensive product range.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-cassa-yellow font-bold mr-2">✓</span>
                    <span>Furniture Hardware & Fittings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cassa-yellow font-bold mr-2">✓</span>
                    <span>Screws & Fasteners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cassa-yellow font-bold mr-2">✓</span>
                    <span>Professional Tools & Machinery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cassa-yellow font-bold mr-2">✓</span>
                    <span>Door Hardware & Lock Systems</span>
                  </li>
                </ul>
                <Link to="/about" className="btn-secondary inline-flex items-center">
                  Learn More About Us
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Cassa Tools Manufacturing" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Info & Map */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions or need more information? We're here to help. Reach out to our team using any of the contact methods below.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cassa-blue rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Our team is available to assist you with all your hardware needs.
                </p>
                <div className="flex flex-col space-y-1">
                  <a href="tel:+971589275323" className="text-cassa-blue font-medium hover:text-cassa-yellow transition-colors">
                    +971 58 927 5323
                  </a>
                  <a href="tel:+971589209109" className="text-cassa-blue font-medium hover:text-cassa-yellow transition-colors">
                    +971 58 920 9109
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cassa-blue rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us an email for any inquiries, and we'll respond promptly.
                </p>
                <a href="mailto:aximinternationaltr@gmail.com" className="text-cassa-blue font-medium hover:text-cassa-yellow transition-colors text-sm">
                  aximinternationaltr@gmail.com
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cassa-blue rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">
                  Message us on WhatsApp for immediate assistance with your inquiries.
                </p>
                <a 
                  href="https://wa.me/971589275323" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Send Message
                </a>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5675825654884!2d55.31674731501047!3d25.27294198385714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sNaif%20Bazar%20Centre!5e0!3m2!1sen!2sae!4v1704800000000!5m2!1sen!2sae" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Axim International Location - Naif Bazar Centre, Dubai"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
