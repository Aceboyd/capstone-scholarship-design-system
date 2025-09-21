import { Bell, ChevronDown, Bookmark, Menu, X } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import logo from "../assets/image/nice.png";

// Scroll offset for hash links
const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100; // Offset in px
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const Header = ({ setSelectedCategories, selectedCategories }) => {
  const [isOpen, setIsOpen] = useState(false); // For Categories dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu
  const location = useLocation();

  // Handle Home click
  const handleHomeClick = (e) => {
    e.preventDefault(); // stop default navigation
    window.location.href = "/landing"; // ✅ force reload the landing page
    setIsMobileMenuOpen(false);
  };

  // Handle Category click
  const handleCategoryClick = (category) => {
    if (typeof setSelectedCategories === "function") {
      setSelectedCategories((prevCategories = []) => {
        if (prevCategories.includes(category)) {
          return prevCategories.filter((item) => item !== category);
        } else {
          return [...prevCategories, category];
        }
      });
    }
    setIsOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsOpen(false); // Close Categories dropdown when toggling mobile menu
  };

  return (
    <header className="font-avenir z-50 flex w-full items-center justify-between bg-white px-4 py-3 shadow-md sm:px-6 sm:py-4 xl:px-12">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/landing">
          <img src={logo} alt="Logo" className="h-18 w-auto object-contain" />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="z-0 ml-auto lg:hidden"
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
        } absolute top-22 left-0 z-40 w-full flex-col space-y-4 bg-white px-4 py-6 text-base shadow-md sm:px-6 sm:text-lg md:space-x-4 md:px-6 lg:static lg:flex lg:w-auto lg:flex-row lg:space-y-0 lg:bg-transparent lg:py-0 lg:shadow-none xl:space-x-6 xl:px-6`}
      >
        <Link
          to="/landing"
          className="hover:text-blue-600"
          onClick={handleHomeClick}
        >
          Home
        </Link>

        <NavHashLink
          to="/landing#scholarships"
          smooth
          scroll={scrollWithOffset}
          className="hover:text-blue-600"
          activeClassName="active-hash-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Find Scholarships
        </NavHashLink>

        <NavHashLink
          smooth
          to="/landing#how-it-works"
          scroll={scrollWithOffset}
          className="hover:text-blue-600"
          activeClassName="active-hash-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          How It Works
        </NavHashLink>

        {/* Categories Dropdown */}
        <div className="relative w-fit">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-center justify-between space-x-1 hover:text-blue-600 lg:w-auto"
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
                    (Array.isArray(selectedCategories)
                      ? selectedCategories
                      : []
                    ).includes(category)
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

        <NavHashLink
          to="/landing#contact"
          smooth
          scroll={scrollWithOffset}
          className="hover:text-blue-600"
          activeClassName="active-hash-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact Us
        </NavHashLink>
      </nav>

      {/* Icons and Apply Button */}
      <div className="hidden items-center space-x-3 lg:flex lg:space-x-4">
        <div className="relative">
          <Bell className="h-5 w-5 text-gray-700 hover:text-blue-600 sm:h-6 sm:w-6" />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </div>
        <Bookmark className="h-5 w-5 fill-[#0000FE] text-[#0000FE] sm:h-6 sm:w-6" />
        <Link
          to="/scholarship"
          className="rounded-lg bg-[#0000FE] px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700 sm:px-6 sm:text-base lg:text-lg"
        >
          Apply Now
        </Link>
      </div>
    </header>
  );
};

// PropTypes validation
Header.propTypes = {
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedCategories: PropTypes.func.isRequired,
};

Header.defaultProps = {
  selectedCategories: [],
  setSelectedCategories: () => {},
};

export default Header;
