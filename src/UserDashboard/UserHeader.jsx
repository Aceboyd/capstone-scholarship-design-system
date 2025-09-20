import { useState } from "react";
import { IoBookmarkSharp, IoBookmarkOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import Logo from "../assets/image/user-dashboard/logo.svg";
import UserProfile from "../assets/image/user-dashboard/userprofile.png";
import Drawer from "./UserComponent/Drawer";

export default function UserHeader() {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <div className="flex size-full items-center justify-between px-6 py-6 shadow-2xl">
      <Link to="/landing" className="hidden md:block">
        <img
          src={Logo}
          alt="Capstone Scholarship Logo"
          className="w-full object-cover"
        />
      </Link>

      <div className="md:hidden">
        <Drawer />
      </div>

      <div className="flex items-center gap-4 text-[#0000FE]">
        <span
          onClick={() => setIsFilled(!isFilled)}
          className="transition-transform hover:scale-105 hover:cursor-pointer"
        >
          {isFilled ? <IoBookmarkSharp /> : <IoBookmarkOutline />}
        </span>

        <div className="flex items-center gap-2">
          <p className="hidden font-bold md:block">Adewale</p>

          <img
            src={UserProfile}
            alt="User profile image"
            className="hidden md:block"
          />

          <Link
            to="/landing"
            className="inline-flex items-center gap-2 font-medium transition-transform hover:scale-102"
          >
            <span>
              <RiLogoutBoxRLine />
            </span>
            <p className="hidden md:block">Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
