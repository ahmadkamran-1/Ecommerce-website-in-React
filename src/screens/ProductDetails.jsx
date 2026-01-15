import { useParams, useNavigate } from "react-router-dom";
import { products } from "../services/fakeApi";

function ProductDetails({ cartItems, setCartItems }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const addToCart = () => {
    setCartItems(prev => [...prev, product]);
    navigate("/cart");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "800px" }}>
      <h1>{product.name}</h1>
      <p>Price: Rs {product.price}</p>

      {/* IMPORTANT: button isolated */}
      <button
  type="button"
  onClick={addToCart}
  style={{ marginTop: "20px", width: "100%" }}
>
  Add to Cart
</button>

    </div>
  );
}

export default ProductDetails;
