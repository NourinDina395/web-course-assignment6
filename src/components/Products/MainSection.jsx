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
    toast.success("🎉 Order placed successfully! Thank you for your purchase!");
  };

  return (
    <section id="products" className="py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header with toggle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              {activeTab === "products" ? "Available Products" : `My Cart (${cartItems.length})`}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {activeTab === "products"
                ? "Choose the tools that power your workflow"
                : "Review your selected tools"}
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="flex rounded-full border border-gray-200 overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2 text-sm font-semibold transition-colors ${
                activeTab === "products"
                  ? "bg-violet-600 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`px-6 py-2 text-sm font-semibold transition-colors ${
                activeTab === "cart"
                  ? "bg-violet-600 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Cart ({cartItems.length})
            </button>
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
                <p className="text-gray-400">Go to the Products tab to add tools to your cart.</p>
                <button
                  onClick={() => setActiveTab("products")}
                  className="btn bg-violet-600 text-white hover:bg-violet-700 mt-5 rounded-full"
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

                {/* Summary */}
                <div className="mt-6 p-5 bg-violet-50 rounded-2xl border border-violet-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 font-medium">Total ({cartItems.length} items)</span>
                    <span className="text-2xl font-extrabold text-violet-700">${totalPrice}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="btn w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full"
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
