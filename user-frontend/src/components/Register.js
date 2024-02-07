import React, { useState } from 'react';
import styles from './register.module.css';

const Register = ({ setIsLoggedIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Simulate register endpoint response
    try {
      const responseData = {
        success: true,
        message: 'Registration successful. Now you can login.', // Hardcoded message
      };
      if (responseData.success) {
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
          <button type="submit" className={styles.button}>Register</button>
        </form>
      )}
    </div>
  );
};

export default Register;
