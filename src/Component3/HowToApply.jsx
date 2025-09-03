import React from "react";
import number1 from "../assets/image/form/one.png";
import number2 from "../assets/image/form/two.png";
import number3 from "../assets/image/form/three.png";
import number4 from "../assets/image/form/four.png";
import number5 from "../assets/image/form/five.png";

const HowToApply = () => {
  // Function to apply bold styling to specific phrases
  const highlightText = (text) => {
    const phrases = ["20th of March 2025"];
    let formattedText = text;
    phrases.forEach((phrase) => {
      const regex = new RegExp(`(${phrase})`, "g");
      formattedText = formattedText.replace(regex, `<span class="font-bold">$1</span>`);
    });
    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    <section
      id="how-to-apply"
      className="mx-auto max-w-5xl py-8 px-4 sm:px-6 lg:px-8 my-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0000FE] mb-4">How To Apply</h2>
      <p className="text-base sm:text-lg text-gray-700 mb-6">
        Applying for the Ghana STEM Excellence Scholarship is a simple process. Follow these steps to
        submit your application successfully:
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
            className="bg-[#EBEDFF] p-4 rounded-lg border border-gray-300 shadow-sm w-full mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src={step.number}
                alt={`Step ${idx + 1}`}
                className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#0000FE] mb-1">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700">{highlightText(step.description)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-base sm:text-lg text-gray-700 mt-6">
        For further details, visit{" "}
        <a
          href="https://scholarships.getfund.gov.gh"
          className="text-[#0000FE] underline"
          aria-label="Visit GETFund Scholarships website"
        >
          scholarships.getfund.gov.gh
        </a>{" "}
        or contact{" "}
        <a
          href="mailto:scholarships@getfund.gov.gh"
          className="text-[#0000FE] underline"
          aria-label="Email GETFund Scholarships"
        >
          scholarships@getfund.gov.gh
        </a>.
      </p>
    </section>
  );
};

export default HowToApply;