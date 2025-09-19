import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SectionC() {
  const [isHovered, setIsHovered] = useState(false);
  const [query, setQuery] = useState(""); // ✅ Track input value
  const navigate = useNavigate();

  const handleSearchClick = () => {
    if (query.trim() !== "") {
      navigate("/scholarship"); // ✅ only go if input is not empty
    } else {
      alert("Please enter a search term before proceeding."); // optional feedback
    }
  };

  return (
    <div
      id="scholarships"
      className="flex min-h-screen items-center justify-center bg-[#F8F7FF] pt-20 md:pt-0"
    >
      <div className="animate-fade-slide-up w-[1200px] max-w-full px-1 sm:px-4">
        <h1 className="animate-fade-in mb-8 md:mb-16 text-center text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
            Find&nbsp;
            <br className="block md:hidden" />
          <span className="animate-float inline-block text-[#0000FF]">
              Scholarships <br className="block md:hidden" />
          </span>
             &nbsp;that match your goals
        </h1>


        <div className="mx-auto max-w-3xl">
          <div className="flex transform transition-all duration-300 hover:scale-[1.02]">
            <select
              className="h-[48px] md:h-[60px] w-[100px] md:w-[120px] lg:w-[160px] cursor-pointer appearance-none rounded-l-lg border border-r-0 border-gray-200 bg-white px-3 md:px-4 text-sm md:text-gray-600 transition-colors hover:bg-gray-50 focus:outline-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                backgroundSize: "16px",
              }}
            >
              <option>Filter</option>
              <option>By Study Level</option>
              <option>By Field of Study</option>
              <option>By Country</option>
              <option>By Sponsoring Organisation</option>
              <option>By Deadline</option>
            </select>
            <div className="relative flex-1">
              <div className="absolute top-1/2 left-3 md:left-4 -translate-y-1/2 transform transition-transform duration-300">
                <Search
                  className={`h-5 w-5 text-gray-400 transition-all duration-300 ${
                    isHovered ? "scale-110" : ""
                  }`}
                />
              </div>
              <input
                type="text"
                placeholder="Search or select a filter"
                className="h-[48px] md:h-[60px] w-full rounded-r-lg border border-gray-200 pr-3 md:pr-4 pl-10 md:pl-12 text-sm md:text-base transition-all duration-300 focus:border-blue-300 focus:outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)} // ✅ track input
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
              />
            </div>
          </div>

          <div className="mt-8 md:mt-12 flex justify-center">
            <button
              onClick={handleSearchClick} // ✅ controlled navigation
              className={`transform rounded-lg px-8 md:px-12 py-3 md:py-4 font-semibold text-base md:text-lg text-white transition-all duration-300 active:scale-95
                ${
                  query.trim() !== ""
                    ? "bg-[#0000FF] hover:scale-105 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              disabled={query.trim() === ""} // ✅ disable if empty
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Search Scholarships
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionC;
