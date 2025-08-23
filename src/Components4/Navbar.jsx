import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/nice.png";

let Navbar = (props) => {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative p-4 md:p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to={`/`}>
            <img
              src={logo}
              className="h-16 w-28 md:h-20 md:w-32" // Slightly adjusted sizes
              alt="logo"
            />
          </Link>
        </div>

        {/* Desktop Menu (hidden on mobile) */}
        <div className="hidden min-[800px]:flex items-center gap-10 text-xl">
          {/* Navigation Links */}
          <div className="flex items-center gap-10">
            <p className="cursor-pointer hover:text-[#0000FE]">Home</p>
            <p className="cursor-pointer hover:text-[#0000FE]">Find Scholarships</p>
            <p className="cursor-pointer hover:text-[#0000FE]">How It Works</p>
            <p className="flex items-center cursor-pointer hover:text-[#0000FE]">
              Categories
              <img
                src="/down-arrow.png"
                className="ml-1"
                alt="down arrow"
              />
            </p>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-5">
              <img
                src="/notification.png"
                className="cursor-pointer"
                alt="notification"
              />
              <button className="cursor-pointer rounded-md bg-[#0000FE] p-2 px-6 text-white hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
            <img
              src="/profile.png"
              className="h-10 w-10"
              alt="profile image"
            />
          </div>
        </div>

        {/* Hamburger Menu Button (visible on mobile) */}
        <div className="min-[800px]:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              // Close Icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOpen && (
        <div className="min-[800px]:hidden absolute top-24 left-0 flex w-full flex-col items-center justify-center gap-8 bg-white p-8 shadow-lg rounded-lg z-50">
          {/* Navigation Links */}
          <p className="cursor-pointer text-lg">Home</p>
          <p className="cursor-pointer text-lg">Find Scholarships</p>
          <p className="cursor-pointer text-lg">How It Works</p>
          <p className="flex items-center cursor-pointer text-lg">
            Categories
            <img
              src="/down-arrow.png"
              className="ml-1"
              alt="down arrow"
            />
          </p>

          {/* User Actions */}
          <div className="flex items-center gap-5">
            <img
              src="/notification.png"
              className="cursor-pointer"
              alt="notification"
            />
            <button className="cursor-pointer rounded-md bg-[#0000FE] p-2 px-6 text-white">
              Apply Now
            </button>
          </div>
          <img
            src="/profile.png"
            className="h-10 w-10"
            alt="profile image"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;