import React from 'react'

const Search = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search here"
        onChange={searchChange}
      ></input>
    </div>
  )
}

export default Search
