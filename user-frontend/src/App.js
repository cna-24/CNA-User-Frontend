import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1>Welcome</h1>
      <div className="container">
        {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
        {!isLoggedIn && <Register setIsLoggedIn={setIsLoggedIn} />}
      </div>
      {isLoggedIn && (
        <button onClick={handleLogout} className="logout-button">Logout</button>
      )}
    </div>
  );
}

export default App;
