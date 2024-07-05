import React from 'react';
import './auth.css';

const Login = ({ username, password, setUsername, setPassword, setIsLoggedIn, setUserUsername }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login request
    // Replace with actual API call
    if (username === 'test' && password === 'password') {
      setIsLoggedIn(true);
      setUserUsername(username);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
