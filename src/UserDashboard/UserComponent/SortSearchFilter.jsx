import { HiMenuAlt2 } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { PiFunnel } from "react-icons/pi";

import ArrowDown from "../../assets/image/user-dashboard/arrowdown.svg";

export default function SortSearchFilter() {
  return (
    <div className="space-y-6">
      {/* Search Section */}
      <div className="rounded-md bg-[#EBEDFF] py-2 pl-6">
        <p className="flex gap-2 text-[13px] opacity-70">
          <span className="text-xl">
            <IoSearchOutline />
          </span>
          STEM Undergraduate in Ghana
        </p>
      </div>

      {/* Filter Section */}
      <div>
        <p className="inline-flex items-center gap-4 pl-8">
          <span>
            <PiFunnel />
          </span>
          Filter
        </p>

        <div className="rounded-md bg-[#EBEDFF] py-2 pl-6">
          <div className="flex justify-end">
            <p className="invisible flex gap-2 text-[13px]">S</p>
            <img
              src={ArrowDown}
              alt="Arrow pointing downward"
              className="pr-4"
            />
          </div>
        </div>
      </div>

      {/* Sort Section */}
      <div>
        <p className="inline-flex items-center gap-4 pl-8">
          <span>
            <HiMenuAlt2 />
          </span>
          Sort By
        </p>

        <div className="rounded-md bg-[#EBEDFF] py-2 pl-6">
          <div className="flex justify-end">
            <p className="invisible flex gap-2 text-[13px]">S</p>
            <img
              src={ArrowDown}
              alt="Arrow pointing downward"
              className="pr-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
