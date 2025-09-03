import React from "react";
import number1 from "../assets/image/sectionb/11.png"; 
import number2 from "../assets/image/sectionb/22.png"; 
import number3 from "../assets/image/sectionb/33.png"; 
import arrowDown1 from "../assets/image/sectionb/arrow1.png"; 
import arrowDown2 from "../assets/image/sectionb/arrow2.png"; 

const SectionB = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 uppercase">
          How <span className="text-[#0404FE]">Capstone</span> Works
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-black mb-12">
          Start getting Scholarships in three simple steps!
        </p>

        {/* Steps */}
        <div className="flex flex-col items-center space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center w-full">
            {/* Number */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 flex-shrink-0">
              <img src={number1} alt="Step 1" className="w-full h-full object-contain" />
            </div>

            {/* Text */}
            <div className="mt-4 md:mt-0 md:ml-10 text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase mb-2">
                Find Scholarships
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-black">
                Easily discover scholarships tailored to your
                qualifications and find the best opportunities for you.
              </p>
            </div>
          </div>

          {/* Arrow 1 */}
          <img
            src={arrowDown1}
            alt="Arrow"
            className="hidden md:block w-24 h-auto -mt-8 mb-4"
          />

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:justify-center w-full">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 flex-shrink-0">
              <img src={number2} alt="Step 2" className="w-full h-full object-contain" />
            </div>
            <div className="mt-4 md:mt-0 md:mr-10 text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase mb-2">
                Apply for Scholarships
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-black">
                Submit your scholarship application easily with guided steps and requirements.
              </p>
            </div>
          </div>

          {/* Arrow 2 */}
          <img
            src={arrowDown2}
            alt="Arrow"
            className="hidden md:block w-24 h-auto -mt-8 mb-4"
          />

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center w-full">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 flex-shrink-0">
              <img src={number3} alt="Step 3" className="w-full h-full object-contain" />
            </div>
            <div className="mt-4 md:mt-0 md:ml-10 text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase mb-2">
                Track Applications
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-black">
                Stay updated on your application status, receive timely feedback, and track your progress—all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionB;
