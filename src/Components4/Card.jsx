import { Bookmark } from "lucide-react";
import PropTypes from "prop-types"; // ✅ import PropTypes
import { useState } from "react";
import { Link } from "react-router-dom";

import { cardInfo } from "./cardInfo";

let Card = ({ grid, selectedFilters, searchQuery }) => {
  const [info] = useState(cardInfo);

  // Filter scholarships based on selected filters and search query
  const filteredInfo = info.filter((details) => {
    // Search query filter
    const matchesSearch = searchQuery
      ? details.mainTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        details.subTitle.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    // Filter by selected filters
    const matchesFilters =
      selectedFilters.length > 0
        ? selectedFilters.some((filter) =>
            [
              details.tag1,
              details.tag2,
              details.tag3,
              details.expiry,
              details.student,
            ].includes(filter),
          )
        : true;

    return matchesSearch && matchesFilters;
  });

  const [activeBookmarks, setActiveBookmarks] = useState({});

  const toggleBookmark = (key) => {
    setActiveBookmarks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div
      className={`${grid ? "max-w-[800px]:flex grid grid-cols-2 flex-col gap-2" : ""} space-y-6`}
    >
      {filteredInfo.map((details, key) => (
        <div
          key={key}
          className={`${key !== undefined && key !== null ? "cursor-pointer duration-1500 hover:scale-101" : ""} space-y-1 rounded-md bg-white p-4 shadow-lg`}
        >
          <div className="flex items-center justify-between gap-2 lg:block">
            <div>
              <div className="flex justify-between">
                <p className="text-2xl max-[700px]:text-xl">
                  {details.mainTitle}
                </p>
                <p className="hidden self-center text-xs text-gray-900 lg:block">
                  Posted {details.time}
                </p>
              </div>
              <p className="max-[700px]:text-sm">{details.subTitle}</p>
              <p className="text-sm text-gray-900">Posted {details.time}</p>
            </div>

            <button
              onClick={() => toggleBookmark(key)}
              className="flex items-center"
            >
              <Bookmark
                className={`h-5 w-5 transition-colors sm:h-6 sm:w-6 ${
                  activeBookmarks[key]
                    ? "fill-[#0000FE] text-[#0000FE]"
                    : "fill-none text-black"
                }`}
              />
            </button>
          </div>

          <hr className="mt-4 mb-2 text-gray-200 lg:hidden" />

          <div className="flex items-center gap-2">
            <p className="flex">
              <img src="images/tuition.png" alt="tuition" /> :
            </p>
            <p>{details.tuition}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="flex">
              <img src="images/date.png" alt="date" /> :
            </p>
            <div className="flex gap-1">
              <p>{details.date}</p>
              <p className="self-center text-xs font-medium text-[#0000FE] italic">
                Closes in {details.expiry}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <p className="flex">
              <img src="images/student.png" alt="student" /> :
            </p>
            <p>{details.student}</p>
          </div>
          <div className="w-fit">
            <div className="flex gap-1">
              <p className="w-fit">Application Status:</p>

              <p className="self-center text-sm font-medium text-[#0000FE] lg:hidden">
                {details.appStatus}
              </p>

              <div className="hidden items-center min-[700px]:gap-1 min-[800px]:flex lg:flex">
                <img
                  className="max-w-[85%] object-cover"
                  src={details.progress}
                  alt="progress bar"
                />
                <p className="self-center text-xs font-bold text-[#0000FE]">
                  {details.appStatus}
                </p>
              </div>
            </div>
          </div>
          <hr className="hidden lg:block" />

          <div
            className={`${grid ? "grid grid-cols-1 place-items-center space-y-1" : "items-center justify-between min-[800px]:flex"}`}
          >
            <div className="flex gap-2 text-center text-sm lg:text-left">
              <p className="w-fit rounded-md bg-[#ebedff] p-2">
                {details.tag1}
              </p>
              <p className="w-fit rounded-md bg-[#ebedff] p-2">
                {details.tag2}
              </p>
              <p className="w-fit rounded-md bg-[#ebedff] p-2">
                {details.tag3}
              </p>
            </div>

            <div className="hidden items-center gap-1 max-[800px]:w-40 max-[800px]:place-self-center max-[700px]:pt-2 lg:flex">
              {key === 0 ? (
                <Link
                  to="/ghanapage"
                  className="cursor-pointer rounded-md bg-[#0000FE] px-3 py-2 text-white max-[700px]:text-xs"
                >
                  {details.apply}
                </Link>
              ) : (
                <button className="cursor-pointer rounded-md bg-[#0000FE] p-2 text-white max-[700px]:text-xs">
                  {details.apply}
                </button>
              )}
              <img
                src="images/info icon.png"
                className="w-fit rounded-md bg-[#DCDDFF] p-2"
                alt="info"
              />
              <img
                src={details.bookmark}
                className="w-fit rounded-md bg-[#DCDDFF] p-2"
                alt="bookmark"
              />
            </div>
          </div>

          {/* For mobile */}
          <div className="flex w-full pt-4 lg:hidden">
            <Link
              to="/ghanapage"
              className="w-full cursor-pointer rounded-md bg-[#0000FE] px-3 py-4 text-center text-sm text-white"
            >
              {details.apply}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

// ✅ PropTypes validation
Card.propTypes = {
  grid: PropTypes.bool,
  selectedFilters: PropTypes.arrayOf(PropTypes.string),
  searchQuery: PropTypes.string,
};

export default Card;
