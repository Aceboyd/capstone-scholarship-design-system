import React from "react";

const Stepsresponsive5 = ({ progress, appStatus }) => {
  
  const adjustedProgress = progress; // Use progress directly (80% default, 100% when checkbox is checked)

  const stepDetailsmobile = [
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
      label: "STEP 4",
      title: <>Statement <br /> of Purpose</>,
      number: "4",
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
      label: "STEP 5",
      title: <>Review Application <br /> and Submit</>,
      number: "5",
      style:
        progress >= 100
          ? "text-[9px] sm:text-[10px] lg:text-[11px] text-[#0000FE] border border-[#CCCFFF] bg-[#CCCFFF] rounded-full px-2 w-[70%] lg:w-[60%] text-center whitespace-nowrap font-medium"
          : "text-[9px] sm:text-[10px] lg:text-[11px] text-gray-400 border border-gray-400 rounded-full px-2 w-[70%] lg:w-[60%] text-center whitespace-nowrap",
      status: appStatus,
      style2: progress >= 100 ? "bg-[#0000FE]" : "bg-gray-200",
      borderColor: progress >= 100 ? "border-[#0000FE]" : "border-gray-400",
      textStroke: progress >= 100 ? "#0000FE" : "gray",
      circleBackground: progress>=100 ? "bg-#0000FE" : "transparent",
      progressFill: `${(progress - 80) * 5}%`, // Step 5 contributes 0-20% to total progress
    },
  ];

    return (
<div className="md:hidden mb-2">
      <div className="flex flex-col items-center w-full justify-center mx-auto md:hidden">
        {stepDetailsmobile.map((step, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col m-2 justify-center items-center flex-1 w-full">
              <div
                className={`w-12 h-12 rounded-full border-2 border-dashed flex items-center justify-center ${step.borderColor}`}
              >
                <span
                  className={`text-2xl font-bold ${step.textColor ? `text-[${step.textColor}]` : "text-transparent"}`}
                  style={step.textColor ? {} : { WebkitTextStroke: `1.5px ${step.textStroke}` }}
                >
                  {step.number}
                </span>
              </div>
              <span className="text-[10px] text-gray-500">{step.label}</span>
              <span className={`${step.style}`}>{step.status}</span>
              {/* Progress bar for each step except STEP 5 */}
              <div className="w-full flex flex-col items-center">
                {step.label !== "STEP 5" && (
                  <div className="w-[3px] h-17 bg-gray-200 rounded-full mt-2 mb-1">
                    <div
                      className={`h-full rounded-full ${step.style2} transition-all duration-500`}
                      style={{
                        height: step.progressFill,
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
     );
};

export default Stepsresponsive5;