import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Component/Header";
import pdfIcon from "../assets/image/pdfIcon.png";
import Background from "../Components4/Background";
import Steps2 from "../Components4/Steps2";
import Navigationresponsive2 from "../Components4/Navigationresponsive2";
import Stepsresponsive2 from "../Components4/Stepsresponsive2";
import { Link } from "react-router-dom";

const ScholarshipForm = () => {
  const navigate = useNavigate();
  const [formFilled, setFormFilled] = useState(false);
  const [institutionName, setInstitutionName] = useState("");
  const [programOfStudy, setProgramOfStudy] = useState("");
  const [currentLevel, setCurrentLevel] = useState("");
  const [gpa, setGpa] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [progress, setProgress] = useState(25); 
  const [step2Progress, setStep2Progress] = useState(0);
  const [appStatus, setAppStatus] = useState("In Progress");
  const [isFillingStep2, setIsFillingStep2] = useState(false);

  // Load saved data on mount
  useEffect(() => {
    const savedData = localStorage.getItem("step2Data");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setInstitutionName(parsed.institutionName || "");
      setProgramOfStudy(parsed.programOfStudy || "");
      setCurrentLevel(parsed.currentLevel || "");
      setGpa(parsed.gpa || "");
      setUploadedFile(parsed.uploadedFile || null);
    }
  }, []);

  // Save data & update progress whenever fields change
  useEffect(() => {
    const step2Data = {
      institutionName,
      programOfStudy,
      currentLevel,
      gpa,
      uploadedFile,
    };
    localStorage.setItem("step2Data", JSON.stringify(step2Data));

    const isAnyFieldFilled =
      institutionName.trim() ||
      programOfStudy.trim() ||
      currentLevel ||
      gpa.trim() ||
      uploadedFile;
    setIsFillingStep2(isAnyFieldFilled);

    const totalFields = 5;
    let filledFields = 0;

    if (institutionName.trim()) filledFields++;
    if (programOfStudy.trim()) filledFields++;
    if (currentLevel) filledFields++;
    if (gpa.trim()) filledFields++;
    if (uploadedFile) filledFields++;

    const totalProgress = 25 + (filledFields / totalFields) * 25;
    setProgress(totalProgress);

    const step2Progress = (filledFields / totalFields) * 100;
    setStep2Progress(step2Progress);

    setAppStatus("In Progress");
  }, [institutionName, programOfStudy, currentLevel, gpa, uploadedFile]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (
      ![
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type)
    ) {
      alert(
        `Unsupported file type: ${file.name}. Please upload a Word document (.doc or .docx).`
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
        "Please fill all fields and upload a transcript before proceeding."
      );
    }
  };

  const handleBack = () => {
    navigate("/step-1");
  };

  const [selectedCategories, setSelectedCategories] = useState([]); 
  
    const handleSetSelectedCategories = useCallback((categories) => {
      setSelectedCategories(categories);
    }, []);

  return (
    <div className="bg-[#FAFAFF]">
      <Header
            setSelectedCategories={handleSetSelectedCategories}
              selectedCategories={selectedCategories}
              className="w-full px-3 sm:px-6 lg:px-12"
            />
      <div className="mt-20"><Background /></div>
      <main className="mx-auto w-full px-2">
        <div className="mt-8">
          <Steps2
            progress={progress}
            step2Progress={step2Progress}
            appStatus={appStatus}
            isFillingStep2={isFillingStep2}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-center">
            <div className="md:hidden mt-8 w-[20%]">
              <Stepsresponsive2
                step2Progress={step2Progress}
                appStatus={appStatus}
                isFillingStep2={isFillingStep2}
              />
            </div>
            <div className="grid grid-cols-1 gap-6 max-w-6xl px-4 md:grid-cols-3 w-[80%]">
              <div className="md:col-span-2">
                <div className="rounded-md bg-white p-6">
                  <form>
                    <h3 className="mb-6 text-xl font-semibold">
                      Step 2: Academic Information
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Institution Name
                        </label>
                        <input
                          type="text"
                          name="institution"
                          value={institutionName}
                          onChange={(e) => setInstitutionName(e.target.value)}
                          placeholder="Start typing your institution name"
                          className="mt-1 block w-full rounded-md border border-gray-300 p-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Program of Study
                          </label>
                          <input
                            type="text"
                            name="program"
                            value={programOfStudy}
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
                            value={currentLevel}
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
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Grade Point Average (GPA)
                        </label>
                        <input
                          type="text"
                          name="gpa"
                          value={gpa}
                          onChange={(e) => setGpa(e.target.value)}
                          placeholder="Enter your current GPA"
                          className="mt-1 block w-full rounded-md border border-gray-300 p-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Upload Transcript
                        </label>
                        <div className="mt-1 rounded-md border-2 border-dashed border-gray-300 p-6 text-center">
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
                              name="browsefiles"
                              className="hidden"
                              onChange={handleFileUpload}
                              accept=".doc,.docx"
                            />
                          </label>
                        </div>
                        {uploadedFile && (
                          <div className="mt-4 rounded-md bg-gray-50 p-3">
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
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-col md:justify-start gap-4 max-md:hidden bg-[#FAFAFF]">
                              <button
                                className="px-4 py-2 bg-[#0000FE] text-white rounded-md w-[100%] cursor-pointer"
                              >
                                Save Progress
                              </button>
                              <Link to='/landing'><button
                                onClick={handleBack}
                                className="px-4 py-2 bg-gray-200 text-[#0000FE] rounded-md w-full cursor-pointer"
                              >
                                Back to Homepage
                              </button></Link>
                              <p className="mt-2 flex items-center justify-end text-sm text-gray-600">
                                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-xs text-gray-600">
                                  i
                                </span>
                                Note: Applications closes on 26th March 2025
                              </p>
                            </div>
              <div className="mt-8 flex justify-between md:col-span-3 max-md:hidden py-4 bg-[#FAFAFF]">
                <button
                  id="back-button"
                  onClick={handleBack}
                  className="flex cursor-pointer items-center rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 cursor-pointer"
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
                  className="flex items-center cursor-pointer rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
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
          <div className="md:hidden justify-between flex flex-row py-4 bg-[#FAFAFF]">
            <Navigationresponsive2 />
            <button
              href="/step3"
              onClick={handleNext}
              className="mt-8 px-6 py-2 bg-blue-600 text-white rounded"
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
