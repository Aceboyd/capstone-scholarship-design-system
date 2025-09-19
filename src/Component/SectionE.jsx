import React from 'react';
import arrowDown2 from '../assets/image/Group 88.jpg';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="relative mt-10">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${arrowDown2})`,
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[350px] flex flex-col items-center justify-center text-center px-2 sm:px-4 xl:px-10 py-8 sm:py-14 md:py-20">
        {/* Headings */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-8">
          <h1 className="text-xl sm:text-4xl xl:text-6xl text-white animate-fade-slide-up">
            Start your Journey Today!
          </h1>
          <h1 className="text-xl sm:text-4xl xl:text-6xl text-white animate-fade-slide-up">
            Apply Now
          </h1>
        </div>

        {/* Subtext */}
        <div className="flex flex-col md:flex-row items-center gap-1 sm:gap-2 lg:gap-3 mb-6 sm:mb-12 md:mb-16 px-1 sm:px-2">
          <p
            className="text-xs sm:text-lg lg:text-2xl text-white/90 animate-fade-slide-up"
            style={{ animationDelay: '200ms' }}
          >
            Don't miss your chance to join
          </p>
          <p
            className="text-xs sm:text-lg lg:text-2xl text-white/90 animate-fade-slide-up"
            style={{ animationDelay: '250ms' }}
          >
            Ghana's next generation of
          </p>
          <p
            className="text-xs sm:text-lg lg:text-2xl text-white/90 animate-fade-slide-up"
            style={{ animationDelay: '300ms' }}
          >
            innovators and changemakers.
          </p>
        </div>

        {/* CTA Button */}
        <Link to='/scholarship'><div
          
          className="inline-block bg-blue-600 text-white text-sm sm:text-lg md:text-xl font-semibold 
                     px-6 sm:px-10 md:px-16 py-2 sm:py-4 md:py-5 rounded-full 
                     transform transition-all duration-300 
                     hover:bg-blue-700 hover:scale-105 active:scale-95
                     animate-fade-slide-up shadow-md hover:shadow-xl"
          style={{ animationDelay: '400ms' }}
        >
          Apply Now
        </div></Link>
      </div>
    </div>
  );
}

export default App;
