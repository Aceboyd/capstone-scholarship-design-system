import React, { useState } from "react";

const Steps2 = () => {
  const [step, setStep] = useState(1);

  const steps = [
    { title: "Personal Details" },
    { title: "Academic Information" },
    { title: "Supporting Documents" },
    { title: "Write your Statement of Purpose" },
    { title: "Review Application and Submit" }
  ];

  return (
    <div className="w-full bg-[#f9f9ff] px-4 py-6">
      <div className="max-w-6xl mx-auto bg-white rounded-md p-6 space-y-4">
        
        {/* Stepper without top border */}
        <div className="flex justify-between">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-full space-y-1"
            >
              <div className="text-sm text-gray-400 font-light tracking-wide">
                STEP {index + 1}
              </div>
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border text-xs font-medium ${
                  step > index + 1
                    ? "border-gray-300 text-gray-400"
                    : step === index + 1
                    ? "border-blue-500 text-blue-500"
                    : "border-dashed border-gray-300 text-gray-300"
                }`}
              >
                {index + 1}
              </div>
              <p className="text-xs text-gray-600 font-light">{item.title}</p>
              <span className="text-[10px] text-gray-400">
                {step > index + 1 ? "Completed" : "Not started"}
              </span>
            </div>
          ))}
        </div>

        {/* Title + Progress Status */}
        <div className="text-left space-y-1">
          <h2 className="text-lg font-semibold text-gray-800">
            Ghana Stem Excellence Scholarship Application Form
          </h2>
          <div className="flex items-center gap-2 justify-left text-sm">
            <span className="text-gray-500 text-xs">Application status :</span>
            <div className="w-40 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-1 bg-blue-500 rounded-full transition-all"
                style={{ width: `${(step / 5) * 100}%` }}
              ></div>
            </div>
            <span className="text-blue-700 text-xs font-medium">
              {step === 1 ? "Not started" : step === 5 ? "Completed" : "In progress"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps2;
