import React from "react";
import { Link } from "react-router-dom";

const Steps3 = ({ progress, appStatus }) => {
  const adjustedProgress = appStatus === "In Progress" ? 70 : 40; // 40% default, 70% (40% + 30%) when files uploaded

  const stepDetails = [
    {
      label: "STEP 1",
      title: <>Personal <br /> Details</>,
      number: "1",
      style:
        "text-[9px] sm:text-[10px] lg:text-[11px] text-[#0000FE] border border-[#CCCFFF] bg-[#CCCFFF] rounded-full px-2 w-[70%] lg:w-[60%] text-center whitespace-nowrap font-medium",
      status: "Completed",
      style2: "bg-[#0000FE]",
      borderColor: "border-[#0000FE]",
      textStroke: "#0000FE",
      textColor: "#0000FE",
      completed: true,
      progressFill: "100%",
    },
    {
      label: "STEP 2",
      title: <>Academic <br /> Information</>,
      number: "2",
      style:
        "text-[9px] sm:text-[10px] lg:text-[11px] text-[#0000FE] border border-[#CCCFFF] bg-[#CCCFFF] rounded-full px-2 w-[70%] lg:w-[60%] text-center whitespace-nowrap font-medium",
      status: "Completed",
      style2: "bg-[#0000FE]",
      borderColor: "border-[#0000FE]",
      textStroke: "#0000FE",
      textColor: "#0000FE",
      completed: true,
      progressFill: "100%",
    },
    {
      label: "STEP 3",
      title: <>Supporting <br /> Documents</>,
      number: "3",
      style:
        appStatus === "In Progress"
          ? "text-[9px] sm:text-[10px] lg:text-[11px] text-[#0000FE] border border-[#0000FE] rounded-full px-2 w-[70%] lg:w-[60%] text-center whitespace-nowrap"
          : "text-[9px] sm:text-[10px] lg:text-[11px] text-gray-400 border border-gray-400 rounded-full px-2 w-[70%] lg:w-[60%] text-center whitespace-nowrap",
      status: appStatus,
      style2: appStatus === "In Progress" ? "bg-[#0000FE]" : "bg-gray-200",
      borderColor: appStatus === "In Progress" ? "border-[#CCCFFF]" : "border-gray-400",
      textStroke: appStatus === "In Progress" ? "#0000FE" : "gray",
      circleBackground: "transparent",
      progressFill: `${(progress - 40) * 5}%`, // Step 3 contributes 0-20% to step-specific progress bar
    },
    {
      label: "STEP 4",
      title: <>Statement <br /> of Purpose</>,
      number: "4",
      style:
        "text-[9px] sm:text-[10px] lg:text-[11px] text-gray-400 border border-gray-400 rounded-full px-2 w-[70%] lg:w-[60%] text-center whitespace-nowrap",
      status: "Not Started",
      style2: "bg-gray-200",
      borderColor: "border-gray-400",
      textStroke: "gray",
      progressFill: "0%",
    },
    {
      label: "STEP 5",
      title: <>Review Application <br /> and Submit</>,
      number: "5",
      style:
        "text-[9px] sm:text-[10px] lg:text-[11px] text-gray-400 border border-gray-400 rounded-full px-2 w-[70%] lg:w-[60%] text-center whitespace-nowrap",
      status: "Not Started",
      style2: "bg-gray-200",
      borderColor: "border-gray-400",
      textStroke: "gray",
      progressFill: "0%",
    },
  ];

  return (
    <div className="mb-8">
      {/* Steps and Progress Bar */}
      <div className="flex flex-row items-center w-full overflow-x-auto justify-center mx-auto p-4 max-md:hidden">
        <div className="flex items-center justify-between w-full max-w-6xl gap-2">
          {stepDetails.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-row h-40 relative">
                {/* Circle with number */}
                <div
                  className={`w-12 h-12 rounded-full border-2 border-dashed flex items-center justify-center ${step.borderColor}`}
                  style={{ backgroundColor: step.circleBackground || "transparent" }}
                >
                  <span
                    className={`text-2xl font-bold ${step.textColor ? `text-[${step.textColor}]` : "text-transparent"}`}
                    style={step.textColor ? {} : { WebkitTextStroke: `1.5px ${step.textStroke}` }}
                  >
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-1/5 h-40 mt-7">
                {/* Step-specific progress bar */}
                <div className="flex w-[90%] h-1 bg-gray-200 rounded-full">
                  <div
                    className={`h-full rounded-full ${step.style2} transition-all duration-500`}
                    style={{ width: step.progressFill }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 mt-1">{step.label}</span>
                <span className="text-[8px] lg:text-[15px] xl:text-sm text-start text-gray-700 whitespace-pre-line">
                  {step.title}
                </span>
                {/* Fully rounded rectangle around status */}
                <span className={`${step.style} rounded-full`}>{step.status}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Title and Application Status */}
      <div className="w-full px-4 pb-4 flex justify-between text-[12px] items-center md:hidden bg-[#FAFAFF]">
        <button className="px-5 py-2 bg-[#0000FE] text-sm text-white rounded font-bold cursor-pointer">
              Save Progress
            </button>
            <Link to='/landing'><button className="px-5 py-2 bg-white text-sm text-[#0000FE] rounded border border-blue-800 font-bold cursor-pointer">
              Back to Homepage
            </button></Link>
      </div>
      <div className="mb-20 lg:w-2/3 px-2 lg:px-5 lg:ml-20 max-lg:text-center max-md:mt-7">
        <h2 className="text-sm sm:text-xl md:text-3xl font-medium text-gray-800 mb-3.5">
          Ghana STEM Excellence Scholarship Application Form
        </h2>
        <div className="max-lg:px-5 flex items-center max-md:justify-center max-md:mx-auto mt-2">
          <span className="text-[10px] sm:text-sm text-gray-600">Application status:</span>
          <div className="w-30 md:w-50 h-2.5 bg-gray-200 rounded-full ml-2">
            <div
              className="h-full rounded-full bg-[#0000FE] transition-all duration-700"
              style={{ width: `${adjustedProgress}%` }}
            ></div>
          </div>
          <span className="ml-2 text-sm text-[#0000FE]">
            {adjustedProgress >= 100 ? "Completed" : appStatus}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Steps3;