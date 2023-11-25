"use client";

import React from "react";
import SearchManufaturer from "./SearchManufaturer";

const SearchBar = () => {
  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufaturer />
      </div>
    </form>
  );
};

export default SearchBar;
