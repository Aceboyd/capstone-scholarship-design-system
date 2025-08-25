import { IoBookmarkSharp } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";

import Logo from "../assets/image/user-dashboard/logo.svg";
import UserProfile from "../assets/image/user-dashboard/userprofile.png";
import Drawer from "./UserComponent/Drawer";

export default function UserHeader() {
  return (
    <div className="flex size-full flex-col sm:flex-row items-start sm:items-center justify-between px-3 sm:px-6 py-6 shadow-2xl gap-2 sm:gap-0">
      {/* Logo */}
      <div className="max-w-[120px] sm:max-w-[180px]">
        <img
          src={Logo}
          alt="Capstone Scholarship Logo"
          className="w-full object-cover"
        />
      </div>

      {/* Right Section: Drawer (mobile), Bookmark, User Profile, Logout */}
      <div className="flex items-center gap-2 sm:gap-4 text-[#0000FE] mt-2 sm:mt-0">
        {/* Drawer for mobile */}
        <div className="md:hidden">
          <Drawer />
        </div>

        {/* Bookmark, User Profile, Logout */}
        <div className="flex items-center gap-2 sm:gap-4">
          <span>
            <IoBookmarkSharp className="text-lg sm:text-xl" />
          </span>
          <div className="flex items-center gap-1 sm:gap-2">
            <p className="font-bold text-sm sm:text-base md:block">Adewale</p>
            <img
              src={UserProfile}
              alt="User profile image"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover md:block"
            />
            <div className="inline-flex items-center gap-1 sm:gap-2 font-medium">
              <span>
                <RiLogoutBoxRLine className="text-lg sm:text-xl" />
              </span>
              <p className="text-xs sm:text-base md:block">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}