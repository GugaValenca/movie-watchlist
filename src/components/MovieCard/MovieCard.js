import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, onToggleWatched, onDeleteMovie }) => {
  const handleToggleWatched = () => {
    onToggleWatched(movie.id);
  };

  const handleDeleteMovie = () => {
    onDeleteMovie(movie.id);
  };

  return (
    <div
      className={`movie-card ${movie.isWatched ? "movie-card--watched" : ""}`}
    >
      {movie.isWatched && <div className="movie-card__badge">✓ Completed</div>}

      <div className="movie-card__header">
        <h3 className="movie-card__title">{movie.title}</h3>
        <button
          onClick={handleDeleteMovie}
          className="movie-card__delete"
          title="Remove movie"
          aria-label={`Remove ${movie.title} from watchlist`}
        >
          ✕
        </button>
      </div>

      <div className="movie-card__meta">
        <span className="movie-card__genre">{movie.genre}</span>
        <span className="movie-card__date">Added {movie.dateAdded}</span>
      </div>

      <div className="movie-card__actions">
        <label className="movie-card__checkbox">
          <input
            type="checkbox"
            checked={movie.isWatched}
            onChange={handleToggleWatched}
            className="movie-card__checkbox-input"
          />
          <span className="movie-card__checkbox-label">
            {movie.isWatched ? "✅ Watched" : "⏳ Mark as watched"}
          </span>
        </label>
      </div>
    </div>
  );
};

export default MovieCard;
