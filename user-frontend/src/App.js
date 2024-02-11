import React, { useState } from 'react';
import './App.css';
import styles from './App.css';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';
import ChangePassword from './components/changePassword';
import MyOrders from './components/myOrders';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };


return (
  <div className="App">
    <h1>Welcome</h1>
    {!isLoggedIn ? (
      <div className="container not-logged-in">
        <Login setIsLoggedIn={setIsLoggedIn} />
        <Register setIsLoggedIn={setIsLoggedIn} />
        <ResetPassword />
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
