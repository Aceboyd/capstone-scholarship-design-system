import React, { useState } from "react";
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
  const [activeSection, setActiveSection] = useState("overview");

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100" style={{ fontFamily: "Open Sans, sans-serif" }}>
      <Header />
      <Banner />
      <NavigationBar activeSection={activeSection} handleScroll={handleScroll} />
      <div className="pt-16">
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