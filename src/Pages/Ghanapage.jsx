import Banner from "../Component3/Banner";
import Background from "../Components4/Background";
import Banner2 from "../Component3/Banner2";
import Eligibility from "../Component3/Eligibility";
import FAQ from "../Component3/FAQS";
import Foot from "../Component3/Footer";
import Header2anon from "../Component3/Header2anon";
import HowToApply from "../Component3/HowToApply";
import NavigationBar from "../Component3/NavigationBar";
import ScholarshipComponent from "../Component3/ScholarshipComponent";
import ScholarshipRequirements from "../Component3/ScholarshipRequirements";
import ScholarshipSection from "../Component3/ScholarshipSection";
import Footer from "../Component3/Footer";

const Ghanapage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header2anon/>
      <div className="mt-8"><Background/></div>
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
