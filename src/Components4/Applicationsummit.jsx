import React, { useState } from 'react';
import { Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigation
import { Link } from 'react-router-dom';

const SupportingDocuments = () => {
  const documents = [
    {
      label: 'Recommendation Letter',
      file: "Egbuna Princess’ Recommendation Letter.pdf",
    },
    {
      label: 'Passport Photograph',
      file: "Egbuna Princess’ Passport Photograph.png",
    },
    {
      label: 'Personal Statement',
      file: "Egbuna Princess’ Personal Statement.pdf",
    },
    {
      label: 'Additional Documents',
      file:
        "Egbuna Princess’ Research Project - Automated Traffic Light System Based on Real-Time Vehicle Flow.docx",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Supporting Documents</h3>
        <button className="text-sm text-blue-600 hover:underline flex items-center space-x-1">
          <Pencil size={14} />
          <span>Edit</span>
        </button>
      </div>
      <ul className="space-y-2 text-sm text-gray-800">
        {documents.map((doc, idx) => (
          <li key={idx} className="flex flex-wrap justify-between items-center">
            <span>{doc.label}: {doc.file}</span>
            <a href="#" className="text-blue-600 hover:underline text-sm ml-2 whitespace-nowrap">
              Preview file
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function ApplicationSummit() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigation

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10 flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Form Content */}
        <div className="flex-1 space-y-6">
          {/* Personal Info */}
          <div className="space-y-1 text-sm text-gray-700">
            <p><strong>First Name:</strong> Princess</p>
            <p><strong>Last Name:</strong> Egbuna</p>
            <p><strong>Date of Birth:</strong> 04-09-1997</p>
            <p><strong>Email Address:</strong> princess.egbuna@gmail.com</p>
            <p><strong>National Identity Number (NIN):</strong> 1234-5678-9012</p>
            <p><strong>Street Address:</strong> 12 Independence Avenue</p>
            <p><strong>City:</strong> Ikeja</p>
            <p><strong>State:</strong> Lagos</p>
            <p><strong>Country:</strong> Nigeria</p>
            <p><strong>Are you currently enrolled in a tertiary institution:</strong> Yes</p>
          </div>

          {/* Academic Info */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Academic Information</h3>
              <button className="text-blue-600 text-sm flex items-center space-x-1 hover:underline">
                <Pencil size={14} />
                <span>Edit</span>
              </button>
            </div>
            <div className="space-y-1 text-sm text-gray-700">
              <p><strong>Institution Name:</strong> Babcock University</p>
              <p><strong>Program of Study:</strong> Computer Science</p>
              <p><strong>Current level:</strong> 300 level</p>
              <p><strong>Grade Point Average (GPA):</strong> 3.68 / 5.0</p>
              <p>
                <strong>Transcript:</strong> Egbuna Princess' Transcript.pdf{' '}
                <a href="#" className="text-blue-600 hover:underline text-sm ml-1">Preview file</a>
              </p>
            </div>
          </div>

          {/* Supporting Documents */}
          <SupportingDocuments />

          {/* Statement of Purpose */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Statement of Purpose</h3>
              <button className="text-blue-600 text-sm flex items-center space-x-1 hover:underline">
                <Pencil size={14} />
                <span>Edit</span>
              </button>
            </div>
            <div className="text-sm text-gray-700 space-y-4">
              <p>My journey into Computer Science began in high school, where I led a STEM club project aimed at solving real-world challenges through practical innovation...</p>
              <p>Motivated by that early exposure, I have remained committed to pursuing Computer Science as a pathway to drive social impact...</p>
              <p>I believe the most meaningful solutions come from individuals who understand the needs of their communities and are determined to make a difference...</p>
              <p>Receiving this scholarship would allow me to stay on this path, deepen my expertise, and grow into one of the STEM leaders shaping Ghana’s future.</p>
            </div>
          </div>

          {/* Confirmation Checkbox */}
          <div className="mt-6 flex items-start gap-3">
            <input
              type="checkbox"
              id="agree"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="agree" className="text-sm text-gray-700">
              I confirm that all information provided is accurate and I agree to the
              <span className="text-blue-600 font-medium"> Ghana STEM Excellence Scholarship </span>
              terms and conditions
            </label>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="w-full lg:w-64 flex flex-col gap-4 bg-[#FAFAFF]">
          <button className="px-4 py-2 bg-[#0000FE] text-white rounded-md w-full cursor-pointer">
            Save Progress
          </button>
          <Link to='/landing'><button className="px-4 py-2 bg-gray-200 text-[#0000FE] rounded-md w-full cursor-pointer">
            Back to Homepage
          </button></Link>
          <p className="text-red-500 text-xs text-center mt-2">
            Note: Applications close on 26th March 2025
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="w-full px-4 py-4 flex justify-between items-center bg-white border-t">
        <button
          onClick={() => navigate('/portal-step-4')} // ✅ Back
          className="px-6 py-2 bg-gray-300 text-black rounded cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={() => navigate('/steps-completed')} // ✅ Next
          disabled={!isChecked}
          className={`px-6 py-2 rounded text-white ${isChecked ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
