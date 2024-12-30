import React from 'react';

const Hero = () => {
  return (
    <div className="pt-24 relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Authentic Nepali Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Explore our premium selection of spices, traditional snacks, and authentic Nepali delicacies. Each product is carefully crafted to preserve Nepal's rich culinary heritage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;