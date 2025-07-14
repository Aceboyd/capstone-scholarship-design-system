import React, { useEffect } from 'react';
import ContactForm from '../component2/ContactForm';
import ContactInfo from '../component2/ContactInfo';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us | Capstone Fund';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">CONTACT US</h1>
          <div className="w-24 h-1  mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className=" p-8 animate-fadeIn">
            <ContactInfo />
          </div>
          
          <div className=" p-8 animate-fadeIn animation-delay-300">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;