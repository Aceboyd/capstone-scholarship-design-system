import { IoBookmarkSharp } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";

import Logo from "../assets/image/user-dashboard/logo.svg";
import UserProfile from "../assets/image/user-dashboard/userprofile.png";
import Drawer from "./UserComponent/Drawer";

export default function UserHeader() {
  return (
    <div className="flex size-full items-center justify-between px-6 py-6 shadow-2xl">
      <div className="hidden md:block">
        <img
          src={Logo}
          alt="Capstone Scholarship Logo"
          className="w-full object-cover"
        />
      </div>

      <div className="md:hidden">
        <Drawer />
      </div>

      <div className="flex items-center gap-4 text-[#0000FE]">
        <span>
          <IoBookmarkSharp />
        </span>

        <div className="flex items-center gap-2">
          <p className="hidden font-bold md:block">Adewale</p>

          <img
            src={UserProfile}
            alt="User profile image"
            className="hidden md:block"
          />

          <div className="inline-flex items-center gap-2 font-medium">
            <span>
              <RiLogoutBoxRLine />
            </span>
            <p className="hidden md:block">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}