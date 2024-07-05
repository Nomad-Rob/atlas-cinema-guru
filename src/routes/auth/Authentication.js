import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [switchState, setSwitchState] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      <div className="auth-form">
        {switchState ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            setIsLoggedIn={setIsLoggedIn}
            setUserUsername={setUserUsername}
          />
        ) : (
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            setIsLoggedIn={setIsLoggedIn}
            setUserUsername={setUserUsername}
          />
        )}
      </div>
    </div>
  );
};

export default Authentication;
