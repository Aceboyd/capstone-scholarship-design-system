import { IoBookmarkSharp } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";

import Logo from "../assets/image/user-dashboard/logo.svg";
import UserProfile from "../assets/image/user-dashboard/userprofile.png";

export default function UserHeader() {
  return (
    <div className="flex size-full items-center justify-between px-6 shadow-2xl">
      <div>
        <img
          src={Logo}
          alt="Capstone Scholarship Logo"
          className="w-full object-cover"
        />
      </div>

      <div className="flex items-center gap-4 text-[#0000FE]">
        <span>
          <IoBookmarkSharp />
        </span>

        <div className="flex items-center gap-2">
          <p className="font-bold">Adewale</p>

          <img src={UserProfile} alt="User profile image" />

          <div className="inline-flex items-center gap-2 font-medium">
            <span>
              <RiLogoutBoxRLine />
            </span>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}
