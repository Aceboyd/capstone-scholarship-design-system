import React from 'react';

const ScholarshipSection = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="about-scholarship" 
      className="py-6 bg-[#EBEDFF] min-h-[30vh] flex items-start animate-fadeIn scroll-mt-24"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-[#0000FE] mb-8 mt-10 tracking-tight">
          About Scholarship
        </h2>
        <p className="text-black text-lg leading-relaxed mb-4">
          The Ghana Stem Excellence Scholarship is designed to support outstanding undergraduate students pursuing STEM-related fields. This scholarship provides full tuition coverage and research grants to help students focus on their studies and contribute to scientific advancements.
        </p>
        <p className="text-black text-lg leading-relaxed">
          This scholarship aims to bridge the gap in STEM education by providing financial assistance to talented students in Ghana. It is committed to fostering innovation, encouraging research, and empowering students to excel in Science, Technology, Engineering, and Mathematics (STEM) disciplines. By supporting students with tuition and research funding, the program helps build a future generation of innovators and problem-solvers.
        </p>
      </div>
    </section>
  );
};

export default ScholarshipSection;