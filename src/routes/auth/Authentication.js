import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import Login from './Login';
import Register from './Register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [switchState, setSwitchState] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const route = switchState ? '/api/auth/login' : '/api/auth/register';
      const response = await axios.post(route, { username, password });

      localStorage.setItem('accessToken', response.data.token);
      setUserUsername(username);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Authentication failed', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <button
          className={switchState ? 'active' : ''}
          onClick={() => setSwitchState(true)}
        >
          Sign In
        </button>
        <button
          className={!switchState ? 'active' : ''}
          onClick={() => setSwitchState(false)}
        >
          Sign Up
        </button>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        {switchState ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        ) : (
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}
      </form>
    </div>
  );
};

export default Authentication;
