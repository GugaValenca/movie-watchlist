import React, { useState } from 'react';
import './FilterButtons.css';

const FilterButtons = ({ currentFilter, onFilterChange, counts, movies, onGenreFilter }) => {
  const [showGenreFilter, setShowGenreFilter] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');

  const filters = [
    {
      key: 'all',
      label: 'All Movies',
      count: counts.total
    },
    {
      key: 'unwatched',
      label: 'To Watch',
      count: counts.unwatched
    },
    {
      key: 'watched',
      label: 'Watched',
      count: counts.watched
    }
  ];

  // Get unique genres from movies
  const getUniqueGenres = () => {
    const genres = movies.map(movie => movie.genre).filter(Boolean);
    const uniqueGenres = [...new Set(genres)];
    return uniqueGenres.sort();
  };

  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
    if (onGenreFilter) {
      onGenreFilter(genre);
    }
  };

  const clearGenreFilter = () => {
    setSelectedGenre('');
    if (onGenreFilter) {
      onGenreFilter('');
    }
  };

  const uniqueGenres = getUniqueGenres();

  return (
    <section className="filter-buttons">
      <div className="filter-buttons__main">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`filter-buttons__btn ${
              currentFilter === filter.key ? 'filter-buttons__btn--active' : ''
            }`}
          >
            {filter.label} ({filter.count})
          </button>
        ))}
      </div>

      {/* Genre Filter Section */}
      {uniqueGenres.length > 0 && (
        <div className="filter-buttons__genre-section">
          <button
            onClick={() => setShowGenreFilter(!showGenreFilter)}
            className={`filter-buttons__genre-toggle ${showGenreFilter ? 'filter-buttons__genre-toggle--active' : ''}`}
          >
            🎭 Filter by Genre {selectedGenre && `(${selectedGenre})`}
          </button>

          {showGenreFilter && (
            <div className="filter-buttons__genre-dropdown">
              <select
                value={selectedGenre}
                onChange={handleGenreChange}
                className="filter-buttons__genre-select"
              >
                <option value="">All Genres</option>
                {uniqueGenres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
              
              {selectedGenre && (
                <button
                  onClick={clearGenreFilter}
                  className="filter-buttons__clear-genre"
                  title="Clear genre filter"
                >
                  ✕
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default FilterButtons;
