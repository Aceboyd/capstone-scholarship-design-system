import { Bell, ChevronDown, Bookmark, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Added PropTypes import
import { NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';


import logo from "../assets/image/nice.png";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100; // Offset in px
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

const Header = ({ setSelectedCategories, selectedCategories }) => {
  const [isOpen, setIsOpen] = useState(false); // For Categories dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsOpen(false); // Close Categories dropdown when toggling mobile menu
  };

  return (
    <header className="font-avenir fixed top-0 left-0 z-52 flex w-full items-center justify-between bg-white px-4 sm:px-6 xl:px-12 py-3 sm:py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Link to='/landing'><img
          src={logo}
          alt="Logo"
          className="w-auto h-18 object-contain"
        /></Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="lg:hidden z-50 ml-auto"
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
        } lg:flex flex-col lg:flex-row absolute lg:static top-14 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none px-4 sm:px-6 md:px-2 xl:px-6 py-6 lg:py-0 space-y-4 lg:space-y-0 md:space-x-4 xl:space-x-6 text-base sm:text-lg z-52`}
      >
        <NavLink
          to="/landing"
          className="hover:text-blue-600"
          style={
            ({ isActive }) => ({ color: isActive ? "#2563EB" : "black"})
          }
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/scholarship"
          className="hover:text-blue-600"
          style={
            ({ isActive }) => ({ color: isActive ? "#2563EB" : "black"})
          }
          onClick={() => setIsMobileMenuOpen(false)}
          
        >
          Find Scholarships
        </NavLink>
        <NavHashLink
          smooth
          to="/landing#howitworks"
          scroll={scrollWithOffset}
          className="hover:text-blue-600"
          activeClassName="activelink"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          How It Works
        </NavHashLink>

        {/* Categories Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full lg:w-auto space-x-1 hover:text-blue-600"
          >
            <span>Categories</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          {isOpen && (
            <NavHashLink to="/landing#sectionc"
                smooth
                scroll={scrollWithOffset}
                activeClassName="active-hash-link"
                >
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
      (Array.isArray(selectedCategories) ? selectedCategories : []).includes(category)
        ? "bg-gray-200"
        : "hover:bg-gray-100"
    }`}
  >
    {category}
  </button>
                
              ))}
            </div>
            </NavHashLink>
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
      <div className="hidden lg:flex items-center space-x-3 lg:space-x-4">
        <div className="relative">
          <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 hover:text-blue-600" />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </div>
        <Bookmark className="h-5 w-5 sm:h-6 sm:w-6 fill-[#0000FE] text-[#0000FE]" />
        <Link
          to="/scholarship"
          className="rounded-lg bg-[#0000FE] px-4 sm:px-6 py-2 text-sm sm:text-base lg:text-lg text-white hover:bg-blue-700 transition-colors"
        >
          Apply Now
        </Link>
      </div>
    </header>
  );
};

// Added PropTypes validation
Header.propTypes = {
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedCategories: PropTypes.func.isRequired,
};

Header.defaultProps = {
  selectedCategories: [],
  setSelectedCategories: () => {},
};
export default Header;