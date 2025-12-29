import { Link } from 'react-router-dom';
import AllProducts from '../components/AllProducts';

const HomePage = () => {

  return (
    <div className="space-y-12">
      <div className="bg-cover bg-center h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Kehali Furniture</h1>
            <p className="text-lg md:text-xl mb-8">Find the perfect furniture for your home.</p>
            <Link to="/products" className="bg-white text-gray-800 font-bold py-3 px-6 rounded text-lg">Shop Now</Link>
          </div>
        </div>
      </div>
      <div className="py-12">
        <AllProducts />
      </div>
    </div>
  );
};

export default HomePage;