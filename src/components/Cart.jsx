import React, { useState } from "react";
import "./Cart.css";

const initialCart = [
  { id: 1, name: "Product 1", price: 200, quantity: 1 },
  { id: 2, name: "Product 2", price: 400, quantity: 2 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleQuantityChange = (id, value) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + value) } : item
    );
    setCartItems(updatedCart);
  };

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <div className="cart-controls">
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </div>
            <p>${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${getTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default Cart;
