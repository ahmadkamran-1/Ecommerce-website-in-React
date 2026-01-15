import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export const placeOrder = async ({ user, cartItems, billing }) => {
  if (!user) {
    throw new Error("User not logged in");
  }

  if (!cartItems || cartItems.length === 0) {
    throw new Error("Cart is empty");
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const order = {
    userId: user.uid,
    items: cartItems,
    billing: billing,
    total: total,
    status: "pending",
    createdAt: serverTimestamp(),
  };

  await addDoc(collection(db, "orders"), order);
};
