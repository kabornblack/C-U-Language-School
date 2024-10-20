"use client";

import React from "react";
import LearningStagesEnglish from "@/components/LearningStages";
import Contact from "@/components/Contact";
import ChooseLevelEnglishInperson from "@/components/ChooseLevelEnglishInperson";
import ChooseLevelEnglishOnline from "@/components/ChooseLevelEnglishOnline";
import OtherEnglishCoursesBusiness from "@/components/OtherEnglishCoursesBusiness";
import UserInput from "@/components/UserInput";

function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto">
      <div className="flex flex-col items-center justify-center bg-blue-950 w-full h-72 font-rethink">
        <h1 className="text-white font-bold text-4xl leading-tight tracking-tighter py-6">
          Learn Business English
        </h1>
        <UserInput />
      </div>
      <div className="flex justify-center items-center bg-slate-200 h-auto w-full">
        <div className="p-10 md:10 lg:p-20  max-w-[1000px] space-y-6">
          <h2 className="text-2xl font-semibold ">
            In-person Business English Language
          </h2>
          <p className="text-sm font-light">
            Our courses are designed for adults who want to learn how to
            communicate effectively in their chosen language. Whether you want
            to travel the world, communicate with friends and family, or advance
            in your career — foreign language classes allow you to experience a
            sense of achievement that comes with challenging yourself.
          </p>
          <p className="text-sm font-light">
            We provide the support you need to improve your fluency as well as
            your confidence through interactive, immersive learning.
          </p>
        </div>
      </div>
      <ChooseLevelEnglishInperson />
      <div className="flex justify-center items-center bg-slate-200 h-auto w-full">
        <div className="p-10 md:10 lg:p-20  max-w-[1000px] space-y-6">
          <h2 className="text-2xl font-semibold ">
            Online Business English Language
          </h2>
          <p className="text-sm font-light">
            Our courses are designed for adults who want to learn how to
            communicate effectively in their chosen language. Whether you want
            to travel the world, communicate with friends and family, or advance
            in your career — foreign language classes allow you to experience a
            sense of achievement that comes with challenging yourself.
          </p>
          <p className="text-sm font-light">
            We provide the support you need to improve your fluency as well as
            your confidence through interactive, immersive learning.
          </p>
        </div>
      </div>
      <ChooseLevelEnglishOnline />
      <LearningStagesEnglish />
      <OtherEnglishCoursesBusiness />
      <Contact />
    </div>
  );
}

export default Page;
