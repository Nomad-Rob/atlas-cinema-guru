import React from 'react';

const Dashboard = ({ username }) => {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>This is the Dashboard component.</p>
    </div>
  );
};

export default Dashboard;
