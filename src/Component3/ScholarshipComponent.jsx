// src/components/ScholarshipComponent.jsx
import React from "react";
import fundingIcon from "../assets/image/form/dollar.png"; // Placeholder import for funding icon
import calendarIcon from "../assets/image/form/calender.png"; // Placeholder import for calendar icon
import peopleIcon from "../assets/image/form/contact.png"; // Placeholder import for people icon
import applyArrowIcon from "../assets/image/form/bookmark.png"; // Placeholder import for arrow icon beside Apply button

const ScholarshipComponent = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Calculate days until March 20, 2025 (use current date at runtime)
  const deadline = new Date("2025-03-20");
  const today = new Date();
  const timeDiff = deadline.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto p-6 pt-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-24">
          {/* Left Column - Overview and Scholarship Info */}
          <div className="flex-1">
            <section id="overview" className="mt-8 md:mt-20 scroll-mt-24">
              <h2 className="text-[#0000FE] text-2xl md:text-5xl font-semibold mb-4 md:mb-10">Overview</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm">Fully Funded</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm">STEM Research</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm">National Scholarship</span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold text-black mb-3">Ghana STEM Excellence Scholarship</h1>
              <p className="text-[#000000]/70 text-base md:text-lg mb-3">Ghana Education Trust Fund (GETFund)</p>
              <div className="flex items-center gap-4 md:gap-6">
                <button className="bg-[#0000FE] text-white px-6 py-2 rounded-md cursor-pointer w-full md:w-auto text-center">Apply Now</button>
                <img
                  src={applyArrowIcon}
                  alt="Apply Arrow Icon"
                  className="ml-0 md:ml-4 w-8 h-8 md:w-10 md:h-10"
                />
              </div>
            </section>
          </div>

          {/* Right Column - Scholarship Details */}
          <aside className="w-full md:w-1/3 mt-6 md:mt-0">
            <div className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-sm">
              <div className="flex items-start gap-3">
                <img
                  src={fundingIcon}
                  alt="Funding Icon"
                  className="w-10 h-10"
                />
                <div className="text-gray-800">
                  <div className="text-lg font-semibold">Full Funding + Research Grant</div>
                  <div className="text-sm">Scholarship Value</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img
                  src={calendarIcon}
                  alt="Calendar Icon"
                  className="w-10 h-10"
                />
                <div className="text-gray-800">
                  <div className="text-lg font-semibold">20th March 2025 · {Math.abs(daysLeft)} {daysLeft >= 0 ? 'days left' : 'days ago'}</div>
                  <div className="text-sm">Application Deadline</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img
                  src={peopleIcon}
                  alt="People Icon"
                  className="w-10 h-10"
                />
                <div className="text-gray-800">
                  <div className="text-lg font-semibold">All Undergraduate Students in STEM fields</div>
                  <div className="text-sm">Eligibility</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipComponent;