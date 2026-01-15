import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";

import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ProductDetails from "./screens/ProductDetails";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function AppRoutes({ user, cartItems, setCartItems }) {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

      <Route path="/cart" element={<Cart user={user} />} />



        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>

      <Footer />
    </>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes
        user={user}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </BrowserRouter>
  );
}

export default App;
