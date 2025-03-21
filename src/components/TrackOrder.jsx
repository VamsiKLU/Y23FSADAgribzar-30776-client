import React, { useState } from "react";
import "./TrackOrder.css";

const mockOrderData = {
  "TXN123": { id: "TXN123", status: "Shipped", date: "2023-12-01" },
  "TXN456": { id: "TXN456", status: "Delivered", date: "2023-11-25" },
};

const TrackOrder = () => {
  const [transactionId, setTransactionId] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);

  const handleTrack = () => {
    setOrderDetails(mockOrderData[transactionId] || null);
  };

  return (
    <div className="track-order-container">
      <h2>Track Your Order</h2>
      <div className="track-form">
        <input
          type="text"
          placeholder="Enter Transaction ID"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
        />
        <button onClick={handleTrack}>Track</button>
      </div>
      {orderDetails ? (
        <div className="order-card">
          <h3>Order ID: {orderDetails.id}</h3>
          <p>Status: {orderDetails.status}</p>
          <p>Date: {orderDetails.date}</p>
        </div>
      ) : (
        transactionId && <p>No details found for this ID</p>
      )}
    </div>
  );
};

export default TrackOrder;
