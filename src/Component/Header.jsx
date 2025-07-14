import { Bell, ChevronDown, Bookmark, Menu, X } from "lucide-react"; // Added Menu, X icons
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/image/nice.png";

const Header = ({ setSelectedCategories, selectedCategories }) => {
  const [isOpen, setIsOpen] = useState(false); // For Categories dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu

  const handleCategoryClick = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((item) => item !== category);
      } else {
        return [...prevCategories, category];
      }
    });
    setIsOpen(false); // Close dropdown after selection
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsOpen(false); // Close Categories dropdown when toggling mobile menu
  };

  return (
    <header className="font-avenir fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white px-4 sm:px-6 md:px-12 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-12 w-24 sm:h-16 sm:w-32 md:h-20 md:w-40" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden z-50"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6 text-gray-700" />
        ) : (
          <Menu className="h-6 w-6 text-gray-700" />
        )}
      </button>

      {/* Navigation */}
      <nav
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none px-4 sm:px-6 py-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6 text-lg`}
      >
        <Link
          to=""
          className="hover:text-blue-600"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to=""
          className="hover:text-blue-600"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Find Scholarships
        </Link>
        <Link
          to=""
          className="hover:text-blue-600"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          How It Works
        </Link>

        {/* Categories Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-1 hover:text-blue-600"
          >
            <span>Categories</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          {isOpen && (
            <div className="absolute left-0 z-50 mt-2 w-48 rounded-lg bg-white py-2 shadow-md md:w-48">
              {[
                "By Study Level",
                "By Field of Study",
                "By Sponsorship Type",
                "By Application Deadline",
                "By Country",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`block w-full px-4 py-2 text-left ${
                    selectedCategories.includes(category)
                      ? "bg-gray-200"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <Link
          to=""
          className="hover:text-blue-600"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact Us
        </Link>
      </nav>

      {/* Icons and Apply Button */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="relative">
          <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 hover:text-blue-600" />
          <span className="absolute -top-1 -right-1 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-red-500"></span>
        </div>
        <Bookmark className="h-5 w-5 sm:h-6 sm:w-6 fill-[#0000FE] text-[#0000FE]" />
        <Link
          to="/apply"
          className="rounded-lg bg-[#0000FE] px-4 sm:px-6 py-2 text-base sm:text-lg text-white hover:bg-blue-700"
        >
          Apply Now
        </Link>
      </div>
    </header>
  );
};

export default Header;