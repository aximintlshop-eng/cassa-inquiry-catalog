
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/data/categories';
import { products, getProductsByCategoryId } from '@/data/products';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(getProductsByCategoryId(selectedCategory));
    } else if (searchTerm) {
      const searched = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(searched);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, searchTerm]);
  
  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setSearchTerm('');
  };
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Search is triggered in the useEffect
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gray-100 py-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our extensive catalog of high-quality hardware tools and solutions. 
              Use the filters to find exactly what you need.
            </p>
          </div>
        </div>
        
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  
                  <ul className="space-y-2 mb-6">
                    <li>
                      <button 
                        onClick={() => handleCategoryChange(null)}
                        className={`w-full text-left py-2 px-3 rounded-md transition-colors ${!selectedCategory ? 'bg-cassa-blue text-white' : 'hover:bg-gray-100'}`}
                      >
                        All Products
                      </button>
                    </li>
                    {categories.map((category) => (
                      <li key={category.id}>
                        <button 
                          onClick={() => handleCategoryChange(category.id)}
                          className={`w-full text-left py-2 px-3 rounded-md transition-colors ${selectedCategory === category.id ? 'bg-cassa-blue text-white' : 'hover:bg-gray-100'}`}
                        >
                          {category.name} ({category.productCount})
                        </button>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-bold mb-4">Search</h3>
                  <form onSubmit={handleSearch}>
                    <div className="relative">
                      <input 
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cassa-yellow"
                      />
                      <button 
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-cassa-blue text-white p-1 rounded-md"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              {/* Product Grid */}
              <div className="lg:col-span-3">
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
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
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <h3 className="text-xl font-bold mb-2">No Products Found</h3>
                    <p className="text-gray-600">
                      We couldn't find any products matching your search criteria. Please try with different keywords or browse our categories.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
