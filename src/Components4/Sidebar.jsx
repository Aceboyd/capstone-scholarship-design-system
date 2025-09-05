import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { MdClear } from "react-icons/md";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import ScholarshipAccordionList from "../ScholarshipLising/ScholarshipAccordionLists";

const FilterSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="space-y-2">
      <button
        className="flex w-full items-center justify-between text-lg font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:text-base"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`${title}-content`}
      >
        {title}
        {isOpen ? (
          <FaChevronUp className="h-4 w-4 text-gray-400 sm:h-3 sm:w-3" />
        ) : (
          <FaChevronDown className="h-4 w-4 text-gray-400 sm:h-3 sm:w-3" />
        )}
      </button>
      <hr className="my-2" />
      <div
        id={`${title}-content`}
        className={`${isOpen ? "block" : "hidden"} mx-4 space-y-2 sm:mx-1`}
      >
        {children}
      </div>
    </div>
  );
};

export default function Sidebar({ isVisible = true }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  // --- Data ---
  const studyLevels = [
    "Undergraduate",
    "Postgraduate (Master's)",
    "PhD / Doctoral",
    "Postdoctoral Research",
  ];

  const fieldsOfStudy = [
    {
      category: "STEM (Science, Technology, Engineering, Math)",
      items: [
        "Computer Science",
        "Data Science and AI",
        "Cybersecurity",
        "Mechanical Engineering",
        "Electrical Engineering",
        "Renewable Energy",
        "Biotechnology",
      ],
    },
    "Medical and Health Sciences",
    "Business and Finances",
    "Social Sciences and Humanities",
    "Arts and Creative Fields",
  ];

  const countries = ["Ghana", "Nigeria", "Kenya", "South Africa"];
  const sponsoringOrgs = [
    {
      category: "Africa Wide Sponsorships",
      items: [
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
      ],
    },
    "Nigeria-Wide Scholarships",
    "International Organizations",
    "Government & National Scholarship Programs",
    "Private & Corporate Sponsorships",
    "Academic & University Scholarships",
  ];

  const deadlines = [
    "Closing this week",
    "Closing in the next 30 days",
    "Closing in the next 90 days",
    "Closing in the next 4-6 months",
  ];

  // --- Handlers ---
  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const resetFilters = () => setSelectedFilters([]);

  return (
    <aside
      role="complementary"
      aria-label="Filters"
      className={`
        ${isVisible ? "translate-x-0" : "-translate-x-full"}
        fixed left-0 top-0 z-30 w-64 max-w-full bg-white p-4 transition-transform duration-300 md:static md:min-h-screen md:translate-x-0
        sm:w-full sm:p-2 sm:min-h-0 sm:max-h-[80vh] sm:overflow-y-auto
      `}
    >
      {/* Selected Filters */}
      <div className="flex items-center justify-between pb-2 sm:pb-1">
        <div className="flex items-center gap-2">
          <CiFilter className="h-5 w-5 text-gray-600 sm:h-4 sm:w-4" />
          <p className="text-base text-gray-800 sm:text-sm">Selected Filters</p>
        </div>
        <button
          onClick={resetFilters}
          className="rounded-md text-base font-bold text-blue-600 transition-colors hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:text-sm"
          aria-label="Reset all filters"
        >
          Reset Filters
        </button>
      </div>

      {/* Active Filter Tags */}
      <div className="mb-4 flex flex-wrap gap-2 overflow-x-auto sm:mb-2 sm:gap-1">
        {selectedFilters.map((filter, index) => (
          <button
            key={index}
            onClick={() => toggleFilter(filter)}
            className="flex items-center gap-2 rounded-md bg-blue-100 px-2 py-1 text-sm text-gray-800 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:px-1 sm:text-xs"
            aria-label={`Remove filter ${filter}`}
          >
            {filter}
            <MdClear className="h-4 w-4 cursor-pointer" />
          </button>
        ))}
      </div>

      {/* Filter Sections */}
      <div className="space-y-4 rounded-lg bg-gray-50 p-4 sm:p-2">
        {/* Study Level */}
        <FilterSection title="By Study Level" defaultOpen={true}>
          {studyLevels.map((level, index) => (
            <div key={index} className="flex items-center gap-2 sm:gap-1">
              <input
                type="checkbox"
                id={`study-level-${index}`}
                checked={selectedFilters.includes(level)}
                onChange={() => toggleFilter(level)}
                className="h-5 w-5 cursor-pointer rounded text-blue-600 focus:ring-blue-600 sm:h-4 sm:w-4"
              />
              <label htmlFor={`study-level-${index}`} className="text-base sm:text-sm">
                {level}
              </label>
            </div>
          ))}
        </FilterSection>

        {/* Field of Study */}
        <FilterSection title="By Field of Study">
          {fieldsOfStudy.map((field, index) =>
            typeof field === "string" ? (
              <div key={index} className="flex items-center justify-between pt-2">
                <p className="text-base font-semibold sm:text-sm">{field}</p>
              </div>
            ) : (
              <FilterSection key={index} title={field.category} defaultOpen={index === 0}>
                {field.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-1">
                    <input
                      type="checkbox"
                      id={`field-${index}-${idx}`}
                      checked={selectedFilters.includes(item)}
                      onChange={() => toggleFilter(item)}
                      className="h-5 w-5 cursor-pointer rounded text-blue-600 focus:ring-blue-600 sm:h-4 sm:w-4"
                    />
                    <label htmlFor={`field-${index}-${idx}`} className="text-base sm:text-sm">
                      {item}
                    </label>
                  </div>
                ))}
              </FilterSection>
            )
          )}
        </FilterSection>

        {/* Countries */}
        <FilterSection title="By Country">
          <div className="relative mb-2 flex items-center rounded-md bg-white p-2 sm:p-1">
            <FaSearch className="absolute left-2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              className="w-full rounded-md p-2 pl-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 sm:text-xs"
              placeholder="Search for countries"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search for countries"
            />
          </div>
          {countries
            .filter((country) => country.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((country, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-1">
                <input
                  type="checkbox"
                  id={`country-${index}`}
                  checked={selectedFilters.includes(country)}
                  onChange={() => toggleFilter(country)}
                  className="h-5 w-5 cursor-pointer rounded text-blue-600 focus:ring-blue-600 sm:h-4 sm:w-4"
                />
                <label htmlFor={`country-${index}`} className="text-base sm:text-sm">
                  {country}
                </label>
              </div>
            ))}
        </FilterSection>

        {/* Sponsoring Organizations */}
        <FilterSection title="By Sponsoring Organization">
          {sponsoringOrgs.map((org, index) =>
            typeof org === "string" ? (
              <div key={index} className="flex items-center justify-between pt-2">
                <p className="text-base font-semibold sm:text-sm">{org}</p>
              </div>
            ) : (
              <FilterSection key={index} title={org.category} defaultOpen={index === 0}>
                {org.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-1">
                    <input
                      type="checkbox"
                      id={`org-${index}-${idx}`}
                      checked={selectedFilters.includes(item)}
                      onChange={() => toggleFilter(item)}
                      className="h-5 w-5 cursor-pointer rounded text-blue-600 focus:ring-blue-600 sm:h-4 sm:w-4"
                    />
                    <label htmlFor={`org-${index}-${idx}`} className="text-base sm:text-sm">
                      {item}
                    </label>
                  </div>
                ))}
              </FilterSection>
            )
          )}
        </FilterSection>

        {/* Deadlines */}
        <FilterSection title="By Deadline">
          {deadlines.map((deadline, index) => (
            <div key={index} className="flex items-center gap-2 sm:gap-1">
              <input
                type="checkbox"
                id={`deadline-${index}`}
                checked={selectedFilters.includes(deadline)}
                onChange={() => toggleFilter(deadline)}
                className="h-5 w-5 cursor-pointer rounded text-blue-600 focus:ring-blue-600 sm:h-4 sm:w-4"
              />
              <label htmlFor={`deadline-${index}`} className="text-base sm:text-sm">
                {deadline}
              </label>
            </div>
          ))}
        </FilterSection>
      </div>

      {/* Scholarship Accordion List */}
      <ScholarshipAccordionList />
    </aside>
  );
}
