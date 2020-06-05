import React, { Component } from "react";


const SearchField = ({value, onChange, onSearch, onTrend, onRandom}) => {
  return(
    <div>
    <div>
      <button onClick={onTrend}>Trending</button>
      <button onClick={onRandom}>Random</button>
    </div>
    <div className = "search">
      <input value={value} onChange={onChange} />
      <button onClick={onSearch}>Search</button>
    </div>
     </div>
  );
};
export default SearchField;