import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const Accordion = () => {
  const accordingData = [
    {
      title: "by study level?",
      description: null,
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
      title: "Medical and Health Sciences",
      description: null,
      checkbox: [],
    },
    {
      title: "business and finances",
      description: null,
      checkbox: [],
    },
    {
      title: "social sciences and humanities",
      description: null,
      checkbox: [],
    },
    {
      title: "arts and creative fields",
      description: null,
      checkbox: [],
    },
    {
      title: "by country",
      description: null,
      checkbox: ["ghana", "nigeria", "egypt", "USA", "canada"],
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
        "Mastercard Foundation Scholars Program",
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
      title: "nigeria - wide scholarships",
      description: null,
      checkbox: [],
    },
    {
      title: "international organizations",
      description: null,
      checkbox: [],
    },
    {
      title: "government & national scholarship programs",
      description: null,
      checkbox: [],
    },
    {
      title: "private & corporate sponsorships",
      description: null,
      checkbox: [],
    },
    {
      title: "academic institutions & university scholarships",
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
  const [checkedItems, setCheckedItems] = useState({});

  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  const handleInputChange = (label) => {
    setCheckedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className="flex w-full flex-col gap-3 bg-[#f4f5ff] px-3 pb-6">
      {accordingData.map((according, index) => {
        const isOpen = isAccordingOpen === index;

        // Hide section if no title, description, or checkbox
        if (
          !according.title &&
          !according.description &&
          !according.checkbox.length
        ) {
          return null;
        }

        return (
          <article
            key={index}
            className="border-border border-b border-gray-400 py-3"
          >
            <div
              className="flex w-full cursor-pointer items-center justify-between gap-2"
              onClick={() => handleClick(index)}
            >
              {according.title && (
                <h2 className="font-bold capitalize">{according.title}</h2>
              )}
              <FaChevronDown
                className={`text-[1.2rem] transition-transform duration-300 dark:text-slate-600 ${
                  isOpen && "rotate-180 !text-[#0000FE]"
                }`}
              />
            </div>

            {/* Description */}
            {according.description && (
              <div
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "mt-3 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden text-[0.9rem] text-[#424242]">
                  {according.description}
                </p>
              </div>
            )}

            {/* Checkboxes */}
            {according.checkbox.length > 0 && (
              <div
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "mt-3 grid-rows-[1fr] gap-2 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="flex flex-col gap-2 overflow-hidden">
                  {according.checkbox.map((label, i) => (
                    <label
                      key={i}
                      className="flex w-fit cursor-pointer items-center gap-2.5"
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
                              className="fill-[#0000FE]"
                              stroke="#0000FE"
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
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
};

export default Accordion;
