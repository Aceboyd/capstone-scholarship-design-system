import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

import LogoOnly from "../UserDashboard/UserComponent/logo-only.svg";
import FilterDrawerSidebar from "./FilterDrawerSidebar";
// import HamburgerUserNav from "./HamburgerUserNav";
import iconFilter from "./icon-filtersvg.svg";

export default function FilterDrawer({ selectedFilters, setSelectedFilters }) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(selectedFilters, setSelectedFilters);

  const toggleDrawer = () => setIsOpen((prev) => !prev);

  // Disable scroll when drawer is open
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    // Cleanup when component unmounts or state changes
    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={toggleDrawer}
        className="sr-only cursor-pointer text-white"
      >
        <LuMenu size={20} color="0000FE" />
      </button>

      <button
        onClick={toggleDrawer}
        className="flex items-center gap-2 rounded-lg bg-black p-2 text-white transition-colors hover:cursor-pointer hover:bg-black/80"
      >
        <span>
          <img src={iconFilter} alt="Icon Filter" className="size-6" />
        </span>
        <p>Filters</p>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 z-40 cursor-pointer bg-black/50"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-[90%] transform bg-[#0000FE] shadow-lg transition-transform duration-300 ease-in-out sm:w-[80%] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative flex flex-col justify-between">
          <div className="flex h-full items-center justify-between px-4 pt-4">
            <Link to="/landing" className="flex items-center gap-2">
              <img
                src={LogoOnly}
                alt="Capstone Scholarship Logo"
                className="h-14 object-cover"
              />

              <p className="flex flex-col text-sm text-white">
                Capstone <span className="font-bold">Scholarship</span>
              </p>
            </Link>

            <button onClick={toggleDrawer} className="cursor-pointer">
              <IoClose size={20} color="fff" />
            </button>
          </div>

          <div>
            <FilterDrawerSidebar
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </div>
        </div>
      </div>
    </>
  );
}
