import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();

  const navigate = useNavigate();

  if (totalAmount === 0) {
    navigate("/");
    return null; 
  }

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
          return null;
        })}
      </div>
      <div className="checkout">
        <p>Subtotal: Rs {totalAmount}</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button onClick={() => navigate("/")}>Checkout</button>
      </div>
    </div>
  );
};
