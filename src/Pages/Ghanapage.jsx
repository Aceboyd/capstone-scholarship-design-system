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
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Banner />
      <NavigationBar />
      <main className="px-4 sm:px-6 lg:px-8 pt-14 sm:pt-0">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* spacing ensures readable gaps between stacked sections on mobile */}
          <ScholarshipComponent id="overview" />
          <ScholarshipSection id="about-scholarship" />
          <Eligibility id="eligibility-criteria" />
          <ScholarshipRequirements id="scholarship-requirements" />
          <HowToApply id="how-to-apply" />
          <Banner2 id="banner2" />
          <FAQ id="faqs" />
          <Foot />
        </div>
      </main>
    </div>
  );
};

export default Ghanapage;
