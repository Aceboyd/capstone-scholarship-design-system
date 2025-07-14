import { Link } from "react-router-dom";

import logo from "../assets/image/nice.png";

let Navbar = (props) => {
  return (
    <div className="">
      <div className="ml-8 flex items-center justify-between max-[800px]:flex-col max-[800px]:space-y-4">
        {/* Logo */}
        <div>
          <Link to={`/signup`}>
            <img
              src={logo}
              className="h-30 w-40 max-[800px]:h-12 max-[800px]:w-12"
              alt="logo"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-10 min-[800px]:text-xl">
          <p>Home</p>
          <p>Find Scholarships</p>
          <p>How It Works</p>
          <p className="flex items-center">
            Categories
            <img
              src="/down-arrow.png"
              className="col-start-4 ml-1"
              alt="down arrow"
            />
          </p>
        </div>

        {/* User Actions */}
        <div className="flex items-center max-[800px]:flex-col min-[800px]:gap-10">
          <div className="flex items-center gap-5 justify-self-end">
            <img
              src="/notification.png"
              className="cursor-pointer"
              alt="notification"
            />
            <button className="cursor-pointer rounded-md bg-[#0000FE] p-2 px-6 text-white max-[700px]:text-xs">
              Apply Now
            </button>
          </div>
          <img
            src="/profile.png"
            className="mt-2 h-10 w-10 max-[500px]:h-8 max-[500px]:w-8"
            alt="profile image"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
