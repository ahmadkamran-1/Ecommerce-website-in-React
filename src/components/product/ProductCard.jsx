import { useNavigate } from "react-router-dom";

function ProductCard({ product, cartItems, setCartItems }) {
  const navigate = useNavigate();

  const addToCart = () => {
    setCartItems([...cartItems, product]);
    navigate("/cart");
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
