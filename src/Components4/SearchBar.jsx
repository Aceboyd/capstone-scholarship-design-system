let SearchBar = (props) => {
    return (
      <div
        className={`mx-2 h-[20vh] flex justify-center items-center bg-cover bg-center gap-2 mb-2 `}
        style={{ backgroundImage: `url(${"../images/searchbackground.png"})` }}
      >
        <button
          onClick={props.toggle}
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
          <img src="images/search.png" />
          <input
            type="search"
            className="p-2 w-90 "
            placeholder="STEM Undergraduate in Ghana"
          />
        </div>
      </div>
    );
  };
  
  export default SearchBar;