import { CiFilter } from "react-icons/ci";
import { MdClear } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa"; // Added missing import
import ScholarshipAccordionList from "../ScholarshipLising/ScholarshipAccordionLists";

export default function Sidebar({ isVisible = true, onResetFilters }) {
  const filterWords = [
    "Undergraduate",
    "STEM",
    "Ghana",
    "Closing in 30 days",
    "Africa-wide Sponsorship",
    "Closing in 90 days",
  ];

  return (
    <aside
      role="complementary"
      aria-label="Filters"
      className={`
        ${isVisible ? "block" : "hidden max-[800px]:invisible max-[800px]:w-0"}
        w-60 max-w-full md:min-h-screen bg-white space-y-4
        max-[700px]:w-full max-[700px]:min-h-0 max-[700px]:space-y-2 max-[700px]:bg-white max-[700px]:max-h-[70vh] max-[700px]:overflow-y-auto
        max-[500px]:w-full max-[500px]:min-h-0 max-[500px]:space-y-2 max-[500px]:bg-white
      `}
    >
      {/* Selected Filters and Reset */}
      <div className="mx-5 flex items-center justify-between pb-2 max-[700px]:mx-2 max-[700px]:pb-1">
        <div className="flex items-center gap-2">
          <img
            src="/images/filter.png"
            alt="filter icon"
            className="w-5 h-5 max-[700px]:w-4 max-[700px]:h-4"
          />
          <p className="text-[#000000] text-base max-[700px]:text-sm">
            Selected Filter
          </p>
        </div>
        <button
          onClick={onResetFilters}
          className="cursor-pointer font-bold text-[#0000FE] text-base max-[700px]:text-sm focus:outline-none focus:ring-2 focus:ring-[#0000FE]"
        >
          Reset Filters
        </button>
      </div>

      {/* Active Filters */}
      <div className="ml-8 flex flex-wrap gap-2 max-[700px]:ml-2 max-[700px]:flex-row max-[700px]:overflow-x-auto max-[700px]:gap-2 max-[700px]:pb-2">
        {filterWords.map((filter, index) => (
          <button
            key={index}
            className="flex w-fit items-center gap-2 rounded-md bg-[#EBEDFF] p-2 text-sm max-[700px]:text-xs max-[700px]:p-1 focus:outline-none focus:ring-2 focus:ring-[#0000FE]"
          >
            {filter}
            <img
              src="/images/cancel.png"
              className="cursor-pointer w-4 h-4"
              alt="cancel"
            />
          </button>
        ))}
      </div>

      {/* Filter Sections */}
      <div className="mx-8 space-y-4 p-2 max-[700px]:mx-2 max-[700px]:p-1 bg-[#F4F5FF] max-[700px]:bg-white">
        {/* By Study Level */}
        <div>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg max-[700px]:text-base">
              By Study Level
            </p>
            <FaChevronDown className="text-gray-400 w-4 h-4 max-[700px]:w-3 max-[700px]:h-3" />
          </div>
          <hr className="my-2" />
          <div className="mx-4 space-y-2 max-[700px]:mx-1">
            {[
              "Undergraduate",
              "Postgraduate (Master's)",
              "PhD / Doctoral",
              "Postdoctoral Research",
            ].map((level, index) => (
              <div key={index} className="flex items-center gap-2 max-[700px]:gap-1">
                <input
                  type="checkbox"
                  className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4"
                />
                <p className="text-base max-[700px]:text-sm">{level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* By Field of Study */}
        <div>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg max-[700px]:text-base">
              By Field of Study
            </p>
            <img
              src="/images/down arrow.png"
              alt="down arrow"
              className="w-4 h-4 max-[700px]:w-3 max-[700px]:h-3"
            />
          </div>
          <hr className="my-2" />
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-base max-[700px]:text-sm">
                STEM (Science, Technology, Engineering, Math)
              </p>
              <img
                src="/images/down arrow.png"
                alt="down arrow"
                className="w-4 h-4 max-[700px]:w-3 max-[700px]:h-3"
              />
            </div>
            <hr />
            <div className="mx-4 space-y-2 max-[700px]:mx-1">
              {[
                "Computer Science",
                "Data Science and AI",
                "Cybersecurity",
                "Mechanical Engineering",
                "Electrical Engineering",
                "Renewable Energy",
                "Biotechnology",
              ].map((field, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 max-[700px]:gap-1"
                >
                  <input
                    type="checkbox"
                    className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4"
                  />
                  <p className="text-base max-[700px]:text-sm">{field}</p>
                </div>
              ))}
            </div>
          </div>
          {[
            "Medical and Health Sciences",
            "Business and Finances",
            "Social Sciences and Humanities",
            "Arts and Creative Fields",
          ].map((category, index) => (
            <div key={index}>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold text-base max-[700px]:text-sm">
                  {category}
                </p>
                <img
                  src="/images/up arrow.png"
                  alt="up arrow"
                  className="w-4 h-4 max-[700px]:w-3 max-[700px]:h-3"
                />
              </div>
              <hr className="my-2" />
            </div>
          ))}
        </div>

        {/* By Country */}
        <div>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg max-[700px]:text-base">By Country</p>
            <img
              src="/images/down arrow.png"
              alt="down arrow"
              className="w-4 h-4 max-[700px]:w-3 max-[700px]:h-3"
            />
          </div>
          <hr className="my-2" />
          <div className="grid grid-cols-3 items-center rounded-md bg-white max-[700px]:grid-cols-2 max-[700px]:p-1">
            <img
              src="/images/search.png"
              className="col-end-1 w-4 h-4"
              alt="search"
            />
            <input
              type="search"
              className="col-span-2 col-start-1 p-2 text-xs max-[700px]:p-1 max-[700px]:text-xs"
              placeholder="Search for countries"
            />
            <img
              src="/images/down arrow.png"
              className="col-start-3 w-4 h-4"
              alt="down arrow"
            />
          </div>
          <div className="mt-2 space-y-2 max-[700px]:mx-0">
            <div className="flex items-center gap-2 max-[700px]:gap-1">
              <input
                type="checkbox"
                className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4"
              />
              <p className="text-base max-[700px]:text-sm">Ghana</p>
            </div>
          </div>
        </div>

        {/* By Sponsoring Organization */}
        <div>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg max-[700px]:text-base">
              By Sponsoring Organization
            </p>
            <img
              src="/images/down arrow.png"
              alt="down arrow"
              className="w-4 h-4 max-[700px]:w-3 max-[700px]:h-3"
            />
          </div>
          <div className="flex items-center justify-between pt-2">
            <p className="text-base max-[700px]:text-sm">
              Africa Wide Sponsorships
            </p>
            <img
              src="/images/down arrow.png"
              alt="down arrow"
              className="w-4 h-4 max-[700px]:w-3 max-[700px]:h-3"
            />
          </div>
          <hr className="my-2" />
          <div className="mx-4 space-y-2 max-[700px]:mx-1 max-[700px]:overflow-y-auto max-[700px]:max-h-40">
            {[
              "Mastercard Foundation Scholars Program",
              "African Union Kwame Nkrumah Scientific Awards",
              "Ashinaga Africa Initiative",
              "Mo Ibrahim Foundation Scholarships",
              "Mandela Rhodes Scholarship",
              "African Leadership University (ALU) Scholarships",
              "Graca Machel Trust Women Scholarships",
              "Carnegie Corporation of New York – African Academic Scholars Program",
              "DAAD In-Country/In-Region Africa Scholarships",
              "Oxford-Weidenfeld & Hoffmann Scholarships",
              "Schwarzman Scholars for Africa",
              "Nelson Mandela World Human Rights Moot Court Scholarship",
              "Wells Mountain Initiative (WMI) Scholars Program",
              "UNESCO Africa Scholarship Program",
              "University of Cape Town Mastercard Foundation Scholarships",
              "African Women in Science and Engineering (AWSE) Scholarships",
              "University of Pretoria Mastercard Foundation Scholars Program",
              "Alliance for African Partnership (AAP) Scholarships",
              "Tony Elumelu Foundation Entrepreneurship Program",
              "YALI Regional Leadership Center Scholarships",
            ].map((org, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-1 items-center"
              >
                <input
                  type="checkbox"
                  className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4 col-span-1"
                />
                <p className="col-span-11 text-base max-[700px]:text-sm">
                  {org}
                </p>
              </div>
            ))}
          </div>
          {[
            "Nigeria-Wide Scholarships",
            "International Organizations",
            "Government & National Scholarship Programs",
            "Private & Corporate Sponsorships",
            "Academic & University Scholarships",
          ].map((category, index) => (
            <div key={index}>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold text-base max-[700px]:text-sm">
                  {category}
                </p>
                <img
                  src="/images/up arrow.png"
                  alt="up arrow"
                  className="w-4 h-4 max-[700px]:w-3 max-[700px]:h-3"
                />
              </div>
              <hr className="my-2" />
            </div>
          ))}
        </div>

        {/* By Deadline */}
        <div>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg max-[700px]:text-base">By Deadline</p>
            <img
              src="/images/down arrow.png"
              alt="down arrow"
              className="w-4 h-4 max-[700px]:w-3 max-[700px]:h-3"
            />
          </div>
          <hr className="my-2" />
          <div className="mx-4 space-y-2 max-[700px]:mx-1">
            {[
              "Closing this week",
              "Closing in the next 30 days",
              "Closing in the next 90 days",
              "Closing in the next 4-6 months",
            ].map((deadline, index) => (
              <div
                key={index}
                className="flex items-center gap-2 max-[700px]:gap-1"
              >
                <input
                  type="checkbox"
                  className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4"
                />
                <p className="text-base max-[700px]:text-sm">{deadline}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scholarship Accordion List */}
      <ScholarshipAccordionList />
    </aside>
  );
}