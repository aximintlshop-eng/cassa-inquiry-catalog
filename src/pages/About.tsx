
import { ArrowRight, Award, CheckCircle, Users, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import cassaLogoGlobe from '@/assets/cassa-logo-globe.png';
import aximLogo from '@/assets/axim-logo.png';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gray-100 py-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your one-stop trusted partner
            </p>
          </div>
        </div>
        
        {/* AXIM International Overview */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img 
                  src={aximLogo} 
                  alt="AXIM International Logo" 
                  className="max-w-xs"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">AXIM International Trading LLC</h2>
                <p className="text-gray-600 mb-4">
                  AXIM International Trading LLC is based in Dubai, UAE, and is a flexible company that sells a wide variety of products. We specialize in furniture fittings, tools, and building materials for construction projects. We also deal in textiles, offering many types of fabrics and ready-made clothing.
                </p>
                <p className="text-gray-600 mb-4">
                  We trade blankets, towels, linens, watches, clocks, and spare parts as well. Our product range includes imitation jewelry, gifts, toys, games, perfumes, and cosmetics.
                </p>
                <p className="text-gray-600 mb-4">
                  With offices in <strong>Dubai, Mumbai and London</strong>, AXIM has a strong international presence in the wholesale and distribution market.
                </p>
                <div className="flex items-center gap-2 text-cassa-blue font-medium">
                  <Globe size={20} />
                  <span>Global Reach, Local Expertise</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cassa Brand Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Our Brand</h2>
              <p className="text-cassa-blue font-semibold text-lg">Original Trademark Product By AXIM International</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img 
                  src={cassaLogoGlobe} 
                  alt="Cassa Logo" 
                  className="max-w-sm"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-cassa-blue">Cassa<sup>®</sup></h3>
                <p className="text-gray-600 mb-4">
                  Cassa is a distinguished trademark brand of Axim International Traders, specializing in the hardware and fittings industry. Renowned for its high-quality products, Cassa offers a diverse range of essential hardware solutions, including door handles, locks and accessories, door stoppers, screws, bolts, anchors, and more.
                </p>
                <p className="text-gray-600 mb-4">
                  With a commitment to durability, functionality, and innovative design, Cassa caters to both residential and commercial needs, ensuring reliable performance across its extensive product line.
                </p>
                <p className="text-gray-600">
                  As a trusted name in the market, Cassa continues to set benchmarks in the hardware and fittings sector, delivering excellence to customers worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The core principles that guide everything we do at Cassa®.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-cassa-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Excellence</h3>
                <p className="text-gray-600">
                  We are committed to delivering products of the highest quality. Each tool is precision-engineered, crafted from premium materials, and thoroughly tested to ensure reliability and durability.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-cassa-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push the boundaries of what's possible, developing new designs and incorporating advanced technologies to make our tools more efficient, ergonomic, and user-friendly.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
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

        {/* Location Map */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Location</h2>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <MapPin className="text-cassa-blue" size={20} />
                <p>Naif Bazaar Building, Shop No. 40, Dubai, U.A.E</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0075!2d55.3089!3d25.2697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sNaif%20Bazaar%2C%20Deira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1704800000000!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AXIM International Location"
              ></iframe>
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
