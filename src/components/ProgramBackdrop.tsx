"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function ProgramBackdrop() {
  return (
    <div className=" bg-slate-100 w-full h-auto pt-12">
      <div className="flex flex-col justify-center items-center h-auto w-full py-10">
        <h2 className="text-3xl font-bold text-center ">
          Learning Style Tailored for You
        </h2>
      </div>
      {/* <div className="flex flex-col justify-center items-center md:flex-row w-full"> */}
      <div className="flex flex-col gap-5 md:gap-2 lg:gap-5 pt-4 px-4 md:justify-center items-center md:flex-row">
        <motion.div
          initial={{
            y: 100,
            scale: 1,
            opacity: 0,
          }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <div className="w-72 md:w-60 lg:w-80 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/Beginner.png"
              alt="Individual Learning"
              width={1000}
              height={1000}
              className="h-40 w-full rounded-t-sm object-cover"
            />
            <div className="p-4 space-y-6 pb-5">
              <h4 className="text-lg font-semibold">Beginner Level</h4>
              <div className="font-medium text-sm font-rethink">
                <p>Total Hours: 150 hours</p>
                <ul className="list-disc list-inside pl-3">
                  <li>Speaking: 50 hours</li>
                  <li>Listening: 60 hours</li>
                  <li>Writing: 40 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            scale: 1,
            opacity: 0,
          }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hover:scale-105 transition-transform duration-100 ease-in-out"
        >
          <div className="w-72 md:w-60 lg:w-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/intermediate.png"
              alt="Group Learning"
              width={1000}
              height={1000}
              className="h-40 w-full rounded-t-sm object-cover"
            />
            <div className="p-4 space-y-6 pb-5">
              <h4 className="text-lg font-semibold">Intermediate Level</h4>
              <div className="font-medium text-sm font-rethink">
                <p>Total Hours: 150 hours</p>
                <ul className="list-disc list-inside pl-3">
                  <li>Speaking: 60 hours</li>
                  <li>Listening: 50 hours</li>
                  <li>Writing: 40 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            scale: 1,
            opacity: 0,
          }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="hover:scale-105 transition-transform duration-100 ease-in-out"
        >
          <div className="w-72 md:w-60 lg:w-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/advanced.png"
              alt="Business English"
              width={1000}
              height={1000}
              className="h-40 w-full rounded-t-sm object-cover"
            />
            <div className="p-4 space-y-6 pb-5">
              <h4 className="text-lg font-semibold">Advance Level</h4>
              <div className="font-medium text-sm font-rethink">
                <p>Total Hours: 150 hours</p>
                <ul className="list-disc list-inside pl-3">
                  <li>Speaking: 70 hours</li>
                  <li>Listening: 40 hours</li>
                  <li>Writing: 40 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    // </div>
  );
}

export default ProgramBackdrop;
