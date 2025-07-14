import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/image/form/img.png';

const Banner2 = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bannerImage} 
          alt="Students celebrating graduation" 
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: '#949CED', opacity: 0.71 }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32 flex flex-col items-center justify-center text-center min-h-[400px] md:min-h-[500px]">
        {/* Text Content */}
        <div className="space-y-6 md:space-y-8 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Your <span className="text-[#0000FE]">STEM</span> Future starts here!
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white max-w-3xl mx-auto whitespace-nowrap -ml-10 mb-20">
            Don't miss your chance to join Ghana's next generation of innovators and changemakers.
          </p>
        </div>

        {/* Button */}
        <div className="mt-20 md:mt-12 animate-float">
          <Link 
            to="/portalStep1" 
            className="bg-[#0000FE] hover:bg-blue-700 text-white font-semibold py-4 px-18 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
