import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

// Import WhatsApp icon image
import whatsappIcon from '../assets/image/icon/whasApp.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000080] text-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors text-sm sm:text-base">
                  Apply Now
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors text-sm sm:text-base">
                  Eligibility Criteria
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors text-sm sm:text-base">
                  Supporting Document
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors text-sm sm:text-base">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <p>scholarships@capstone.gov.ng</p>
              <p>+234 (0) 702 123 456</p>
              <p>+234 (0) 809 187 653</p>
              <p>2nd Floor, Trust House, Ridge,<br />Lagos, Nigeria</p>
              <p>Office Hours: Monday – Friday</p>
            </div>
          </div>

          {/* Newsletter & Socials */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Subscribe to our newsletter</h3>
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-none shadow-none"
                />
                <button
                  type="button"
                  className="bg-white text-[#000080] px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base font-semibold hover:bg-blue-100 transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Our Socials</h3>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Instagram size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Twitter size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-blue-800 text-center text-sm sm:text-base">
          <p>© {currentYear} Capstone Scholarship Nigeria. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;