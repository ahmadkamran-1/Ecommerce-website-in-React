import { products } from "../services/fakeApi";

import ProductCard from "../components/product/ProductCard";


function Home({ cartItems, setCartItems }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to My Shop</h1>

      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
}

export default Home;
