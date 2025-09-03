import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const Accordion = () => {
  const accordingData = [
    {
      title: "by study level?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
      checkbox: [
        "undergraduate",
        "postgraduate (master's)",
        "phd/Doctoral",
        "postdoctoral research",
      ],
    },
    {
      title: "by field of study?",
      description: null,
      checkbox: [],
    },
    {
      title: "STEM?",
      description: "(Science, Technology, Engineering, Math)",
      checkbox: [
        "computer science",
        "Cybersecurity",
        "Mechanical Engineering",
        "Electrical Engineering",
        "Renewable Energy",
        "Biotechnology",
      ],
    },
    {
      title: "Medical and Health Sciences?",
      description: null,
      checkbox: [],
    },
    {
      title: "Business and Finances?",
      description: null,
      checkbox: [],
    },
    {
      title: "Social Sciences and Humanities?",
      description: null,
      checkbox: [],
    },
    {
      title: "Arts and Creative Fields?",
      description: null,
      checkbox: [],
    },
    {
      title: "by country",
      description: null,
      checkbox: ["ghana"],
    },
    {
      title: "by sponsoring organization",
      description: null,
      checkbox: [],
    },
    {
      title: "africa-Wide sponsorships",
      description: null,
      checkbox: [
        "Mastercard FoundationScholars Program",
        "African Union Kwame Nkrumah Scientific Awards",
        "Ashinaga Africa Initiative",
        "Mo Ibrahim Foundation Scholarships",
        "Mandela Rhodes Scholarship",
        "African Leadership University (ALU)",
        "Scholarships Graca Machel Trust",
        "Women Scholarships",
        "Carnegie Corporation of New York - African Academic Scholars Program",
        "DAAD In-Country/ln-Region Africa Scholarships",
        "Oxford-Weidenfeld & Hoffmann Scholarships",
        "Schwarzman Scholars for Africa",
        "Nelson Mandela World Human Rights Moot Court Scholarship",
        "Wells Mountain Initiative (WMI) Scholars Program",
        "UNESCO Africa Scholarship Program",
        "University of Cape Town Mastercard Foundation Scholarships",
        "African Women in Science and Engineering (AWSE) Scholarships",
        "niversity of Pretoria Mastercard Foundation Scholars Program",
        "Alliance for African Partnership (AAP) Scholarships",
        "Tony Elumelu Foundation Entrepreneurship Program",
        "YALI Regional Leadership Center Scholarships",
      ],
    },
    {
      title: "Nigeria-Wide Schlorships",
      description: null,
      checkbox: [],
    },
    {
      title: "International Organizations",
      description: null,
      checkbox: [],
    },
    {
      title: "Government & National Scholarship Programs",
      description: null,
      checkbox: [],
    },
    {
      title: "Private & Corporate Sponsorships",
      description: null,
      checkbox: [],
    },
    {
      title: "Academic & University Scholarships",
      description: null,
      checkbox: [],
    },
    {
      title: "by deadline",
      description: null,
      checkbox: [
        "Closing this week",
        "Closing in the next 30 days",
        "Closing in the next 90 days",
        "Closing in the next 4 - 6 months",
      ],
    },
  ];

  const [isAccordingOpen, setIsAccordingOpen] = useState(0);

  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  // ✅ Track checkbox states with an object
  const [checkedItems, setCheckedItems] = useState({});

  const handleInputChange = (label) => {
    setCheckedItems((prev) => ({
      ...prev,
      [label]: !prev[label], // toggle individual checkbox
    }));
  };

  return (
    <div className="flex w-full flex-col gap-3">
      {accordingData.map((according, index) => (
        <article
          key={index}
          className="border-border border-b border-gray-400 py-3"
        >
          <div
            className="flex w-full cursor-pointer items-center justify-between gap-2"
            onClick={() => handleClick(index)}
          >
            <h2 className="font-bold capitalize">{according.title}</h2>
            <FaChevronDown
              className={`text-[1.2rem] transition-all duration-300 dark:text-slate-600 ${
                isAccordingOpen === index && "rotate-180 !text-[#3B9DF8]"
              }`}
            />
          </div>

          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              isAccordingOpen === index
                ? "mt-4 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <p className="overflow-hidden text-[0.9rem] text-[#424242]">
              {according.description || null}
            </p>
          </div>

          <div
            className={`${
              isAccordingOpen === index
                ? "mt-4 block opacity-100"
                : "hidden opacity-0"
            }`}
          >
            {according.checkbox.map((label, i) => (
              <label
                key={i}
                className="flex cursor-pointer items-center gap-2.5"
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={!!checkedItems[label]}
                  onChange={() => handleInputChange(label)}
                />

                {/* Custom Checkbox */}
                <div className="relative">
                  {/* Checked */}
                  <span
                    className={`${
                      checkedItems[label]
                        ? "z-20 scale-100 opacity-100"
                        : "z-[-1] scale-50 opacity-0"
                    } absolute top-0 left-0 transition-all duration-200`}
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="20"
                        height="20"
                        rx="4"
                        className="fill-[#3B9DF8]"
                        stroke="#3B9DF8"
                      />
                      <path
                        d="M8.2 15.5c-.13 0-.26-.03-.38-.08a1.1 1.1 0 0 1-.32-.23L4.3 11.9a1.1 1.1 0 0 1-.3-.78c0-.27.1-.52.3-.72.19-.2.44-.3.71-.31.27 0 .52.11.71.3l2.5 2.6 6.1-6.35a1.1 1.1 0 0 1 1.6 0c.2.2.3.46.3.73 0 .27-.1.52-.3.72l-6.8 7.1c-.09.1-.2.17-.32.22-.12.05-.25.08-.38.08Z"
                        fill="white"
                      />
                    </svg>
                  </span>

                  {/* Unchecked */}
                  <span
                    className={`${
                      !checkedItems[label]
                        ? "z-20 scale-100 opacity-100"
                        : "z-[-1] scale-50 opacity-0"
                    } transition-all duration-200`}
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="20"
                        height="20"
                        rx="4"
                        className="fill-transparent"
                        stroke="#ccc"
                      />
                    </svg>
                  </span>
                </div>

                <span className="capitalize">{label}</span>
              </label>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Accordion;
