import React from 'react';
import { Leaf } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 group">
      <div className="relative">
        <Leaf 
          className="h-8 w-8 text-[#4CAF50] transform rotate-45 group-hover:rotate-[405deg] transition-all duration-700"
          strokeWidth={2.5}
        />
        <div className="absolute -inset-1 bg-gradient-to-r from-[#4CAF50]/20 to-[#2E7D32]/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-700" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300">
          Green Agro
        </span>
        <span className="text-xs tracking-wider text-gray-600 font-medium">
          Products
        </span>
      </div>
    </div>
  );
};

export default Logo;