import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard';
import Authentication from './routes/auth/Authentication';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      axios.post('/api/auth/', {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        setIsLoggedIn(true);
        setUserUsername(response.data.username);
      })
      .catch(error => {
        console.error('Authentication failed', error);
      });
    }
  }, []);

  if (isLoggedIn) {
    return <Dashboard username={userUsername} />;
  } else {
    return <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />;
  }
};

export default App;
