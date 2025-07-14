import { useEffect, useState } from "react";
import WebFont from "webfontloader";

const NavigationBar = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Open Sans:400,600", "sans-serif"], // Fallback font: Open Sans
      },
    });
  }, []);

  const handleScroll = (sectionId) => {
    setActiveSection(sectionId); // Set the clicked section as active
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight =
        document.querySelector(".navbar")?.offsetHeight || 80;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    } else {
      console.warn(`Section with id '${sectionId}' not found.`);
    }
  };

  return (
    <div
      className="navbar sticky top-0 z-50 w-full border-b border-gray-200 bg-[#EBEDFF] py-2"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <div className="mx-auto flex max-w-6xl justify-around rounded-lg bg-white p-3 px-4 shadow-md">
        {[
          { id: "overview", label: "Overview" },
          { id: "about-scholarship", label: "About Scholarship" },
          { id: "eligibility-criteria", label: "Eligibility Criteria" },
          { id: "scholarship-requirements", label: "Scholarship Requirements" },
          { id: "how-to-apply", label: "How to Apply" },
          { id: "faqs", label: "FAQs" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className={`rounded-lg px-4 py-2 transition duration-200 ${
              activeSection === item.id
                ? "bg-[#0000FE] text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
