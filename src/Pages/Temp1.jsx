import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

import capeImage from "../assets/image/cape.png";
import watermark from "../assets/image/first.png";
import logo from "../assets/image/nice.png";

// Mock login function
const login = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData.email && userData.password) {
        resolve({ message: "Login successful!" });
      } else {
        reject(new Error("Please fill in all fields."));
      }
    }, 1000);
  });
};

const Temp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await login(userData);
      console.log("Login successful:", response);
      setShowPopup(true);

      // Optional auto-redirect
      setTimeout(() => {
        navigate("/landing");
      }, 2000);
    } catch (error) {
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="relative mx-auto flex min-h-screen bg-gray-50 font-sans">
      {/* Watermark - Visible on all devices */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 z-0 flex items-center justify-center overflow-hidden">
        <img
          src={watermark}
          alt="Watermark"
          className="h-[120vh] w-[300px] md:h-[265vh] md:w-[700px] opacity-5 md:opacity-7"
          style={{ transform: "rotate(5deg)" }}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 relative z-10">
        {/* Left - Form */}
        <div className="mt-[50px] flex w-full flex-1 flex-col items-center justify-start">
          <div className="w-full max-w-xl rounded-lg p-8">
            {/* Logo */}
            <div className="mb-12 flex justify-start">
              <img src={logo} alt="Logo" className="h-30" />
            </div>

            <h2 className="text-start text-4xl font-semibold text-[#040498]">
              Login to your accounts
            </h2>
            <p className="mt-2 text-start text-lg text-[#040498]">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#040458] hover:underline">
                Sign Up
              </Link>
            </p>

            {/* Login Form */}
            <form className="mt-8 space-y-8" onSubmit={handleLogin}>
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

              <button
                type="submit"
                className="mt-8 w-full rounded-xl py-5 text-xl text-white hover:bg-gray-300 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                style={{ backgroundColor: "rgba(0, 0, 254, 0.61)" }}
              >
                Login
              </button>
            </form>

            {/* OR Separator */}
            <div className="mt-8 text-center font-futura text-black">
              <span>OR</span>
            </div>

            {/* Google Login Placeholder */}
            <button
              type="button"
              onClick={() => alert("Google login coming soon!")}
              className="mt-6 flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-5 text-lg font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              <FcGoogle className="mr-2" />
              Login with Google
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative hidden w-[550px] items-center justify-start bg-gray-100 p-0 before:absolute before:z-10 before:h-full before:w-full before:bg-gray-100 before:content-[''] md:flex">
          <img
            src={capeImage}
            alt="Graduation Cap"
            className="relative z-10 h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 z-10 bg-black opacity-50"></div>

          <div className="max-w-xxl relative z-50 rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg">
            <h2 className="mb-4 text-[#040498] text-[32.24px] leading-[35.8px] font-medium">
              Welcome back, Scholar!
            </h2>
            <p className="mb-6 text-[#0B0B0B] text-[24.62px] leading-[41px] font-light">
              You're logged in. Let's explore scholarship opportunities.
            </p>
            <button
              onClick={() => {
                setShowPopup(false);
                navigate("/landing");
              }}
              style={{
                backgroundColor: "#0000FE",
                width: "311px",
                height: "57px",
                color: "#FFFFFF",
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: "500",
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
    </div>
  );
};

export default Temp;

