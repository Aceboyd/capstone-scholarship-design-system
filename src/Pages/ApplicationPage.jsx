import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header2anon from '../Component3/Header2anon'

// Placeholder images

import pdfIcon from "../assets/image/pdfIcon.png"; // Keep PDF icon
import number1Image from "../assets/image/form/1.png";
import number2Image from "../assets/image/form/2.png";
import number3Image from "../assets/image/form/3.png";
import number4Image from "../assets/image/form/4.png";
import number5Image from "../assets/image/form/5.png";
import { Brain } from "lucide-react";
import Background from "../Components4/Background";
import Steps2 from "../Components4/Steps2";
import Navigationresponsive2 from "../Components4/Navigationresponsive2";
import Stepsresponsive2 from "../Components4/Stepsresponsive2";

const ScholarshipForm = () => {
  const navigate = useNavigate();
  const [formFilled, setFormFilled] = useState(false);
  const [institutionName, setInstitutionName] = useState("");
  const [programOfStudy, setProgramOfStudy] = useState("");
  const [currentLevel, setCurrentLevel] = useState("");
  const [gpa, setGpa] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null); // Changed to single file
  const [progress, setProgress] = useState(0);

  // Calculate progress whenever form fields change
  useEffect(() => {
    const totalFields = 5;
    let filledFields = 0;

    if (institutionName.trim()) filledFields++;
    if (programOfStudy.trim()) filledFields++;
    if (currentLevel) filledFields++;
    if (gpa.trim()) filledFields++;
    if (uploadedFile) filledFields++;

    const progressPercentage = (filledFields / totalFields) * 100;
    setProgress(progressPercentage);
  }, [institutionName, programOfStudy, currentLevel, gpa, uploadedFile]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Only take first file
    if (!file) return;

    if (
      ![
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type)
    ) {
      alert(
        `Unsupported file type: ${file.name}. Please upload a Word document (.doc or .docx).`,
      );
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setUploadedFile({
        name: file.name,
        progress: 100,
        status: "Error: File size too large",
        error: true,
        size: file.size,
      });
      return;
    }

    const newFile = {
      name: file.name,
      progress: 0,
      status: "Uploading",
      error: false,
      size: file.size,
    };
    setUploadedFile(newFile);

    const reader = new FileReader();
    reader.onload = () => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 10;
        if (currentProgress >= 100) {
          clearInterval(interval);
          setUploadedFile({ ...newFile, progress: 100, status: "Completed" });
        } else {
          setUploadedFile({ ...newFile, progress: currentProgress });
        }
      }, 200);
    };
    reader.readAsDataURL(file);
  };

  const handleCancelUpload = () => {
    setUploadedFile(null);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (
      institutionName &&
      programOfStudy &&
      currentLevel &&
      gpa &&
      uploadedFile
    ) {
      setFormFilled(true);
      navigate("/step-3");
    } else {
      alert(
        "Please fill all fields and upload a transcript before proceeding.",
      );
    }
  };

  const handleBack = () => {
    navigate("/step-1");
  };

  return (
    <div className="bg-[#FAFAFF]">
      {/* Header */}
      <Header2anon/>

      {/* Banner */}
      <div className="mt-8"><Background/></div>

      {/* Main Content */}
      <main className="mx-auto w-full px-2">
        {/* Progress Steps */}
          <div className="mt-8"><Steps2/></div>   
        
        <div className="flex flex-col">
          <div className="flex flex-row justify-center">
          {/* Circles and Progress Bars Row */}
          <div className='md:hidden mt-8 w-[20%]'><Stepsresponsive2/></div>
        

        {/* Form Section with Right-Side Actions */}
        <div className="grid grid-cols-1 gap-6 max-w-6xl px-4 md:grid-cols-3 w-[80%]">
          {/* Form Content */}
          <div className="md:col-span-2">
            <div className="rounded-md bg-white p-6">
              <form>
                <h3 className="mb-6 text-xl font-semibold">
                  Step 2: Academic Information
                </h3>
                <div className="space-y-6">
                  {/* Institution Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Institution Name
                    </label>
                    <input
                      type="text"
                      value={
                        formFilled
                          ? "Egbuna Princess University"
                          : institutionName
                      }
                      onChange={(e) => setInstitutionName(e.target.value)}
                      placeholder="Start typing your institution name"
                      className="mt-1 block w-full rounded-md border border-gray-300 p-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* Program of Study and Current Level */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Program of Study
                      </label>
                      <input
                        type="text"
                        value={formFilled ? "Computer Science" : programOfStudy}
                        onChange={(e) => setProgramOfStudy(e.target.value)}
                        placeholder="e.g. Computer Science, Engineering"
                        className="mt-1 block w-full rounded-md border border-gray-300 p-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Current Level
                      </label>
                      <select
                        value={formFilled ? "Level 300" : currentLevel}
                        onChange={(e) => setCurrentLevel(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 p-3 text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      >
                        <option value="">Select your current level</option>
                        <option value="Level 100">Level 100</option>
                        <option value="Level 200">Level 200</option>
                        <option value="Level 300">Level 300</option>
                        <option value="Level 400">Level 400</option>
                      </select>
                    </div>
                  </div>

                  {/* Grade Point Average (GPA) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Grade Point Average (GPA)
                    </label>
                    <input
                      type="text"
                      value={formFilled ? "3.8" : gpa}
                      onChange={(e) => setGpa(e.target.value)}
                      placeholder="Enter your current GPA"
                      className="mt-1 block w-full rounded-md border border-gray-300 p-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* Upload Transcript */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Upload Transcript
                    </label>
                    <div className="mt-1 rounded-md border-2 border-dashed border-gray-300 p-6 text-center">
                      {uploadedFile ? (
                        <div className="mt-2 rounded-md bg-gray-50 p-3">
                          <div className="mb-2 flex items-center justify-between">
                            <div className="flex items-center">
                              <img
                                src={pdfIcon}
                                alt="PDF Icon"
                                className="mr-2 h-6 w-6"
                              />
                              <span>
                                {uploadedFile.name} ({uploadedFile.progress}%)
                              </span>
                            </div>
                            <div className="flex items-center">
                              <span
                                className={
                                  uploadedFile.error
                                    ? "text-red-600"
                                    : uploadedFile.progress === 100
                                      ? "text-[#0000FE]"
                                      : "text-gray-600"
                                }
                              >
                                {uploadedFile.status}
                              </span>
                              {uploadedFile.progress < 100 &&
                                !uploadedFile.error && (
                                  <button
                                    type="button"
                                    className="ml-2 text-[#0000FE] hover:text-blue-800"
                                    onClick={handleCancelUpload}
                                  >
                                    Cancel
                                  </button>
                                )}
                            </div>
                          </div>
                          <div className="h-1 w-full rounded-full bg-gray-200">
                            <div
                              className="h-full rounded-full bg-[#0000FE]"
                              style={{ width: `${uploadedFile.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex justify-center">
                            <svg
                              className="h-12 w-12 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              ></path>
                            </svg>
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            Choose a file or drag and drop here
                          </p>
                          <p className="text-xs text-red-600">
                            *file supported: Word format (.doc, .docx), max. 5MB
                          </p>
                          <label className="mt-4 inline-block">
                            <span className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                              Browse files
                            </span>
                            <input
                              type="file"
                              className="hidden"
                              onChange={handleFileUpload}
                              accept=".doc,.docx"
                            />
                          </label>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right-Side Actions */}
          <div className="flex flex-col items-end md:col-span-1 max-md:hidden bg-[#FAFAFF] text-[12px]">
            <button className="mb-2 w-full max-w-xs rounded-md bg-[#0000FE] px-4 py-2 text-white hover:bg-blue-700">
              Save Progress
            </button>
            <a
              href="#"
              className="mb-2 block w-full max-w-xs rounded-md border border-blue-600 px-4 py-2 text-center text-[#0000FE] hover:bg-blue-50"
            >
              Back to Homepage
            </a>
            <p className="mt-2 flex items-center justify-end text-sm text-gray-600">
              <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-xs text-gray-600">
                i
              </span>
              Note: Applications closes on 26th March 2025
            </p>
          </div>

          {/* Navigation Buttons Moved Down */}
          <div className="mt-8 flex justify-between md:col-span-3 max-md:hidden py-4 bg-[#FAFAFF]">
            <button
              id="back-button"
              onClick={handleBack}
              className="flex cursor-pointer items-center rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              Back
            </button>
            <a
              id="next-button"
              href="/step3"
              className="flex items-center rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
              onClick={handleNext}
            >
              Next
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="auto"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        </div>
  <div className='md:hidden justify-between flex flex-row py-4 bg-[#FAFAFF]'>
    <Navigationresponsive2/>
    <button
    href="/step3"
          onClick={handleNext}
          className="mt-8 px-6 bg-blue-600 text-white rounded"
        >
          Next
        </button>
  </div>
  <p className="mt-2 py-8 flex items-center justify-end text-sm text-indigo-700 font-medium md:hidden mx-auto">
              <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-indigo-700 text-xs text-indigo-700">
                i
              </span>
              Note: Applications close on 26th March 2025
            </p>
        </div>
      </main>
    </div>
  );
};

export default ScholarshipForm;
