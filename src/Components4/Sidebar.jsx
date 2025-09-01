import { CiFilter } from "react-icons/ci";
import { MdClear } from "react-icons/md";

import ScholarshipAccordionList from "../ScholarshipLising/ScholarshipAccordionLists";

export default function Sidebar() {
  const filterWords = [
    "Undergraduate",
    "STEM",
    "Ghana",
    "Closing in 30 days",
    "Africa-wide Sponsorship",
    "Closing in 90 days",
  ];

  return (
    <aside className="space-y-4">
      {/* SELECTED FILTER & RESET FILTERS */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span>
            <CiFilter size={24} />
          </span>
          <p>Selected filter</p>
        </div>

        <p className="text-[#0000FE]">Reset filters</p>
      </div>

      {/* FILTERS WORDS SEARCHED */}
      <div className="space-y-2.5 space-x-2.5 text-gray-600">
        {filterWords.map((text, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2.5 rounded-md bg-[#f4f5ff] p-2"
          >
            <p>{text}</p>
            <span>
              <MdClear size={20} />
            </span>
          </div>
        ))}
      </div>

      {/* ACCORDION LISTINGS */}
      <ScholarshipAccordionList />
    </aside>
  );
}
