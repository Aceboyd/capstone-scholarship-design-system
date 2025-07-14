import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

// Import WhatsApp icon image
import whatsappIcon from '../assets/image/icon/whasApp.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000080] text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Apply Now
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Eligibility Criteria
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Supporting Document
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <p>scholarships@capstone.gov.ng</p>
              <p>+234 (0) 702 123 456</p>
              <p>+234 (0) 809 187 653</p>
              <p>2nd Floor, Trust House, Ridge,<br />Lagos, Nigeria</p>
              <p>Office Hours: Monday – Friday</p>
            </div>
          </div>

          {/* Newsletter & Socials */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Subscribe to our newsletter</h3>
            <form className="mb-8">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-none shadow-none"
                />
                <button
                  type="submit"
                  className="bg-white text-[#000080] px-6 py-2 rounded-md font-semibold hover:bg-blue-100 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>

            <h3 className="text-xl font-semibold mb-4">Our Socials</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 text-center">
          <p>© {currentYear} Capstone Scholarship Nigeria. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;