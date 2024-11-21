import React, { ChangeEvent } from "react";

export interface LearningFormData {
  language: string;
}

type Step2Props = {
  onLanguageSelect: (language: string) => void;
  language: string;
  next?: () => void;
  updateFields: (fields: Partial<LearningFormData>) => void;
};

function Step2({ onLanguageSelect, language, next, updateFields }: Step2Props) {
  const handleLanguageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedLanguage =
      event.target.id === "personal_growth" ? "English" : "Spanish";

    // Trigger language selection
    onLanguageSelect(selectedLanguage);

    // Update form fields
    updateFields({ language: selectedLanguage });

    // Add null check before calling next()
    if (next && typeof next === "function") {
      next();
    }
  };

  return (
    <div className="flex flex-col space-y-2 justify-center items-center font-sans font-medium">
      <h2 className="text-center text-2xl md:text-3xl text-blue-950 pb-10 font-bold">
        What language do you want to <br></br>learn?
      </h2>

      <input
        type="radio"
        name="reason"
        value={language}
        id="personal_growth"
        className="hidden"
        required
        onChange={handleLanguageChange}
      />
      <label
        htmlFor="personal_growth"
        className="cursor-pointer text-center h-10 w-72 md:w-[350px] text-white bg-blue-900 rounded-full pt-2 transition-colors duration-200 ease-in-out"
      >
        English Language
      </label>

      <input
        type="radio"
        name="reason"
        value={language}
        id="other"
        className="hidden"
        required
        onChange={handleLanguageChange}
      />
      <label
        htmlFor="other"
        className="cursor-pointer text-center h-10 w-72 md:w-[350px] text-white bg-blue-900 rounded-full pt-2 transition-colors duration-200 ease-in-out"
      >
        Spanish Language
      </label>

      <style jsx>{`
        input[type="radio"]:checked + label {
          background-color: slategray;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default Step2;
