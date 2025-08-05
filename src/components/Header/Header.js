import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">🎬 Movie Watchlist</h1>
      <p className="header__subtitle">
        Track your favorite movies and discover what to watch next
      </p>
    </header>
  );
};

export default Header;
