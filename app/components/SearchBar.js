import React from 'react';


export const SearchBar = (props) => {

  function handleQuery(event) {
    props.onQuery(event.target.value);
    // console.log(event.target.value);
  }
  return (
    <div className="search-bar">
      <input onChange={handleQuery.bind(this)} placeholder="Search"/>
    </div>
  );
}
