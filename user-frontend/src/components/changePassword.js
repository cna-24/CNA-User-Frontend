import React, { useState } from 'react';
import styles from './changePassword.module.css'; // Assume you have CSS similar to your other components

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setMessage("New passwords do not match.");
      return;
    }
    // API call to change password here
    try {
      // Simulate API call with a success response
      const responseData = { success: true, message: 'Password successfully changed.' };
      if (responseData.success) {
        setMessage(responseData.message);
        // Clear fields or perform additional actions as needed
      } else {
        setMessage("Failed to change password.");
      }
    } catch (error) {
      console.error('Error changing password:', error);
      setMessage("An error occurred.");
    }
  };

  return (
    <div className={styles.form}>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Current Password"
          className={styles.input}
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          className={styles.input}
        />
        <input
          type="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          placeholder="Confirm New Password"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Change Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangePassword;
