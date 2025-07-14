import React, { useState } from "react";

const AcademicInfo2 = () => {
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setFileName(file.name);
    } else {
      alert("File is too large or unsupported format.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Left - Supporting Documents Upload Form */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Step 3: Supporting Documents</h2>

          <p className="text-sm text-gray-600 mb-6">
            Kindly upload the following documents; Recommendation Letter, CV, Valid ID Card,
            Passport photograph and any other document that may strengthen your application.
          </p>

          {/* Upload Box */}
          <label className="block text-sm font-medium">Upload Documents</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mt-1">
            <div className="text-4xl text-gray-400 mb-2">☁️</div>
            <p className="text-sm text-gray-700">Choose a file or drag and drop here</p>
            <p className="text-xs text-red-500 mt-1">
              file supported: PDF format, JPG, PNG, JPEG max 5MB
            </p>

            <input
              type="file"
              id="supporting-doc-upload"
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
            />
            <label
              htmlFor="supporting-doc-upload"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 text-sm"
            >
              Browse files
            </label>

            {fileName && (
              <p className="mt-2 text-green-600 text-sm">Selected: {fileName}</p>
            )}
          </div>
        </div>

        {/* Right - Buttons & Note */}
        <div className="flex flex-col justify-start gap-4 self-start">
          <button className="px-5 py-2 bg-blue-500 text-white rounded-md w-full">
            Save Progress
          </button>
          <button className="px-5 py-2 bg-gray-200 text-black rounded-md w-full">
            Back to Homepage
          </button>
          <p className="text-red-500 text-xs text-center mt-4">
            Note: Applications close on 26th March 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicInfo2;
