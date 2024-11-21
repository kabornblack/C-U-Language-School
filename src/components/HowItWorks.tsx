"use client";

// eslint-disable-next-line react/no-unescaped-entities

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ProgramBackdrop from "./ProgramBackdrop";

function HowItWorks() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto font-rethink">
      <div className="flex items-center justify-center text-center bg-blue-950 w-full h-32 ">
        <h1 className="text-white text-4xl font-bold">How it Works</h1>
      </div>
      <div className="flex justify-center items-center bg-slate-200 h-auto w-full">
        <div className="p-10 md:px-10 md:w-2/3 lg:w-5xl">
          <p className="text-lg text-center">
            The program consists of{" "}
            <span className="font-bold text-pink-500">60 total hours </span>
            divided into core language skills: Speaking, Listening, and Writing.
            The allocation of hours for each skill will vary depending on the
            learning level.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-slate-100 w-full h-auto p-10 space-y-4 pb-28">
        <div className="flex flex-col lg:flex-row justify-center items-center min-h-full w-full md:w-3/5 bg-slate-100 pt-10">
          <motion.div
            initial={{
              x: 0,
              scale: 0.2,
              opacity: 0,
            }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-4 w-full h-full text-center mr-3 md:mr-0 "
          >
            <Image
              src="/payment.png"
              alt="about things"
              width={10000}
              height={10000}
              //   layout="fill"
              objectFit="cover"
              className="h-full w-full hover:scale-95 transition-transform duration-1000 ease-in-out"
            />
          </motion.div>
          <motion.div
            initial={{
              y: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center p-4 w-full h-full space-y-2"
          >
            <h2 className="text-xl font-semibold">Flexible Payement</h2>
            <p className="text-base">
              {`There’s a flexible subscription based payment plan just for you!
              This way you get to pay based on your schedule.`}
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center min-h-full w-full md:w-2/3 bg-slate-100 pt-10">
          <motion.div
            initial={{
              y: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center p-4 w-full h-full space-y-2"
          >
            <h2 className="text-xl font-semibold">60 Hours Module</h2>
            <p className="text-base">
              Our programs have a total of 60 hours worth of learning across
              board. This means you get to have a 50 minute learning session
              over a period of 3 Months.
            </p>
          </motion.div>
          <motion.div
            initial={{
              x: 0,
              scale: 0.2,
              opacity: 0,
            }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-4 w-full h-full text-center mr-3 md:mr-0"
          >
            <Image
              src="/work.png"
              alt="about things"
              width={10000}
              height={10000}
              //   layout="fill"
              objectFit="cover"
              className="h-full w-full hover:scale-95 transition-transform duration-1000 ease-in-out"
            />
          </motion.div>
        </div>
        <ProgramBackdrop />
      </div>

      <div className=" flex flex-col justify-center items-center w-full py-10 px-5 font-rethink text-gray-700">
        <h1 className="text-3xl font-bold">Pricing</h1>
        <div className="flex flex-col md:flex-row p-10 gap-5">
          <div className="flex flex-col justify-center items-start w-80 h-44 border border-gray-400 p-5 rounded-sm shadow-lg">
            <h2 className="text-xl font-bold leading-[38.4px]">€25</h2>
            <h2 className="text-xl font-bold py-2 leading-[38.4px]">
              Language Classes
            </h2>
            <p className="text-sm leading-[21px]">50 Minutes per class</p>
            <p className="text-sm leading-[21px]">Conversational Lessons</p>
          </div>
          <div className="flex flex-col justify-center items-start w-80 h-44 border border-gray-400 p-5 rounded-sm shadow-lg">
            <h2 className="text-xl font-bold leading-[38.4px]">€30</h2>
            <h2 className="text-xl font-bold py-2 leading-[38.4px]">
              Grammar Classes
            </h2>
            <p className="text-sm leading-[21px]">50 Minutes per class</p>
            <p className="text-sm leading-[21px]">Grammar Lessons</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-slate-200 h-auto w-full mx-auto font-rethink text-gray-700">
        <div className="p-16 md:w-3/4 lg:w-5xl space-y-5">
          <h3 className="text-3xl font-bold ">Explanation of Distribustion</h3>
          <ul className="list-disc list-outside ml-6 space-y-2 text-base">
            <li className="pl-2">
              Beginner Level: Focuses slightly more on listening to build
              comprehension skills, with balanced attention on speaking and
              writing.
            </li>
            <li className="pl-2">
              ⁠Intermediate Level: Increases emphasis on speaking to develop
              conversational fluency, while maintaining a strong balance of
              listening and writing.
            </li>
            <li className="pl-2">
              Advanced Level: Prioritizes speaking, aiming for mastery in verbal
              communication, with moderate focus on listening and writing for
              overall proficiency.
            </li>
          </ul>
          <p className="text-lg">
            This approach clearly outlines the focus on the core skills of
            language learning at each level.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
