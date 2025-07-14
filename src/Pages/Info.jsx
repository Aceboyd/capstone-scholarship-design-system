import Navbar from "./Components/Navbar";
import { useState } from "react";
import dropdownTxt from "./Components/dropdown";
import Footer from "./Components/Footer";

let Info = () => {
  let [show] = useState(false);

  let [dropdown] = useState(dropdownTxt);

  const [activeKey, setActiveKey] = useState(null);

  const handleClick = (key) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#0012d346] p-20">
        <img
          src="/images/ghanaTrustFund.png"
          className="mx-auto min-[700px]:scale-200"
          alt="ghana trust fund"
        />
      </div>

      <div className="bg-[#EBEDFF]  p-2">
        <div className="bg-white p-1 rounded-md flex justify-around max-[700px]:grid max-[700px]:grid-cols-2 max-[700px]:place-items-center max-[700px]:space-y-3">
          <button className="p-2 bg-[#E8E8EA] w-fit rounded-md">
            Overview
          </button>
          <button className="p-2 bg-[#E8E8EA] w-fit rounded-md">
            About Scholarship
          </button>
          <button className="p-2 bg-[#E8E8EA] w-fit rounded-md">
            Eligibity Criteria
          </button>
          <button className="p-2 bg-[#E8E8EA] w-fit rounded-md">
            Scholarship Requirements
          </button>
          <button className="p-2 bg-[#E8E8EA] w-fit rounded-md">
            How to Apply
          </button>
          <button className="p-2 bg-[#E8E8EA] w-fit rounded-md">FAQs</button>
        </div>
      </div>

      <div className="pt-20 mx-14">
        <p className="text-[#0000FE] text-4xl font-bold max-[700px]:text-center">
          Overview
        </p>
        <div className="mx-6">
          <div className="space-x-6 pt-4 max-[700px]:flex max-[700px]:flex-col space-y-4">
            <button className="p-2 bg-[#EBEDFF] w-fit rounded-md">
              Fully Funded
            </button>
            <button className="p-2 bg-[#EBEDFF] w-fit rounded-md">
              STEM Research
            </button>
            <button className="p-2 bg-[#EBEDFF] w-fit rounded-md">
              National Scholarship
            </button>
          </div>
          <div className="pt-4 flex justify-around max-[700px]:flex-col max-[700px]:space-y-2 items-center">
            <div className="space-y-4">
              <p className="font-bold text-4xl">
                Ghana Stem <br /> Excellence Scholarship
              </p>
              <p>Ghana Education Trust Fund (GETFund)</p>
              <div className="flex gap-2 items-center">
                <button className="bg-[#0000FE] p-2 pl-8 pr-8 rounded-md text-white cursor-pointer max-[700px]:text-xs">
                  Apply now
                </button>
                <img
                  src="images/bookmark.png"
                  className={`bg-[#DCDDFF] w-fit p-1 rounded-md`}
                  alt="bookmark"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img src="images/tuition-blue.png" alt="tuition blue" />
                <div>
                  <p className="min-[700px]:text-4xl">
                    Full Funding + Research Grant{" "}
                  </p>
                  <p>Scholarship Value</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="images/date-blue.png"
                  className="ml-2"
                  alt="tuition blue"
                />
                <div>
                  <p className="min-[700px]:text-4xl">
                    20th March 2025{" "}
                    <span className="text-xs text-[#0000FE] font-semibold ">
                      in 23 days
                    </span>{" "}
                  </p>
                  <p>Application Deadline</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src="images/student-blue.png" alt="tuition blue" />
                <div>
                  <p className="min-[700px]:text-4xl">
                    All Undergraduate Students in <br /> STEM fields{" "}
                  </p>
                  <p>Eligibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EBEDFF] p-2 text-justify">
        <div className="mx-14">
          <p className="text-[#0000FE] text-2xl max-[700px]:text-center">
            About Scholarship
          </p>
          <div className="space-y-4">
            <p>
              The Ghana Stem Excellence Scholarship is designed to support
              outstanding undergraduate students pursuing STEM-related fields.
              This scholarship provides full tuition coverage and research
              grants to help students focus on their studies and contribute to
              scientific advancements.
            </p>
            <p>
              This scholarship aims to bridge the gap in STEM education by
              providing financial assistance to talented students in Ghana. It
              is committed to fostering innovation, encouraging research, and
              empowering students to excel in Science, Technology, Engineering,
              and Mathematics (STEM) disciplines. By supporting students with
              tuition and research funding, the program helps build a future
              generation of innovators and problem-solvers.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-14 mt-10">
        <p className="text-[#0000FE] text-2xl max-[700px]:text-center">
          Eligibity Criteria
        </p>
        <p>
          The{" "}
          <span className="font-bold">Ghana STEM Excellence Scholarship </span>
          is open to outstanding students who meet the following criteria:
        </p>

        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <img src="images/check.png" className="h-13 w-10" />
            <p>
              Must be a <span className="font-bold">Ghanian Citizen</span> or a
              permanent resident.
            </p>
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <img src="images/check.png" className="h-13 w-10" />
            <p>
              Open to <span className="font-bold">undergraduate students</span>
              currently enrolled in a recognised Ghanaian university.
            </p>
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <img src="images/check.png" className="h-13 w-10" />
            <p>
              Must be pursuing a degree in{" "}
              <span className="font-bold">STEM disciplines</span>(Science,
              Technology, Engineering, or Mathematics).
            </p>
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <img src="images/check.png" className="h-13 w-10" />
            <p>
              Must have a{" "}
              <span className="font-bold">minimum GPA of 3.5/4.0</span>or its
              equivalent in their most recent academic year.
            </p>
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <img src="images/check.png" className="h-13 w-10" />
            <p>
              Must demonstrate a keen interest in{" "}
              <span className="font-bold">
                STEM research, innovation, and development.
              </span>
            </p>
          </li>
          <li className="flex items-center gap-2">
            <img src="images/check.png" className="h-13 w-10" />
            <p>
              Preference may be given to students from{" "}
              <span className="font-bold">low-income backgrounds</span>who
              require financial assistance.
            </p>
          </li>
          <li className="flex items-center gap-2">
            <img src="images/check.png" className="h-13 w-10" />
            <p>
              Involvement in{" "}
              <span className="font-bold">
                STEM-related projects, hackathons, or innovation competitions
              </span>
              is an added advantage.
            </p>
          </li>
          <li className="flex items-center gap-2">
            <img src="images/check.png" className="h-13 w-10" />
            <p>
              Must submit a{" "}
              <span className="font-bold">
                personal statement,CV, transcripts, and a recommendation letter
              </span>
              from an academic advisor or professor.
            </p>
          </li>
        </ul>
        <p className="text-[#0000FE] text-2xl">
          Note: Applicants must not be receiving full funding from another
          scholarship program.
        </p>
      </div>

      <div className="bg-[#03037E] mt-10 text-white">
        <div className="mx-14 pt-10">
          <p className="text-2xl ">Scholarship Requirements</p>
          <p>
            To be considered for the Ghana STEM Excellence Sxholarship,
            applicants must meet the following requirements:{" "}
          </p>

          <div className="flex max-[700px]:flex-col justify-around items-center pt-4">
            <div className="space-y-20">
              <div>
                <p className="text-3xl">1. Supporting Documents</p>
                <ul className="list-disc ml-10 space-y-2">
                  <li>
                    Official{" "}
                    <span className="font-bold">academic transcripts</span>from
                    your <br /> current institution and your CV.
                  </li>
                  <li>
                    A<span className="font-bold">statement of purpose</span>{" "}
                    (max. 500 words) <br /> outlining your academic goals and
                    career aspirations.
                  </li>
                  <li>
                    Two{" "}
                    <span className="font-bold">letters of recommendation</span>
                    from <br /> professors or industry professionals.
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-3xl">2. Application Process</p>
                <ul className="list-disc ml-10 space-y-2">
                  <li>
                    Complete the
                    <span className="font-bold">
                      Online scholarship application form.
                    </span>
                  </li>
                  <li>
                    Upload all
                    <span className="font-bold">equired documents</span> in PDF
                    format.
                  </li>
                  <li>
                    Submit your applicaion{" "}
                    <span className="font-bold">
                      before the deadline <br /> (March 20, 2025).
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <img
                src="images/requirementImage.png"
                className="h-120 max-[700px]:pt-10"
                alt="requirement image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-14 pt-10">
        <p className="text-[#0000FE] text-2xl max-[700px]:text-center">
          How To Apply
        </p>
        <p className="pb-10">
          Applying for the{" "}
          <span className="font-bold">Ghana STEM Excellence Scholarship</span>is
          a simple process. Follow these steps to submit your application
          successfully
        </p>

        <div className="space-y-3">
          <div>
            <img src="images/1.png" className="mx-auto" alt="1" />
          </div>
          <div>
            <img src="images/2.png" className="mx-auto" alt="1" />
          </div>
          <div>
            <img src="images/3.png" className="mx-auto" alt="1" />
          </div>
          <div>
            <img src="images/4.png" className="mx-auto" alt="1" />
          </div>
          <div>
            <img src="images/5.png" className="mx-auto" alt="1" />
          </div>
          <p className="text-center min-[700px]:text-2xl cursor-pointer">
            For further details, visit{" "}
            <span className="font-bold text-[#0000FE]">
              scholarships.getfund.gov.gh
            </span>{" "}
            or contact scholarsips@getfund.gov
          </p>
        </div>
      </div>

      <div
        className={`h-[60vh] flex justify-center items-center bg-cover bg-center gap-2 mt-10 `}
        style={{ backgroundImage: `url(${"../images/stemFuture.png"})` }}
      >
        <div className="space-y-10 text-center text-white">
          <p className="min-[700px]:text-6xl">
            Your <span className="font-semibold text-[#0000FE]">STEM</span>{" "}
            future starts here
          </p>
          <p className="min-[700px]:text-2xl">
            Don’t miss your chance to join Ghana’s next generation of innovators
            and changemakers.
          </p>
          <button className="bg-[#0000FE] p-4 pl-8 pr-8 rounded-md text-white cursor-pointer max-[700px]:text-xs text-4xl">
            Apply now
          </button>
        </div>
      </div>

      <div>
        <div className="text-center">
          <p className="font-bold text-8xl text-[#0000FE]">FAQs</p>
          <p className="text-4xl text-[#0000FE]">Frequently asked questions</p>
        </div>

        <div className="pt-10 space-y-4 pb-6">
          {dropdown.map((text, key) => {
            return (
              <div
                key={key}
                onClick={() => handleClick(key)}
                className={`${
                  show ? "bg-[#EBEDFF]" : ""
                }  w-[80%] hover:bg-[#EBEDFF] mx-auto border pr-10 pl-10 p-2 rounded-lg cursor-pointer`}
              >
                <p className="flex justify-between items-center gap-10 font-bold ">
                  {text.main}{" "}
                  {activeKey === key ? (
                    <img src="images/upChevron.png" />
                  ) : (
                    <img src="images/downChevron.png" />
                  )}
                </p>
                <p
                  className={`${activeKey === key ? "visible" : "hidden"} pt-4`}
                >
                  {text.side}
                </p>
              </div>
            );
          })}
        </div>
        <button className="bg-[#0000FE] flex items-center gap-2 pl-8 pr-8 rounded-md text-white cursor-pointer mx-auto">
          See all FAQs <img src="images/rightArrow.png" alt="right arrow" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Info;
