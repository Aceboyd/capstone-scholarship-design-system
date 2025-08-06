import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

import HamburgerUserNav from "./HamburgerUserNav";
import LogoOnly from "./logo-only.svg";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

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
      <button onClick={toggleDrawer} className="cursor-pointer text-white">
        <LuMenu size={20} color="0000FE" />
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
        className={`fixed top-0 left-0 z-50 h-full w-64 transform bg-[#0000FE] shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between">
          <div className="flex h-full items-center justify-between border-b border-red-500 p-4">
            <div className="flex items-center gap-2">
              <img
                src={LogoOnly}
                alt="Capstone Scholarship Logo"
                className="h-10 object-cover"
              />

              <p className="flex flex-col text-sm text-white">
                Capstone <span className="font-bold">Scholarship</span>
              </p>
            </div>

            <span></span>

            <button onClick={toggleDrawer} className="cursor-pointer">
              <IoClose size={20} color="fff" />
            </button>
          </div>

          <aside className="h-full space-y-4 p-4 text-white">
            <HamburgerUserNav />
          </aside>
        </div>
      </div>
    </>
  );
}
