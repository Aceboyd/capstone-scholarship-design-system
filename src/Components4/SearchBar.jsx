import React from "react";

const SearchBar = ({ toggle }) => {
  return (
    <div
      className="mb-2 flex h-32 items-center justify-center gap-1 bg-cover bg-center sm:h-[25vh] sm:gap-2 mt-20"
      style={{ backgroundImage: `url("../images/searchbackground.png")` }}
    >
      {/* Filter toggle button (mobile only) */}
      <button
        type="button"
        onClick={toggle}
        aria-label="Open filters"
        className="rounded-md cursor-pointer min-[800px]:hidden bg-[#EBEDFF] p-1 sm:p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 sm:h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
        </svg>
      </button>

      {/* Search input */}
      <div className="flex items-center rounded-md bg-white p-1 sm:px-4 sm:py-2">
        <img
          src="images/search.png"
          alt="search icon"
          className="mr-1 h-4 sm:h-5"
        />
        <input
          type="search"
          aria-label="Search scholarships"
          className="w-full p-1 text-xs caret-blue-700 outline-none sm:w-60 sm:p-2 sm:text-base"
          placeholder="STEM Undergraduate in Ghana"
        />
      </div>
    </div>
  );
};

export default SearchBar;
