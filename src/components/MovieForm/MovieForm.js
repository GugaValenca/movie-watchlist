import React, { useState } from "react";
import "./MovieForm.css";

const MovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddMovie(title, genre);
      setTitle("");
      setGenre("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <section className="movie-form">
      <div className="movie-form__card">
        <h2 className="movie-form__title">Add New Movie</h2>
        <form onSubmit={handleSubmit} className="movie-form__form">
          <div className="movie-form__inputs">
            <input
              type="text"
              placeholder="Enter movie title *"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              className={`movie-form__input ${
                title ? "movie-form__input--active" : ""
              }`}
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Genre (optional)"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              onKeyDown={handleKeyDown}
              className={`movie-form__input ${
                genre ? "movie-form__input--active" : ""
              }`}
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={!title.trim()}
              className={`movie-form__button ${
                !title.trim() ? "movie-form__button--disabled" : ""
              }`}
            >
              + Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MovieForm;
