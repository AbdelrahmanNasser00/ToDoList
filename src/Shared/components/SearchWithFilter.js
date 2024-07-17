import React from "react";
import Search from "./Search";
import FilterDropdown from "./FilterDropdown";

const SearchWithFilter = () => {
  const SeachWithFilterStyle = {
    display: "flex",
    flexDirection: "row",
  };

  return (
    <div style={SeachWithFilterStyle}>
      <Search />
      <FilterDropdown />
    </div>
  );
};
export default SearchWithFilter;
