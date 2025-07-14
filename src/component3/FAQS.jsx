import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ArrowDown from '../assets/image/form/vector.png'; // Importing the image

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(2);

  const faqs = [
    {
      question: "Can I apply for more than one scholarship at the same time?",
      answer: "Yes, you may apply for multiple scholarships. However, if you are selected for more than one, you may be required to choose one, especially if they both offer full funding."
    },
    {
      question: "Can I apply if I'm still waiting for my final academic results?",
      answer: "Yes, you can apply if you're awaiting final results, provided you submit a statement from your institution confirming your current status. However, if selected, your scholarship offer will be conditional upon submission of your final transcripts and proof of meeting the GPA requirement."
    },
    {
      question: "Is there an age limit for applicants?",
      answer: "There is no strict age limit, but applicants must be enrolling or currently enrolled in an undergraduate STEM program at a recognized institution."
    },
    {
      question: "What happens after I submit my application?",
      answer: "After submission, you'll receive a confirmation email. You can then track your application status through your dashboard. Notifications will be sent if additional information is needed."
    },
    {
      question: "Will I be notified if my application is not successful?",
      answer: "Yes, all applicants will be informed of the outcome via email whether they are selected or not, along with any next steps or feedback where applicable."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="w-full max-w-4xl mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-[#0000FE] mb-4">FAQs</h2>
        <p className="text-2xl md:text-3xl text-[#0000FE] font-light">
          Frequently Asked Questions
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-[#878787] rounded-lg overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'bg-[#EBEDFF]' : ''
            }`}
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center"
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-lg font-medium text-gray-900">
                {faq.question}
              </span>
              <div
                className={`p-2 rounded-full transition-all duration-300 ${
                  openIndex === index ? 'bg-[#0000FE]' : 'bg-[#EBEDFF]'
                }`}
              >
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? 'text-white transform rotate-180' : 'text-blue-600'
                  }`}
                />
              </div>
            </button>
            <div
              className={`px-6 transition-all duration-300 ${
                openIndex === index ? 'py-4' : 'h-0 py-0'
              }`}
            >
              {openIndex === index && (
                <p className="text-gray-600">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* See all FAQs Button */}
      <div className="mt-12 text-center">
        <button className="inline-flex items-center px-8 py-3 bg-[#0000FE] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
          See all FAQs
          <img src={ArrowDown} alt="Arrow Down" className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default FAQ;