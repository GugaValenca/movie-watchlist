import React from "react";
import "./FilterButtons.css";

const FilterButtons = ({ currentFilter, onFilterChange, counts }) => {
  const filters = [
    {
      key: "all",
      label: "All Movies",
      count: counts.total,
    },
    {
      key: "unwatched",
      label: "To Watch",
      count: counts.unwatched,
    },
    {
      key: "watched",
      label: "Watched",
      count: counts.watched,
    },
  ];

  return (
    <section className="filter-buttons">
      <div className="filter-buttons__container">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`filter-buttons__btn ${
              currentFilter === filter.key ? "filter-buttons__btn--active" : ""
            }`}
          >
            {filter.label} ({filter.count})
          </button>
        ))}
      </div>
    </section>
  );
};

export default FilterButtons;
