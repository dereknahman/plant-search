import React from "react";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <div>
      <form onSubmit={onTermSubmit}>
        <label htmlFor="plant-name">
          <input
            id="plant-name"
            placeholder="Plant name"
            onChange={(e) => onTermChange(e.target.value)}
            value={term}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
