import React, { useState, useEffect } from 'react';
import { Menu, ShoppingCart, ChevronDown, Search } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-white/80 backdrop-blur-lg shadow-lg'
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative mx-4 sm:mx-6 lg:mx-8 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 shadow-md'
            : 'bg-white/10 backdrop-blur-md'
        } px-6 py-3`}>
          <div className="flex items-center justify-between">
            <Logo />
            
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#">Home</NavLink>
              <div className="relative group">
                <button className="flex items-center text-white font-medium hover:text-[#4CAF50] transition-colors">
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white/95 backdrop-blur-md shadow-lg py-2 mt-2 rounded-lg">
                  <DropdownLink href="#">Spices</DropdownLink>
                  <DropdownLink href="#">Nepali Products</DropdownLink>
                  <DropdownLink href="#">Snacks</DropdownLink>
                  <DropdownLink href="#">Pickles</DropdownLink>
                </div>
              </div>
              <NavLink href="#">About</NavLink>
              <NavLink href="#">Contact</NavLink>
            </div>

            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-white hover:text-[#4CAF50] cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-white hover:text-[#4CAF50] cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-[#4CAF50] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
              >
                <Menu className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-lg shadow-lg mt-2">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#">Home</MobileNavLink>
            <MobileNavLink href="#">Products</MobileNavLink>
            <MobileNavLink href="#">About</MobileNavLink>
            <MobileNavLink href="#">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

// Extracted components for better organization and reusability
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="relative text-white font-medium hover:text-[#4CAF50] transition-colors after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#4CAF50] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
  >
    {children}
  </a>
);

const DropdownLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="block px-4 py-2 text-gray-700 hover:bg-[#4CAF50] hover:text-white transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="block px-3 py-2 text-gray-700 hover:bg-[#4CAF50] hover:text-white rounded-lg transition-colors"
  >
    {children}
  </a>
);

export default Navbar;