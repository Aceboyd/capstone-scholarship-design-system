import { useState } from "react";
import Header2anon from "../Component3/Header2anon";
import Steps from "../Components4/Steps";
import Application2 from "../Components4/Application2";
import Background from "../Components4/Background";

const PortalSteps1 = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [progress, setProgress] = useState(0); // Initial progress at 0%
  const [appStatus, setAppStatus] = useState("Not Started"); // Initial status

  const toggle = () => {
    setIsOpen(prevState => !prevState);
  };

  // Handle form updates from Application2
  const handleFormUpdate = (formData) => {
    // Treat Date of Birth as one field (all three parts must be filled)
    const isDobFilled = formData.dobDay && formData.dobMonth && formData.dobYear;
    const fields = [
      formData.firstName,
      formData.lastName,
      isDobFilled ? "filled" : "",
      formData.email,
      formData.nin,
      formData.streetAddress,
      formData.city,
      formData.state,
      formData.country,
      formData.enrolled,
    ].filter(value => value && value.trim() !== "");
    
    const totalFields = 10; // 10 fields for progress calculation
    const newProgress = (fields.length / totalFields) * 100;
    setProgress(newProgress);
    setAppStatus(fields.length > 0 ? "In Progress" : "Not Started");
  };

  return (
    <div className="bg-[#FAFAFF]">
      <Header2anon />
      <div className="flex flex-col mt-8">
        <Background />
        <div className="mt-12">
          <Steps progress={progress} appStatus={appStatus} />
          <Application2 onFormUpdate={handleFormUpdate} />
        </div>
      </div>
    </div>
  );
};

export default PortalSteps1;