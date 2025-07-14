import React from "react";
import number1 from "../assets/image/form/one.png"; // Adjust path and filename
import number2 from "../assets/image/form/two.png"; // Adjust path and filename
import number3 from "../assets/image/form/three.png"; // Adjust path and filename
import number4 from "../assets/image/form/four.png"; // Adjust path and filename
import number5 from "../assets/image/form/five.png"; // Adjust path and filename

const HowToApply = () => {
  // Function to apply bold styling to specific phrases (if needed later)
  const highlightText = (text) => {
    return <span>{text}</span>; // Placeholder; add phrases if needed
  };

  return (
    <section
      id="how-to-apply"
      className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8 my-10"
    >
      <h2 className="text-3xl font-bold text-[#0000FE] mb-6 -ml-10">How To Apply</h2>
      <p className="text-lg text-gray-700 mb-6 whitespace-nowrap -ml-10">
        Applying for the Ghana STEM Excellence Scholarship is a simple process. Follow these steps to submit your
        <br />application successfully:
      </p>
      <div className="space-y-10">
        {[
          {
            number: number1,
            title: "Check your Eligibility",
            description:
              "Ensure you meet all the eligibility criteria before applying. Review the requirements and confirm you qualify.",
          },
          {
            number: number2,
            title: "Prepare Required Documents",
            description:
              "Gather necessary documents such as academic transcripts, recommendation letters, proof of enrollment, and a statement of purpose.",
          },
          {
            number: number3,
            title: "Complete the Online Application",
            description:
              "Fill out the official application form and double-check your details for accuracy.",
          },
          {
            number: number4,
            title: "Submit Before the Deadline",
            description:
              "Ensure you submit your application and all required documents before the 20th of March 2025 to be considered.",
          },
          {
            number: number5,
            title: "Await Confirmation & Updates",
            description:
              "After submission, you will receive an email confirmation. Stay updated on the application status via your dashboard or email notifications.",
          },
        ].map((step, idx) => (
          <div
            key={idx}
            className="bg-[#EBEDFF] p-4 rounded-lg border border-gray-300 shadow-md shadow-gray-400 w-full mx-auto" // Added max-w-xl and mx-auto
          >
            <div className="flex items-start">
              <img
                src={step.number}
                alt={`Step ${idx + 1}`}
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#0000FE] mb-2">{step.title}</h3>
                <p className="text-gray-700">{highlightText(step.description)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-lg text-gray-700 mt-6 whitespace-nowrap">
        For further details, visit{" "}
        <a href="https://scholarships.getfund.gov.gh" className="text-[#0000FE] underline">
          scholarships.getfund.gov.gh
        </a>{" "}
        or contact{" "}
        <a href="mailto:scholarships@getfund.gov.gh" className="text-[#0000FE] underline">
          scholarships@getfund.gov.gh
        </a>.
      </p>
    </section>
  );
};

export default HowToApply;