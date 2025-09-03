import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <button
        className="w-full text-left p-3 sm:p-5 flex justify-between items-center focus:outline-none focus:ring-inset"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
      >
        <h2 className="text-base sm:text-lg font-medium">{question}</h2>
        <span className="bg-[#767680]/[0.12] rounded-full p-1 sm:p-2 flex-shrink-0 ml-3 sm:ml-6 text-black">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div 
        id={`faq-answer-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-[500px] opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-3 sm:p-5 pt-0 border-t border-slate-100 bg-[#767686]/[0.12]">
          {typeof answer === 'string' ? (
            <p className="text-slate-700 text-sm sm:text-base">{answer}</p>
          ) : (
            answer
          )}
        </div>
      </div>
    </div>
  );
};