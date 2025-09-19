import { Instagram, Twitter } from "lucide-react";
import whatsappIcon from "../assets/image/icon/whasapp.png"; // Corrected filename

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000080] text-white py-12">
      <div className="mx-auto w-full px-4  lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
          <div className="pr-0 md:pr-5">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-base sm:text-lg">scholarships@capstone.gov.ng</p>
              <p className="text-base sm:text-lg">+234 (0) 702 123 456</p>
              <p className="text-base sm:text-lg">+234 (0) 809 187 653</p>
              <p className="text-base sm:text-lg">
                2nd Floor, Trust House, Ridge,
                <br />
                Lagos, Nigeria
              </p>
              <p className="text-base sm:text-lg">Office Hours: Monday – Friday</p>
            </div>
          </div>

          {/* Newsletter & Socials */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Subscribe to our newsletter</h3>
            <form className="mb-8" aria-label="Newsletter subscription">
              <div className="max-md:min-xl:flex gap-2  space-x-2 space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 w-[70%] px-4 py-2 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-none shadow-none"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="w-[30%] sm:w-auto bg-white text-[#000080] px-6 py-2 rounded-md font-semibold hover:bg-blue-100 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>

            <h3 className="text-xl font-semibold mb-4">Our Socials</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-200 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors" aria-label="WhatsApp">
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
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