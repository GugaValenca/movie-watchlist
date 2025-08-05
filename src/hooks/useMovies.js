import { useState, useEffect } from "react";
import {
  loadMoviesFromStorage,
  saveMoviesToStorage,
} from "../utils/movieUtils";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);

  // Load movies on component mount
  useEffect(() => {
    const savedMovies = loadMoviesFromStorage();
    if (savedMovies) {
      setMovies(savedMovies);
    }
  }, []);

  // Save movies whenever they change
  useEffect(() => {
    saveMoviesToStorage(movies);
  }, [movies]);

  const addMovie = (title, genre) => {
    if (!title.trim()) return;

    const newMovie = {
      id: Date.now() + Math.random(),
      title: title.trim(),
      genre: genre.trim() || "General",
      isWatched: false,
      dateAdded: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const toggleWatched = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId ? { ...movie, isWatched: !movie.isWatched } : movie
      )
    );
  };

  const deleteMovie = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== movieId)
    );
  };

  // Calculate statistics
  const totalMovies = movies.length;
  const watchedMovies = movies.filter((movie) => movie.isWatched).length;
  const unwatchedMovies = totalMovies - watchedMovies;

  return {
    movies,
    addMovie,
    toggleWatched,
    deleteMovie,
    totalMovies,
    watchedMovies,
    unwatchedMovies,
  };
};
