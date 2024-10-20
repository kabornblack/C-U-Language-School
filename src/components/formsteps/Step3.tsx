import React, { ChangeEvent } from "react";

type Step3Props = {
  selectedLanguage: string;
  onReasonSelect: (reason: string) => void;
};

function Step3({ selectedLanguage, onReasonSelect }: Step3Props) {
  const handleReasonChange = (event: ChangeEvent<HTMLInputElement>) => {
    onReasonSelect(event.target.value);
  };

  return (
    <div className="flex flex-col space-y-2  font-sans font-medium">
      <h2 className="text-center text-2xl md:text-4xl text-blue-950 pb-10 font-bold">
        Why do you want to learn <br></br>
        {selectedLanguage ? `${selectedLanguage}` : "(Select a language)"}
      </h2>
      <input
        type="radio"
        name="reason"
        value="career"
        id="career"
        className="hidden"
        required
        onChange={handleReasonChange}
      />
      <label
        htmlFor="career"
        className="cursor-pointer h-16 w-64 md:w-[550px] text-gray-700 border-gray-400 border-2 rounded pl-3 pt-4 transition-colors duration-200 ease-in-out"
      >
        To master the language / become fluent
      </label>

      <input
        type="radio"
        name="reason"
        value="travel"
        id="travel"
        className="hidden"
        required
        onChange={handleReasonChange}
      />
      <label
        htmlFor="travel"
        className="cursor-pointer h-16 w-64 md:w-[550px] text-gray-700 border-gray-400 border-2 rounded pl-3 pt-4 transition-colors duration-200 ease-in-out"
      >
        To become conversational
      </label>

      <input
        type="radio"
        name="reason"
        value="study"
        id="study"
        className="hidden"
        required
        onChange={handleReasonChange}
      />
      <label
        htmlFor="study"
        className="cursor-pointer h-16 w-64 md:w-[550px] text-gray-700 border-gray-400 border-2 rounded pl-3 pt-4 transition-colors duration-200 ease-in-out"
      >
        To get by or learn the basics
      </label>

      <input
        type="radio"
        name="reason"
        value="personal_growth"
        id="personal_growth"
        className="hidden"
        required
        onChange={handleReasonChange}
      />
      <label
        htmlFor="personal_growth"
        className="cursor-pointer h-16 w-64 md:w-[550px] text-gray-700 border-gray-400 border-2 rounded pl-3 pt-4 transition-colors duration-200 ease-in-out"
      >
        Ask me again later
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

export default Step3;
