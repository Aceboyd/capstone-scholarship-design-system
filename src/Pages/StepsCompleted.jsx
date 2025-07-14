import React from "react";
import Header from "../Component3/Header2";
import Banner3 from "../Component3/Banner3";
import StepsCompleteds from "../Component3/StepsCompleteds";
import Foot from "../Component3/Footer";

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