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
  const [genreFilter, setGenreFilter] = useState("");

  const getFilteredMovies = () => {
    let filteredMovies = movies;

    // Filter by watched status
    switch (currentFilter) {
      case "watched":
        filteredMovies = filteredMovies.filter((movie) => movie.isWatched);
        break;
      case "unwatched":
        filteredMovies = filteredMovies.filter((movie) => !movie.isWatched);
        break;
      default:
        // 'all' - no filtering needed
        break;
    }

    // Filter by genre if selected
    if (genreFilter) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.genre === genreFilter
      );
    }

    return filteredMovies;
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
        movies={movies}
        onGenreFilter={setGenreFilter}
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
