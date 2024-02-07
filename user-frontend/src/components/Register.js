import React from 'react';
import styles from './register.module.css';

const Register = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Registration logic, api calls etc.
    setIsLoggedIn(true);
  };

  return (
    <div className={styles.form}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />
        <button type="submit" className={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default Register;
