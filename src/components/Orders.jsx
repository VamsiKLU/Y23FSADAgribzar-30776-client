import React from 'react';
import './Orders.css';
import orders from '../components/Order.json';

const Orders = () => {
  return (
    <div className="orders-table-container">
      <h1 className="list-heading" style={{fontSize:50}}>Orders List</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Total Amount</th>
            <th>Shipping Address</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.order_id}</td>
              <td>{order.customer_name}</td>
              <td>{order.order_date}</td>
              <td>${order.total_amount.toFixed(2)}</td>
              <td>{order.shipping_address}</td>
              <td>{order.payment_method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
