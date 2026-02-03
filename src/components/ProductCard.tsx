
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  shortDescription: string;
}

const ProductCard = ({ id, name, image, category, shortDescription }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover h-full flex flex-col">
      <Link to={`/product/${id}`} className="block overflow-hidden">
        <div className="h-48 overflow-hidden relative bg-gray-50 flex items-center justify-center p-2">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-2 left-2">
            <span className="bg-cassa-blue text-white text-xs px-2 py-1 rounded">
              {category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-4 flex-grow">
        <Link to={`/product/${id}`}>
          <h3 className="text-lg font-semibold text-cassa-blue hover:text-cassa-yellow transition-colors mb-2">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {shortDescription}
        </p>
      </div>
      
      <div className="p-4 pt-0 mt-auto flex gap-2">
        <Link to={`/product/${id}`} className="btn-primary flex-grow text-center">
          View Details
        </Link>
        <a 
          href="https://wa.me/1234567890?text=I'm%20interested%20in%20the%20product:%20" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
        >
          <Phone size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
