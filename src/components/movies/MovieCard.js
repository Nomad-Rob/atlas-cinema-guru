import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './movies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    axios.get('/api/titles/favorite/')
      .then(response => {
        if (response.data.includes(movie.imdbId)) {
          setIsFavorite(true);
        }
      });

    axios.get('/api/titles/watchlater/')
      .then(response => {
        if (response.data.includes(movie.imdbId)) {
          setIsWatchLater(true);
        }
      });
  }, [movie.imdbId]);

  const handleClick = (type) => {
    const endpoint = `/api/titles/${type}/${movie.imdbId}`;

    if (type === 'favorite') {
      if (isFavorite) {
        axios.delete(endpoint).then(() => setIsFavorite(false));
      } else {
        axios.post(endpoint).then(() => setIsFavorite(true));
      }
    } else if (type === 'watchlater') {
      if (isWatchLater) {
        axios.delete(endpoint).then(() => setIsWatchLater(false));
      } else {
        axios.post(endpoint).then(() => setIsWatchLater(true));
      }
    }
  };

  return (
    <li className="movie-card">
      <div className="title">{movie.title}</div>
      <div className="synopsis">{movie.synopsis}</div>
      <div className="genres">
        {movie.genres.map((genre) => (
          <span key={genre} className="tag">{genre}</span>
        ))}
      </div>
      <div className="actions">
        <FontAwesomeIcon
          icon={faHeart}
          className={isFavorite ? 'selected' : ''}
          onClick={() => handleClick('favorite')}
        />
        <FontAwesomeIcon
          icon={faClock}
          className={isWatchLater ? 'selected' : ''}
          onClick={() => handleClick('watchlater')}
        />
      </div>
    </li>
  );
};

export default MovieCard;
