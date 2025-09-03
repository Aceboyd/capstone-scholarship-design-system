let SearchBar = () => {
  return (
    <div
      className={`mb-2 flex h-32 items-center justify-center gap-1 bg-cover bg-center  sm:h-[25vh] sm:gap-2`}
      style={{ backgroundImage: `url(${"../images/searchbackground.png"})` }}
    >
      <div className="flex items-center rounded-md bg-white p-1 sm:px-4 sm:py-2">
        <img src="images/search.png" className="mr-1 h-4 sm:h-5" />

        <input
          type="search"
          className="w-full p-1 text-xs caret-blue-700 outline-none sm:w-60 sm:p-2 sm:text-base"
          placeholder="STEM Undergraduate in Ghana"
        />
      </div>
    </div>
  );
};

export default SearchBar;
