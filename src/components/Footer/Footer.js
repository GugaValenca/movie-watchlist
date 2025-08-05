import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          Built with React ⚛️ • Movie Watchlist App • {currentYear}
        </p>
        <div className="footer__links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="View source code on GitHub"
          >
            <span className="footer__link-icon">⚡</span>
            View Source
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
