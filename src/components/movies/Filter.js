import React from 'react';
import './movies.css';
import SearchBar from '../general/SearchBar';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';

const Filter = ({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) => {
  const tags = ['action', 'drama', 'comedy', 'biography', 'romance', 'thriller', 'war', 'history', 'sport', 'sci-fi', 'documentary', 'crime', 'fantasy'];

  return (
    <div className="filter-container">
      <SearchBar title={title} setTitle={setTitle} />
      <input
        type="number"
        placeholder="Min Year"
        value={minYear}
        onChange={(e) => setMinYear(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Year"
        value={maxYear}
        onChange={(e) => setMaxYear(e.target.value)}
      />
      <SelectInput
        label="Sort by"
        options={[
          { value: 'latest', label: 'Latest' },
          { value: 'oldest', label: 'Oldest' },
          { value: 'highestrated', label: 'Highest Rated' },
          { value: 'lowestrated', label: 'Lowest Rated' },
        ]}
        value={sort}
        setValue={setSort}
      />
      <ul>
        {tags.map((tag) => (
          <Tag
            key={tag}
            genre={tag}
            filter
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </ul>
    </div>
  );
};

export default Filter;
