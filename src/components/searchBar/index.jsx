import React from "react";
import classNames from "classnames";

const SearchBar = ({ width, bgColor }) => {
  return (
    <div className={classNames("hidden md:block ml-4 p-2", width || "w-32")}>
      <input
        type="text"
        name="search"
        id="search"
        className={classNames(
          "w-full px-4 py-2 rounded-full text-sm bg-gray-300",
          bgColor || "bg-gray-20"
        )}
        placeholder="search"
      />
    </div>
  );
};

export default SearchBar;
