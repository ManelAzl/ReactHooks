import React from 'react';

const Filter = ({ filterTitle, filterRating, setFilterTitle, setFilterRating }) => {
  return (
    <div className="filter">
      <h3>Filter Movies</h3>
      <div className="filter-controls">
        <div className="form-group">
          <label htmlFor="titleFilter">By Title:</label>
          <input
            type="text"
            className="form-control"
            id="titleFilter"
            value={filterTitle}
            onChange={(e) => setFilterTitle(e.target.value)}
            placeholder="Search by title..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="ratingFilter">By Rating (min):</label>
          <input
            type="range"
            className="form-control-range"
            id="ratingFilter"
            min="0"
            max="10"
            step="0.5"
            value={filterRating}
            onChange={(e) => setFilterRating(parseFloat(e.target.value))}
          />
          <span>{filterRating}</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;