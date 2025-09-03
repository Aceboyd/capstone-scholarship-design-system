
import React, { useState } from "react";
// Import the capstoneLogo image
import userProfile from "../assets/image/form/face.png"; // Assuming this was also used
import capstoneLogo from "../assets/image/nice.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-4">
          <div className="flex items-center gap-3 w-full">
            <div className="flex-shrink-0">
              <img
                src={capstoneLogo}
                alt="Capstone Scholarship"
                className="h-10 sm:h-12 w-auto"
              />
            </div>

            {/* Mobile menu button */}
            <button
              className="sm:hidden ml-2 p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-2 py-2 sm:flex-row sm:items-center sm:gap-0 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex-shrink-0">
          <img
            src={capstoneLogo}
            alt="Capstone Scholarship"
            className="h-12 w-auto sm:h-18"
          />
        </div>
        <nav className="mt-2 flex w-full flex-1 justify-center sm:mt-0 sm:w-auto">
          <div className="flex space-x-4 overflow-x-auto sm:space-x-6">
            <a
              href="#"
              className="whitespace-nowrap text-gray-600 hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#"
              className="whitespace-nowrap text-gray-600 hover:text-blue-600"
            >
              Find Scholarships
            </a>
            <a
              href="#"
              className="whitespace-nowrap text-gray-600 hover:text-blue-600"
            >
              How It Works
            </a>
            <a
              href="#"
              className="flex items-center whitespace-nowrap text-gray-600 hover:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Nav (hidden on mobile) and Mobile collapsible nav */}
            <nav className={`flex-1 ${menuOpen ? 'block w-full' : 'hidden'} sm:flex sm:justify-center sm:items-center`}>
              <div className={`flex ${menuOpen ? 'flex-col items-start gap-2 mt-2 w-full' : 'space-x-4 sm:space-x-6'} sm:flex-row sm:items-center sm:mt-0 overflow-x-auto`}>
                <a href="#" className="block w-full sm:w-auto text-gray-600 hover:text-blue-600 px-4 py-2 sm:px-0 sm:py-0 text-left">
                  Home
                </a>
                <a href="#" className="block w-full sm:w-auto text-gray-600 hover:text-blue-600 px-4 py-2 sm:px-0 sm:py-0 text-left">
                  Find Scholarships
                </a>
                <a href="#" className="block w-full sm:w-auto text-gray-600 hover:text-blue-600 px-4 py-2 sm:px-0 sm:py-0 text-left">
                  How It Works
                </a>
                <a
                  href="#"
                  className="flex items-center w-full sm:w-auto text-gray-600 hover:text-blue-600 px-4 py-2 sm:px-0 sm:py-0 text-left"
                >
                  <span className="flex-1">Categories</span>
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
          </div>

          <div className="hidden sm:flex items-center space-x-2 sm:space-x-4">
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
        </nav>
        <div className="mt-2 flex items-center space-x-2 sm:mt-0 sm:space-x-4">
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
          <button className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700 sm:px-4 sm:py-2 sm:text-base">
            Apply Now
          </button>
          <img
            src={userProfile}
            alt="User Profile"
            className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
