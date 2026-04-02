import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Stats from "./components/Stats/Stats";
import MainSection from "./components/Products/MainSection";
import Steps from "./components/Steps/Steps";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productsPromise = fetchProducts();

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <MainSection
        productsPromise={productsPromise}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Steps />
      <Pricing />
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}

export default App;
