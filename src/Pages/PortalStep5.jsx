import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

import StepOneImage from "../assets/image/portal4/svg/step1.svg";
import StepTwoImage from "../assets/image/portal4/svg/step2.svg";
import StepThreeImage from "../assets/image/portal4/svg/step3.svg";
import StepFourImage from "../assets/image/portal4/svg/step4Colour.svg";
import StepFiveImage from "../assets/image/portal4/svg/step5Colour.svg";
import bannerImage from "../assets/image/form/banner.png";
import userProfile from "../assets/image/form/face.png";
import capstoneLogo from "../assets/image/nice.png";

export default function PortalStep5() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const stepImages = [
    StepOneImage,
    StepTwoImage,
    StepThreeImage,
    StepFourImage,
    StepFiveImage,
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isConfirmed) {
      alert(
        "Please confirm that all information is accurate and agree to the terms and conditions before submitting.",
      );
      return;
    }
    window.location.href = "/steps-completed";
  };

  const handleCheckboxChange = (e) => {
    setIsConfirmed(e.target.checked);
  };

  return (
    <section>
      {/* Header ✅ */}
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
        {/* Banner ✅ */}
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

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between gap-8 lg:flex-row"
          >
            <div className="w-full space-y-24 bg-white p-6 shadow-md">
              {/* Step 5: Review Application and Submit */}
              <div className="w-full space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl">
                    <span className="font-bold">Step 5:</span> Review
                    Application and Submit
                  </h2>

                  <p className="max-w-3xl text-base text-pretty text-gray-700 sm:text-lg">
                    Kindly review your application carefully and ensure that the
                    information you've provided across all steps is accurate.
                    Once you have cross-checked, you can submit your
                    application.
                  </p>
                </div>

                {/* PERSONAL INFORMATION */}
                <div className="mt-16 max-w-3xl space-y-12 bg-gray-100 px-4 py-6 sm:px-8">
                  <div className="flex w-full items-center justify-between">
                    <h3 className="text-xl sm:text-2xl">
                      Personal Information
                    </h3>
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center gap-2 text-xl font-medium text-blue-700 sm:text-2xl"
                    >
                      Edit <FaRegEdit className="text-lg" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-8 text-base sm:text-lg">
                    <label htmlFor="firstName">
                      First Name:{" "}
                      <input
                        type="text"
                        id="firstName"
                        defaultValue="Princess"
                        readOnly
                        className="w-full bg-transparent font-medium outline-none sm:w-[70%]"
                      />
                    </label>
                    <label htmlFor="lastName">
                      Last Name:{" "}
                      <input
                        type="text"
                        id="lastName"
                        defaultValue="Egbuna"
                        readOnly
                        className="w-full bg-transparent font-medium outline-none sm:w-[70%]"
                      />
                    </label>
                    <label htmlFor="DOB">
                      Date of Birth:{" "}
                      <input
                        type="text"
                        id="DOB"
                        defaultValue="04-09-1997"
                        readOnly
                        className="w-full bg-transparent font-medium outline-none sm:w-[70%]"
                      />
                    </label>
                    <label htmlFor="mailAddress">
                      Email Address:{" "}
                      <input
                        type="email"
                        id="mailAddress"
                        defaultValue="princess.egbuna@gmail.com"
                        readOnly
                        className="w-full bg-transparent font-medium outline-none sm:w-[70%]"
                      />
                    </label>
                    <label htmlFor="NIN">
                      National Identity Number (NIN):{" "}
                      <input
                        type="text"
                        id="NIN"
                        defaultValue="1234-5678-9012"
                        readOnly
                        className="w-full bg-transparent font-medium outline-none sm:w-[30%]"
                      />
                    </label>
                    <label htmlFor="streetAddress">
                      Street Address:{" "}
                      <input
                        type="text"
                        id="streetAddress"
                        defaultValue="12 Independence Avenue"
                        readOnly
                        className="w-full bg-transparent font-medium outline-none sm:w-[70%]"
                      />
                    </label>
                    <label htmlFor="city">
                      City:{" "}
                      <input
                        type="text"
                        id="city"
                        defaultValue="Ikeja"
                        readOnly
                        className="w-full bg-transparent font-medium outline-none sm:w-[70%]"
                      />
                    </label>
                    <label htmlFor="state">
                      State:{" "}
                      <input
                        type="text"
                        id="state"
                        defaultValue="Lagos"
                        readOnly
                        className="w-full bg-transparent font-medium outline-none sm:w-[70%]"
                      />
                    </label>
                    <label htmlFor="Country">
                      Country:{" "}
                      <input
                        type="text"
                        id="Country"
                        defaultValue="Nigeria"
                        readOnly
                        className="w-full bg-transparent font-medium outline-none sm:w-[70%]"
                      />
                    </label>
                    <label htmlFor="enrolled">
                      Are you currently enrolled in a tertiary institution:{" "}
                      <input
                        type="text"
                        id="enrolled"
                        defaultValue="Yes"
                        readOnly
                        className="w-full bg-transparent font-medium outline-none sm:w-[10%]"
                      />
                    </label>
                  </div>
                </div>

                {/* ACADEMIC INFORMATION */}
                <div className="mt-16 max-w-3xl space-y-12 bg-gray-100 px-4 py-6 sm:px-8">
                  <div className="flex w-full items-center justify-between">
                    <h3 className="text-xl sm:text-2xl">
                      Academic Information
                    </h3>
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center gap-2 text-xl font-medium text-blue-700 sm:text-2xl"
                    >
                      Edit <FaRegEdit className="text-lg" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-8 text-base sm:text-lg">
                    <label htmlFor="institutionName">
                      Institution Name:{" "}
                      <input
                        type="text"
                        id="institutionName"
                        defaultValue="Babcock University"
                        readOnly
                        className="w-full bg-transparent font-medium outline-none sm:w-[70%]"
                      />
                    </label>
                    <label htmlFor="programOfStudy">
                      Program of Study:{" "}
                      <input
                        type="text"
                        id="programOfStudy"
                        defaultValue="Computer Science"
                        readOnly
                        className="w-full bg-transparent font-medium outline-none sm:w-[70%]"
                      />
                    </label>
                    <label htmlFor="currentLevel">
                      Current Level:{" "}
                      <input
                        type="text"
                        id="currentLevel"
                        defaultValue="300 Level"
                        readOnly
                        className="w-full bg-transparent font-medium outline-none sm:w-[70%]"
                      />
                    </label>
                    <label htmlFor="GPA">
                      Grade Point Average (GPA):{" "}
                      <input
                        type="text"
                        id="GPA"
                        defaultValue="3.68/5.0"
                        readOnly
                        className="w-full bg-transparent font-medium outline-none sm:w-[70%]"
                      />
                    </label>
                    <label htmlFor="transcript">
                      Transcript:{" "}
                      <input
                        type="file"
                        id="transcript"
                        disabled
                        className="w-full bg-transparent font-medium outline-none file:mr-2 file:text-blue-700 sm:w-[30%]"
                      />
                    </label>
                  </div>
                </div>

                {/* SUPPORTING DOCUMENTS */}
                <div className="mt-16 max-w-3xl space-y-12 bg-gray-100 px-4 py-6 sm:px-8">
                  <div className="flex w-full items-center justify-between">
                    <h3 className="text-xl sm:text-2xl">
                      Supporting Documents
                    </h3>
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center gap-2 text-xl font-medium text-blue-700 sm:text-2xl"
                    >
                      Edit <FaRegEdit className="text-lg" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-8 text-base sm:text-lg">
                    <label htmlFor="recommendationLetter">
                      Recommendation Letter:{" "}
                      <input
                        type="file"
                        id="recommendationLetter"
                        disabled
                        className="w-full bg-transparent font-medium outline-none file:mr-2 file:text-blue-700 sm:w-[30%]"
                      />
                    </label>
                    <label htmlFor="passport">
                      Passport Photograph:{" "}
                      <input
                        type="file"
                        id="passport"
                        disabled
                        className="w-full bg-transparent font-medium outline-none file:mr-2 file:text-blue-700 sm:w-[30%]"
                      />
                    </label>
                    <label htmlFor="personalStatement">
                      Personal Statement:{" "}
                      <input
                        type="file"
                        id="personalStatement"
                        disabled
                        className="w-full bg-transparent font-medium outline-none file:mr-2 file:text-blue-700 sm:w-[30%]"
                      />
                    </label>
                    <label htmlFor="additionalDocuments">
                      Additional Documents:{" "}
                      <input
                        type="file"
                        id="additionalDocuments"
                        disabled
                        className="w-full bg-transparent font-medium outline-none file:mr-2 file:text-blue-700 sm:w-[30%]"
                      />
                    </label>
                  </div>
                </div>

                {/* STATEMENT OF PURPOSE */}
                <div className="mt-16 max-w-3xl space-y-12 bg-gray-100 px-4 py-6 sm:px-8">
                  <div className="flex w-full items-center justify-between">
                    <h3 className="text-xl sm:text-2xl">
                      Statement of Purpose
                    </h3>
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center gap-2 text-xl font-medium text-blue-700 sm:text-2xl"
                    >
                      Edit <FaRegEdit className="text-lg" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-8 text-base sm:text-lg">
                    <textarea
                      rows={10}
                      defaultValue="My journey into Computer Science began in high school, where I led a STEM club project aimed at solving real-world challenges through practical innovation. Alongside my team, we designed and built a basic irrigation system using moisture sensors to help a small farming community conserve water during the dry season. As the team lead, I oversaw the design process, gathered feedback from local farmers, and presented our solution at a school-wide science fair. This hands-on experience ignited my passion for technology and opened my eyes to its potential to create meaningful change—particularly in underserved areas.
Motivated by that early exposure, I have remained committed to pursuing Computer Science as a pathway to drive social impact. Currently, I am an undergraduate student maintaining a 3.6 GPA, with completed coursework and projects in areas such as programming, data analysis, and systems design. I’ve also contributed to group research initiatives exploring how machine learning can enhance public service delivery—further strengthening my resolve to use technology to improve lives in Ghana.
Despite my dedication, financial limitations have posed ongoing challenges, making it difficult at times to access the tools and resources necessary to thrive. The Ghana STEM Excellence Scholarship represents far more than financial aid—it is an opportunity to focus fully on innovation, research, and growth without the burden of economic constraints. With this support, I will be able to engage deeply in research, explore emerging technologies, and develop solutions aligned with Ghana’s development goals.
I believe the most effective innovations come from individuals who understand the needs of their communities and are driven to make a difference. I am committed to leveraging my education not only for personal advancement but to create inclusive, tech-driven solutions in areas like education, agriculture, and public health. From building smarter systems for schools in rural regions to developing digital tools that make government services more efficient, I envision technology as a bridge to a better future for all.
Receiving this scholarship would allow me to stay on this path, deepen my expertise, and grow into one of the STEM leaders shaping Ghana’s future. I am sincerely grateful for the opportunity to apply and confident that, with your support, I can transform my passion into lasting impact."
                      readOnly
                      className="w-full rounded-md border-2 border-gray-300 bg-transparent p-4 outline-none placeholder:text-pretty"
                    />
                  </div>
                </div>
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
          </form>

          <div className="max-w-3xl">
            <label
              htmlFor="confirm"
              className="flex items-center gap-4 text-base sm:text-lg"
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

          {/* Navigation Buttons Moved Down ✅ */}
          <div className="mt-8 flex justify-between md:col-span-3">
            <Link
              to="/portalStep4"
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
              to="/steps-completed"
              className="flex w-fit items-center justify-between gap-4 rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
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
        </main>
      </div>
    </section>
  );
}
