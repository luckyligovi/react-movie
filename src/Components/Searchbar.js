import React from 'react';
 
const Searchbar = ({ endPoint, onSetQuery, submitHandler, setSearch }) => {
  function handleChange(e){
    setSearch(e.target.value)
  }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input 
                value={endPoint}
                className='search'
                type="text"
                name="search"
                placeholder='Music...'
                onChange={handleChange}
            />
            <button className='search'>Search</button>
        </form>
    </div>
  )
}

export default Searchbar;
