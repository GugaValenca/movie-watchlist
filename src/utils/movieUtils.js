const STORAGE_KEY = "movieWatchlist";

export const loadMoviesFromStorage = () => {
  try {
    const savedMovies = localStorage.getItem(STORAGE_KEY);
    return savedMovies ? JSON.parse(savedMovies) : [];
  } catch (error) {
    console.error("Error loading movies from storage:", error);
    return [];
  }
};

export const saveMoviesToStorage = (movies) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  } catch (error) {
    console.error("Error saving movies to storage:", error);
  }
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const generateId = () => {
  return Date.now() + Math.random();
};
