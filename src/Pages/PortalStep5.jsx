import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import Background from "../Components4/Background";
import Header2anon from "../Component3/Header2anon";
import Steps5 from "../Components4/Steps5";
import Stepsresponsive5 from "../Components4/Stepsresponsive5";

export default function PortalStep5() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [progress, setProgress] = useState(80);
  const [data, setData] = useState({
    step1: {},
    step2: {},
    step3: {},
    step4: {},
  });

  const navigate = useNavigate();

  let appStatus = "In Progress";
  if (progress === 100) appStatus = "Completed";

  useEffect(() => {
    const step1 = JSON.parse(localStorage.getItem("step1Data")) || {};
    const step2 = JSON.parse(localStorage.getItem("step2Data")) || {};
    const step3 = JSON.parse(localStorage.getItem("step3Data")) || {};
    const step4 = JSON.parse(localStorage.getItem("step4Data")) || {};
    setData({ step1, step2, step3, step4 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isConfirmed) {
      alert(
        "Please confirm that all information is accurate and agree to the terms and conditions before submitting."
      );
      return;
    }

    // ✅ Save final data
    localStorage.setItem("step5Data", JSON.stringify(data));

    // ✅ Navigate to steps-completed page
    navigate("/steps-completed");
  };

  const handleCheckboxChange = (e) => {
    setIsConfirmed(e.target.checked);
    setProgress(e.target.checked ? 100 : 80);
  };

  return (
    <section className="bg-[#FAFAFF]">
      <Header2anon />

      <div className="space-y-8">
        <div className="mt-8">
          <Background />
        </div>

        <main className="mx-auto w-full px-2">
          <div className="mt-8">
            <Steps5 progress={progress} appStatus={appStatus} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between gap-8 lg:flex-row"
          >
            <div className="flex flex-row justify-center">
              <div className="md:hidden mt-8 w-[20%]">
                <Stepsresponsive5 progress={progress} appStatus={appStatus} />
              </div>

              <div className="w-[80%] md:w-full flex flex-row justify-center md:px-10 lg:px-20 gap-5">
                <div className="w-full md:w-[70%] bg-white p-6">
                  {/* Step 5: Review */}
                  <div className="space-y-2">
                    <h2 className="text-sm sm:text-2xl">
                      <span className="font-bold">Step 5:</span> Review
                      Application and Submit
                    </h2>
                    <p className="max-w-3xl text-sm text-gray-700 sm:text-lg">
                      Kindly review your application carefully and ensure that the
                      information you've provided across all steps is accurate.
                      Once you have cross-checked, you can submit your application.
                    </p>
                  </div>

                  {/* PERSONAL INFORMATION */}
                  <div className="mt-16 max-w-3xl space-y-12 bg-gray-50 px-2 py-6 sm:px-8">
                    <div className="flex w-full items-center justify-between">
                      <h3 className="text-sm sm:text-2xl">Personal Information</h3>
                      <Link
                        to="/portal-step-1"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 sm:text-2xl"
                      >
                        Edit <FaRegEdit className="text-lg" />
                      </Link>
                    </div>
                    <div className="flex flex-col gap-8 text-sm sm:text-lg">
                      <p>First Name: {data.step1.firstName}</p>
                      <p>Last Name: {data.step1.lastName}</p>
                      <p>
                        Date of Birth:{" "}
                        {`${data.step1.dobDay || ""}-${data.step1.dobMonth || ""}-${data.step1.dobYear || ""}`}
                      </p>
                      <p>Email Address: {data.step1.email}</p>
                      <p>NIN: {data.step1.nin}</p>
                      <p>Street Address: {data.step1.streetAddress}</p>
                      <p>City: {data.step1.city}</p>
                      <p>State: {data.step1.state}</p>
                      <p>Country: {data.step1.country}</p>
                      <p>Enrolled: {data.step1.enrolled}</p>
                    </div>
                  </div>

                  {/* ACADEMIC INFORMATION */}
                  <div className="mt-16 max-w-3xl space-y-12 bg-gray-50 px-2 py-6 sm:px-8">
                    <div className="flex w-full items-center justify-between">
                      <h3 className="text-sm sm:text-2xl">Academic Information</h3>
                      <Link
                        to="/portal-step-2"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 sm:text-2xl"
                      >
                        Edit <FaRegEdit className="text-lg" />
                      </Link>
                    </div>
                    <div className="flex flex-col gap-8 text-sm sm:text-lg">
                      <p>Institution: {data.step2.institutionName}</p>
                      <p>Program: {data.step2.programOfStudy}</p>
                      <p>Level: {data.step2.currentLevel}</p>
                      <p>GPA: {data.step2.gpa}</p>
                      <p>
                        Transcript:{" "}
                        {data.step2.transcript ? "Uploaded" : "Not uploaded"}
                      </p>
                    </div>
                  </div>

                  {/* SUPPORTING DOCUMENTS */}
                  <div className="mt-16 max-w-3xl space-y-12 bg-gray-50 px-2 py-6 sm:px-8">
                    <div className="flex w-full items-center justify-between">
                      <h3 className="text-sm sm:text-2xl">Supporting Documents</h3>
                      <Link
                        to="/portal-step-3"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 sm:text-2xl"
                      >
                        Edit <FaRegEdit className="text-lg" />
                      </Link>
                    </div>
                    <div className="flex flex-col gap-8 text-sm sm:text-lg">
                      <p>
                        Recommendation Letter:{" "}
                        {data.step3.recommendationLetter ? "Uploaded" : "Not uploaded"}
                      </p>
                      <p>
                        Passport Photo:{" "}
                        {data.step3.passport ? "Uploaded" : "Not uploaded"}
                      </p>
                      <p>
                        Personal Statement:{" "}
                        {data.step3.personalStatement ? "Uploaded" : "Not uploaded"}
                      </p>
                      <p>
                        Additional Docs:{" "}
                        {data.step3.additionalDocuments ? "Uploaded" : "Not uploaded"}
                      </p>
                    </div>
                  </div>

                  {/* STATEMENT OF PURPOSE */}
                  <div className="mt-16 max-w-3xl space-y-12 bg-gray-50 px-2 py-6 sm:px-8">
                    <div className="flex w-full items-center justify-between">
                      <h3 className="text-sm sm:text-2xl">Statement of Purpose</h3>
                      <Link
                        to="/portal-step-4"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 sm:text-2xl"
                      >
                        Edit <FaRegEdit className="text-lg" />
                      </Link>
                    </div>
                    <div className="flex flex-col gap-8 text-sm sm:text-lg">
                      <textarea
                        rows={10}
                        value={data.step4.sopText || ""}
                        readOnly
                        className="w-full rounded-md border-2 border-gray-300 bg-transparent p-4 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex flex-col items-end max-md:hidden w-[30%] bg-[#FAFAFF]">
                  <button
                    type="button"
                    className="mb-2 w-full max-w-xs rounded-md bg-[#0000FE] px-4 py-2 text-white hover:bg-blue-700"
                    onClick={() => {
                      localStorage.setItem("step5Data", JSON.stringify(data));
                      alert("Progress Saved!");
                    }}
                  >
                    Save Progress
                  </button>
                  <a
                    href="/"
                    className="mb-2 block w-full max-w-xs rounded-md border border-blue-600 px-4 py-2 text-center text-[#0000FE] hover:bg-blue-50"
                  >
                    Back to Homepage
                  </a>
                  <p className="mt-2 flex items-center justify-end text-sm text-gray-600">
                    <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-xs text-gray-600">
                      i
                    </span>
                    Note: Applications close on 26th March 2025
                  </p>
                </div>
              </div>
            </div>
          </form>

          <div className="max-w-3xl p-5">
            <label
              htmlFor="confirm"
              className="flex items-center gap-4 text-sm sm:text-lg"
            >
              <input
                type="checkbox"
                id="confirm"
                className="size-6 accent-blue-500 sm:size-8"
                onChange={handleCheckboxChange}
                checked={isConfirmed}
              />
              I confirm that all information provided is accurate and I agree to
              the Ghana STEM Excellence Scholarship terms and conditions
            </label>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between py-4">
            <Link
              to="/portal-step-4"
              className="flex items-center rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
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
                />
              </svg>
              Back
            </Link>

            {/* ✅ Submit navigates to /steps-completed */}
            <Link
              to="/steps-completed"
              className="flex w-fit items-center justify-between gap-4 rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
              onClick={handleSubmit}
            >
              <span>Submit Application</span>
              <svg
                className="mr-2 h-5 w-5 rotate-180"
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
            </Link>
          </div>

          <p className="mt-2 py-8 flex items-center justify-center text-sm text-indigo-700 font-medium md:hidden mx-auto">
            <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-indigo-700 text-xs text-indigo-700">
              i
            </span>
            Note: Applications close on 26th March 2025
          </p>
        </main>
      </div>
    </section>
  );
}
