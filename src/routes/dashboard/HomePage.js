import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  const loadMovies = useCallback((page) => {
    axios.get('/api/titles/advancedsearch', {
      params: {
        minYear,
        maxYear,
        genres: genres.join(','),
        title,
        sort,
        page
      }
    }).then(response => {
      setMovies(prevMovies => [...prevMovies, ...response.data]);
    }).catch(error => {
      console.error('Error fetching movies:', error);
    });
  }, [minYear, maxYear, genres, title, sort]);

  useEffect(() => {
    loadMovies(page);
  }, [loadMovies, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />
      <div className="movies-container">
        {movies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>
      <Button className="load-button" onClick={handleLoadMore}>Load More..</Button>
    </div>
  );
};

export default HomePage;
