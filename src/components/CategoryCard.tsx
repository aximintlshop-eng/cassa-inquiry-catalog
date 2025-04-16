
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

const CategoryCard = ({ id, name, image, productCount }: CategoryCardProps) => {
  return (
    <Link to={`/products?category=${id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
        <div className="h-44 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
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
