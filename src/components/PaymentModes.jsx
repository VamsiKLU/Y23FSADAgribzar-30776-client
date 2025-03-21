import React from "react";
import "./PaymentModes.css"; // CSS for styles

const paymentModes = [
  { id: 1, name: "Credit Card", icon: "💳" },
  { id: 2, name: "UPI", icon: "📱" },
  { id: 3, name: "Net Banking", icon: "🏦" },
  { id: 4, name: "Cash on Delivery", icon: "💵" },
];

const PaymentModes = () => {
  return (
    <div className="payment-modes-container">
      <h2>Choose a Payment Mode</h2>
      <div className="payment-modes">
        {paymentModes.map((mode) => (
          <div className="payment-mode" key={mode.id}>
            <span className="icon">{mode.icon}</span>
            <p>{mode.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentModes;
