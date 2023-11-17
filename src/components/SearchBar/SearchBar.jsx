import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="text-center">
      <p className="font-bold text-xl mb-5">User Details</p>
      <input
        type="text"
        placeholder="Search User"
        className="border-2 border-black rounded-md p-1"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
