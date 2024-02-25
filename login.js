import React, { useState } from 'react';
import './login.css'; // Importing CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Here you can implement your authentication logic
    // For simplicity, I'm just checking if username and password are not empty
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
      alert('Login Successful!');
    } else {
      alert('Please enter username and password.');
    }
  };

  return (
    <>
    <marquee className="mar">If You Can't Feed A Hundred People Then Feed Just One...!</marquee>
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
    </>
  );
};

export default Login;