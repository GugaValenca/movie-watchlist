import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import EmptyState from "../EmptyState/EmptyState";
import "./MovieList.css";

const MovieList = ({
  movies,
  onToggleWatched,
  onDeleteMovie,
  currentFilter,
  totalMovies,
}) => {
  if (movies.length === 0) {
    return (
      <EmptyState currentFilter={currentFilter} totalMovies={totalMovies} />
    );
  }

  return (
    <section className="movie-list">
      <div className="movie-list__grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onToggleWatched={onToggleWatched}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
