import Navbar from "./Components/Navbar";
import Background from "./Components/Background";
import Steps2 from "./Components/Steps2";
import AcademicInfo from "./Components/AcademicInfo";
import UploadList2 from "./Components/UploadList2";
import { useState, useEffect } from "react";

let PortalSteps2 = () => {
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
            <div className="flex flex-col space-y-2 px-4"> {/* Tighter spacing */}
                <Background />
                <Steps2 />
                <AcademicInfo/>
                <UploadList2 />
            </div>
        </div>
    );
};

export default PortalSteps2;