import React, { useState } from "react"; // Fixed import
import userProfile from "../assets/image/form/face.png";
import capstoneLogo from "../assets/image/nice.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={capstoneLogo}
              alt="Capstone Scholarship"
              className="h-10 w-auto sm:h-12"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } sm:flex sm:flex-1 sm:justify-center sm:items-center`}
          >
            <div
              className={`flex ${
                menuOpen
                  ? "flex-col items-start gap-2 mt-2"
                  : "flex-row space-x-4 sm:space-x-6"
              } sm:items-center sm:mt-0 overflow-x-auto`}
            >
              <a
                href="#"
                className="block w-full sm:w-auto text-gray-600 hover:text-blue-600 px-4 py-2 sm:px-0 sm:py-0 text-left"
              >
                Home
              </a>
              <a
                href="#"
                className="block w-full sm:w-auto text-gray-600 hover:text-blue-600 px-4 py-2 sm:px-0 sm:py-0 text-left"
              >
                Find Scholarships
              </a>
              <a
                href="#"
                className="block w-full sm:w-auto text-gray-600 hover:text-blue-600 px-4 py-2 sm:px-0 sm:py-0 text-left"
              >
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
                  />
                </svg>
              </a>
            </div>
          </nav>

          {/* Right-side Buttons (Desktop) */}
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
                />
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

          {/* Right-side Buttons (Mobile) */}
          {menuOpen && (
            <div className="sm:hidden flex items-center space-x-2 mt-2">
              <button className="text-gray-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <button className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700">
                Apply Now
              </button>
              <img
                src={userProfile}
                alt="User Profile"
                className="h-8 w-8 rounded-full"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;