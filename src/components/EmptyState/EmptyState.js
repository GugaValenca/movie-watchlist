import React from "react";
import "./EmptyState.css";

const EmptyState = ({ currentFilter, totalMovies }) => {
  const getEmptyStateContent = () => {
    if (totalMovies === 0) {
      return {
        icon: "🎭",
        title: "No movies in your watchlist yet",
        description:
          "Start building your movie collection by adding your first film!",
      };
    }

    switch (currentFilter) {
      case "watched":
        return {
          icon: "🔍",
          title: "No watched movies found",
          description:
            "Mark some movies as watched to see them here, or add more movies to your collection.",
        };
      case "unwatched":
        return {
          icon: "🎬",
          title: "No unwatched movies found",
          description:
            "All your movies are watched! Add more movies to discover new films to watch.",
        };
      default:
        return {
          icon: "🔍",
          title: "No movies found",
          description:
            "Try switching to a different filter or add more movies to your watchlist.",
        };
    }
  };

  const { icon, title, description } = getEmptyStateContent();

  return (
    <div className="empty-state">
      <div className="empty-state__icon">{icon}</div>
      <h3 className="empty-state__title">{title}</h3>
      <p className="empty-state__description">{description}</p>
    </div>
  );
};

export default EmptyState;
