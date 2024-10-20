"use client";

// eslint-disable-next-line react/no-unescaped-entities

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ProgramBackdrop from "./ProgramBackdrop";

function HowItWorks() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto">
      <div className="flex items-center justify-center text-center bg-blue-950 w-full h-32 ">
        <h1 className="text-white text-4xl font-bold">How it Works</h1>
      </div>
      <div className="flex justify-center items-center bg-slate-200 h-auto w-full">
        <div className="p-10 md:10 lg:p-20 md:w-2/3 lg:w-2/4">
          <p className="text-sm font-light">
            The program consists of 150 total hours, divided into core language
            skills: Speaking, Listening, and Writing. The allocation of hours
            for each skill will vary depending on the learning level.
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
            <p className="text-sm">
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
            <h2 className="text-xl font-semibold">150 Hours Module</h2>
            <p className="text-sm">
              Our programs have a total of 150 hours worth of learning across
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
    </div>
  );
}

export default HowItWorks;
