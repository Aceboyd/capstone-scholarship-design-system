import React from 'react';
import bannerImage from '../assets/image/form/img.png';

const Banner3 = () => {
  return (
    <div
      className="relative w-full overflow-hidden h-56 sm:h-72 md:h-96 lg:h-[500px]"
      role="img"
      aria-label="Application submitted banner"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImage}
          alt="Students celebrating graduation"
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: '#949CED', opacity: 0.71 }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center text-center h-full">
        {/* Text Content */}
        <div className="space-y-4 sm:space-y-6 animate-fadeIn px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Application Submitted Successfully 🎉👩‍🎓
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner3;