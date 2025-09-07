import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEdit, FiEye, FiEyeOff, FiMail } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import capeImage from "../assets/image/cape.png";
import watermark from "../assets/image/first.png";
import nice from "../assets/image/nice.png";

const register = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData.email && userData.password) {
        resolve({ message: "Registration successful!" });
      } else {
        reject(new Error("Please fill in all fields."));
      }
    }, 1000);
  });
};

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await register({ fullName, email, password });
      setShowPopup(true);
    } catch (error) {
      alert(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className="relative mx-auto flex min-h-screen bg-gray-50 font-sans">
      {/* Watermark - Desktop only */}
      {/* Watermark - Visible on all devices */}
        <div className="pointer-events-none absolute top-0 right-0 left-0 z-0 flex items-center justify-center overflow-hidden">
          <img
            src={watermark}
            alt="Watermark"
            className="h-[120vh] w-[300px] md:h-[265vh] md:w-[700px] opacity-5 md:opacity-7"
            style={{ transform: "rotate(5deg)" }}
          />
        </div>


      <div className="flex flex-1 flex-col md:flex-row relative z-10">
        <div className="relative z-20 mt-0 flex w-full flex-1 flex-col items-center justify-center p-4 sm:p-6 md:mt-[50px] md:justify-start md:p-8">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-xl rounded-lg">
            {/* Logo */}
            <div className="mb-4 flex justify-start md:mb-12">
              <img src={nice} alt="Logo" className="h-8 sm:h-10 md:h-30" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#040498] mb-2 text-start">
              Create an account
            </h2>
            <p className="text-sm sm:text-base text-[#040498] mb-4 text-start">
              Already have an account?{" "}
              <Link to="/" className="text-[#040458] hover:underline">
                Login
              </Link>
            </p>

            <form className="space-y-5 sm:space-y-6" onSubmit={handleRegister}>
              {/* Full Name */}
              <div className="relative">
                <label htmlFor="fullName" className="hidden md:block text-lg font-medium text-[#040498] mb-1">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full mobile-input md:rounded-md md:border md:border-gray-300 md:px-6 md:py-5 text-sm sm:text-base px-3 py-2 sm:py-3"
                />
                <FiEdit className="absolute top-1/2 right-3 md:hidden -translate-y-1/2 text-gray-500" />
              </div>

              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="hidden md:block text-lg font-medium text-[#040498] mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full mobile-input md:rounded-md md:border md:border-gray-300 md:px-6 md:py-5 text-sm sm:text-base px-3 py-2 sm:py-3"
                />
                <FiMail className="absolute top-1/2 right-3 md:hidden -translate-y-1/2 text-gray-500" />
              </div>

              {/* Password */}
              <div className="relative">
                <label htmlFor="password" className="hidden md:block text-lg font-medium text-[#040498] mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full mobile-input md:rounded-md md:border md:border-gray-300 md:px-6 md:py-5 text-sm sm:text-base px-3 py-2 sm:py-3"
                />
                {showPassword ? (
                  <FiEyeOff className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(false)} />
                ) : (
                  <FiEye className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(true)} />
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <label htmlFor="confirmPassword" className="hidden md:block text-lg font-medium text-[#040498] mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full mobile-input md:rounded-md md:border md:border-gray-300 md:px-6 md:py-5 text-sm sm:text-base px-3 py-2 sm:py-3"
                />
                {showConfirmPassword ? (
                  <FiEyeOff className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={() => setShowConfirmPassword(false)} />
                ) : (
                  <FiEye className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={() => setShowConfirmPassword(true)} />
                )}
              </div>

              {/* Terms */}
              <div className="hidden md:flex items-start text-sm text-gray-600">
                <input type="checkbox" required className="mr-2 h-5 w-5" />
                <span>
                  By creating an account, you agree to our{" "}
                  <a href="#" className="text-blue-600 hover:underline">Terms of Use</a> and{" "}
                  <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </span>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#0000FE] to-[#4B6CB7] py-3 sm:py-4 text-white text-base sm:text-lg md:text-xl font-medium transition hover:opacity-90"
              >
                Register
              </button>

              {/* Google sign-up - Mobile only (moved below Register) */}
              <a href="#" className="block md:hidden">
                <button className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-gray-700 hover:bg-gray-50 mt-4">
                  <FcGoogle className="mr-2" /> Sign up with Google
                </button>
              </a>
            </form>

            {/* Google (desktop) */}
            <div className="mt-6 sm:mt-8 hidden md:block text-center">
              <div className="text-[#000] font-sans mb-4">OR</div>
              <a href="#">
                <button className="w-full flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-4 text-base sm:text-lg font-medium text-gray-700 hover:bg-gray-50">
                  <FcGoogle className="mr-2" /> Sign up with Google
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section (Desktop Only) */}
        <div className="relative hidden md:flex w-[500px] lg:w-[650px] items-center justify-center bg-gray-100 rounded-xl shadow-lg p-6">
          <img src={capeImage} alt="Graduation Cap" className="relative z-10 w-full h-full object-cover rounded-lg" />
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative z-50 bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center w-full max-w-xs sm:max-w-md mx-auto">
            <h2 className="text-lg sm:text-2xl font-semibold text-[#040498] mb-3 sm:mb-4">
              Hey Scholar, Your account has been created
            </h2>
            <p className="text-sm sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Get started to explore all scholarship opportunities here.
            </p>
            <button
              onClick={() => {
                setShowPopup(false);
                navigate("/"); 
              }}
              className="bg-[#0000FE] hover:bg-[#0000CC] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-lg">
              Get Started
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .mobile-input {
            border: none;
            border-bottom: 1px solid #d1d5db;
            border-radius: 0;
            padding-right: 2.5rem;
            background: transparent;
            box-shadow: none;
          }
          .mobile-input:focus {
            border-bottom: 1px solid #3b82f6;
          }
        }
      `}</style>
    </div>
  );
};

export default SignUpPage;
