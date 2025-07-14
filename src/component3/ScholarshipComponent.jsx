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

  // Calculate days until March 20, 2025
  const deadline = new Date("2025-03-20");
  const today = new Date("2025-05-19T00:47:00Z"); // 12:47 AM WAT on May 19, 2025
  const timeDiff = deadline.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Will be -90 since deadline passed

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto p-6 pt-12">
        <div className="flex gap-[100px]">
          {/* Left Column - Overview and Scholarship Info */}
          <div className="flex-1">
            <section id="overview" className="mt-20 scroll-mt-24">
              <h2 className="text-[#0000FE] text-5xl font-semibold mb-10 mt-18 -ml-15">Overview</h2>
              <div className="flex gap-2 mb-10 -ml-2.5">
                <span className="bg-blue-100 text-blue-700 px-2 py-0 rounded-md text-sm whitespace-nowrap">Fully Funded</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm whitespace-nowrap">STEM Research</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm whitespace-nowrap">National Scholarship</span>
              </div>
            
                <h1 className="text-4xl font-bold text-black mb-3 whitespace-nowrap">Ghana Stem <br />Excellence Scholarship</h1>
                <p className="text-[#000000]/70 text-lg mb-3">Ghana Education Trust Fund (GETFund)</p>
                <div className="flex items-center">
                  <button className="bg-[#0000FE] text-white px-6 py-2 rounded-md cursor-pointer">Apply Now</button>
                  <img
                    src={applyArrowIcon}
                    alt="Apply Arrow Icon"
                    className="ml-5 w-10 h-10"
                  />
                </div>
            </section>
          </div>

          {/* Right Column - Scholarship Details */}
          <div className="flex-2 mt-[230px]">
          
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={fundingIcon}
                    alt="Funding Icon"
                    className="w-10 h-10 mr-6"
                  />
                  <p className="text-gray-800">
                    <span className="text-xl">Full Funding + Research Grant</span>
                    <br />
                    <span>Scholarship Value</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={calendarIcon}
                    alt="Calendar Icon"
                    className="w-10 h-10 mr-6"
                  />
                  <p className="text-gray-800">
                    <span className="text-xl">20th March 2025 in {daysLeft} days</span>
                    <br />
                    <span>Application Deadline</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={peopleIcon}
                    alt="People Icon"
                    className="w-12 h-10 mr-6"
                  />
                  <p className="text-gray-800">
                    <span className="text-xl whitespace-nowrap">All Undergraduate Students in STEM fields</span>
                    <br />
                    <span>Eligibility</span>
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipComponent;