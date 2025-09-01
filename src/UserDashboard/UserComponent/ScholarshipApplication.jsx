import { Search } from "lucide-react";

import PieChart from "../../assets/image/user-dashboard/piechart.svg";

export default function ScholarshipApplication() {
  return (
    <div className="space-y-4 text-[12px] md:text-[13px]">
      <p className="text-[13px] font-bold md:text-[15px]">
        Scholarship Applications
      </p>

      <div className="flex flex-col items-center justify-center rounded-md border-l-4 border-[#38CCC7] bg-white px-4 sm:flex-row sm:justify-between md:px-8">
        <div className="space-y-4 py-4 sm:py-0">
          <div className="space-y-2">
            <p className="text-xs font-bold md:text-sm">
              Search your applications
            </p>

            <div className="flex">
              <input
                type="text"
                id="searchApplication"
                className="w-full rounded-l-sm bg-[#ebedff] p-1 outline-none"
              />

              <label
                htmlFor="searchApplication"
                className="cursor-pointer rounded-r-sm bg-[#d2d6ff] px-4 py-2"
              >
                <Search size={19} />
              </label>
            </div>
          </div>

          {/* CHECK BOX */}
          <div className="flex flex-wrap justify-between gap-x-4 gap-y-2">
            <label
              htmlFor="submitted"
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                id="submitted"
                className="mt-1 size-3.5 cursor-pointer"
              />
              <span className="font-medium">Submitted (4)</span>
            </label>

            <label
              htmlFor="withdrawn"
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                id="withdrawn"
                className="mt-1 size-3.5 cursor-pointer"
              />
              <span className="font-medium">Withdrawn (2)</span>
            </label>

            <label
              htmlFor="deadlinePassed"
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                id="deadlinePassed"
                className="mt-1 size-3.5 cursor-pointer"
              />
              <span className="font-medium">Deadline passed (10)</span>
            </label>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="space-y-4 py-4 text-center text-[13px] sm:py-0">
          <div className="flex flex-col justify-center gap-2 p-4">
            <div className="relative">
              <img
                src={PieChart}
                alt="Pie chart image of 30%"
                className="object-cover"
              />
              <p className="absolute top-4 right-7 text-[22px] font-medium text-white">
                30%
              </p>
            </div>

            <p className="text-xs font-medium text-balance">
              Current application status
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
