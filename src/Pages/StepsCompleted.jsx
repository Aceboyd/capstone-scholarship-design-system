import React from "react";
import Header from "../component3/Header2";
import Banner3 from "../component3/Banner3";
import StepsCompleteds from "../component3/StepsCompleteds";
import Foot from "../component3/Footer";

const StepsCompleted = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Banner3 />
      <StepsCompleteds />
      <Foot />
    </div>
  );
};

export default StepsCompleted;