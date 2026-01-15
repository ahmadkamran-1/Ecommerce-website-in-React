import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ProductDetails from "./screens/ProductDetails";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       
        <Route
  path="/product/:id"
  element={
    <ProductDetails
      cartItems={cartItems}
      setCartItems={setCartItems}
    />
  }
/>

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
