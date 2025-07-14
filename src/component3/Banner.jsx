// src/components/Banner.jsx
import React from "react";
import getfundLogo from "../assets/image/form/banner.png"; // Replace with the actual path to your logo image

const Banner = () => {
  return (
    <div className="w-full h-60 relative" role="img" aria-label="Ghana Education Trust Fund banner">
      {/* Image with Background Color */}
      <div
        className="w-full h-full bg-[#D8D9F5] bg-contain bg-center"
        style={{
          backgroundImage: `url(${getfundLogo})`,
          backgroundPosition: "center 5px", // Shifted down by 120px from the top
        }}
        alt="GETFund Logo"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0013D3] opacity-28" />
    </div>
  );
};

export default Banner;