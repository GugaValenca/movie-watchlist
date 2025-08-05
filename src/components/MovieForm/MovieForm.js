import React, { useState } from "react";
import { MOVIE_GENRES, POPULAR_GENRES } from "../../utils/genres";
import "./MovieForm.css";

const MovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [showCustomGenre, setShowCustomGenre] = useState(false);
  const [customGenre, setCustomGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const finalGenre = showCustomGenre ? customGenre : genre;
      onAddMovie(title, finalGenre);
      setTitle("");
      setGenre("");
      setCustomGenre("");
      setShowCustomGenre(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleGenreChange = (e) => {
    const value = e.target.value;
    if (value === "custom") {
      setShowCustomGenre(true);
      setGenre("");
    } else {
      setShowCustomGenre(false);
      setGenre(value);
      setCustomGenre("");
    }
  };

  const handleQuickGenreSelect = (genreValue) => {
    setGenre(genreValue);
    setShowCustomGenre(false);
    setCustomGenre("");
  };

  return (
    <section className="movie-form">
      <div className="movie-form__card">
        <h2 className="movie-form__title">Add New Movie</h2>
        <form onSubmit={handleSubmit} className="movie-form__form">
          {/* Movie Title Input */}
          <div className="movie-form__field">
            <label htmlFor="movie-title" className="movie-form__label">
              Movie Title *
            </label>
            <input
              id="movie-title"
              type="text"
              placeholder="Enter movie title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              className={`movie-form__input ${
                title ? "movie-form__input--active" : ""
              }`}
              autoComplete="off"
              required
            />
          </div>

          {/* Genre Selection */}
          <div className="movie-form__field">
            <label htmlFor="movie-genre" className="movie-form__label">
              Genre
            </label>
            <select
              id="movie-genre"
              value={showCustomGenre ? "custom" : genre}
              onChange={handleGenreChange}
              className={`movie-form__select ${
                genre || showCustomGenre ? "movie-form__select--active" : ""
              }`}
            >
              {MOVIE_GENRES.map((genreOption) => (
                <option key={genreOption.value} value={genreOption.value}>
                  {genreOption.label}
                </option>
              ))}
              <option value="custom">✏️ Custom Genre</option>
            </select>
          </div>

          {/* Custom Genre Input */}
          {showCustomGenre && (
            <div className="movie-form__field">
              <label htmlFor="custom-genre" className="movie-form__label">
                Custom Genre
              </label>
              <input
                id="custom-genre"
                type="text"
                placeholder="Enter custom genre"
                value={customGenre}
                onChange={(e) => setCustomGenre(e.target.value)}
                onKeyDown={handleKeyDown}
                className={`movie-form__input ${
                  customGenre ? "movie-form__input--active" : ""
                }`}
                autoComplete="off"
              />
            </div>
          )}

          {/* Quick Genre Selection */}
          {!showCustomGenre && (
            <div className="movie-form__quick-genres">
              <span className="movie-form__quick-label">Quick Select:</span>
              <div className="movie-form__genre-tags">
                {POPULAR_GENRES.map((popularGenre) => (
                  <button
                    key={popularGenre}
                    type="button"
                    onClick={() => handleQuickGenreSelect(popularGenre)}
                    className={`movie-form__genre-tag ${
                      genre === popularGenre
                        ? "movie-form__genre-tag--selected"
                        : ""
                    }`}
                  >
                    {popularGenre}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!title.trim()}
            className={`movie-form__button ${
              !title.trim() ? "movie-form__button--disabled" : ""
            }`}
          >
            + Add Movie
          </button>
        </form>
      </div>
    </section>
  );
};

export default MovieForm;
