import React, { useState,useCallback }from "react";
import StepsCompleteds from "../Component3/StepsCompleteds";
import Foot from "../Component3/Footer";
import Header from '../Component/Header'
import Background from "../Components4/Background";

const StepsCompleted = () => {
  const [selectedCategories, setSelectedCategories] = useState([]); 
  const handleSetSelectedCategories = useCallback((categories) => {
            setSelectedCategories(categories);
          }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header
                                    setSelectedCategories={handleSetSelectedCategories}
                                      selectedCategories={selectedCategories}
                                      className="w-full px-3 sm:px-6 lg:px-12"
                                    />
      <div className="mt-20"><Background/></div>
      <StepsCompleteds />
      <Foot />
    </div>
  );
};

export default StepsCompleted;