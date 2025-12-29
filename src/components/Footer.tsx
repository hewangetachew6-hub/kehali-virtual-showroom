const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Kehali Furniture</h3>
            <p>Quality furniture for your home.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Contact Us</h3>
            <p>Email: info@kehalifurniture.com</p>
            <p>Phone: +254 712 345 678</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">Facebook</a>
              <a href="#" className="hover:text-gray-400">Twitter</a>
              <a href="#" className="hover:text-gray-400">Instagram</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2025 Kehali Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;