import React from 'react';
import './auth.css';

const Register = ({ username, password, setUsername, setPassword, setIsLoggedIn, setUserUsername }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock registration request
    // Replace with actual API call
    if (username && password) {
      setIsLoggedIn(true);
      setUserUsername(username);
    } else {
      alert('Please fill in all fields');
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
