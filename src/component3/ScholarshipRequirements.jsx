import React from "react";
import scholarshipImage from "../assets/image/form/pic.png"; // Adjust the path and filename as needed

const ScholarshipRequirements = () => {
  // Function to apply bold styling to specific phrases
  const highlightText = (text) => {
    const phrases = [
      "Ghana STEM Excellence Scholarship",
      "March 20, 2025",
    ];

    let formattedText = text;
    phrases.forEach((phrase) => {
      const regex = new RegExp(`(${phrase})`, "g");
      formattedText = formattedText.replace(regex, `<span class="font-bold">$1</span>`);
    });
    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    <section
      id="scholarship-requirements"
      className="bg-[#03037E] text-white pt-10 px-4 sm:px-6 lg:px-8" // Added pt-10 for top padding
    >
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start">
        {/* Text Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">Scholarship Requirements</h2>
          <p className="text-lg mb-6 whitespace-nowrap">
              To be considered for the Ghana STEM Excellence Scholarship, applicants must meet the following requirements:
          </p>

          {/* Section 1: Supporting Documents */}
          <div className="mt-25 mb-7">
            <h3 className="text-xl font-semibold mb-5">1. Supporting Documents</h3>
            <ul className="space-y-4 text-lg ml-5">
              {[
                "Official academic transcripts from your current institution and your CV.",
                "A statement of purpose (max. 500 words) outlining your academic goals and career aspirations.",
                "Two letters of recommendation from professors or industry professionals.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">•</span>
                  {highlightText(item)}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Application Process */}
          <div>
            <h3 className="text-xl font-semibold mb-5">2. Application Process</h3>
            <ul className="space-y-4 text-lg ml-5">
              {[
                "Complete the online scholarship application form.",
                "Upload ALL required documents in PDF format.",
                "Submit your application before the deadline (March 20, 2025).",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">•</span>
                  {highlightText(item)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={scholarshipImage}
            alt="Students studying"
            className="w-full h-auto ml-30 mt-25"
          />
        </div>
      </div>
    </section>
  );
};

export default ScholarshipRequirements;