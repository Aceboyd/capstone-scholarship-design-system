import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Image imports
import testimoImage from '../assets/image/icon/Testimonials.png';
import tudentImage from '../assets/image/icon/Student.png';
import quoteImage from '../assets/image/icon/vector.png';

const testimonials = [
  {
    quote: "This scholarship helped me focus and thrive.",
    name: "Laitan Solape",
    title: "STEM Scholarship Recipient",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
  },
  {
    quote: "The support was empowering from start to finish.",
    name: "David Adeyemi",
    title: "Mechanical Engineering Scholar",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    quote: "Capstone believed in me — and that changed everything.",
    name: "Zainab Ibrahim",
    title: "Renewable Energy Scholar",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
  },
  {
    quote: "It was more than funding — it was belief in my potential.",
    name: "Fatima Abdullahi",
    title: "Public Health & Biotechnology Student",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
  },
  {
    quote: "I'm now able to explore research I never thought I could afford.",
    name: "Tobi Alade",
    title: "Scholarship Recipient",
    image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg"
  },
  {
    quote: "Capstone Scholarship took me from surviving in school to thriving",
    name: "Maryam Bello",
    title: "Social Science Grant Awardee",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg"
  },
  {
    quote: "Hard work truly gets noticed.",
    name: "Nafisat Abubakar",
    title: "Arts Scholarship Recipient",
    image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg"
  },
  {
    quote: "This scholarship let me focus on real solutions.",
    name: "Chuka Eze",
    title: "Engineering Scholarship Recipient",
    image: "https://images.pexels.com/photos/3785083/pexels-photo-3785083.jpeg"
  },
  {
    quote: "This scholarship let me focus on real solutions.",
    name: "Blessing Otobo",
    title: "Mass Communication Scholar",
    image: "https://images.pexels.com/photos/3771126/pexels-photo-3771126.jpeg"
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isAnimating]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage(prev => (prev === 0 ? totalPages - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage(prev => (prev === totalPages - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Images */}
      <img
        src={testimoImage}
        alt="Testimo"
        className="absolute top-10 right-[-1rem] w-[220px] md:w-[420px] opacity-10 md:opacity-20 animate-fade-in"
      />
      <img
        src={tudentImage}
        alt="tudent"
        className="absolute bottom-0 left-[-1rem] w-[220px] md:w-[420px] opacity-10 md:opacity-20 animate-fade-in"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-3 md:mb-4">
            STUDENT <span className="text-[#0404FE]">TESTIMONIALS</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg animate-pulse">
            Hear from Students like you!
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-blue-50/50 rounded-2xl p-6 md:p-8 relative transform transition-all duration-500 hover:shadow-xl ${
                isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              } animate-fade-slide-up`}
              style={{
                animationDelay: `${index * 150}ms`,
                transform: `perspective(1000px) rotateY(${isAnimating ? '90deg' : '0deg'})`
              }}
            >
              <img
                src={quoteImage}
                alt="Quote"
                className="absolute top-4 left-4 w-8 h-8 md:w-10 md:h-10 animate-bounce"
              />
              <div className="mb-6 pt-6 md:pt-8">
                <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover hover:scale-110 transition-transform"
                />
                <div>
                  <h3 className="font-semibold text-sm md:text-base text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation & Dots */}
        <div className="flex flex-col items-center gap-3 mt-10 md:mt-6">
          {/* Navigation Buttons */}
          <div className="flex justify-center md:justify-end items-center gap-3 w-full md:mb-[-2rem]">
            <button
              onClick={handlePrevious}
              disabled={isAnimating}
              className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105 disabled:opacity-50 hover:shadow"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-400" strokeWidth={1.5} />
            </button>
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 hover:shadow"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={1.5} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 md:gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 transform ${
                  index === currentPage ? 'bg-blue-600 scale-125 animate-pulse' : 'bg-blue-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
