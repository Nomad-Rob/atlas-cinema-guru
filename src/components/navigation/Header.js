import React from 'react';
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({ userUsername, setIsLoggedIn }) => {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <nav className="nav">
      <img src="https://picsum.photos/100/100" alt="avatar" />
      <p>Welcome, {userUsername}!</p>
      <span onClick={logout}>
        <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
        Logout
      </span>
    </nav>
  );
};

export default Header;
