import React from "react";

const Steps = ({ progress, appStatus }) => {
  const stepDetails = [
    {
      label: "STEP 1",
      title: (
        <>
          Personal <br /> Details
        </>
      ),
      number: "1",
      style:
        appStatus === "In Progress"
          ? "mt-1 text-[9px] sm:text-[10px] lg:text-[11px] text-[#0000FE] border border-[#0000FE] border-opacity-50 rounded-full px-1 lg:px-2 w-[70%] lg:w-[60%] text-center whitespace-nowrap"
          : "mt-1 text-[9px] sm:text-[10px] lg:text-[11px] text-gray-400 border-[0.3px] border-gray-400 rounded-full px-1 lg:px-2 w-[70%] lg:w-[60%] text-center whitespace-nowrap",
      status: appStatus,
      style2: progress > 0 ? "bg-[#0000FE]" : "bg-gray-200",
      borderColor: progress > 0 ? "border-[#CCCFFF]" : "border-gray-400",
      textStroke: progress > 0 ? "#0000FE" : "gray",
    },
    {
      label: "STEP 2",
      title: (
        <>
          Academic <br /> Information
        </>
      ),
      number: "2",
      style:
        "text-[9px] sm:text-[10px] lg:text-[11px] text-gray-400 border-[0.3px] border-gray-400 rounded-full px-1 lg:px-2 w-[70%] lg:w-[60%] text-center whitespace-nowrap",
      status: "Not Started",
      style2: "bg-gray-200",
      borderColor: "border-gray-400",
      textStroke: "gray",
    },
    {
      label: "STEP 3",
      title: (
        <>
          Supporting <br /> Documents
        </>
      ),
      number: "3",
      style:
        "text-[9px] sm:text-[10px] lg:text-[11px] text-gray-400 border-[0.3px] border-gray-400 rounded-full px-1 lg:px-2 w-[70%] lg:w-[60%] text-center whitespace-nowrap",
      status: "Not Started",
      style2: "bg-gray-200",
      borderColor: "border-gray-400",
      textStroke: "gray",
    },
    {
      label: "STEP 4",
      title: (
        <>
          Statement <br /> of Purpose
        </>
      ),
      number: "4",
      style:
        "text-[9px] sm:text-[10px] lg:text-[11px] text-gray-400 border-[0.3px] border-gray-400 rounded-full px-1 lg:px-2 w-[70%] lg:w-[60%] text-center whitespace-nowrap",
      status: "Not Started",
      style2: "bg-gray-200",
      borderColor: "border-gray-400",
      textStroke: "gray",
    },
    {
      label: "STEP 5",
      title: (
        <>
          Review Application <br /> and Submit
        </>
      ),
      number: "5",
      style:
        "text-[9px] sm:text-[10px] lg:text-[11px] text-gray-400 border-[0.3px] border-gray-400 rounded-full px-1 lg:px-2 w-[70%] lg:w-[60%] text-center whitespace-nowrap",
      status: "Not Started",
      style2: "bg-gray-200",
      borderColor: "border-gray-400",
      textStroke: "gray",
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
                {/* Circle with outlined number */}
                <div
                  className={`w-12 h-12 rounded-full border-2 border-dashed flex items-center justify-center ${step.borderColor}`}
                >
                  <span
                    className="text-2xl font-bold text-transparent"
                    style={{
                      WebkitTextStroke: `1.5px ${step.textStroke}`,
                    }}
                  >
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-1/5 h-40 mt-7">
                <div className={`flex w-[90%] h-1 bg-gray-200 rounded-full`}>
                  <div
                    className={`h-full rounded-full ${step.style2} transition-all duration-500`}
                    style={{
                      width: step.label === "STEP 1" ? `${progress}%` : "0%",
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 mt-1">{step.label}</span>
                <span className="text-[8px] lg:text-[15px] xl:text-sm text-start text-gray-700 whitespace-pre-line">
                  {step.title}
                </span>
                <span className={`${step.style}`}>{step.status}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Title and Status */}
      <div className="w-full px-4 pb-4 flex justify-between text-[12px] items-center md:hidden bg-[#FAFAFF]">
        <button className="px-4 py-1 bg-[#0000FE] text-white rounded font-bold">
          Save Progress
        </button>
        <button className="px-4 py-1 bg-white text-[#0000FE] rounded border border-blue-800 font-bold">
          Back to Homepage
        </button>
      </div>
      <div className="mb-20 lg:w-2/3 px-2 lg:px-5 ml-20">
        <h2 className="text-sm sm:text-xl md:text-3xl font-bold text-gray-800 mb-3.5">
          Ghana STEM Excellence Scholarship Application Form
        </h2>
        <div className="flex items-center mt-2">
          <span className="text-xl text-gray-600">Application status:</span>
          <div className="w-50 h-2.5 bg-gray-200 rounded-full ml-2">
            <div
              className="h-full rounded-full bg-[#0000FE] transition-all duration-700"
              style={{ width: `${progress > 0 ? 25 : 0}%` }}
            ></div>
          </div>
          <span className="ml-2 text-sm text-[#0000FE]">{appStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default Steps;
