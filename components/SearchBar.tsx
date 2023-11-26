"use client";

import { useState } from "react";
import SearchManufaturer from "./SearchManufaturer";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufaturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
