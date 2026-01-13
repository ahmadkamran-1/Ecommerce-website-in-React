import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./screens/Home";
import Cart from "./screens/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
