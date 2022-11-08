import React from "react";
  
function SearchBar({ searchInput, search }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a song..."
        className="search"
        onChange={searchInput}
        onKeyPress={search}
      />
    </div>
  );
}
  
export default SearchBar;