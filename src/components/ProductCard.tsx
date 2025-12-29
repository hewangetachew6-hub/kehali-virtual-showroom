import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg">{product.name}</h3>
          <p className="text-gray-600">Birr {product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;