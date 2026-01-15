import { useState } from "react";
import { placeOrder } from "../services/placeOrder";

function Cart({ user }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async () => {
    // silently block if user missing
    if (!user) return;

    try {
      setLoading(true);

      await placeOrder({
        user,
        billing: {
          name,
          email,
          address,
        },
      });

      alert("Order placed successfully");

      // clear form
      setName("");
      setEmail("");
      setAddress("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Billing Details</h1>

      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br /><br />

      <button onClick={handlePlaceOrder} disabled={loading}>
        {loading ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
}

export default Cart;
