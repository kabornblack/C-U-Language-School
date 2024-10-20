"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { useMultistepForm } from "@/useMultistepForm";
import Step1 from "@/components/formsteps/Step1";
import Step3 from "@/components/formsteps/Step3";
import Step4 from "@/components/formsteps/Step4";
import Step5 from "@/components/formsteps/Step5";
import Step6 from "@/components/formsteps/Step6";
import Step7 from "@/components/formsteps/Step7";
import Step2 from "@/components/formsteps/Step2";

type LearningFormData = {
  language: string;
  reasonForLearning: string;
  learningType: string;
  learningTime: string;
  firstName: string;
  lastName: string;
  email: string;
};

const INITIAL_DATA: LearningFormData = {
  language: "",
  reasonForLearning: "",
  learningType: "",
  learningTime: "",
  firstName: "",
  lastName: "",
  email: "",
};

function Page() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<LearningFormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedReason, setSelectedReason] = useState("");
  const [selectedLearning, setSelectedLearning] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Step1 key="step1" />,
      <Step2
        key="step2"
        onLanguageSelect={(language: string) => {
          setSelectedLanguage(language);
          next();
        }}
        {...data}
        updateFields={updateFields}
      />,
      <Step3
        key="step3"
        selectedLanguage={selectedLanguage}
        onReasonSelect={(reason: string) => {
          setSelectedReason(reason);
          next();
        }}
        //   {...data}
        //   updateFields={updateFields}
      />,
      <Step4
        key="step4"
        onLearningSelect={(learning: string) => {
          setSelectedLearning(learning);
          next();
        }}
        // {...data}
        // updateFields={updateFields}
      />,
      <Step5
        key="step5"
        selectedLanguage={selectedLanguage}
        onTimeSelect={(time: string) => {
          setSelectedReason(time);
          next();
        }}
        // {...data}
        // updateFields={updateFields}
      />,
      <Step6
        key="step6"
        // {...data} updateFields={updateFields}
      />,
      <Step7
        key="step7"
        // {...data} updateFields={updateFields}
      />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Form successfully submitted");
  }
  return (
    <div className="min-h-screen ">
      <div className="flex flex-col max-w-5xl mx-auto items-center p-5 md:p-10 lg:p-20 space-y-10 pt-20">
        <form onSubmit={onSubmit}>
          <div className="w-full flex justify-center items-center">
            {!isFirstStep && (
              <a
                onClick={back}
                className="cursor-pointer text-blue-800 text-sm font-bold p-2"
              >
                Go back
              </a>
            )}
            <input
              type="range"
              min="1"
              max={steps.length}
              value={currentStepIndex + 1}
              className="h-2 rounded-lg"
            />
          </div>
          <div className="my-10">{step}</div>
          <div className="flex items-center justify-center">
            {![1, 2, 3, 4].includes(currentStepIndex) && (
              <Button
                type="submit"
                className="w-24 py-1 text-blue-950 bg-slate-100 border border-blue-950 hover:text-slate-100 hover:bg-blue-700 active:bg-blue-600 my-5"
              >
                {isLastStep ? "Submit" : "Continue"}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
