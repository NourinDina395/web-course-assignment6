import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">D</span>
          </div>
          <span className="text-xl font-extrabold text-gray-900">
            Digi<span className="text-violet-600">Tools</span>
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-violet-600 transition-colors">Home</a>
          <a href="#products" className="hover:text-violet-600 transition-colors">Products</a>
          <a href="#pricing" className="hover:text-violet-600 transition-colors">Pricing</a>
          <a href="#steps" className="hover:text-violet-600 transition-colors">How it works</a>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-3">
          <div className="relative cursor-pointer group">
            <FiShoppingCart className="text-gray-700 text-2xl group-hover:text-violet-600 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <button className="btn bg-violet-600 hover:bg-violet-700 text-white btn-sm rounded-full px-5 hidden md:inline-flex">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
