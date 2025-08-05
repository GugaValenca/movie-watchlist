import React from "react";
import "./Stats.css";

const Stats = ({ total, watched, unwatched }) => {
  return (
    <section className="stats">
      <div className="stats__grid">
        <div className="stats__card">
          <div className="stats__number">{total}</div>
          <div className="stats__label">Total Movies</div>
        </div>
        <div className="stats__card">
          <div className="stats__number stats__number--watched">{watched}</div>
          <div className="stats__label">Watched</div>
        </div>
        <div className="stats__card">
          <div className="stats__number stats__number--unwatched">
            {unwatched}
          </div>
          <div className="stats__label">To Watch</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
