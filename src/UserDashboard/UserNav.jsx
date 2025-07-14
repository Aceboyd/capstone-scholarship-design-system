import { BsFillGearFill } from "react-icons/bs";
import { FaEdit, FaGraduationCap } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { HiMiniHome } from "react-icons/hi2";
import { IoIosMenu, IoMdNotifications } from "react-icons/io";
import { PiChatsCircle } from "react-icons/pi";

import helpCenterImage from "../assets/image/user-dashboard/pic2.svg";

export default function UserNav() {
  const navLists = [
    {
      icon: <IoIosMenu />,
      title: null,
    },
    {
      icon: <HiMiniHome />,
      title: "dashboard",
    },
    {
      icon: <FaEdit />,
      title: "my application",
    },
    {
      icon: <IoMdNotifications />,
      title: "notifications",
    },
    {
      icon: <FaGraduationCap />,
      title: "scholarship list",
    },
    {
      icon: <FaUser />,
      title: "profile",
    },
    {
      icon: <BsFillGearFill />,
      title: "settings",
    },
  ];

  return (
    <div className="flex size-full flex-col justify-between px-6 py-6">
      {/* Navigation */}
      {navLists.map(({ icon, title }, index) => (
        <nav key={index}>
          <div className="group flex w-fit cursor-pointer items-center gap-2 text-white">
            <span className="font text-xl">{icon}</span>

            <p className="px-1 text-lg capitalize transition-colors duration-300 group-hover:rounded group-hover:bg-white group-hover:text-[#0000FE]">
              {title}
            </p>
          </div>
        </nav>
      ))}

      {/* Support & Help Center */}
      <div className="mt-4 space-y-8 rounded-2xl bg-white px-6 py-4 text-[#0000FE]">
        <p className="text-center text-sm">
          Support & <span className="font-bold">Help Center</span>
        </p>

        <div>
          <img
            src={helpCenterImage}
            alt="Help Center Image"
            className="w-full object-cover"
          />
        </div>

        <div className="flex items-center justify-center gap-2 text-center">
          <span className="text-2xl">
            <PiChatsCircle />
          </span>

          <p className="text-sm font-bold">08091234567</p>
        </div>
      </div>
    </div>
  );
}
