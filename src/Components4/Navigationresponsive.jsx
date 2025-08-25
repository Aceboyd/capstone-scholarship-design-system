import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Navigationresponsive = () => {
    const [step, setStep] = useState(1);
      const navigate = useNavigate();
    
      const handleBack = () => {
        navigate('/ghanapage');
      };
    
      const handleNext = () => {
        navigate('/application');
      };
  return (
    <div className="w-full px-4 py-4 flex justify-between items-center ">
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
  )
}

export default Navigationresponsive