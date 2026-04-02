import React, { Suspense, use, useState } from "react";
import ProductCard from "../Products/ProductCard";
import CartItem from "../Cart/CartItem";
import { toast } from "react-toastify";

const ProductList = ({ productsPromise, cartItems, setCartItems }) => {
  const products = use(productsPromise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
};

const MainSection = ({ productsPromise, cartItems, setCartItems }) => {
  const [activeTab, setActiveTab] = useState("products");

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warning("Your cart is empty!");
      return;
    }
    setCartItems([]);
    toast.success("🎉 Order placed successfully!");
  };

  return (
    <section id="products" className="py-14 bg-white">
      <div className="container mx-auto px-4">

        {/* Section header - inside dashed border box */}
        <div className="border-2  border-gray-200 rounded-2xl p-8 mb-10">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-black text-gray-900 mb-3">
              Premium Digital Tools
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
              Choose from our curated collection of premium digital products designed to
              boost your productivity and creativity.
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="flex justify-center">
            <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab("products")}
                className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors ${
                  activeTab === "products"
                    ? "bg-violet-600 text-white shadow"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab("cart")}
                className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors ${
                  activeTab === "cart"
                    ? "bg-violet-600 text-white shadow"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Cart ({cartItems.length})
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {activeTab === "products" ? (
          <Suspense
            fallback={
              <div className="flex justify-center py-16">
                <span className="loading loading-spinner loading-lg text-violet-600"></span>
              </div>
            }
          >
            <ProductList
              productsPromise={productsPromise}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          </Suspense>
        ) : (
          <div className="max-w-2xl mx-auto">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">Your cart is empty</h3>
                <p className="text-gray-400">Go to the Products tab to add tools.</p>
                <button
                  onClick={() => setActiveTab("products")}
                  className="bg-violet-600 text-white hover:bg-violet-700 mt-5 px-6 py-2 rounded-full text-sm font-semibold"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                  />
                ))}
                <div className="mt-6 p-5 bg-violet-50 rounded-2xl border border-violet-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 font-medium">Total ({cartItems.length} items)</span>
                    <span className="text-2xl font-extrabold text-violet-700">${totalPrice}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-full transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;