import React, { useState, useEffect } from 'react';
import styles from './myOrders.module.css'; // Your CSS module for styling


/*** FAKE (test) ORDERS ***//*
const MyOrders = () => {
    
    const [orders] = useState([
      {
        productName: 'Jävla kamel',
        quantity: 1,
        price: 19.99
      },
      {
        productName: 'Va gör den här?!',
        quantity: 2,
        price: 1337
      }
    ]);
  
    const [loading] = useState(false);
*/


/*** REAL ORDERS START***/

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch orders from the API
    const fetchOrders = async () => {
      try {

        const token = localStorage.getItem('token');
        console.log("Token from localStorage:", token); // This should log the token to the console

        // Fetching orders from your API endpoint
        const response = await fetch('http://localhost:3030/orders/myorders', {
          method: 'GET',
          headers: {
            //'Authorization': `Bearer ${localStorage.getItem('token')}` 
            'Authorization': `Bearer ${process.env.REACT_APP_JWT_TOKEN}`
          }
        });
        console.log(process.env.REACT_APP_JWT_TOKEN);
        if (response.ok) {
          const data = await response.json();
          setOrders(data); // Set the orders in state
        } else {
          console.error('Failed to fetch orders', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  /*** REAL ORDERS END***/

  if (loading) {
    return <div>Loading orders...</div>;
  }

  return (
    <div className={styles.myOrders}>
      <h2>My Orders</h2>
      <table className={styles.ordersTable}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td>{order.price.toFixed(2)} €</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No orders found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
