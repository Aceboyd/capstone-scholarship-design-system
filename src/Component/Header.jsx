import { Bell, ChevronDown, Bookmark, Menu, X } from "lucide-react";
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
    <header className="font-avenir fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white px-4 sm:px-6 md:px-12 py-3 sm:py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-20 sm:h-14 sm:w-28 md:h-16 md:w-32 object-contain"
        />
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden z-50 ml-auto"
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
        } md:flex flex-col md:flex-row absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none px-4 sm:px-6 py-6 md:py-0 space-y-4 md:space-y-0 md:space-x-6 text-base sm:text-lg`}
      >
        <Link
          to="/"
          className="hover:text-blue-600"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/scholarships"
          className="hover:text-blue-600"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Find Scholarships
        </Link>
        <Link
          to="/how-it-works"
          className="hover:text-blue-600"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          How It Works
        </Link>

        {/* Categories Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full md:w-auto space-x-1 hover:text-blue-600"
          >
            <span>Categories</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          {isOpen && (
            <div className="absolute left-0 z-50 mt-2 w-56 rounded-lg bg-white py-2 shadow-md">
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
                  className={`block w-full px-4 py-2 text-left text-sm ${
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
          to="/contact"
          className="hover:text-blue-600"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact Us
        </Link>
      </nav>

      {/* Icons and Apply Button */}
      <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
        <div className="relative">
          <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 hover:text-blue-600" />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </div>
        <Bookmark className="h-5 w-5 sm:h-6 sm:w-6 fill-[#0000FE] text-[#0000FE]" />
        <Link
          to="/apply"
          className="rounded-lg bg-[#0000FE] px-4 sm:px-6 py-2 text-sm sm:text-base lg:text-lg text-white hover:bg-blue-700 transition-colors"
        >
          Apply Now
        </Link>
      </div>
    </header>
  );
};

export default Header;
