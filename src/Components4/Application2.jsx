import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Steps from './Steps';
import Stepsresponsive from './Stepsresponsive';
import Navigationresponsive from './Navigationresponsive';

const Application2 = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/ghanapage');
  };

  const handleNext = () => {
    navigate('/application');
  };

  return (
    <>
    <div className='flex flex-col md:bg-gray-100'>
    <div className='flex flex-row justify-center '>
      <div className='w-[20%] md:hidden'><Stepsresponsive/></div>
    <div className="w-[80%] min-h-screen flex flex-col justify-start">
      {/* Main Content Area */}
      <div className="flex-grow flex justify-center px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          
          {/* Left - Personal Details Form */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Step {step}: Personal Details</h2>

            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full p-2 border border-gray-300 rounded-md mt-1 max-sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full p-2 border border-gray-300 rounded-md mt-1 max-sm:text-sm"
                />
              </div>
            </div>

            {/* Date of Birth */}
            <label className="block text-sm font-medium mb-1">Date of Birth</label>
            <div className="grid grid-cols-3 gap-1 sm:gap-4 mb-4 max-sm:text-[11px]">
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Day</option>
              </select>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Month</option>
              </select>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Year</option>
              </select>
            </div>

            {/* Email */}
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-2 border border-gray-300 rounded-md mt-1 mb-4 max-sm:text-sm"
            />

            {/* NIN */}
            <label className="block text-sm font-medium max-sm:text-sm">National Identity Number (NIN)</label>
            <input
              type="text"
              placeholder="Enter your National Identity Number (NIN)"
              className="w-full p-2 border border-gray-300 rounded-md mt-1 max-sm:text-sm"
            />
            <p className="text-xs text-blue-600 mt-1">What is my NIN number?</p>

            {/* Residential Address */}
            <label className="block text-sm font-medium mt-4">Residential Address</label>
            <input
              type="text"
              placeholder="Street Address"
              className="w-full p-2 border border-gray-300 rounded-md mt-1 mb-4 max-sm:text-sm"
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="City"
                className="w-full p-2 border border-gray-300 rounded-md max-md:hidden"
              />
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>State</option>
              </select>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Country</option>
              </select>
            </div>

            {/* Additional Question */}
            <label className="block text-sm font-medium mt-4">
              Are you currently enrolled in a tertiary institution?
            </label>
            <select className="w-full p-2 border border-gray-300 rounded-md mt-1">
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Right - Buttons */}
          <div className="flex flex-col md:justify-start gap-4 max-md:hidden">
            <button className="px-5 py-2 bg-blue-500 text-white rounded-md w-[100%]">
              Save Progress
            </button>
            <button className="px-5 py-2 bg-gray-200 text-black rounded-md w-full">
              Back to Homepage
            </button>
            <p className="text-red-500 text-xs text-center mt-4">
              Note: Applications close on 26th March 2025
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Back Left, Next Right */}
      <div className="w-full px-4 py-4 flex justify-between items-center  max-md:hidden">
        <button
          onClick={handleBack}
          className="px-6 py-2 bg-gray-300 text-black rounded"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-blue-600 text-white rounded"
        >
          Next
        </button>
      </div>

    </div>
    </div>
    <div className='md:hidden'><Navigationresponsive/></div>
    <p className="mt-2 py-8 flex items-center justify-end text-sm text-indigo-700 font-medium md:hidden mx-auto">
              <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-indigo-700 text-xs text-indigo-700">
                i
              </span>
              Note: Applications close on 26th March 2025
            </p>
    </div>
    </>
  );
};

export default Application2;