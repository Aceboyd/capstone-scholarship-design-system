import { Link } from "react-router-dom";

import LogoBg from "../assets/image/portal4/svg/logobg.svg";
import StepOneImage from "../assets/image/portal4/svg/step1.svg";
import StepTwoImage from "../assets/image/portal4/svg/step2.svg";
import StepThreeImage from "../assets/image/portal4/svg/step3.svg";
import StepFourImage from "../assets/image/portal4/svg/step4Colour.svg";
import StepFiveImage from "../assets/image/portal4/svg/step5.svg";
import bannerImage from "../assets/image/form/banner.png";
import userProfile from "../assets/image/form/face.png";
import capstoneLogo from "../assets/image/nice.png";

export default function PortalStep4() {
  const stepImages = [
    StepOneImage,
    StepTwoImage,
    StepThreeImage,
    StepFourImage,
    StepFiveImage,
  ];

  return (
    <section>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <img
              src={capstoneLogo}
              alt="Capstone Scholarship"
              className="h-18 w-auto"
            />
          </div>
          <nav className="flex flex-1 justify-center">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Find Scholarships
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                How It Works
              </a>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                Categories
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Apply Now
            </button>
            <img
              src={userProfile}
              alt="User Profile"
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>
      </header>

      <div className="space-y-8">
        {/* Banner */}
        <div className="relative h-60 w-full">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerImage})` }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 19, 211, 0.28)" }}
          />
        </div>

        {/* Main Content */}
        <main className="mx-auto max-w-5xl space-y-16 px-2 py-10 sm:px-4 lg:px-10">
          <div className="grid size-full grid-cols-5 items-start gap-4">
            {stepImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Step ${index + 1}`}
                  loading="lazy"
                  className="size-full cursor-pointer object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              Ghana STEM Excellence Scholarship Application Form
            </h2>
            <div className="mt-2 flex items-center">
              <span className="text-sm text-gray-600">Application status:</span>
              <div className="ml-2 h-1 w-24 rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{ width: `${30}%` }}
                ></div>
              </div>
              <span className="ml-2 text-sm text-blue-600">In Progress</span>
            </div>
          </div>

          <div className="flex justify-between gap-8">
            <div className="size-full space-y-8 rounded-md bg-white p-6 shadow-md">
              {/* STEP 4: WRITE YOUR STATEMENT OF PURPOSE ✅ */}
              <div className="size-full space-y-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xl">
                      <span className="font-bold">Step 4 :</span> Write your
                      Statement of Purpose
                    </p>

                    <div>
                      <img
                        src={LogoBg}
                        alt="Logo Background"
                        className="size-14 object-cover"
                      />
                    </div>
                  </div>

                  <p className="text-sm text-gray-700">
                    Tell us about your goals, what you’ve achieved so far, and
                    why you’re a great fit for this scholarship.
                  </p>
                </div>

                <div className="h-0.5 w-full bg-gray-300"></div>

                <div className="space-y-4">
                  <p className="text-xl">
                    <span className="font-bold">Section 1 :</span> Write your
                    statement of purpose below{" "}
                    <span className="text-xl">(minimum of 2000 words)</span>
                  </p>

                  <textarea
                    rows={20}
                    placeholder="I am applying for the Ghana STEM Excellence Scholarship because I am passionate about using technology to solve real-world problems…"
                    className="w-full rounded-md border-2 border-gray-300 p-4 outline-none placeholder:text-pretty"
                  ></textarea>
                </div>
              </div>

              {/* SECTION 2: CAPSTONE AI ASSISTANT ✅ */}
              <div className="size-full space-y-4">
                <div className="space-y-2">
                  <p className="text-xl">
                    <span className="font-bold">Section 2 :</span> Capstone AI
                    Assistant
                  </p>
                  <p className="text-sm text-gray-700">
                    Let our Capstone AI assistant draft a personalised version
                    for you using your earlier uploaded documents.
                  </p>
                </div>

                <div className="h-0.5 w-full bg-gray-300"></div>

                <div className="space-y-4">
                  <p className="text-xl">
                    Tell us what you want your statement of purpose to highlight
                  </p>

                  <div className="relative">
                    <textarea
                      rows={10}
                      placeholder='" e.g. Please focus on my academic challenges and my goal to work in AI ethics. "'
                      className="w-full rounded-md border-2 border-gray-300 p-4 outline-none placeholder:text-pretty"
                    ></textarea>

                    <button className="absolute right-5 bottom-5 rounded-lg bg-blue-400 px-4 py-2 text-gray-100">
                      Generate with AI
                    </button>
                  </div>
                </div>

                <p className="w-full text-balance text-blue-700">
                  <span className="font-bold">Please note :</span> Any statement
                  generated by Capstone AI will be clearly labelled and
                  added below your original writing - your original text won’t
                  be lost. Capstone AI only uses the documents you’ve uploaded
                  to create helpful suggestions that reflect your story.
                </p>
              </div>
            </div>

            {/* Right-Side Actions ✅ */}
            <div className="flex flex-col items-end md:col-span-1">
              <button className="mb-2 w-full max-w-xs rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Save Progress
              </button>
              <a
                href="#"
                className="mb-2 block w-full max-w-xs rounded-md border border-blue-600 px-4 py-2 text-center text-blue-600 hover:bg-blue-50"
              >
                Back to Homepage
              </a>
              <p className="mt-2 flex items-center justify-end text-sm text-gray-600">
                <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-xs text-gray-600">
                  i
                </div>
                Note: Applications closes on 26th March 2025
              </p>
            </div>
          </div>

          {/* Navigation Buttons Moved Down ✅ */}
          <div className="mt-8 flex justify-between md:col-span-3">
            <Link
              to="/step3"
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
            </Link>

            <Link
              to="/portalStep5"
              className="flex w-fit items-center justify-between gap-4 rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
            >
              <span>Next</span>
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
        </main>
      </div>
    </section>
  );
}
