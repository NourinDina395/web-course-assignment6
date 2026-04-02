import React from "react";
import { FiTrash2 } from "react-icons/fi";
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

const CartItem = ({ item, cartItems, setCartItems }) => {
  const handleRemove = () => {
    const updated = cartItems.filter((i) => i.id !== item.id);
    setCartItems(updated);
    toast.error(`❌ ${item.name} removed from cart`);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={iconMap[item.icon] || writingIcon}
          alt={item.name}
          className="w-10 h-10 object-contain"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{item.name}</h4>
          <p className="text-violet-600 font-bold">${item.price}</p>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="btn btn-sm btn-ghost text-red-500 hover:bg-red-50"
      >
        <FiTrash2 />
      </button>
    </div>
  );
};

export default CartItem;
