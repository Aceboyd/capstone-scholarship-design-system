import Navbar from "../Component3/Header2"; 
import Steps from "../Components4/Steps";
import Application2 from "../Components4/Application2";

import Background from "../Components4/Background";

import { useState, useEffect } from "react";
import Header2anon from "../Component3/Header2anon";

let PortalSteps1 = () => {
    let [isOpen, setIsOpen] = useState(true);

    let toggle = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <div className="md:bg-gray-100">
            <Header2anon/>
            <div className="flex flex-col mt-8">
                <Background />
                <div className="mt-12">
                    <Steps />
                    <Application2/>
                </div>
            </div>
        </div>
    );
};

export default PortalSteps1;

