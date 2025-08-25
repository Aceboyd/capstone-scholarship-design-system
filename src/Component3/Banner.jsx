// src/components/Banner.jsx
import React from "react";
import getfundLogo from "../assets/image/form/banner.png"; // Replace with the actual path to your logo image

const Banner = () => {
  return (
    <div className="w-full h-40 sm:h-60 lg:h-72 relative" role="img" aria-label="Ghana Education Trust Fund banner">
      {/* Image with Background Color */}
      <div
        className="w-full h-full bg-[#D8D9F5] bg-cover bg-center"
        style={{
          backgroundImage: `url(${getfundLogo})`,
          backgroundPosition: "center 5px",
        }}
        alt="GETFund Logo"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0013D3] opacity-30" />
    </div>
  );
};

export default Banner;