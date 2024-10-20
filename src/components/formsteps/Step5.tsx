import React, { ChangeEvent } from "react";

type Step5Props = {
  selectedLanguage: string;
  onTimeSelect: (time: string) => void;
};

function Step5({ selectedLanguage, onTimeSelect }: Step5Props) {
  const handleReasonChange = (event: ChangeEvent<HTMLInputElement>) => {
    onTimeSelect(event.target.value);
  };
  return (
    <div className="flex flex-col space-y-2  font-sans font-medium">
      <h2 className="text-center text-2xl md:text-4xl text-blue-950 pb-10 font-bold">
        How much time do you plan to <br></br>spend learning{" "}
        {selectedLanguage ? `${selectedLanguage}` : "(Select a language)"}?
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
        Once in a week
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
        Twice a week
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
        Thrice a week
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
        Custom
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

export default Step5;
