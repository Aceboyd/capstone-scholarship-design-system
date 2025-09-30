import PropTypes from "prop-types";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div
      className="mb-2 flex h-32 items-center justify-center gap-1 bg-cover bg-center sm:h-[25vh] sm:gap-2"
      style={{ backgroundImage: `url("../images/searchbackground.png")` }}
    >
      {/* Search input */}
      <div className="focus-within:-p-4 flex items-center rounded-md bg-white p-1 focus-within:ring-2 focus-within:ring-blue-700 sm:px-4 sm:py-2">
        <img
          src="images/search.png"
          alt="search icon"
          className="mr-1 h-4 sm:h-5"
        />
        <input
          type="search"
          aria-label="Search scholarships"
          className="w-full p-2 text-xs caret-blue-700 outline-none sm:w-60 sm:text-base"
          placeholder="Search scholarships..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired, // ✅ validates the prop
};

export default SearchBar;
