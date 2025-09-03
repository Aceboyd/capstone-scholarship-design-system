import React from "react";
import number1Image from "../assets/image/form/1.png";
import number2Image from "../assets/image/form/2.png";
import number3Image from "../assets/image/form/3.png";
import number4Image from "../assets/image/form/4.png";
import number5Image from "../assets/image/form/5.png";

const Steps2 = ({ progress, step2Progress, appStatus }) => {
  const stepDetails = [
    {
      label: "STEP 1",
      title: "Personal Details",
      imagestep: number1Image,
      status: "Completed",
      style:
        "mt-1 sm:text-[8px] md:text-[10px] lg:text-xs text-[#0000FE] rounded-full px-1 lg:px-2 w-full lg:w-[60%] text-center bg-[#CCCFFF]",
      style2: "bg-[#0000FE]",
      borderColor: "border-[#0000FE]",
    },
    {
      label: "STEP 2",
      title: "Academic Information",
      imagestep: number2Image,
      status: appStatus,
      style:
        step2Progress > 0
          ? "mt-1 sm:text-[8px] md:text-[10px] lg:text-xs text-[#0000FE] border border-[#0000FE] rounded-full px-1 lg:px-2 w-[80%] lg:w-[60%] text-center"
          : "mt-1 sm:text-[8px] md:text-[10px] lg:text-xs text-gray-500 border border-gray-500 rounded-full px-1 lg:px-2 w-[80%] lg:w-[60%] text-center",
      style2: step2Progress > 0 ? "bg-[#0000FE]" : "bg-gray-200",
      borderColor: step2Progress > 0 ? "border-[#BFDBFE]" : "border-gray-500",
    },
    {
      label: "STEP 3",
      title: "Supporting Documents",
      imagestep: number3Image,
      status: "Not Started",
      style:
        "mt-1 sm:text-[8px] md:text-[10px] lg:text-xs text-gray-500 border border-gray-500 rounded-full px-1 lg:px-2 w-[80%] lg:w-[60%] text-center",
      style2: "bg-gray-200",
      borderColor: "border-gray-500",
    },
    {
      label: "STEP 4",
      title: "Write your Statement of Purpose",
      imagestep: number4Image,
      status: "Not Started",
      style:
        "mt-1 sm:text-[8px] md:text-[10px] lg:text-xs text-gray-500 border border-gray-500 rounded-full px-1 lg:px-2 w-[80%] lg:w-[60%] text-center",
      style2: "bg-gray-200",
      borderColor: "border-gray-500",
    },
    {
      label: "STEP 5",
      title: "Review Application and Submit",
      imagestep: number5Image,
      status: "Not Started",
      style:
        "mt-1 sm:text-[8px] md:text-[10px] lg:text-xs text-gray-500 border border-gray-500 rounded-full px-1 lg:px-2 w-[80%] lg:w-[60%] text-center",
      style2: "bg-gray-200",
      borderColor: "border-gray-500",
    },
  ];

  return (
    <div className="mb-8">
      {/* Stepper (Desktop) */}
      <div className="flex flex-row items-center w-full overflow-x-auto justify-center mx-auto p-4">
        <div className="flex items-center justify-between w-full max-w-6xl gap-2 max-md:hidden">
          {stepDetails.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col w-1/5 h-40 items-center">
                {/* Circle with number image */}
                <div
                  className={`w-10 h-10 rounded-full border-2 border-dashed flex items-center justify-center ${step.borderColor}`}
                >
                  <img
                    src={step.imagestep}
                    className="w-5 h-5 object-contain"
                    alt={step.label}
                  />
                </div>

                {/* Progress Bar */}
                <div className="flex w-[90%] h-1 bg-gray-200 rounded-full mt-2">
                  <div
                    className={`h-full rounded-full ${step.style2}`}
                    style={
                      step.label === "STEP 1"
                        ? { width: "100%" }
                        : step.label === "STEP 2"
                        ? { width: `${step2Progress}%` }
                        : { width: "0%" }
                    }
                  ></div>
                </div>

                {/* Labels */}
                <span className="text-sm text-gray-500 mt-2">{step.label}</span>
                <span className="text-[8px] lg:text-[15px] xl:text-sm text-center text-gray-700 whitespace-pre">
                  {step.title}
                </span>
                <span className={`${step.style} text-[8px]`}>{step.status}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Mobile Actions */}
      <div className="w-full px-4 pb-4 flex justify-between text-[12px] items-center md:hidden bg-[#FAFAFF]">
        <button className="px-4 py-1 bg-[#0000FE] text-white rounded font-bold">
          Save Progress
        </button>
        <button className="px-4 py-1 bg-white text-[#0000FE] rounded border border-blue-800 font-bold">
          Back to Homepage
        </button>
      </div>

      {/* Application Progress */}
      <div className="mb-20 lg:w-2/3 px-2 lg:px-5 ml-20">
        <h2 className="text-sm sm:text-xl md:text-3xl font-bold text-gray-800 mb-3.5">
          Ghana STEM Excellence Scholarship Application Form
        </h2>
        <div className="flex items-center mt-2">
          <span className="text-xl text-gray-600">Application status:</span>
          <div className="w-50 h-2.5 bg-gray-200 rounded-full ml-2">
            <div
              className="h-full rounded-full bg-[#0000FE]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="ml-2 text-sm text-[#0000FE]">{appStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default Steps2;
