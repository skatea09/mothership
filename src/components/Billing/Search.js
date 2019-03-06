import React from "react";

const Search = () => (
  <div className="border rounded border-right-0 outline-none self-center py-2">
    <input
      type="text"
      className="outline-none pl-2"
      placeholder="Search Your Shipments"
      style={{ minWidth: '300px' }}
    />
    <i className="fa fa-search text-grey-dark pl-2" style={{ transform: 'scaleX(-1)'}}/>
  </div>
);

export default Search;
