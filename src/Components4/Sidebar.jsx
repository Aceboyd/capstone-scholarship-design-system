import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import cancelImage from "../assets/cancel.png";

let Sidebar = (props) => {
  let [show, isShown] = useState(true);

  let remove = () => {
    isShown(!show);
    console.log("clicked");
  };

  return (
    <div
      role="complementary"
      aria-label="Filters"
      className={`
        ${props.hello ? "max-[800px]:invisible max-[800px]:w-0" : "max-[500px]:visible"}
        w-60 max-w-full md:min-h-screen bg-white space-y-2
        max-[700px]:w-full max-[700px]:min-h-0 max-[700px]:space-y-1 max-[700px]:bg-white max-[700px]:max-h-[70vh] max-[700px]:overflow-y-auto
        max-[500px]:w-full max-[500px]:min-h-0 max-[500px]:space-y-1 max-[500px]:bg-white
      `}
    >
      <div>
        <div className="mx-5 flex items-center pb-2 max-[700px]:mx-2 max-[500px]:mx-1">
          <img src="images/filter.png" alt="filter icon" className="w-5 h-5 max-[700px]:w-4 max-[700px]:h-4" />
          <div className="flex gap-2 max-[700px]:gap-1">
            <p className="text-[#000000] text-base max-[700px]:text-sm">Selected Filter</p>
            <p
              onClick={remove}
              className="cursor-pointer font-bold text-[#0000FE] text-base max-[700px]:text-sm"
            >
              Reset Filters
            </p>
          </div>
        </div>

        <div className={`${show ? "" : "hidden"} space-y-2`}>
          <div className="ml-8 flex flex-wrap gap-2 max-[700px]:ml-2 max-[700px]:flex-row max-[700px]:overflow-x-auto max-[700px]:gap-2 max-[700px]:pb-2">
            <button className="flex w-fit items-center gap-2 rounded-md bg-[#EBEDFF] p-2 text-sm max-[700px]:text-xs max-[700px]:p-1 focus:outline-none focus:ring-2 focus:ring-[#0000FE]">
              Undergraduate
              <img src={cancelImage} className="cursor-pointer w-4 h-4" alt="cancel" />
            </button>
            <button className="flex w-fit items-center gap-2 rounded-md bg-[#EBEDFF] p-2 text-sm max-[700px]:text-xs max-[700px]:p-1 focus:outline-none focus:ring-2 focus:ring-[#0000FE]">
              STEM
              <img src={cancelImage} className="cursor-pointer w-4 h-4" alt="cancel" />
            </button>
          </div>
          <div className="ml-8 flex flex-wrap gap-2 max-[700px]:ml-2 max-[700px]:flex-row max-[700px]:overflow-x-auto max-[700px]:gap-2 max-[700px]:pb-2">
            <button className="flex w-fit items-center gap-2 rounded-md bg-[#EBEDFF] p-2 text-sm max-[700px]:text-xs max-[700px]:p-1">
              Ghana
              <img src={cancelImage} className="cursor-pointer w-4 h-4" alt="cancel" />
            </button>
            <button className="flex w-fit items-center gap-2 rounded-md bg-[#EBEDFF] p-2 text-sm max-[700px]:text-xs max-[700px]:p-1">
              Closing in 30 days
              <img src={cancelImage} className="cursor-pointer w-4 h-4" alt="cancel" />
            </button>
          </div>
          <button className="ml-8 flex w-fit items-center gap-2 rounded-md bg-[#EBEDFF] p-2 text-sm max-[700px]:text-xs max-[700px]:p-1 max-[700px]:ml-2 focus:outline-none focus:ring-2 focus:ring-[#0000FE]">
            Africa-wide Sponsorship
            <img src={cancelImage} className="cursor-pointer w-4 h-4" alt="cancel" />
          </button>
          <button className="ml-8 flex w-fit items-center gap-2 rounded-md bg-[#EBEDFF] p-2 text-sm max-[700px]:text-xs max-[700px]:p-1 max-[700px]:ml-2 focus:outline-none focus:ring-2 focus:ring-[#0000FE]">
            Closing in 90 days
            <img src={cancelImage} className="cursor-pointer w-4 h-4" alt="cancel" />
          </button>
        </div>
      </div>

      <div className="ml-8 bg-[#F4F5FF] max-[700px]:ml-0 max-[700px]:bg-white">
        <div className="mx-8 space-y-2 p-2 pb-4 max-[700px]:mx-2 max-[700px]:p-1">
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg max-[700px]:text-base">By Study Level </p>
            <span>
              <FaChevronDown className="text-gray-400 w-4 h-4 max-[700px]:w-3 max-[700px]:h-3" />
            </span>
          </div>
          <hr />
          <div className="mx-4 space-y-2 max-[700px]:mx-1">
            <div className="flex items-center gap-2 max-[700px]:gap-1">
              <input type="checkbox" className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4" />
              <p className="text-base max-[700px]:text-sm">Undergraduate</p>
            </div>
            <div className="flex items-center gap-2 max-[700px]:gap-1">
              <input type="checkbox" className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4" />
              <p className="text-base max-[700px]:text-sm">Postgraduate (Master's)</p>
            </div>
            <div className="flex items-center gap-2 max-[700px]:gap-1">
              <input type="checkbox" className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4" />
              <p className="text-base max-[700px]:text-sm">PhD / Doctoral</p>
            </div>
            <div className="flex items-center gap-2 max-[700px]:gap-1">
              <input type="checkbox" className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4" />
              <p className="text-base max-[700px]:text-sm">Postdoctoral Research</p>
            </div>
          </div>
          <hr />
        </div>

  <div className="mx-8 space-y-2 p-2 max-[700px]:mx-2 max-[700px]:p-1">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg max-[700px]:text-base">By Field of Study </p>
            <img src="images/down arrow.png" alt="down arrow" className="w-4 h-4 max-[700px]:w-3 max-[700px]:h-3" />
          </div>
          <hr />
          <div className="space-y-2">
            <div>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold text-base max-[700px]:text-sm">
                  STEM (Science, Technology, Engineering, Math)
                </p>
                <img src="images/down arrow.png" alt="down arrow" className="w-4 h-4 max-[700px]:w-3 max-[700px]:h-3" />
              </div>
            </div>
            <hr />
            <div className="mx-4 space-y-2 max-[700px]:mx-1">
              <div className="flex items-center gap-2 max-[700px]:gap-1">
                <input type="checkbox" className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4" />
                <p className="text-base max-[700px]:text-sm">Computer Science</p>
              </div>
              <div className="flex items-center gap-2 max-[700px]:gap-1">
                <input type="checkbox" className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4" />
                <p className="text-base max-[700px]:text-sm">Data Science and AI</p>
              </div>
              <div className="flex items-center gap-2 max-[700px]:gap-1">
                <input type="checkbox" className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4" />
                <p className="text-base max-[700px]:text-sm">Cybersecurity</p>
              </div>
              <div className="flex items-center gap-2 max-[700px]:gap-1">
                <input type="checkbox" className="w-7 h-6 max-[700px]:w-4 max-[700px]:h-4" />
                <p className="text-base max-[700px]:text-sm">Mechanical Engineering</p>
              </div>
              <div className="flex items-center gap-2 max-[700px]:gap-1">
                <input type="checkbox" className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4" />
                <p className="text-base max-[700px]:text-sm">Electrical Engineering</p>
              </div>
              <div className="flex items-center gap-2 max-[700px]:gap-1">
                <input type="checkbox" className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4" />
                <p className="text-base max-[700px]:text-sm">Renewable Energy</p>
              </div>
              <div className="flex items-center gap-2 max-[700px]:gap-1">
                <input type="checkbox" className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4" />
                <p className="text-base max-[700px]:text-sm">Biotechnology</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="space-y-2">
            <div>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold max-[700px]:text-sm">
                  Medical and Health Sciences
                </p>{" "}
                <img src="images/up arrow.png" alt="up arrow" />
              </div>
            </div>
            <hr />
          </div>

          <div className="space-y-2">
            <div>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold max-[700px]:text-sm">
                  Business and Finances
                </p>{" "}
                <img src="images/up arrow.png" alt="up arrow" />
              </div>
            </div>
            <hr />
          </div>

          <div className="space-y-2">
            <div>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold max-[700px]:text-sm">
                  Social Sciences and Humanities
                </p>{" "}
                <img src="images/up arrow.png" alt="up arrow" />
              </div>
            </div>
            <hr />
          </div>

          <div className="space-y-2">
            <div>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold max-[700px]:text-sm">
                  Arts and Creative Fields
                </p>{" "}
                <img src="images/up arrow.png" alt="up arrow" />
              </div>
            </div>
            <hr />
          </div>
        </div>

  <div className="mx-8 space-y-2 p-2 max-[700px]:mx-2 max-[700px]:p-1">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg max-[700px]:text-base">By Country </p>
            <img src="images/down arrow.png" alt="down arrow" className="w-4 h-4 max-[700px]:w-3 max-[700px]:h-3" />
          </div>

          <div className="space-y-2">
            <div>
              <div className="grid grid-cols-3 items-center rounded-md bg-white max-[700px]:grid-cols-2 max-[700px]:p-1">
                <img src="images/search.png" className="col-end-1 w-4 h-4" />
                <input
                  type="search"
                  className="col-span-2 col-start-1 p-2 text-xs max-[700px]:p-1 max-[700px]:text-xs"
                  placeholder="Search for countries"
                />
                <img
                  src="images/down arrow.png"
                  className="col-start-3 w-4 h-4"
                  alt="down arrow"
                />
              </div>
            </div>

            <div className="space-y-2 max-[700px]:mx-0">
              <div className="flex items-center gap-2 max-[700px]:gap-1">
                <input type="checkbox" className="w-8 h-8 max-[700px]:w-4 max-[700px]:h-4" />
                <p className="text-base max-[700px]:text-sm">Ghana</p>
              </div>
            </div>
          </div>
          <hr />

          <div className="space-y-2">
            <div>
              <div className="flex items-center justify-between pt-2">
                <p className="text-xl font-bold">By Sponsoring Organization</p>{" "}
                <img src="images/down arrow.png" alt="down arrow" />
              </div>
              <div className="flex items-center justify-between pt-2">
                <p className="">Africa Wide Sponsorships </p>{" "}
                <img src="images/down arrow.png" alt="down arrow" />
              </div>
              <hr />
              <div className="mx-4 space-y-2 pt-2 max-[700px]:mx-1 max-[700px]:pt-1 max-[700px]:overflow-y-auto max-[700px]:max-h-40">
                {[
                  "Mastercard Foundation Schlors Program",
                  "African Union Kwame Nkrumah Scientific Awards",
                  "Ashinaga Africa Initiative",
                  "Mo Ibrahim Foundation Scholarships",
                  "Mandela Rhodes Scholarship",
                  "African Leadership University (ALU) Scholarships",
                  "Graca Machel Trust Women Scholarships",
                  "Carnegie Corporation of New York – African Academic Scholars Program",
                  "DAAD In-Country/In-Region Africa Scholarships",
                  "Oxford-Weidenfeld & Hoffmann Scholarships",
                  "Schwarzman Scholars for Africa",
                  "Nelson Mandela World Human Rights Moot Court Scholarship",
                  "Wells Mountain Initiative (WMI) Scholars Program",
                  "UNESCO Africa Scholarship Program",
                  "University of Cape Town Mastercard Foundation Scholarships",
                  "African Women in Science and Engineering (AWSE) Scholarships",
                  "University of Pretoria Mastercard Foundation Scholars Program",
                  "Alliance for African Partnership (AAP) Scholarships",
                  "Tony Elumelu Foundation Entrepreneurship Program",
                  "YALI Regional Leadership Center Scholarships"
                ].map((org, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-1 items-center">
                    <input type="checkbox" className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4 col-span-1" />
                    <p className="col-span-11 text-base max-[700px]:text-sm">{org}</p>
                  </div>
                ))}
              </div>
            </div>
            <hr />
          </div>
          <div className="space-y-2">
            <div>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold max-[700px]:text-sm">
                  Nigeria-Wide Schlorships
                </p>{" "}
                <img src="images/up arrow.png" alt="up arrow" />
              </div>
            </div>
            <hr />
          </div>
          <div className="space-y-2">
            <div>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold max-[700px]:text-sm">
                  International Organizations
                </p>{" "}
                <img src="images/up arrow.png" alt="up arrow" />
              </div>
            </div>
            <hr />
          </div>
          <div className="space-y-2">
            <div>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold max-[700px]:text-sm">
                  Government & National Scholarship Programs
                </p>{" "}
                <img src="images/up arrow.png" alt="up arrow" />
              </div>
            </div>
            <hr />
          </div>
          <div className="space-y-2">
            <div>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold max-[700px]:text-sm">
                  Private & Corporate Sponsorships
                </p>{" "}
                <img src="images/up arrow.png" alt="up arrow" />
              </div>
            </div>
            <hr />
          </div>
          <div className="space-y-2">
            <div>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold max-[700px]:text-sm">
                  Academic & University Scholarships
                </p>{" "}
                <img src="images/up arrow.png" alt="up arrow" />
              </div>
            </div>
            <hr />
          </div>
          <div className="space-y-2">
            <div>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold max-[700px]:text-sm">By Deadline</p>{" "}
                <img src="images/down arrow.png" alt="down arrow" />
              </div>
            </div>
            <hr />
            <div className="mx-4 space-y-2 max-[700px]:mx-1">
              <div className="flex items-center gap-2 max-[700px]:gap-1">
                <input type="checkbox" className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4" />
                <p className="text-base max-[700px]:text-sm">Closing this week</p>
              </div>
              <div className="flex items-center gap-2 max-[700px]:gap-1">
                <input type="checkbox" className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4" />
                <p className="text-base max-[700px]:text-sm">Closing in the next 30 days</p>
              </div>
              <div className="flex items-center gap-2 max-[700px]:gap-1">
                <input type="checkbox" className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4" />
                <p className="text-base max-[700px]:text-sm">Closing in the next 90 days</p>
              </div>
              <div className="flex items-center gap-2 max-[700px]:gap-1">
                <input type="checkbox" className="w-6 h-6 max-[700px]:w-4 max-[700px]:h-4" />
                <p className="text-base max-[700px]:text-sm">Closing in the next 4-6 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
