import { useState, useEffect } from "react";
import Header2anon from "../Component3/Header2anon";
import Steps from "../Components4/Steps";
import Application2 from "../Components4/Application2";
import Background from "../Components4/Background";

const PortalSteps1 = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [progress, setProgress] = useState(0);
  const [appStatus, setAppStatus] = useState("Not Started");
  const [formData, setFormData] = useState({}); // store Step 1 form data

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Load saved data from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("step1Data");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormData(parsed);
      handleFormUpdate(parsed); // recalc progress & status
    }
  }, []);

  // Handle form updates from Application2
  const handleFormUpdate = (newFormData) => {
    setFormData(newFormData);

    // Save to localStorage
    localStorage.setItem("step1Data", JSON.stringify(newFormData));

    // Treat Date of Birth as one field (all three parts must be filled)
    const isDobFilled =
      newFormData.dobDay && newFormData.dobMonth && newFormData.dobYear;

    const fields = [
      newFormData.firstName,
      newFormData.lastName,
      isDobFilled ? "filled" : "",
      newFormData.email,
      newFormData.nin,
      newFormData.streetAddress,
      newFormData.city,
      newFormData.state,
      newFormData.country,
      newFormData.enrolled,
    ].filter((value) => value && value.trim() !== "");

    const totalFields = 10;
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
          <Application2 onFormUpdate={handleFormUpdate} initialData={formData} />
        </div>
      </div>
    </div>
  );
};

export default PortalSteps1;
