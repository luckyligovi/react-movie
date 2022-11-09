import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch('');
  };
  return (
    <div>
      <nav id="searchbar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter song name..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">Search
          </button>
        </form>
      </nav>
    </div>
  );
};
export default SearchBar;