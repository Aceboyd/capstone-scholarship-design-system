let SearchBar = (props) => {
  return (
    <div
      className={`mx-2 h-[20vh] flex justify-center items-center bg-cover bg-center gap-2 mb-2 `}
      style={{ backgroundImage: `url(${"../images/searchbackground.png"})` }}
    >
      <button
        type="button"
        onClick={props.toggle}
        aria-label="Open filters"
        className="rounded-md cursor-pointer min-[800px]:hidden bg-[#EBEDFF] p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      </button>
      <div className="flex items-center p-2 rounded-md bg-white">
        <img src="images/search.png" alt="search icon" className="w-4 h-4 mr-2" />
        <input
          type="search"
          aria-label="Search scholarships"
          className="p-2 w-48 sm:w-96 text-sm focus:outline-none focus:ring-2 focus:ring-[#0000FE]"
          placeholder="STEM Undergraduate in Ghana"
        />
      </div>
    </div>
  );
};

export default SearchBar;
