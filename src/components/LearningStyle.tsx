"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

function LearningStyle() {
  return (
    <div className="flex flex-col items-center justify-center h-auto bg-slate-100">
      <div className="flex flex-col lg:flex-row items-center justify-center h-auto bg-slate-100 p-20 space-x-5 px-4">
        <div className="w-[400px] h-[800px] rounded-lg px-4">
          <Image
            src="/learn.jpg"
            alt="learning stype"
            width={1000}
            height={1000}
            className="w-[400px] h-full rounded-lg hover:scale-95 transition-transform duration-1000 ease-in-out"
          />
        </div>
        <div className="flex flex-col justify-center w-[400px] h-[800px] space-y-5 p-5 px-5">
          <motion.div
            initial={{
              x: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-4xl font-bold py-5 font-rethink px-4 md:px-0">
              Learn English and Spanish with Ease
            </h1>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="space-y-3 font-rethink px-4 md:px-0"
          >
            <h2 className="text-2xl font-bold">Conversational Fluency</h2>
            <p>
              Master everyday conversations with our interactive dialogues,
              real-life scenarios, and pronunciation practive.
            </p>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="space-y-3 font-rethink px-4 md:px-0"
          >
            <h2 className="text-2xl font-bold">Grammar Mastery</h2>
            <p>
              Strengthen your understanding of grammar through clear
              explanations, practice exercises, and personalized feedback.
            </p>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="space-y-3 font-rethink px-4 md:px-0"
          >
            <h2 className="text-2xl font-bold">Vocabulary Expansion</h2>
            <p>
              Expand your vocabulary with engaging word games, quizzes, and
              themed lessons that connect with your interests.
            </p>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="space-y-3 font-rethink px-4 md:px-0"
          >
            <h2 className="text-2xl font-bold">Cultural Immersion</h2>
            <p>
              Explore the rich cultures behind the languages you learn through
              authentic videos, stories, and interactive exercises.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-slate-200 h-auto w-full space-y-3 py-20">
        <h2 className="text-3xl font-bold text-center p-12">
          Learning Style Tailored for You
        </h2>
      </div>

      <div className="relative w-full mx-auto  bg-slate-200 overflow-x-scroll snap-x snap-mandatory lg:overflow-x-hidden ">
        <div className="flex gap-5 pt-4 px-4 md:justify-center">
          <motion.div
            initial={{
              y: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="snap-center shrink-0 pl-10 pb-20 hover:scale-105 transition-transform duration-100 ease-in-out"
          >
            <div className="w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/learn1.png"
                alt="Individual Learning"
                width={1000}
                height={1000}
                className="h-40 w-full rounded-t-lg object-cover"
              />
              <div className="p-4 space-y-6 pb-5">
                <h4 className="text-lg font-semibold">Individual Learning</h4>
                <Button className="w-1/2 bg-blue-900 hover:bg-blue-700 active:bg-blue-600">
                  Get started
                </Button>
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
            className="snap-center shrink-0 hover:scale-105 transition-transform duration-100 ease-in-out"
          >
            <div className="w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/learn2.png"
                alt="Group Learning"
                width={1000}
                height={1000}
                className="h-40 w-full rounded-t-lg object-cover"
              />
              <div className="p-4 space-y-6 pb-5">
                <h4 className="text-lg font-semibold">Group Learning</h4>
                <Button className="w-1/2 bg-blue-900 hover:bg-blue-700 active:bg-blue-600">
                  Get started
                </Button>
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
            className="snap-center shrink-0 pr-10 hover:scale-105 transition-transform duration-100 ease-in-out"
          >
            <div className="w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/learn3.png"
                alt="Business English"
                width={1000}
                height={1000}
                className="h-40 w-full rounded-t-lg object-cover"
              />
              <div className="p-4 space-y-6 pb-5">
                <h4 className="text-lg font-semibold">Business English</h4>
                <Button className="w-1/2 bg-blue-900 hover:bg-blue-700 active:bg-blue-600">
                  Get started
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LearningStyle;
