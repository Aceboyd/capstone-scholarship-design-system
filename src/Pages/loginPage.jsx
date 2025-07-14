import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import capeImage from "../assets/image/cape.png";
import watermark from "../assets/image/first.png";
import logo from "../assets/image/nice.png";

// Mock login function for testing
const login = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData.email && userData.password) {
        resolve({ message: "Login successful!" });
      } else {
        reject(new Error("Please fill in all fields."));
      }
    }, 1000); // Simulate a 1-second delay
  });
};

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Form submission intercepted");

    const userData = {
      email: formData.email,
      password: formData.password,
    };

    console.log("Form data:", userData);

    try {
      console.log("Calling login API...");
      const response = await login(userData); // Call the login function
      console.log("Login successful:", response);
      setShowPopup(true); // Show the popup
    } catch (error) {
      console.error("Login failed:", error);
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="relative mx-auto flex min-h-screen bg-gray-50 font-sans">
      {/* Watermark Logo */}
      <div className="pointer-events-none absolute top-[-70px] right-0 left-[50px] z-0 flex items-center justify-center overflow-hidden">
        <img
          src={watermark}
          alt="Watermark"
          className="h-[265vh] w-[700px] opacity-7"
          style={{
            transform: "rotate(5deg)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Section - Form */}
        <div className="relative z-20 mt-[50px] flex w-full flex-1 flex-col items-center justify-start p-0">
          <div className="w-full max-w-xl rounded-lg p-8">
            {/* Logo */}
            <div className="mb-12 flex justify-start">
              <img
                src={logo}
                alt="Capstone Scholarship Logo"
                className="h-30"
              />
            </div>

            {/* Form Title */}
            <h2 className="text-start text-4xl font-semibold text-[#040498]">
              Login to your account
            </h2>
            <p className="mt-2 text-start text-lg text-[#040498]">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#040458] hover:underline">
                Sign Up
              </Link>
            </p>

            {/* Form */}
            <form className="mt-8 space-y-8" onSubmit={handleLogin}>
              {/* Email Address */}
              <div>
                <label className="mb-2 block text-lg font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-6 py-5 text-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-lg font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-6 py-5 text-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Login Button */}
              <Link to="/landing">
                <button
                  className="mt-8 w-full cursor-pointer rounded-xl py-5 text-xl text-white hover:bg-gray-300 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                  style={{
                    backgroundColor: "rgba(0, 0, 254, 0.61)",
                  }}
                >
                  Login
                </button>
              </Link>
            </form>

            {/* OR Separator */}
            <div
              className="mt-8 text-center"
              style={{
                fontFamily: "Futura BK BT",
                lineHeight: "40px",
                letterSpacing: "0px",
              }}
            >
              <span className="text-[#000000]">OR</span>
            </div>

            {/* Google Sign-in Button */}
            <a href="#">
              <button className="mt-6 flex w-full cursor-pointer items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-5 text-lg font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                <FcGoogle className="mr-2" />
                Login with Google
              </button>
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative flex hidden h-auto w-[550px] items-center justify-start bg-gray-100 p-0 before:absolute before:z-10 before:h-full before:w-full before:bg-gray-100 before:content-[''] md:block">
          <img
            src={capeImage}
            alt="Graduation Cap"
            className="relative z-10 h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* {popup message} */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Semi-transparent overlay with reduced opacity */}
          <div
            className="fixed inset-0 z-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          ></div>

          {/* Popup Container */}
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
              Welcome back, Scholar!
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
              You're logged in. Let's explore scholarship opportunities.
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
                transition: "background-color 0.3s ease", // Smooth transition
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#0000CC")
              } // Hover color
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#0000FE")
              } // Default color
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
