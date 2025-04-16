
import { ArrowRight, Mail, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/data/categories';
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
                Explore our wide range of premium hardware tools and solutions designed for professionals and DIY enthusiasts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
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
                <h2 className="text-3xl font-bold mb-4">About Cassa<sup>®</sup></h2>
                <p className="text-gray-600 mb-4">
                  Cassa® is a premium brand under Axim International, specializing in high-quality hardware tools and solutions for professionals and DIY enthusiasts.
                </p>
                <p className="text-gray-600 mb-6">
                  With over 25 years of industry experience, we've built our reputation on delivering exceptional quality, innovative design, and outstanding customer service.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-cassa-yellow font-bold mr-2">✓</span>
                    <span>Premium quality materials and construction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cassa-yellow font-bold mr-2">✓</span>
                    <span>Innovative design for improved performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cassa-yellow font-bold mr-2">✓</span>
                    <span>Rigorous testing for durability and reliability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cassa-yellow font-bold mr-2">✓</span>
                    <span>Comprehensive warranty coverage</span>
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
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-cassa-yellow p-4 rounded-lg shadow-lg hidden md:block">
                  <p className="font-bold text-black">25+ Years of Excellence</p>
                </div>
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
                  Our customer service team is available Monday to Friday, 9am to 6pm.
                </p>
                <a href="tel:+1234567890" className="text-cassa-blue font-medium hover:text-cassa-yellow transition-colors">
                  +123 456 7890
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cassa-blue rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us an email for any inquiries, and we'll respond within 24 hours.
                </p>
                <a href="mailto:info@cassa.com" className="text-cassa-blue font-medium hover:text-cassa-yellow transition-colors">
                  info@cassa.com
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
                  href="https://wa.me/1234567890" 
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986173255611!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1619756483885!5m2!1sen!2sca" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Cassa Location Map"
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
