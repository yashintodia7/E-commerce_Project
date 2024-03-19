import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";
export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemsCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />

      <div className="description">
        <p>{productName}</p>

        <p>Rs {price * cartItems[id]}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemsCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
