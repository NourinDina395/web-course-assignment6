import React, { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div>
          <span className="text-2xl font-extrabold">
            <span className="text-violet-600">Digi</span>
            <span className="text-gray-900">Tools</span>
          </span>
        </div>

        {/* Nav links - desktop (ONLY lg and above) */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#products" className="hover:text-violet-600 transition-colors">Products</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-violet-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Testimonials</a>
          <a href="#" className="hover:text-violet-600 transition-colors">FAQ</a>
        </div>

        {/* Right side - desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative cursor-pointer">
            <FiShoppingCart className="text-gray-700 text-xl hover:text-violet-600 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          <a href="#" className="text-sm font-medium text-gray-700 hover:text-violet-600">
            Login
          </a>

          <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile + md (hamburger) */}
        <div className="flex lg:hidden items-center gap-3">
          <div className="relative cursor-pointer">
            <FiShoppingCart className="text-gray-700 text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 text-2xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile + md dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          
          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-700 hover:text-violet-600"
          >
            Products
          </a>

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-700 hover:text-violet-600"
          >
            Features
          </a>

          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-700 hover:text-violet-600"
          >
            Pricing
          </a>

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-700 hover:text-violet-600"
          >
            Testimonials
          </a>

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-700 hover:text-violet-600"
          >
            FAQ
          </a>

          <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-violet-600">
              Login
            </a>

            <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-5 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;