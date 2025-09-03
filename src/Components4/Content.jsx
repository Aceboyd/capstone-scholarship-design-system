import { useState } from "react";
import Card from "./Card";

const Content = () => {
  const [grid, setGrid] = useState(false);

  const toggleGrid = () => {
    setGrid((prevGrid) => !prevGrid);
    console.log("Grid view:", !grid);
  };

  return (
    <div className="flex-1">
      <main className="rounded-lg bg-[#F4F5FF] px-6 py-4 mx-2 sm:mx-4 md:mx-10">
        <div className="rounded-md">
          <p className="text-center text-xl sm:text-2xl pb-3">
            21 Scholarships found for{" "}
            <span className="font-bold">“STEM Undergraduate Scholarships in Ghana”</span>
          </p>
          <hr />
          <div className="flex flex-col sm:flex-row justify-between pt-4 items-center gap-3">
            <p className="font-medium">RESULTS 21</p>
            <div className="flex items-center gap-3">
              <span>SORT BY:</span>
              <select
                className="border border-gray-500 rounded-md p-2 text-[#0000FE] font-bold w-40 sm:w-56"
              >
                <option>Latest</option>
                <option>Earliest</option>
                <option>Most Popular</option>
                <option>Closing Soon</option>
                <option>Fully Funded</option>
                <option>Merit-Based</option>
              </select>
            </div>
            <div className="flex gap-4">
              <button
                aria-label="Switch to list view"
                onClick={toggleGrid}
                className="focus:outline-none focus:ring-2 focus:ring-[#0000FE]"
              >
                <img src="/images/list.png" alt="List view" className="cursor-pointer w-6 h-6" />
              </button>
              <button
                aria-label="Switch to grid view"
                onClick={toggleGrid}
                className="focus:outline-none focus:ring-2 focus:ring-[#0000FE]"
              >
                <img src="/images/grid.png" alt="Grid view" className="cursor-pointer w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="pt-6">
            <Card grid={grid} />
          </div>
        </div>

        <div className="pagination flex flex-col sm:flex-row items-center justify-between gap-4 pt-10">
          <div className="flex items-center gap-6">
            <button
              className="cursor-pointer rounded-md border border-gray-500 px-6 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0000FE]"
            >
              Previous
            </button>
            <div className="pages flex gap-6 sm:gap-10 text-[#0000FE]">
              <p className="rounded-md bg-[#F4F5FF] px-4 py-1">1</p>
              <p className="cursor-pointer hover:underline">2</p>
              <p>...</p>
              <p className="cursor-pointer hover:underline">3</p>
            </div>
            <button
              className="cursor-pointer rounded-md border border-gray-500 px-6 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0000FE]"
            >
              Next
            </button>
          </div>
          <p className="text-gray-500 text-sm">Showing 1-10 of 21 results</p>
        </div>
      </main>
    </div>
  );
};

export default Content;