import React from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <div className="dashboard-content">
        {/* Add other dashboard components here */}
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard, {userUsername}!</p>
      </div>
    </div>
  );
};

export default Dashboard;
