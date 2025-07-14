import React from "react";

const stepDetails = [
  { label: "STEP 1", title: "Personal Details" },
  { label: "STEP 2", title: "Academic Information" },
  { label: "STEP 3", title: "Supporting Documents" },
  { label: "STEP 4", title: "Write your Statement of Purpose" },
  { label: "STEP 5", title: "Review Application and Submit" },
];

const Steps = ({
  number1Image,
  number2Image,
  number3Image,
  number4Image,
  number5Image,
  progress = 0, // global progress (0–100)
}) => {
  const stepImages = [number1Image, number2Image, number3Image, number4Image, number5Image];
  const stepCount = stepDetails.length;
  const stepProgress = 100 / stepCount;

  const getStepStatus = (index) => {
    const currentThreshold = (index + 1) * stepProgress;
    if (progress >= currentThreshold) return "Completed";
    if (progress >= index * stepProgress) return "In Progress";
    return "Not Started";
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return (
          <span className="mt-1 text-xs text-[#0000FE] bg-[#CCCFFF] rounded-full px-2 py-1">
            Completed
          </span>
        );
      case "In Progress":
        return (
          <span className="mt-1 text-xs text-[#0000FE] border border-[#0000FE] rounded-full px-3 py-1">
            In Progress
          </span>
        );
      default:
        return <span className="mt-1 text-xs text-gray-400">Not Started</span>;
    }
  };

  return (
    <div className="mb-8">
      {/* Steps and Progress Bar */}
      <div className="flex flex-col items-center w-full overflow-x-auto">
        <div className="flex items-center justify-between w-full max-w-6xl gap-4">
          {stepDetails.map((step, index) => {
            const status = getStepStatus(index);
            const base = index * stepProgress;
            const next = (index + 1) * stepProgress;
            const localProgress = Math.max(0, Math.min(100, ((progress - base) / stepProgress) * 100));

            return (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center flex-1 min-w-[120px]">
                  <div
                    className={`w-10 h-10 rounded-full border-2 border-dashed ${
                      status === "Completed" || status === "In Progress"
                        ? "border-blue-600"
                        : "border-gray-300"
                    } flex items-center justify-center`}
                  >
                    <img
                      src={stepImages[index]}
                      alt={step.label}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-500 mt-1">{step.label}</span>
                  <span className="text-sm text-center text-gray-700">{step.title}</span>
                  {getStatusBadge(status)}
                </div>
                {index < stepCount - 1 && (
                  <div className="flex items-center w-20 h-1 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{
                        width: `${Math.min(localProgress, 100)}%`,
                      }}
                    ></div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Title and Status */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Ghana STEM Excellence Scholarship Application Form
        </h2>
        <div className="flex items-center mt-2">
          <span className="text-sm text-gray-600">Application status:</span>
          <div className="w-24 h-1 bg-gray-200 rounded-full ml-2">
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="ml-2 text-sm text-blue-600">In Progress</span>
        </div>
      </div>
    </div>
  );
};

export default Steps;
