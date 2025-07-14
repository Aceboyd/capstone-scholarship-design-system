import React from 'react';
import bannerImage from '../assets/image/form/img.png';

const Banner3 = () => {
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
            Application Submitted Successfully 🎉👩‍🎓
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner3;