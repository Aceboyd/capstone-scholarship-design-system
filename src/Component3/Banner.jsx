// src/components/Banner.jsx
import React from "react";
import getfundLogo from "../assets/image/form/banner.png"; // Replace with the actual path to your logo image

const Banner = () => {
  return (
    <div
      className="w-full h-32 sm:h-40 md:h-56 lg:h-72 relative flex items-center justify-center"
      role="img"
      aria-label="Ghana Education Trust Fund banner"
    >
      {/* Image with Background Color */}
      <div
        className="w-full h-full bg-[#D8D9F5] bg-cover bg-center rounded-lg max-[500px]:rounded-none"
        style={{
          backgroundImage: `url(${getfundLogo})`,
          backgroundPosition: "center 5px",
          backgroundSize: "cover",
        }}
        alt="GETFund Logo"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0013D3] opacity-30 rounded-lg max-[500px]:rounded-none" />
    </div>
  );
};

export default Banner;