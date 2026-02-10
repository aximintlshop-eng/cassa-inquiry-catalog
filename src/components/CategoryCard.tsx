
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  productCount: number;
  productImages?: string[];
}

const CategoryCard = ({ id, name, image, productCount, productImages }: CategoryCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = productImages && productImages.length > 0 ? productImages : [image];

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Link to={`/products?category=${id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
        <div className="h-44 overflow-hidden relative bg-gray-50">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={name}
              className={`absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-cassa-blue group-hover:text-cassa-yellow transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-500">
            {productCount} products
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
