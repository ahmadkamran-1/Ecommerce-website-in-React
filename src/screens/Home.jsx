import { products } from "../services/fakeApi";
import ProductCard from "../components/product/ProductCard";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Shop</h1>

      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
