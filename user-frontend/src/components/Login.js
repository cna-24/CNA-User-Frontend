import React, { useState } from 'react';
import styles from './login.module.css';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Simulate login endpoint response
    const responseData = {
      success: true,
      token: 'fakeToken123', // Hardcoded token
    };
    try {
      if (responseData.success) {
        // Simulating successful login
        localStorage.setItem('token', responseData.token);
        setIsLoggedIn(true);
      } else {
        console.error('Login failed:', responseData.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className={styles.form}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
