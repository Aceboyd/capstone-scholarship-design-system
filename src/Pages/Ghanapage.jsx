import { useState, useCallback } from "react";
import Background from "../Components4/Background";
import Banner2 from "../Component3/Banner2";
import Eligibility from "../Component3/Eligibility";
import FAQ from "../Component3/FAQS";
import Header from "../Component/Header";
import HowToApply from "../Component3/HowToApply";
import NavigationBar from "../Component3/NavigationBar";
import ScholarshipComponent from "../Component3/ScholarshipComponent";
import ScholarshipRequirements from "../Component3/ScholarshipRequirements";
import ScholarshipSection from "../Component3/ScholarshipSection";
import Footer from "../Component3/Footer";

const Ghanapage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]); 
  
    const handleSetSelectedCategories = useCallback((categories) => {
      setSelectedCategories(categories);
    }, []);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Header
      setSelectedCategories={handleSetSelectedCategories}
        selectedCategories={selectedCategories}
        className="w-full px-3 sm:px-6 lg:px-12"
      />
      <div className="mt-20"><Background/></div>
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
        <Footer />
      </div>
      
    </div>
  );
};

export default Ghanapage;
