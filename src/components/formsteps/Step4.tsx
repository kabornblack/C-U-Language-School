import React, { ChangeEvent } from "react";

type Step4Props = {
  onLearningSelect: (reason: string) => void;
};

function Step4({ onLearningSelect }: Step4Props) {
  const handleLearningChange = (event: ChangeEvent<HTMLInputElement>) => {
    onLearningSelect(event.target.value);
  };
  return (
    <div className="flex flex-col space-y-2  font-sans font-medium">
      <h2 className="text-center text-2xl md:text-4xl text-blue-950 pb-10 font-bold">
        What would you prefer?
      </h2>
      <input
        type="radio"
        name="reason"
        value="career"
        id="career"
        className="hidden"
        required
        onChange={handleLearningChange}
      />
      <label
        htmlFor="career"
        className="cursor-pointer h-16 w-64 md:w-[550px] text-gray-700 border-gray-400 border-2 rounded pl-3 pt-4 transition-colors duration-200 ease-in-out"
      >
        Group learning
      </label>

      <input
        type="radio"
        name="reason"
        value="travel"
        id="travel"
        className="hidden"
        required
        onChange={handleLearningChange}
      />
      <label
        htmlFor="travel"
        className="cursor-pointer h-16 w-64 md:w-[550px] text-gray-700 border-gray-400 border-2 rounded pl-3 pt-4 transition-colors duration-200 ease-in-out"
      >
        Private learning
      </label>

      <style jsx>{`
        input[type="radio"]:checked + label {
          background-color: slategray; /* Change to your desired color */
          color: white; /* Optional: Change text color */
        }
      `}</style>
    </div>
  );
}

export default Step4;
