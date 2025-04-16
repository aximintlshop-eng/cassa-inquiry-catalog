
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InquiryForm from '@/components/InquiryForm';
import { getProductById, products } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  // If product doesn't exist, show a message
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container-custom py-12">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="mb-6">Sorry, the product you are looking for does not exist or has been removed.</p>
            <Link to="/products" className="btn-primary inline-flex items-center">
              <ArrowLeft size={18} className="mr-2" />
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Get related products (same category)
  const relatedProducts = products
    .filter(p => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 3);
  
  // Image gallery navigation
  const nextImage = () => {
    if (product.gallery) {
      setActiveImageIndex((activeImageIndex + 1) % product.gallery.length);
    }
  };
  
  const prevImage = () => {
    if (product.gallery) {
      setActiveImageIndex((activeImageIndex - 1 + (product.gallery.length || 1)) % (product.gallery.length || 1));
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-4">
          <div className="container-custom">
            <div className="flex items-center text-sm">
              <Link to="/" className="text-gray-600 hover:text-cassa-yellow transition-colors">
                Home
              </Link>
              <span className="mx-2">›</span>
              <Link to="/products" className="text-gray-600 hover:text-cassa-yellow transition-colors">
                Products
              </Link>
              <span className="mx-2">›</span>
              <Link 
                to={`/products?category=${product.categoryId}`} 
                className="text-gray-600 hover:text-cassa-yellow transition-colors"
              >
                {product.category}
              </Link>
              <span className="mx-2">›</span>
              <span className="text-cassa-blue font-medium">{product.name}</span>
            </div>
          </div>
        </div>
        
        {/* Product Details */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div>
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                  <div className="relative h-72 md:h-96 overflow-hidden rounded-lg">
                    <img 
                      src={product.gallery ? product.gallery[activeImageIndex] : product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain"
                    />
                    
                    {product.gallery && product.gallery.length > 1 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-cassa-blue p-2 rounded-full shadow-md hover:bg-cassa-yellow hover:text-black transition-colors"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-cassa-blue p-2 rounded-full shadow-md hover:bg-cassa-yellow hover:text-black transition-colors"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Thumbnail Gallery */}
                {product.gallery && product.gallery.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {product.gallery.map((img, index) => (
                      <button 
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${activeImageIndex === index ? 'border-cassa-yellow' : 'border-transparent'}`}
                      >
                        <img 
                          src={img} 
                          alt={`${product.name} view ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Product Info & Inquiry Form */}
              <div>
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <span className="inline-block bg-cassa-blue text-white text-sm px-3 py-1 rounded-full mb-4">
                    {product.category}
                  </span>
                  <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                  <p className="text-gray-600 mb-6">
                    {product.shortDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={18} className="text-cassa-yellow mr-2 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4 mb-6">
                    <a 
                      href={`https://wa.me/1234567890?text=I'm%20interested%20in%20the%20product:%20${encodeURIComponent(product.name)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      WhatsApp Inquiry
                    </a>
                    <a 
                      href={`mailto:info@cassa.com?subject=Inquiry about ${product.name}&body=I'm interested in learning more about the ${product.name}.`} 
                      className="btn-primary flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      Email Inquiry
                    </a>
                  </div>
                </div>
                
                {/* Inquiry Form */}
                <InquiryForm productName={product.name} />
              </div>
            </div>
            
            {/* Product Details Tabs */}
            <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex border-b">
                <button 
                  onClick={() => setActiveTab('description')}
                  className={`px-6 py-4 font-medium text-lg transition-colors ${activeTab === 'description' ? 'bg-cassa-blue text-white' : 'hover:bg-gray-100'}`}
                >
                  Description
                </button>
                <button 
                  onClick={() => setActiveTab('specifications')}
                  className={`px-6 py-4 font-medium text-lg transition-colors ${activeTab === 'specifications' ? 'bg-cassa-blue text-white' : 'hover:bg-gray-100'}`}
                >
                  Specifications
                </button>
              </div>
              
              <div className="p-6">
                {activeTab === 'description' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Product Description</h3>
                    <p className="text-gray-600 mb-6">
                      {product.description}
                    </p>
                    <h4 className="text-lg font-semibold mb-3">Features</h4>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={18} className="text-cassa-yellow mr-2 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {activeTab === 'specifications' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <tbody>
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <tr key={key} className="border-b last:border-b-0">
                              <td className="py-3 font-medium">{key}</td>
                              <td className="py-3 text-gray-600">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">Related Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProducts.map((related) => (
                    <ProductCard 
                      key={related.id}
                      id={related.id}
                      name={related.name}
                      image={related.image}
                      category={related.category}
                      shortDescription={related.shortDescription}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
