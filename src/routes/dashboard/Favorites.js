import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/titles/favorite')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching favorite movies:', error);
      });
  }, []);

  return (
    <div>
      <h1>Movies you like</h1>
      <div className="movies-container">
        {movies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
