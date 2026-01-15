import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
      style={{ cursor: "pointer" }}
    >
      <h3>{product.name}</h3>
      <p>Rs {product.price}</p>
    </div>
  );
}

export default ProductCard;
