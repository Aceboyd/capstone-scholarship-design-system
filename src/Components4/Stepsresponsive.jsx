import React from "react";
import number1Image from "../assets/image/form/1.png";
import number2Image from "../assets/image/form/2.png";
import number3Image from "../assets/image/form/3.png";
import number4Image from "../assets/image/form/4.png";
import number5Image from "../assets/image/form/5.png";

const stepDetails = [
  { label: "STEP 1", imagestep: number1Image, style: "mt-1 text-[10px] sm:text-xs text-xs text-[#0000FE] border border-[#0000FE] rounded-full px-1 sm:px-3", status: "In Progress" },
  { label: "STEP 2", imagestep: number2Image, style: "text-[10px] sm:text-xs text-gray-400", status: "Not Started" },
  { label: "STEP 3", imagestep: number3Image, style: "text-[10px] sm:text-xs text-gray-400", status: "Not Started" },
  { label: "STEP 4", imagestep: number4Image, style: "text-[10px] sm:text-xs text-gray-400", status: "Not Started" },
  { label: "STEP 5", imagestep: number5Image, style: "text-[10px] sm:text-xs text-gray-400", status: "Not Started", style2: "hidden" },
];

const Stepsresponsive = () => {
  
  

    return (
<div className="md:hidden">
      <div className="mb-2 ">
            
                {stepDetails.map((step, index) => {
                  
      
                  return (
                    <React.Fragment key={index}>
                      <div className="flex flex-col m-3  justify-center items-center flex-1 ">
                        <div
                          className='w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-dashed border-blue-700 flex items-center justify-center'
                        >
                          <img
                            src={step.imagestep}
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                        <span className="text-sm text-gray-500">{step.label}</span>
                        <span className={`${step.style}`}>{step.status}</span>
                      
                        <div className={`flex justify-center mx-auto items-center w-1 mb-2 h-10 bg-gray-200 rounded-full ${step.style2}`} >
                          
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
          </div>
    </div>
     );
};

export default Stepsresponsive;