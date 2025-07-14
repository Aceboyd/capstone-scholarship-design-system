import Navbar from "./Components/Navbar";
import Background from "./Components/Background";
import Steps from "./Components/Steps";
import Academicinfo from "./Components/AcademicInfo";
import UploadList from "./Components/UploadList";
import { useState, useEffect } from "react";

let PortalSteps3 = () => {
    let [isOpen, setIsOpen] = useState(true);

    let toggle = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <div className="min-h-screen bg-white text-gray-400">
            <Navbar />
            <div className="flex flex-col space-y-2 px-4">
                <Background />
                <Steps />
                <Academicinfo />    {/* ⬆️ moved here */}
                <UploadList />      {/* ⬇️ now this comes last */}
            </div>
        </div>
    );
};

export default Scholarshiportal;
