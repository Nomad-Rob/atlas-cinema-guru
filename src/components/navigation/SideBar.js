import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './navigation.css';
import Activity from '../Activity';

const SideBar = () => {
  const [selected, setSelected] = useState('home');
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName);
    navigate(`/${pageName.toLowerCase()}`);
  };

  useEffect(() => {
    axios.get('/api/activity')
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching activities:', error);
      });
  }, []);

  return (
    <nav className="sidebar">
      <ul className="navigation-menu">
        <li className={`nav-item ${selected === 'home' ? 'selected' : ''}`} onClick={() => setPage('Home')}>
          <i className="fa fa-home"></i>
          <span>Home</span>
        </li>
        <li className={`nav-item ${selected === 'favorites' ? 'selected' : ''}`} onClick={() => setPage('Favorites')}>
          <i className="fa fa-heart"></i>
          <span>Favorites</span>
        </li>
        <li className={`nav-item ${selected === 'watchlater' ? 'selected' : ''}`} onClick={() => setPage('WatchLater')}>
          <i className="fa fa-clock"></i>
          <span>Watch Later</span>
        </li>
      </ul>
      <div className="activities-container">
        <h3 className="activities-title">Recent Activities</h3>
        <ul className="activity-list">
          {activities.slice(0, 10).map(activity => (
            <Activity key={activity.id} activity={activity} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
