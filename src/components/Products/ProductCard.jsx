import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
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
  popular: "bg-blue-100 text-blue-600",
  new: "bg-green-100 text-green-600",
  bestseller: "bg-orange-100 text-orange-600",
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
    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col hover:shadow-md transition-shadow">
      {/* Icon & Tag row */}
      <div className="flex items-start justify-between mb-3">
        <img
          src={iconMap[product.icon] || writingIcon}
          alt={product.name}
          className="w-12 h-12 object-contain"
        />
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full ${
            tagColors[product.tagType] || "bg-gray-100 text-gray-600"
          }`}
        >
          {product.tag}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-black text-xl text-gray-900 mb-2">{product.name}</h3>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-3 leading-relaxed">{product.description}</p>

      {/* Price */}
      <div className="mb-4">
        <span className="text-3xl font-black text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-sm ml-1">/{product.period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-6 flex-1">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <FiCheck className="text-violet-500 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* Buy Now button */}
      <button
        onClick={handleAddToCart}
        disabled={isInCart}
        className={`w-full py-3 rounded-full font-semibold text-sm transition-colors ${
          isInCart
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-violet-600 hover:bg-violet-700 text-white"
        }`}
      >
        {isInCart ? "Added to Cart ✓" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;