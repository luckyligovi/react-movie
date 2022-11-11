import React from 'react';
 
const Searchbar = ({ endPoint, onSetQuery, submitHandler }) => {
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input 
                value={endPoint}
                className='search'
                type="text"
                name="search"
                placeholder='Music...'
                onChange={(e) => {
                  console.log("Searching...")
                  onSetQuery(e.target.value.toLowerCase())
                }}
            />
            <button className='search'>Search</button>
        </form>
    </div>
  )
}

export default Searchbar;
