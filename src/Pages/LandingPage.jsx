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
  const [selectedCategories, setSelectedCategories] = useState([]); // Store multiple categories

  // Memoize the setSelectedCategories function to prevent unnecessary re-renders
  const handleSetSelectedCategories = useCallback((categories) => {
    setSelectedCategories(categories);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Header */}
      <Header
        setSelectedCategories={handleSetSelectedCategories}
        selectedCategories={selectedCategories}
        className="w-full px-4 sm:px-6 lg:px-8" // Responsive padding
      />

      {/* Main Content */}
      <main className="flex-grow w-full">
        <Hero
          selectedCategories={selectedCategories}
          className="w-full px-4 sm:px-6 lg:px-8" // Responsive padding
        />
        <Sponsors className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8" />
        <SlideSection className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8" />
        <SectionB className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8" />
        <SectionC className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8" />
        <SectionD className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8" />
        <SectionE className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8" />
        <SectionF className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8" />
        <SectionG className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8" />
      </main>

      {/* Footer */}
      <Footer className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8" />
    </div>
  );
};

export default LandingPage;