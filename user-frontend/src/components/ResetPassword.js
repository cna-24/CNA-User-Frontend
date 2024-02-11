import React, { useState } from 'react';
import styles from './resetPassword.module.css'; // Assume you have similar CSS module as others

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isRequested, setIsRequested] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would call your API to request a password reset
    try {
      // Simulate API call
      const responseData = {
        success: true,
        message: 'Password reset link sent. Check your email.', // Hardcoded response
      };
      if (responseData.success) {
        setIsRequested(true);
        setMessage(responseData.message);
      } else {
        console.error('Password reset request failed:', responseData.message);
      }
    } catch (error) {
      console.error('Error requesting password reset:', error);
    }
  };

  return (
    <div className={styles.form}>
      <h2>Reset Password</h2>
      {isRequested ? (
        <p>{message}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Send Reset Link</button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
