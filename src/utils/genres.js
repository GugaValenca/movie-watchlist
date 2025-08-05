// Main movie genres based on industry standards
export const MOVIE_GENRES = [
  { value: "", label: "Select Genre (Optional)" },
  { value: "Action", label: "🎬 Action" },
  { value: "Adventure", label: "🗺️ Adventure" },
  { value: "Animation", label: "🎨 Animation" },
  { value: "Biography", label: "👤 Biography" },
  { value: "Comedy", label: "😂 Comedy" },
  { value: "Crime", label: "🔍 Crime" },
  { value: "Documentary", label: "📹 Documentary" },
  { value: "Drama", label: "🎭 Drama" },
  { value: "Family", label: "👨‍👩‍👧‍👦 Family" },
  { value: "Fantasy", label: "🧙‍♂️ Fantasy" },
  { value: "History", label: "🏛️ History" },
  { value: "Horror", label: "👻 Horror" },
  { value: "Music", label: "🎵 Music" },
  { value: "Mystery", label: "🔎 Mystery" },
  { value: "Romance", label: "💕 Romance" },
  { value: "Sci-Fi", label: "🚀 Sci-Fi" },
  { value: "Sport", label: "⚽ Sport" },
  { value: "Thriller", label: "😱 Thriller" },
  { value: "War", label: "⚔️ War" },
  { value: "Western", label: "🤠 Western" },
];

// Function to get genre with emoji
export const getGenreWithEmoji = (genreValue) => {
  const genre = MOVIE_GENRES.find((g) => g.value === genreValue);
  return genre ? genre.label : genreValue || "General";
};

// Function to get just the genre name without emoji
export const getGenreName = (genreValue) => {
  return genreValue || "General";
};

// Popular genres for quick selection
export const POPULAR_GENRES = [
  "Action",
  "Comedy",
  "Drama",
  "Thriller",
  "Horror",
  "Romance",
  "Sci-Fi",
  "Adventure",
];
