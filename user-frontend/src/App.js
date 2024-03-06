import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';
import ChangePassword from './components/changePassword';
import MyOrders from './components/myOrders';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if a JWT token is saved in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // Set login state to true if token is found
    }
  }, []); // Empty dependency array to run this effect only once, on component mount

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    setIsLoggedIn(false); // Set login state to false
  };

  return (
    <div className="App">
      <h1>Welcome</h1>
      {!isLoggedIn ? (
        <div className="container not-logged-in">
          <Login setIsLoggedIn={setIsLoggedIn} />
          <Register setIsLoggedIn={setIsLoggedIn} />
          <ResetPassword />
          <MyOrders />
        </div>
      ) : (
        <div className="container logged-in">
          <div className="logout-section">
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </div>
          <MyOrders />
          <div className="change-password-section">
            <ChangePassword />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
