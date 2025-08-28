import React from "react";
import number1Image from "../assets/image/form/1.png";
import number2Image from "../assets/image/form/2.png";
import number3Image from "../assets/image/form/3.png";
import number4Image from "../assets/image/form/4.png";
import number5Image from "../assets/image/form/5.png";

const stepDetails = [
  { label: "STEP 1", borderstyle: "border-blue-700", title: "Personal Details",  imagestep: number1Image, style: "mt-1 sm:text-[8px] md:text-[10px] lg:text-xs text-[#0000FE]  rounded-full px-1 lg:px-2 w-[100%] lg:w-[60%] text-center bg-[#CCCFFF]", status: "Completed", style2: "bg-indigo-500" },
  { label: "STEP 2", borderstyle: "border-blue-700", title: "Academic Information", imagestep: number2Image, style: "mt-1 sm:text-[8px] md:text-[10px] lg:text-xs text-[#0000FE] border border-[#0000FE] rounded-full px-1 lg:px-2 w-[80%] lg:w-[60%] text-center", status: "In Progress" },
  { label: "STEP 3", borderstyle: "border-gray-300", title: "Supporting Documents", imagestep: number3Image, style: "text-[10px] sm:text-xs text-gray-400", status: "Not Started" },
  { label: "STEP 4", borderstyle: "border-gray-300", title: "Write your Statement of Purpose", imagestep: number4Image, style: "text-[10px] sm:text-xs text-gray-400", status: "Not Started" },
  { label: "STEP 5", borderstyle: "border-gray-300", title: "Review Application and Submit", imagestep: number5Image, style: "text-[10px] sm:text-xs text-gray-400", status: "Not Started" },
];

const Steps2 = () => {
  return (
    <div className="mb-8">
      {/* Steps and Progress Bar */}
      <div className="flex flex-row items-center w-full overflow-x-auto justify-center mx-auto p-4">
        <div className="flex items-center justify-between w-full max-w-6xl gap-2 max-md:hidden">
          {stepDetails.map((step, index) => {
            return (
              <React.Fragment key={index}>
                <div className="flex flex-row h-40 relative">
                  <div
                    className={`w-10 h-10 rounded-full border-2 border-dashed flex items-center justify-center ${step.borderstyle}`}
                  >
                    <img
                      src={step.imagestep}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  
                 </div>
                 <div className="flex flex-col w-1/5 h-40 mt-7">
                  <div className={`flex  w-[90%] h-1 bg-gray-200 rounded-full ${step.style2}`}>
                  </div>
                  <span className="text-sm text-gray-500 mt-1">{step.label}</span>
                  <span className="text-[8px] lg:text-[10px] xl:text-sm text-start text-gray-700 whitespace-pre">{step.title}</span>
                  <span className={`${step.style} text-[8px]`}>{step.status}</span>
                  </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Title and Status */}
      <div className="w-full px-4 pb-4 flex justify-between text-[12px] items-center  md:hidden bg-[#FAFAFF]">
        <button
          className="px-4 py-1 bg-[#0000FE] text-white rounded font-bold"
        >
          Save Progress
        </button>
        <button
          className="px-4 py-1 bg-white text-[#0000FE] rounded border bprder-1 border-blue-800 font-bold"
        >
          Back to Homepage
        </button>
      </div>
      <div className="mt-6 lg:w-2/3 px-2 lg:px-5">
        <h2 className="text-sm sm:text-xl md:text-2xl font-bold text-gray-800 flex justify-center">
          Ghana STEM Excellence Scholarship Application Form
        </h2>
        <div className="flex items-center mt-2 justify-center">
          <span className="text-sm text-gray-600">Application status:</span>
          <div className="w-24 h-2 bg-gray-200 rounded-full ml-2">
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: `${40}%` }}
            ></div>
          </div>
          <span className="ml-2 text-sm text-blue-600">In Progress</span>
        </div>
      </div>
    </div>
  );
};

export default Steps2;
