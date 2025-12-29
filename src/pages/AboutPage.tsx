const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">About Kehali Furniture</h1>
      <div className="max-w-3xl mx-auto text-gray-700 space-y-6 text-lg">
        <p>
          Kehali Furniture is dedicated to designing and delivering high-quality furniture that combines comfort, durability, and modern style. We specialize in creating furniture that enhances homes, offices, and commercial spaces with elegance and functionality.
        </p>
        <p>
          Our products are carefully crafted using quality materials and skilled workmanship, ensuring long-lasting value and customer satisfaction. At Kehali Furniture, we believe furniture is more than just an object—it is part of everyday life and reflects personal taste and lifestyle.
        </p>
        <h2 className="text-2xl font-bold pt-4">We are committed to:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Quality craftsmanship</li>
          <li>Affordable and reliable products</li>
          <li>Customer-focused service</li>
          <li>Modern and traditional furniture designs</li>
        </ul>
        <p>
          Our goal is to provide furniture solutions that meet the needs of our customers while maintaining style, strength, and comfort.
        </p>
        <p className="font-bold text-center text-xl pt-6">
          Kehali Furniture — Designed for Comfort. Built to Last.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;