import React, { useState } from "react";

export function Header({ onSearch, openSavedModal }) {
  const date = new Date();
  const year = date.getFullYear();
  const [query, setQuery] = useState("");

  function handleChange(value) {
    setQuery(value);
  }

  function handleSubmit() {
    onSearch(query);
    setQuery("");
  }

  return (
    <header className="App-header">
      <h1>Movie Search {year}</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movie..."
          value={query}
          onChange={(e) => handleChange(e.target.value)}
        ></input>
        <button onClick={handleSubmit} className="search-button">
          Search
        </button>
      </div>
      <button className="watched-button" onClick={openSavedModal}>
        My Watchlist
      </button>
    </header>
  );
}
