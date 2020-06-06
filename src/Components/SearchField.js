import React from "react";


const SearchField = ({value, onChange, onSearch, onTrend, onRandom}) => {
  return(
    <div className = "d-flex mt-4">
    <div>
      <button className = "btn btn-outline-danger" onClick={onTrend}>Trending</button>
      <button className = "btn btn-outline-danger" onClick={onRandom}>Random</button>
    </div>
    <div className = "ml-auto">
      <input className = "mr-2 " value={value} onChange={onChange} />
      <button className = "btn btn-outline-danger" onClick={onSearch}>Search</button>
    </div>
     </div>
  );
};
export default SearchField;