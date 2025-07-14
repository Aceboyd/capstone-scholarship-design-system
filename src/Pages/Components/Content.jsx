import Card from './Card'
import { useState } from 'react';

let Content = () => {

    let [grid, isGrid] = useState(false);

    let ChangeGrid = () => {
        isGrid(!grid)
        console.log("change grid"+ grid);
    }



  return (
<div className='flex-1'>
<div className=" rounded-lg">
        <div className="min-[700px]:mx-10 p-4 bg-[#F4F5FF] rounded-md">
            <p className="text-center text-2xl pb-3">21 Scholarships found for <span className="font-bold">“STEM Undergraduate Scholarships in Ghana”</span></p>
            <hr />
            <div className="flex justify-between pt-4 items-center">
                <p>RESULTS 21</p>
                <div className="flex items-center gap-3">SORT BY:
                    <select className="border-1 border-black rounded-md p-2 text-[#0000FE] font-bold">
                        <option>Latest</option>
                        <option>Earliest</option>
                        <option>Most Popular</option>
                        <option>Closing Soon</option>
                        <option>Fully Funded</option>
                        <option>Merit-Based</option>
                    </select>
                </div>
            </div>

            <div className="flex gap-4 w-[90px] mx-auto pt-4 max-[800px]:hidden">
                <img onClick={ChangeGrid} src="images/list.png" alt="list icon" className='cursor-pointer' />
                <img onClick={ChangeGrid} src="images/grid.png" alt="grid icon" className='cursor-pointer' />
            </div>

            <div className='pt-6'>
                 <Card grid={grid} />
            </div>


        </div>
    </div>

    <div className='pagination flex max-[800px]:flex-col max-[800px]:space-y-6 items-center justify-around pt-10'>
                <button className='p-2 rounded-md border-1 border-gray-500 cursor-pointer'>Previous</button>
                <div className='pages flex gap-10 text-[#0000FE]'>
                    <p className='bg-[#F4F5FF] pl-4 pr-4 rounded-md'>1</p>
                    <p>2</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>3</p>
                </div>
                <button className='p-2 pr-6 pl-6 rounded-md border-1 border-gray-500 cursor-pointer'>Next</button>
                <p className='text-gray-500'>Showing 1-10 of 21 results</p>
            </div>
</div>
  );
};

export default Content;
