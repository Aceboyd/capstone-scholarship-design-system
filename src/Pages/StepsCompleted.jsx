import React from "react";
import StepsCompleteds from "../Component3/StepsCompleteds";
import Foot from "../Component3/Footer";
import Header2anon from "../Component3/Header2anon";
import Background from "../Components4/Background";

const StepsCompleted = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header2anon/>
      <div className="mt-8"><Background/></div>
      <StepsCompleteds />
      <Foot />
    </div>
  );
};

export default StepsCompleted;