import PropTypes from "prop-types"; // ✅ import PropTypes
import { useState } from "react";
import { BsSortDown } from "react-icons/bs";

import Card from "./Card";
import { cardInfo } from "./cardInfo"; // ✅ import cardInfo
import FiltersDrawer from "./FiltersDrawer";

const Content = ({ selectedFilters, searchQuery, setSelectedFilters }) => {
  const [grid, setGrid] = useState(false);

  const toggleGrid = () => {
    setGrid((prevGrid) => !prevGrid);
    console.log("Grid view:", !grid);
  };

  return (
    <div className="flex-1">
      <p className="w-fit lg:hidden">
        {selectedFilters.length > 0 || searchQuery
          ? "Filtered Scholarships"
          : "13 Scholarships found for "}
        <span className="font-bold">
          {searchQuery || " STEM Undergraduate Scholarships in Ghana"}
        </span>
      </p>

      <main className="bg-[#F4F5FF] px-1 py-4 sm:mx-4 md:mx-10 lg:mx-2 lg:px-6">
        <div>
          <p className="hidden pb-3 text-xl sm:text-2xl lg:block">
            {selectedFilters.length > 0 || searchQuery
              ? "Filtered Scholarships"
              : "13 Scholarships found for "}
            <span className="font-bold">
              {searchQuery || " STEM Undergraduate Scholarships in Ghana"}
            </span>
          </p>
          <hr className="hidden lg:block" />

          <div className="flex flex-col items-center justify-between gap-3 pt-4 sm:flex-row">
            <div className="flex w-full items-center justify-between lg:w-fit">
              <p className="font-medium">RESULTS {cardInfo.length}</p>

              <div className="flex items-center gap-4 lg:hidden">
                {/* <div className="rounded-lg border-2 p-2 text-[#0000FE]">
                  <BsSortDown size={20} className="rotate-180" />
                </div> */}

                <FiltersDrawer
                  selectedFilters={selectedFilters}
                  setSelectedFilters={setSelectedFilters}
                />
              </div>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <span>SORT BY:</span>

              <select className="w-40 rounded-md border border-gray-500 p-2 font-bold text-[#0000FE] sm:w-56">
                <option>Latest</option>
                <option>Earliest</option>
                <option>Most Popular</option>
                <option>Closing Soon</option>
                <option>Fully Funded</option>
                <option>Merit-Based</option>
              </select>
            </div>
          </div>

          <div className="my-4 hidden justify-center gap-8 lg:flex">
            <button
              aria-label="Switch to list view"
              onClick={toggleGrid}
              className="rounded p-1 focus:ring-2 focus:ring-[#0000FE] focus:outline-none"
            >
              <img
                src="/images/list.png"
                alt="List view"
                className="size-11 cursor-pointer"
              />
            </button>
            <button
              aria-label="Switch to grid view"
              onClick={toggleGrid}
              className="rounded p-1 focus:ring-2 focus:ring-[#0000FE] focus:outline-none"
            >
              <img
                src="/images/grid.png"
                alt="Grid view"
                className="size-11 cursor-pointer"
              />
            </button>
          </div>

          <div className="pt-6">
            <Card
              grid={grid}
              selectedFilters={selectedFilters}
              searchQuery={searchQuery}
            />
          </div>
        </div>

        <div className="pagination flex flex-col items-center justify-between gap-2 pt-10 sm:flex-row sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-6">
            <button className="cursor-pointer rounded-md border border-gray-500 px-2 py-2 hover:bg-gray-100 focus:ring-2 focus:ring-[#0000FE] focus:outline-none sm:px-6">
              Previous
            </button>

            <div className="pages flex gap-4 text-sm text-[#0000FE] sm:gap-10 sm:text-base">
              <p className="rounded-md bg-[#F4F5FF] px-4 py-1 sm:px-4">1</p>
              <p className="cursor-pointer hover:underline">2</p>
              <p>...</p>
              <p className="cursor-pointer hover:underline">3</p>
            </div>

            <button className="cursor-pointer rounded-md border border-gray-500 px-2 py-2 hover:bg-gray-100 focus:ring-2 focus:ring-[#0000FE] focus:outline-none sm:px-6">
              Next
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Showing 1-10 of {cardInfo.length} results
          </p>
        </div>
      </main>
    </div>
  );
};

// ✅ PropTypes validation
Content.propTypes = {
  selectedFilters: PropTypes.arrayOf(PropTypes.string),
  searchQuery: PropTypes.string,
  setSelectedFilters: PropTypes.func.isRequired,
};

export default Content;
