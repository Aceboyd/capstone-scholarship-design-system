import { useState, useCallback } from "react";
import Header from "../Component/Header";
import Hero from "../Component/Hero";
import Sponsors from "../Component/Sponsors";
import SlideSection from "../Component/SlideSection";
import SectionB from "../Component/SectionB";
import SectionC from "../Component/SectionC";
import SectionD from "../Component/SectionD";
import SectionE from "../Component/SectionE";
import SectionF from "../Component/SectionF";
import SectionG from "../Component/SectionG";
import Footer from "../Component/Footer";

const LandingPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]); 

  const handleSetSelectedCategories = useCallback((categories) => {
    setSelectedCategories(categories);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Header */}
      <Header
        setSelectedCategories={handleSetSelectedCategories}
        selectedCategories={selectedCategories}
        className="w-full px-3 sm:px-6 lg:px-12"
      />

      {/* Main Content */}
      <main className="flex-grow w-full">
        <Hero
          selectedCategories={selectedCategories}
          className="w-full px-3 sm:px-6 lg:px-12 py-6 sm:py-8"
        />

        {/* Each section gets responsive spacing */}
        <Sponsors className="w-full px-3 sm:px-6 lg:px-12 py-6 sm:py-10" />
        <SlideSection className="w-full px-3 sm:px-6 lg:px-12 py-6 sm:py-10" />
        <SectionB className="w-full px-3 sm:px-6 lg:px-12 py-6 sm:py-10" />
        <SectionC className="w-full px-3 sm:px-6 lg:px-12 py-6 sm:py-10" />
        <SectionD className="w-full px-3 sm:px-6 lg:px-12 py-6 sm:py-10" />
        <SectionE className="w-full px-3 sm:px-6 lg:px-12 py-6 sm:py-10" />
        <SectionF className="w-full px-3 sm:px-6 lg:px-12 py-6 sm:py-10" />
        <SectionG className="w-full px-3 sm:px-6 lg:px-12 py-6 sm:py-10" />
      </main>

      {/* Footer */}
      <Footer className="w-full px-3 sm:px-6 lg:px-12 py-6 sm:py-10" />
    </div>
  );
};

export default LandingPage;
