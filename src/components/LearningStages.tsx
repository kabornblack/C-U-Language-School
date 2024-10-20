import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function LearningStagesEnglish() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto bg-blue-950 text-white">
      <div className="flex flex-col md:flex-row items-center justify-center pt-20 md:pt-10 py-10 max-w-[1000px] min-h-96">
        <div className="space-y-6 w-96">
          <h3 className="text-2xl font-semibold">
            Not sure about your proficiency level?
          </h3>
          <p className="text-xs">
            Take our proficiency level test to determine how good you are and
            what stage you can begin your learning from.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="/placementtest">
              <Button className="bg-white hover:bg-blue-700 text-blue-950 hover:text-white active:bg-blue-600 px-8 whitespace-nowrap">
                Take our placement test
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4 p-10 ">
          <div className="flex items-center justify-start bg-slate-100 w-64 h-14 rounded-md shrink-0 px-1 text-black hover:bg-blue-700 hover:text-white cursor-pointer">
            <div className="flex items-center justify-center bg-blue-950 h-12 w-12 rounded-xl">
              <h1 className="text-2xl text-white">A1</h1>
            </div>
            <div className="px-2">
              <h3 className="text-md font-light uppercase">
                Absolute beginner
              </h3>
              <p className="text-xs">Basic words and Phrases</p>
            </div>
          </div>
          <div className="flex items-center justify-start bg-slate-100 w-64 h-14 rounded-md shrink-0 px-1 text-black hover:bg-blue-700 hover:text-white cursor-pointer">
            <div className="flex items-center justify-center bg-blue-950 h-12 w-12 rounded-xl">
              <h1 className="text-2xl text-white">A2</h1>
            </div>
            <div className=" px-2">
              <h3 className="text-md font-light uppercase">Beginner</h3>
              <p className="text-xs">Simple interactions</p>
            </div>
          </div>
          <div className="flex items-center justify-start bg-slate-100 w-64 h-14 rounded-md shrink-0 px-1 text-black hover:bg-blue-700 hover:text-white cursor-pointer">
            <div className="flex items-center justify-center bg-blue-950 h-12 w-12 rounded-xl">
              <h1 className="text-2xl text-white">B1</h1>
            </div>
            <div className=" px-2">
              <h3 className="text-md font-light uppercase">Intermediate</h3>
              <p className="text-xs">Everyday conversaion</p>
            </div>
          </div>
          <div className="flex items-center justify-start bg-slate-100 w-64 h-14 rounded-md shrink-0 px-1 text-black hover:bg-blue-700 hover:text-white cursor-pointer">
            <div className="flex items-center justify-center bg-blue-950 h-12 w-12 rounded-xl">
              <h1 className="text-2xl text-white">B2</h1>
            </div>
            <div className=" px-2">
              <h3 className="text-md font-light uppercase">
                Upper-intermediate
              </h3>
              <p className="text-xs">Complex topics</p>
            </div>
          </div>
          <div className="flex items-center justify-start bg-slate-100 w-64 h-14 rounded-md shrink-0 px-1 text-black hover:bg-blue-700 hover:text-white cursor-pointer">
            <div className="flex items-center justify-center bg-blue-950 h-12 w-12 rounded-xl">
              <h1 className="text-2xl text-white">C1</h1>
            </div>
            <div className=" px-2">
              <h3 className="text-md font-light uppercase">Advanced</h3>
              <p className="text-xs">Proficient language use</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningStagesEnglish;
