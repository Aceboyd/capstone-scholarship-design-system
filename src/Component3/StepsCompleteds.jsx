import React from 'react';
import { Link } from 'react-router-dom';

const StepsCompleteds = () => {
  return (
    <div className="px-8 py-14 md:py-14 flex flex-col justify-start min-h-screen md:mx-20 mt-15">
      {/* Confirmation Message */}
      <div className="text-left mb-20">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Dear Princess,
        </h1>
        <p className="mt-2 text-lg md:text-xl text-gray-600">
          Your application has been received. We have sent a confirmation email to{' '}
          <a href="mailto:princess.egbuna@gmail.com" className="text-[#0000FE] hover:underline">
            princess.egbuna@gmail.com
          </a>{' '}
          <br />with a summary of your submission. You can also view "My Applications" in your dashboard to view <br />your ongoing applications.
        </p>
      </div>

      {/* What Happens Next Section */}
      <div className="w-full mb-20">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          What Happens Next?
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-600 text-base md:text-lg ml-5">
          <li>
            <span className="font-medium">Review in Progress:</span> Our scholarship committee will carefully review your application and supporting documents.
          </li>
          <li>
            <span className="font-medium">Track Application Progress:</span> Keep track of your application progress from your dashboard.
          </li>
          <li>
            <span className="font-medium">Shortlist Notification:</span> Shortlisted candidates will be contacted via email by April 15th, 2025.
          </li>
          <li>
            <span className="font-medium">Final Results:</span> Final award announcements will be shared by May 1st, 2025.
          </li>
        </ul>
      </div>

      {/* Download Link */}
      <div className="mb-25">
        <p className="text-gray-600 text-base md:text-lg text-left">
          Download a copy of your application{' '}
          <a href="#" className="text-[#0000FE] hover:underline">
            here
          </a>
        </p>
      </div>

      {/* Buttons */}
      <div className="w-full px-4 py-4 flex max-md:justify-between items-center md:justify-center md:gap-15 ">
        <Link to="/user-dashboard"><button
          className="px-2 py-1 bg-blue-800 text-white rounded font-semibold max-md:text-[12px]"
        >
          Go to My Dashboard
        </button></Link>
        <Link to="/landing"><button
          className="px-2 py-1 bg-white text-blue-800 rounded  border-1 border-blue-800 font-bold max-md:text-[12px]"
        >
          Back to Homepage
        </button></Link>
      </div>
    </div>
  );
};

export default StepsCompleteds;
