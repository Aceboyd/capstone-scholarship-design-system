import Banner from "../Component3/Banner";
import Banner2 from "../Component3/Banner2";
import Eligibility from "../Component3/Eligibility";
import FAQ from "../Component3/FAQS";
import Foot from "../Component3/Footer";
import Header from "../Component3/Header2";
import HowToApply from "../Component3/HowToApply";
import NavigationBar from "../Component3/NavigationBar";
import ScholarshipComponent from "../Component3/ScholarshipComponent";
import ScholarshipRequirements from "../Component3/ScholarshipRequirements";
import ScholarshipSection from "../Component3/ScholarshipSection";

const Ghanapage = () => {
  return (

    <div
      className="navbar  top-0 z-50 w-full border-b border-gray-200 bg-[#EBEDFF] py-2"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col lg:flex-row justify-around rounded-lg bg-white p-2 sm:p-3 px-2 sm:px-4 shadow-md gap-2 lg:gap-0 overflow-x-auto">
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
            className={`rounded-lg px-4 py-2 transition duration-200 w-full sm:w-auto ${
              activeSection === item.id
                ? "bg-[#0000FE] text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {item.label}
          </button>
        ))}

    <div className="min-h-screen bg-gray-100">
      <Header />
      <Banner />
      <NavigationBar />
      <div className="">
        {" "}
        {/* Adjusted padding for fixed NavigationBar */}
        <ScholarshipComponent id="overview" />
        <ScholarshipSection id="about-scholarship" />
        <Eligibility id="eligibility-criteria" />
        <ScholarshipRequirements id="scholarship-requirements" />
        <HowToApply id="how-to-apply" />
        <Banner2 id="banner2" />
        <FAQ id="faqs" />
        <Foot />

      </div>
    </div>
  );
};

export default Ghanapage;
