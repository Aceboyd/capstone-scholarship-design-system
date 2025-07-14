import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiArrowLeft, FiEdit, FiEye, FiEyeOff, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

import capeImage from "../assets/image/cape.png";
import watermark from "../assets/image/first.png";
import nice from "../assets/image/nice.png"; // ✅ your single logo

// Mock register function
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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };

    try {
      await register(userData);
      setShowPopup(true);
    } catch (error) {
      alert(`Registration failed: ${error.message}`);
    }
  };

  const handleBack = () => {
    console.log("Back button clicked");
  };

  return (
    <div className="relative mx-auto flex min-h-screen bg-gray-50 font-sans">
      {/* Back Icon (Mobile Only) */}
      <div className="absolute top-4 left-4 z-30 block md:hidden">
        <button
          onClick={handleBack}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition hover:bg-gray-300"
        >
          <FiArrowLeft className="text-xl text-gray-600" />
        </button>
      </div>

      {/* Watermark */}
      <div className="pointer-events-none absolute top-[-70px] right-0 left-[50px] z-0 flex hidden items-center justify-center overflow-hidden md:block">
        <img
          src={watermark}
          alt="Watermark"
          className="h-[265vh] w-[700px] opacity-7"
          style={{ transform: "rotate(5deg)" }}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="relative z-20 mt-0 flex w-full flex-1 flex-col items-center justify-center p-0 md:mt-[50px] md:justify-start">
          <div className="w-full max-w-[90%] rounded-lg p-4 md:max-w-xl md:p-8">
            {/* Logo */}
            <div className="mb-4 flex justify-center md:mb-12 md:justify-start">
              <img
                src={nice}
                alt="Logo"
                className="block h-16 md:hidden"
              />
              <img
                src={nice}
                alt="Logo"
                className="hidden h-10 md:block md:h-30"
              />
            </div>

            {/* Title */}
            <h2 className="mb-4 text-start text-3xl font-semibold text-[#040498] md:mb-2 md:text-4xl">
              Create an account
            </h2>
            <p className="mt-2 hidden text-start text-base text-[#040498] md:block md:text-lg">
              Already have an account?{" "}
              <Link to="/" className="text-[#040458] hover:underline">
                Login
              </Link>
            </p>

            {/* Google Sign-in (Mobile) */}
            <a href="#" className="block md:hidden">
              <button className="mb-6 flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">
                <FcGoogle className="mr-2" /> Sign up with Google
              </button>
            </a>

            {/* Form */}
            <form className="space-y-4 md:space-y-8" onSubmit={handleRegister}>
              {/* Full Name */}
              <div className="relative">
                <label className="mb-2 hidden text-base font-medium text-[#040498] md:block md:text-lg">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mobile-input w-full px-2 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:outline-none md:rounded-md md:border md:border-gray-300 md:px-6 md:py-5 md:text-lg md:shadow-sm"
                  placeholder="Full name"
                  required
                />
                <FiEdit className="absolute top-1/2 right-3 block -translate-y-1/2 transform text-base text-gray-500 md:hidden" />
              </div>

              {/* Email */}
              <div className="relative">
                <label className="mb-2 hidden text-base font-medium text-[#040498] md:block md:text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mobile-input w-full px-2 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:outline-none md:rounded-md md:border md:border-gray-300 md:px-6 md:py-5 md:text-lg md:shadow-sm"
                  placeholder="Email"
                  required
                />
                <FiMail className="absolute top-1/2 right-3 block -translate-y-1/2 transform text-base text-gray-500 md:hidden" />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="mb-2 hidden text-base font-medium text-[#040498] md:block md:text-lg">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mobile-input w-full px-2 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:outline-none md:rounded-md md:border md:border-gray-300 md:px-6 md:py-5 md:text-lg md:shadow-sm"
                  placeholder="Password"
                  required
                />
                {showPassword ? (
                  <FiEyeOff
                    className="absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer text-base text-gray-500 md:top-[60%]"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <FiEye
                    className="absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer text-base text-gray-500 md:top-[60%]"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <label className="mb-2 hidden text-base font-medium text-[#040498] md:block md:text-lg">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="mobile-input w-full px-2 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:outline-none md:rounded-md md:border md:border-gray-300 md:px-6 md:py-5 md:text-lg md:shadow-sm"
                  placeholder="Confirm password"
                  required
                />
                {showConfirmPassword ? (
                  <FiEyeOff
                    className="absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer text-base text-gray-500 md:top-[60%]"
                    onClick={() => setShowConfirmPassword(false)}
                  />
                ) : (
                  <FiEye
                    className="absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer text-base text-gray-500 md:top-[60%]"
                    onClick={() => setShowConfirmPassword(true)}
                  />
                )}
              </div>

              {/* Terms (Desktop Only) */}
              <div className="flex hidden items-start text-sm text-gray-600 md:block md:text-xl">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 mr-4 h-5 w-5 cursor-pointer"
                  required
                />
                <label htmlFor="terms" className="leading-relaxed">
                  By clicking create account, you agree to Capstone Scholarship{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Conditions
                  </a>
                  .
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-6 w-full cursor-pointer rounded-xl py-3 text-lg text-white hover:bg-gray-300 focus:ring-2 focus:ring-gray-300 focus:outline-none md:py-5 md:text-xl"
                style={{
                  background: "linear-gradient(to right, #0000FE, #4B6CB7)",
                }}
              >
                Register
              </button>

              {/* Terms (Mobile Only) */}
              <p className="mt-4 block text-center text-sm text-gray-600 md:hidden">
                By clicking Creating account you agree to Capstone{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </a>
              </p>
            </form>

            {/* OR Divider (Desktop Only) */}
            <div
              className="mt-6 hidden text-center md:mt-8 md:block"
              style={{
                fontFamily: "Futura BK BT",
                lineHeight: "40px",
                letterSpacing: "0px",
              }}
            >
              <span className="text-[#000000]">OR</span>
            </div>

            {/* Google Sign-in (Desktop) */}
            <a href="#" className="hidden md:block">
              <button className="mt-6 flex w-full cursor-pointer items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-5 text-lg font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                <FcGoogle className="mr-2" /> Sign up with Google
              </button>
            </a>
          </div>
        </div>

        {/* Image Section (Desktop Only) */}
        <div className="relative flex hidden h-auto w-[550px] items-center justify-start bg-gray-100 p-0 before:absolute before:z-10 before:h-full before:w-full before:bg-gray-100 before:content-[''] md:block">
          <img
            src={capeImage}
            alt="Graduation Cap"
            className="relative z-10 h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 z-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          ></div>
          <div className="max-w-xxl relative z-50 rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg">
            <h2
              className="mb-4"
              style={{
                color: "#040498",
                fontFamily: "Futura Medium, sans-serif",
                fontSize: "32.24px",
                lineHeight: "35.8px",
                fontWeight: 500,
              }}
            >
              Hey Scholar, Your account has been created
            </h2>
            <p
              className="mb-6"
              style={{
                color: "#0B0B0B",
                fontFamily: "Futura BK BT, sans-serif",
                fontSize: "24.62px",
                lineHeight: "41px",
              }}
            >
              Get started to explore all scholarship opportunities here.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              style={{
                backgroundColor: "#0000FE",
                width: "311px",
                height: "57px",
                color: "#FFFFFF",
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: "500",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#0000CC")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#0000FE")
              }
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Mobile-specific styles */}
      <style>
        {`
          @media (max-width: 767px) {
            .min-h-screen {
              background-color: #F5F7FA !important;
            }
            .mobile-input {
              border: none !important;
              border-bottom: 1px solid #d1d5db !important;
              border-radius: 0 !important;
              padding-right: 2.5rem !important;
              background: transparent !important;
              box-shadow: none !important;
              height: 40px !important;
            }
            .mobile-input:focus {
              border-bottom: 1px solid #3b82f6 !important;
              outline: none !important;
            }
            .mobile-input::placeholder {
              color: #040498 !important;
              font-weight: 500 !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SignUpPage;
