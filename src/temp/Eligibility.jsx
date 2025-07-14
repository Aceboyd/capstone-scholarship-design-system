import React from "react";
import checkmark from "../assets/image/form/mark.png"; // Adjust the path and filename as needed

const Eligibility = () => {
  // Function to apply bold and black styling to specific phrases
  const highlightText = (text) => {
    const phrases = [
      "Ghana STEM Excellence Scholarship",
      "Ghanaian citizen",
      "undergraduate students",
      "STEM disciplines",
      "GPA of 3.5/4.0",
      "STEM research, innovation, and development",
      "low-income backgrounds",
      "STEM-related projects, hackathons, or innovation competitions",
      "personal statement, CV, transcripts, and a recommendation letter",
    ];

    let formattedText = text;
    phrases.forEach((phrase) => {
      const regex = new RegExp(`(${phrase})`, "g");
      formattedText = formattedText.replace(regex, `<span class="font-bold text-black">$1</span>`);
    });
    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    <section
      id="eligibility-criteria"
      className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8 my-10 mt-20 scroll-mt-24 ml-50"
    >
      <h2 className="text-3xl font-extrabold text-[#0000FE] mb-4">Eligibility Criteria</h2>
      <p className="text-lg text-[#000000] mb-6 whitespace-nowrap">
        {highlightText(
          "The Ghana STEM Excellence Scholarship is open to outstanding students who meet the following criteria:"
        )}
      </p>
      <ul className="space-y-5 text-gray-700 text-lg whitespace-nowrap">
        {[
          "Must be a Ghanaian citizen or a permanent resident.",
          "Open to undergraduate students currently enrolled in a recognised Ghanaian university.",
          "Must be pursuing a degree in STEM disciplines (Science, Technology, Engineering, or Mathematics).",
          "Must have a minimum GPA of 3.5/4.0 or its equivalent in their most recent academic year.",
          "Must demonstrate a keen interest in STEM research, innovation, and development.",
          "Preference may be given to students from low-income backgrounds who require financial assistance.",
          "Involvement in STEM-related projects, hackathons, or innovation competitions is an added advantage.",
          "Must submit a personal statement, CV, transcripts, and a recommendation letter from an academic <br />advisor or professor.",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start">
            <img
              src={checkmark}
              alt="Checkmark"
              className="mr-2 w-5 h-5"
            />
            {highlightText(item)}
          </li>
        ))}
      </ul>
      <p className="text-lg text-[#0000FE] mt-6 italic">
        <span className="font-semibold">Note:</span> Applicants must not be receiving full funding from another scholarship program.
      </p>
    </section>
  );
};

export default Eligibility;