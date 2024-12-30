import React from 'react';

const products = [
  {
    name: 'Premium Himalayan Masala',
    category: 'Spices',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Traditional Gundruk',
    category: 'Nepali Products',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1600865624369-d6a898af5b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Mixed Mango Pickle',
    category: 'Pickles',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1589135233689-c449a69d4526?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#37474F] mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-[#4CAF50] font-semibold mb-2">{product.category}</p>
                <h3 className="text-lg font-bold text-[#37474F] mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#D32F2F]">${product.price}</span>
                  <button className="bg-[#4CAF50] hover:bg-[#388E3C] text-white px-4 py-2 rounded-lg transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;