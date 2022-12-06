import React from "react";

function SearchBar({ className, handleSearchChange }) {
  return (
    <div
      className={`between input-container h-fit border-black-30 focus-within:border-black-30 p-0 rounded-lg ${className}`}
    >
      <input
        type="search"
        id=""
        placeholder="Search"
        required
        className="bg-inherit w-full border-0 focus:border-0 rounded-lg p-3 pr-0 text-xs xl:text-sm"
        onChange={handleSearchChange}
      />
      <button className="inline-block center h-full px-3 py-0 text-black-30">
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
