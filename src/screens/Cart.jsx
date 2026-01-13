function Cart({ cartItems }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart</h1>

      {cartItems.length === 0 && <p>No items in cart</p>}

      {cartItems.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Rs {item.price}</p>
        </div>
      ))}

      <h2>Billing Details</h2>

      <input placeholder="Full Name" /><br /><br />
      <input placeholder="Email" /><br /><br />
      <input placeholder="Address" /><br /><br />

      <button>Place Order</button>
    </div>
  );
}

export default Cart;
