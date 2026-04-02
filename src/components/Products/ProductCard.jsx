import React, { useState } from "react";
import { FiCheck, FiShoppingCart } from "react-icons/fi";
import { toast } from "react-toastify";
import designIcon from "../../assets/products/design-tool.png";
import operationIcon from "../../assets/products/operation.png";
import portfolioIcon from "../../assets/products/portfolio.png";
import shoppingIcon from "../../assets/products/shopping-cart.png";
import socialIcon from "../../assets/products/social-media.png";
import writingIcon from "../../assets/products/writing_2327400 1.png";

const iconMap = {
  design: designIcon,
  operation: operationIcon,
  portfolio: portfolioIcon,
  shopping: shoppingIcon,
  social: socialIcon,
  writing: writingIcon,
};

const tagColors = {
  popular: "bg-orange-100 text-orange-600",
  new: "bg-green-100 text-green-600",
  bestseller: "bg-blue-100 text-blue-600",
};

const periodLabel = {
  "one-time": "One-time",
  monthly: "/mo",
  yearly: "/yr",
};

const ProductCard = ({ product, cartItems, setCartItems }) => {
  const [added, setAdded] = useState(false);

  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (isInCart) {
      toast.info(`${product.name} is already in your cart!`);
      return;
    }
    setCartItems([...cartItems, product]);
    setAdded(true);
    toast.success(`✅ ${product.name} added to cart!`);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="card bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="card-body p-5">
        {/* Tag & icon row */}
        <div className="flex items-start justify-between mb-3">
          <img
            src={iconMap[product.icon] || writingIcon}
            alt={product.name}
            className="w-12 h-12 object-contain"
          />
          <span
            className={`text-xs font-bold px-2 py-1 rounded-full ${
              tagColors[product.tagType] || "bg-gray-100 text-gray-600"
            }`}
          >
            {product.tag}
          </span>
        </div>

        {/* Name & desc */}
        <h3 className="font-bold text-lg text-gray-900">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>

        {/* Features */}
        <ul className="space-y-1 mb-4">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <FiCheck className="text-violet-500 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Price & button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <div>
            <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
            <span className="text-gray-400 text-sm ml-1">{periodLabel[product.period] || ""}</span>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className={`btn btn-sm rounded-full gap-2 ${
              isInCart
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : added
                ? "bg-green-500 text-white"
                : "bg-violet-600 hover:bg-violet-700 text-white"
            }`}
          >
            <FiShoppingCart />
            {isInCart ? "In Cart" : added ? "Added!" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
