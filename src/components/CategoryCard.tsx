
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
  const isComingSoon = id === 'cassa-electronic-paint-machinery';
  const linkTo = isComingSoon ? '/coming-soon' : `/products?category=${id}`;

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Link to={linkTo} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover relative">
        {isComingSoon && (
          <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Coming Soon
          </div>
        )}
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
            {isComingSoon ? 'Coming Soon' : `${productCount} products`}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
