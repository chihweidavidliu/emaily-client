import React from "react";
import requireAuth from "./requireAuth";

const SurveyNew = () => {
  return (
    <div className="container">
      <p>New Survey</p>
    </div>
  )
};

export default requireAuth(SurveyNew);
