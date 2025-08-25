import React from "react";
// Import the capstoneLogo image
import capstoneLogo from "../assets/image/nice.png";
import userProfile from "../assets/image/form/face.png"; // Assuming this was also used

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-start sm:items-center justify-between px-2 sm:px-6 lg:px-8 py-2 sm:py-4 gap-2 sm:gap-0">
        <div className="flex-shrink-0">
          <img
            src={capstoneLogo}
            alt="Capstone Scholarship"
            className="h-12 sm:h-18 w-auto"
          />
        </div>
        <nav className="flex flex-1 justify-center w-full sm:w-auto mt-2 sm:mt-0">
          <div className="flex space-x-4 sm:space-x-6 overflow-x-auto">
            <a href="#" className="text-gray-600 hover:text-blue-600 whitespace-nowrap">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 whitespace-nowrap">
              Find Scholarships
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 whitespace-nowrap">
              How It Works
            </a>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-blue-600 whitespace-nowrap"
            >
              Categories
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </a>
          </div>
        </nav>
        <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
          <button className="text-gray-600">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
          <button className="rounded-md bg-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 text-white hover:bg-blue-700 text-sm sm:text-base">
            Apply Now
          </button>
          <img
            src={userProfile}
            alt="User Profile"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
