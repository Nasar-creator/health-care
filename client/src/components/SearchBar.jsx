import React from 'react';

function SearchBar({ setSearchTerm }) {
  return (
    <div className='top'>
   <h1 >How can we help ?</h1>
    <input className='search'
      
      type="text"
      placeholder="Search..."
      onChange={e => setSearchTerm(e.target.value)}
    /></div>
  );
}

export default SearchBar;
