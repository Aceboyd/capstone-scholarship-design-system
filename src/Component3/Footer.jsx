import { Instagram, Twitter } from 'lucide-react';

// ✅ Corrected filename to match actual file: whasapp.png
import whatsappIcon from '../assets/image/icon/whasapp.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000080] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-6">
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
          <div className='pr-5'>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <p className='max-md:text-[15px] flex max-[490px]:justify-end'>scholarships@capstone.gov.ng</p>
              <p>+234 (0) 702 123 456</p>
              <p>+234 (0) 809 187 653</p>
              <p>2nd Floor, Trust House, Ridge,<br />Lagos, Nigeria</p>
              <p>Office Hours: Monday – Friday</p>
            </div>
          </div>

          {/* Newsletter & Socials */}
          <div>
            <h3 className="w-full flex whitespace-pre text-xl font-semibold mb-6 max-md:mt-10">Subscribe to our newsletter</h3>
            <form className="mb-8">
              <div className="flex md:flex-col lg:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 rounded-md text-white ring-2 ring-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 border-none shadow-none"
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
      </div>

      <div className="w-full mt-12 text-sm md:text-base flex text-center border-t border-blue-800">
        <p className='pt-5 mx-auto'>© {currentYear} Capstone Scholarship Nigeria. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;