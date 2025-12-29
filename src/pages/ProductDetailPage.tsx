import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-800 mb-4">Birr {product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-8">{product.description}</p>
          <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;