import React from 'react';
import './components.css';

const Activity = ({ activity }) => {
  return (
    <li className="activity-item">
      <p>{activity.description}</p>
    </li>
  );
};

export default Activity
