import { useState } from "react";

import Card from "./Card";

let Content = () => {
  let [grid, isGrid] = useState(false);

  let ChangeGrid = () => {
    isGrid(!grid);
    console.log("change grid" + grid);
  };

  return (
<div className='flex-1'>
<div className=" rounded-lg">
        <div className="mx-2 sm:mx-4 md:mx-10 p-4 bg-[#F4F5FF] rounded-md">
            <p className="text-center text-xl sm:text-2xl pb-3">21 Scholarships found for <span className="font-bold">“STEM Undergraduate Scholarships in Ghana”</span></p>
            <hr />
            <div className="flex flex-col sm:flex-row justify-between pt-4 items-center gap-3">
                <p className="font-medium">RESULTS 21</p>
                <div className="flex items-center gap-3">SORT BY:
                    <select className="border-1 border-black rounded-md p-2 text-[#0000FE] font-bold w-40 sm:w-56">
                        <option>Latest</option>
                        <option>Earliest</option>
                        <option>Most Popular</option>
                        <option>Closing Soon</option>
                        <option>Fully Funded</option>
                        <option>Merit-Based</option>
                    </select>
                </div>

    <main>
      <div className="rounded-lg bg-[#F4F5FF] px-6 py-4">
        <div className="rounded-md">
          <p className="pb-3 text-2xl">
            21 Scholarships found for{" "}
            <span className="font-bold">
              “STEM Undergraduate Scholarships in Ghana”
            </span>
          </p>
          <hr />
          <div className="flex items-center justify-between pt-4">
            <p>RESULTS 21</p>
            <div className="flex items-center gap-3">
              SORT BY:
              <select className="rounded-md border-1 border-black p-2 font-bold text-[#0000FE]">
                <option>Latest</option>
                <option>Earliest</option>
                <option>Most Popular</option>
                <option>Closing Soon</option>
                <option>Fully Funded</option>
                <option>Merit-Based</option>
              </select>
            </div>
          </div>


            <div className="flex gap-4 mx-auto pt-4">
                <button aria-label="toggle list view" onClick={ChangeGrid}><img src="images/list.png" alt="list icon" className='cursor-pointer' /></button>
                <button aria-label="toggle grid view" onClick={ChangeGrid}><img src="images/grid.png" alt="grid icon" className='cursor-pointer' /></button>
            </div>

          <div className="mx-auto flex w-[90px] gap-4 pt-4 max-[800px]:hidden">
            <img
              onClick={ChangeGrid}
              src="images/list.png"
              alt="list icon"
              className="cursor-pointer"
            />

            <img
              onClick={ChangeGrid}
              src="images/grid.png"
              alt="grid icon"
              className="cursor-pointer object-cover"
            />
          </div>

          <div className="pt-6">
            <Card grid={grid} />
          </div>
        </div>
      </div>

      <div className="pagination flex items-center justify-between pt-10 max-[800px]:flex-col max-[800px]:space-y-6">
        <div className="flex items-center gap-6">
          <button className="cursor-pointer rounded-md border-1 border-gray-500 p-2 pr-6 pl-6">
            Previous
          </button>
          <div className="pages flex gap-10 text-[#0000FE]">
            <p className="rounded-md bg-[#F4F5FF] pr-4 pl-4">1</p>
            <p>2</p>
            <p>...</p>
            <p>3</p>
          </div>
          <button className="cursor-pointer rounded-md border-1 border-gray-500 p-2 pr-6 pl-6">
            Next
          </button>
        </div>

    <div className='pagination flex flex-col sm:flex-row items-center sm:justify-around gap-4 pt-10'>
                <button className='p-2 rounded-md border-1 border-gray-500 cursor-pointer'>Previous</button>
                <div className='pages flex gap-6 sm:gap-10 text-[#0000FE]'>
                    <p className='bg-[#F4F5FF] pl-4 pr-4 rounded-md'>1</p>
                    <p>2</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>3</p>
                </div>
                <button className='p-2 pr-6 pl-6 rounded-md border-1 border-gray-500 cursor-pointer'>next</button>
                <p className='text-gray-500 text-sm'>Showing 1-10 of 21 results</p>
            </div>
</div>
        <p className="text-gray-500">Showing 1-10 of 21 results</p>
      </div>
    </main>
  );
};

export default Content;
