import React from 'react';
import styles from './login.module.css';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Login logic, api calls, save a JWT, etc.
    setIsLoggedIn(true);
  };

  return (
    <div className={styles.form}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;