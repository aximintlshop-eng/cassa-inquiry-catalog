
import { ArrowRight, Award, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gray-100 py-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4">About Cassa<sup>®</sup></h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn about our journey, values, and commitment to providing high-quality hardware tools and solutions.
            </p>
          </div>
        </div>
        
        {/* Company Overview */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 1997, Cassa® began as a small family-owned business with a passion for quality tools and hardware solutions. Today, as a brand under Axim International, we've grown into a trusted name in the industry, serving professionals and DIY enthusiasts worldwide.
                </p>
                <p className="text-gray-600 mb-4">
                  Our journey has been defined by our unwavering commitment to quality, innovation, and customer satisfaction. Every Cassa® product is designed with precision, manufactured with care, and tested rigorously to ensure it meets our exacting standards.
                </p>
                <p className="text-gray-600 mb-4">
                  We believe that great tools make great work possible. That's why we continuously refine our designs, improve our manufacturing processes, and search for new ways to make our products more efficient, durable, and user-friendly.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Cassa Manufacturing" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1565665681743-6ed8dae1e7b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Cassa Tools" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1567361808960-c7b6dd1072c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Cassa Workshop" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1560716092-847eeca867c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Cassa Team" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The core principles that guide everything we do at Cassa®.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-cassa-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Excellence</h3>
                <p className="text-gray-600">
                  We are committed to delivering products of the highest quality. Each tool is precision-engineered, crafted from premium materials, and thoroughly tested to ensure reliability and durability.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-cassa-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push the boundaries of what's possible, developing new designs and incorporating advanced technologies to make our tools more efficient, ergonomic, and user-friendly.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-cassa-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We listen to their feedback, understand their needs, and strive to exceed their expectations with every product and interaction.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the experienced professionals who guide Cassa® with vision and expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="John Doe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">John Doe</h3>
                  <p className="text-cassa-blue font-medium mb-3">Chief Executive Officer</p>
                  <p className="text-gray-600 mb-4">
                    With over 25 years of experience in the hardware industry, John has been instrumental in shaping Cassa's vision and growth strategy.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Jane Smith" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Jane Smith</h3>
                  <p className="text-cassa-blue font-medium mb-3">Chief Operations Officer</p>
                  <p className="text-gray-600 mb-4">
                    Jane oversees all operational aspects of Cassa, ensuring efficient manufacturing processes and maintaining our high-quality standards.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Michael Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Michael Johnson</h3>
                  <p className="text-cassa-blue font-medium mb-3">Head of Product Development</p>
                  <p className="text-gray-600 mb-4">
                    Michael leads our research and development team, driving innovation and ensuring our products meet the evolving needs of our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-cassa-blue py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl text-white font-bold mb-6">
              Ready to Experience Cassa<sup>®</sup> Quality?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Browse our catalog to find the perfect tools for your project or contact us with any questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/products" className="btn-primary inline-flex items-center justify-center">
                Browse Products
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/contact" className="bg-white text-cassa-blue font-medium px-4 py-2 rounded-md transition-all hover:bg-gray-100 hover:shadow-md inline-flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
