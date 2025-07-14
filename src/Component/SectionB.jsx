import React from 'react';
import number1 from '../assets/image/sectionb/11.png'; // Number 1 PNG
import number2 from '../assets/image/sectionb/22.png'; // Number 2 PNG
import number3 from '../assets/image/sectionb/33.png'; // Number 3 PNG
import arrowDown1 from '../assets/image/sectionb/arrow1.png'; // Dashed arrow 1
import arrowDown2 from '../assets/image/sectionb/arrow2.png'; // Dashed arrow 2

const SectionB = () => {
  return (
    <div className="bg-[#ffffff] pt-20 md:py-12 px-2 md:px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#000000] mb-2 uppercase">
          How <span className='text-[#0404FE]'>Capstone</span> Works
        </h2>
        <p className="text-sm md:text-[17px] text-[#000000] mb-6 md:mb-30">
          Start getting Scholarships in three simple steps!
        </p>

        {/* Vertical Steps Layout */}
        <div className="flex flex-col items-center space-y-4">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full md:-mr-25">
            {/* Number 1 */}
            <div className="relative" style={{ width: '250px', height: '250px', maxWidth: '100%', md: { width: '250px', height: '250px' } }}>
              <img src={number1} alt="Number 1" className="w-full h-full" />
            </div>
            {/* Content (Title, Description, Illustration Placeholder) */}
            <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 md:ml-16 text-center md:text-left">
              <h3 className="text-xl md:text-[35px] font-bold text-[#000000] mb-2 uppercase">
                Find Scholarships
              </h3>
              <p className="text-[#000000] text-sm md:text-[15px]">
                Easily discover scholarships tailored to your<br />
                qualifications and find the best opportunities for you.
              </p>
              <div className="w-20 h-20 md:w-28 md:h-28 md:md:w-32 md:md:h-32 mt-2 md:mt-4 hidden md:block">
                {/* Illustration removed, hidden on mobile */}
              </div>
            </div>
          </div>

          {/* Arrow 1 - Hidden on mobile */}
          <img
            src={arrowDown1}
            alt="Dashed arrow pointing down from Step 1 to Step 2"
            className="hidden md:block h-105 w-auto -mt-[120px] -mb-1 -ml-170"
          />

          {/* Step 2 - Reversed Order */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full md:-mt-[110px] md:ml-24">
            {/* Number 2 */}
            <div
              className="relative md:ml-40 md:mb-14 md:-mt-36"
              style={{ width: '250px', height: '250px', maxWidth: '100%', md: { width: '250px', height: '250px' } }}
            >
              <img src={number2} alt="Number 2" className="w-full h-full" />
            </div>
            {/* Content (Title, Description, Illustration Placeholder) */}
            <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 md:-mr-20 md:-mt-10 text-center md:text-left">
              <h3 className="text-xl md:text-[35px] font-bold text-[#000000] mb-2 uppercase">
                Apply for <br />Scholarships
              </h3>
              <p className="text-[#000000] text-sm md:text-[15px]">
                Submit your scholarship application easily<br />
                with guided steps and requirements.
              </p>
              <div className="w-20 h-20 md:w-28 md:h-28 md:md:w-32 md:md:h-32 mt-2 md:mt-4 hidden md:block">
                {/* Illustration removed, hidden on mobile */}
              </div>
            </div>
          </div>

          {/* Arrow 2 - Hidden on mobile */}
          <img
            src={arrowDown2}
            alt="Dashed arrow pointing down from Step 2 to Step 3"
            className="hidden md:block h-150 w-auto -mt-[380px] -ml-20"
          />

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full md:-mt-39 md:-mr-37">
            {/* Number 3 */}
            <div className="relative" style={{ width: '250px', height: '250px', maxWidth: '100%', md: { width: '250px', height: '250px' } }}>
              <img src={number3} alt="Number 3" className="w-full h-full" />
            </div>
            {/* Content (Title, Description, Illustration Placeholder) */}
            <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 md:ml-16 text-center md:text-left">  
              <h3 className="text-xl md:text-[35px] font-bold text-[#000000] mb-2 uppercase">
                Track Applications
              </h3>
              <p className="text-[#000000] text-sm md:text-[15px]">
                Stay updated on your application status, receive<br />
                timely feedback, and track your progress—all in one place
              </p>
              <div className="w-20 h-20 md:w-28 md:h-28 md:md:w-32 md:md:h-32 mt-2 md:mt-4 hidden md:block">
                {/* Illustration removed, hidden on mobile */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionB;