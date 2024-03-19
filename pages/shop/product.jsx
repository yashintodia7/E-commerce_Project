import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from 'react-router-dom';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const navigate = useNavigate(); // Import useNavigate hook to navigate to another page

  const cartItemCount = cartItems[id];

  const handleAddToCart = () => {
    addToCart(id); // Add the item to cart
    navigate("/cart"); // Navigate to the specified route (change "/" to your desired route)
  };

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> RS {price}</p>  
      </div>
      {/* Use a single onClick event handler for both actions */}
      <button className="addToCartBttn" onClick={handleAddToCart}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      
    </div>
  );
};
