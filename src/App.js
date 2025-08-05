import React, { useState } from "react";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import MovieForm from "./components/MovieForm/MovieForm";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import MovieList from "./components/MovieList/MovieList";
import Footer from "./components/Footer/Footer";
import { useMovies } from "./hooks/useMovies";
import "./App.css";

const App = () => {
  const {
    movies,
    addMovie,
    toggleWatched,
    deleteMovie,
    totalMovies,
    watchedMovies,
    unwatchedMovies,
  } = useMovies();

  const [currentFilter, setCurrentFilter] = useState("all");

  const getFilteredMovies = () => {
    switch (currentFilter) {
      case "watched":
        return movies.filter((movie) => movie.isWatched);
      case "unwatched":
        return movies.filter((movie) => !movie.isWatched);
      default:
        return movies;
    }
  };

  return (
    <div className="app">
      <Header />
      <Stats
        total={totalMovies}
        watched={watchedMovies}
        unwatched={unwatchedMovies}
      />
      <MovieForm onAddMovie={addMovie} />
      <FilterButtons
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
        counts={{
          total: totalMovies,
          watched: watchedMovies,
          unwatched: unwatchedMovies,
        }}
      />
      <MovieList
        movies={getFilteredMovies()}
        onToggleWatched={toggleWatched}
        onDeleteMovie={deleteMovie}
        currentFilter={currentFilter}
        totalMovies={totalMovies}
      />
      <Footer />
    </div>
  );
};

export default App;
