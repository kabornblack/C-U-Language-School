import React, { ChangeEvent } from "react";

type Step4Props = {
  onLearningSelect: (reason: string) => void;
};

function Step4({ onLearningSelect }: Step4Props) {
  const handleLearningChange = (event: ChangeEvent<HTMLInputElement>) => {
    onLearningSelect(event.target.value);
  };
  return (
    <div className="flex flex-col space-y-2 justify-center items-center font-sans font-medium">
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
        className="cursor-pointer text-center h-10 w-72 md:w-[350px] text-white bg-blue-900 rounded-full pt-2 transition-colors duration-200 ease-in-out"
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
        className="cursor-pointer text-center h-10 w-72 md:w-[350px] text-white bg-blue-900 rounded-full pt-2 transition-colors duration-200 ease-in-out"
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
