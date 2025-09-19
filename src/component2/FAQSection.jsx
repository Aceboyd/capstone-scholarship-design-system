import React from 'react';
import { FAQItem } from './FAQItem';
import { faqData } from '../Data/faqData';

export const FAQSection = () => {
  return (
    <div className="max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto" id='faq'>
      <div className="text-center mb-6 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-blue-600 mb-2">FAQs</h1>
        <p className="text-base sm:text-xl lg:text-2xl text-blue-600">Frequently Asked Questions</p>
      </div>
      <div className="space-y-4">
        {faqData.map((faq) => (
          <FAQItem 
            key={faq.id} 
            question={faq.question} 
            answer={faq.answer}
            id={faq.id}
          />
        ))}
      </div>
    </div>
  );
};