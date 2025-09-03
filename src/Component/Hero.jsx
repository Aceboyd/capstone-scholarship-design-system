import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import heroImage from "../assets/image/heropng.png";
import bgImage from "../assets/image/bgimage.png";
import dottedArrow1 from "../assets/image/dotted-arrow1.png";
import dottedArrow2 from "../assets/image/dotted-arrow2.png";
import dottedArrow3 from "../assets/image/dotted-arrow3.png";
import dottedArrow4 from "../assets/image/dotted-arrow4.png";

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Filter");
  const dropdownRef = useRef(null);

  const filters = [
    "By Study Level",
    "By Field of Study",
    "By Country",
    "By Sponsoring Organisation",
    "By Deadline",
  ];

  const handleSelect = (filter) => {
    setSelectedFilter(filter);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center bg-[#F8F9FF] overflow-hidden pt-20 md:pt-24">
      {/* Left Side - Text and Search */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-8 md:py-16 space-y-6 flex flex-col items-center text-center md:items-start md:text-left animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Find and <span className="text-[#0000FE]">Apply</span> for <br />
          Scholarships <span className="text-[#0000FE]">easily</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-lg">
          Easily search, filter, and apply for scholarships tailored to your needs. Unlock funding opportunities for your studies today!
        </p>

        {/* Search Group (Input + Button) */}
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
          {/* Search Filter Input with Dropdown */}
          <div className="relative w-full" ref={dropdownRef}>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-md w-full">
              <button
                className="flex items-center px-4 py-3 bg-gray-100 border-r focus:outline-none text-sm whitespace-nowrap"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedFilter} <ChevronDown className="w-4 h-4 ml-2" />
              </button>
              <input
                type="text"
                placeholder="Search a keyword"
                className="flex-grow w-full px-4 py-3 outline-none text-sm text-gray-700"
              />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-10">
                {filters.map((filter, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelect(filter)}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Button (now part of the group) */}
          <button className="bg-[#0000FE] text-white w-full sm:w-auto px-8 py-3 rounded-lg text-base font-semibold hover:bg-blue-800 transition whitespace-nowrap">
            Search
          </button>
        </div>

        <p className="text-xs text-gray-500 pt-4">
          Accredited by the Federal Ministry of Education and aligned with the
          <br />
          standards of the National Universities Commission (NUC) and TETFund.
        </p>
      </div>

      {/* Right Side - Image & Background */}
      <div
        className="w-full md:w-1/2 relative flex justify-center items-center bg-cover bg-center p-6 min-h-[400px] md:min-h-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <img
          src={heroImage}
          alt="Student"
          className="w-full max-w-sm md:max-w-lg relative z-10"
        />
      </div>

      {/* Dotted Arrows - Hidden on Mobile */}
      <img
        src={dottedArrow1}
        className="hidden md:block absolute top-22 left-[300px] w-32 h-35 z-20 animate-pulse"
        alt="arrow"
      />
      <img
        src={dottedArrow2}
        className="hidden md:block absolute top-85 right-[625px] w-32 h-25 rotate-[5deg] z-20 animate-pulse"
        alt="arrow"
      />
      <img
        src={dottedArrow3}
        className="hidden md:block absolute bottom-[-20px] left-80 w-77 h-100 z-20 animate-pulse"
        alt="arrow"
      />
      <img
        src={dottedArrow4}
        className="hidden md:block absolute bottom-55 left-0 w-18 h-30 -rotate-[3deg] z-20 animate-pulse"
        alt="arrow"
      />
    </section>
  );
};

export default Hero;