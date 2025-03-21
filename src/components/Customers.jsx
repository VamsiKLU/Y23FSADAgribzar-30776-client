import React from 'react';
import './Customers.css';
import customers from "../components/Customer.json";

const Customers = () => {
  return (
    <div className="customers-container">
      <h1 style={{ textAlign: "center", color: 'white', fontWeight: "bold" }}>
        Customers List
      </h1>
      <div className="customers-grid">
        {customers.map((customer, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p><strong>Customer ID:</strong> {customer.customer_id}</p>
              </div>
              <div className="flip-card-back">
                <p><strong>Full Name:</strong> {customer.full_name}</p>
                <p><strong>Age:</strong> {customer.age}</p>
                <p><strong>Email:</strong> {customer.email}</p>
                <p><strong>Address:</strong> {customer.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
