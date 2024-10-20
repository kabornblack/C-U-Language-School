import Questionnaire from "@/components/Questionnaire";
import React from "react";

function page() {
  return (
    <div className="min-h-screen w-screen">
      <div className="flex flex-col justify-center items-start">
        <Questionnaire />
      </div>
    </div>
  );
}

export default page;
