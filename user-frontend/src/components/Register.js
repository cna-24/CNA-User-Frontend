import React, { useState } from 'react';
import styles from './register.module.css';

const Register = ({ setIsLoggedIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState(''); // New state for address
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Client-side validation
    if (name.length < 4) {
      setError('Username must be at least 4 characters long.');
      return;
    }
  
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
  
    try {
      //const response = await fetch('https://cna-user-api.duckdns.org/register', {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer TOKEN` // TODO: Move TOKEN to .env
        },
        body: JSON.stringify({
          username: name,
          password: password
        })
      });
      const responseData = await response.json();
  
      if (response.ok) {
        setIsRegistered(true);
        setRegistrationMessage(responseData.message);
      } else {
        console.error('Registration failed:', responseData.message);
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };
  

  return (
    <div className={styles.form}>
      <h2>Register</h2>
      {isRegistered ? (
        <p>{registrationMessage}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p className={styles.error}>{error}</p>} {/* Display error message */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className={styles.input}
          />
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
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address" // Optional address field
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Register</button>
        </form>
      )}
    </div>
  );
};

export default Register;