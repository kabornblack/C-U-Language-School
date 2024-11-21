"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const cardData = [
  {
    id: 1,
    title: "Individual Learning",
    image: "/learn1.png",
    alt: "Individual Learning",
    content: [
      "Individual learning is your opportunity to shine! It's about discovering what you love and pursuing it at your own pace.",
      "With personalized support and resources tailored just for you, every student can explore their interests and build on their strengths.",
      "We're here to help you grow, face challenges, and celebrate your unique journey to success. Embrace your individuality and let your potential unfold.",
    ],
    delay: 0.5,
    expandable: true, // Make sure this is true
  },
  {
    id: 2,
    title: "Group Learning",
    image: "/learn2.png",
    alt: "Group Learning",
    content: [
      "Group learning is where ideas collide and collaboration thrives as individuals contribution helps each other to improve!",
      "Every student becomes both a learner and a leader. Together, we solve problems, spark creativity, and build the skills that shape tomorrow's innovators.",
      "Learning is better when it's shared!",
    ],
    delay: 1,
    expandable: true, // Change this to true
  },
  {
    id: 3,
    title: "Business English",
    image: "/learn3.png",
    alt: "Business English",
    content: [
      "Here we believe that corporate language learning should be an exciting journey for everyone no matter who you are!",
      "Join us for engaging sessions filled with meaningful conversations and fun activities that make learning feel effortless.",
      "Our personalized coaching adapts to your unique style, helping you build confidence to communicate effectively in any business setting. Together, we'll open doors to new opportunities and make your language learning experience enjoyable and memorable.",
    ],
    delay: 1.5,
    expandable: true,
  },
];

function LearningStyle() {
  return (
    <div className="flex flex-col items-center justify-center h-auto bg-slate-100">
      <div className="flex flex-col lg:flex-row items-center justify-center h-auto bg-slate-100 pt-16 md:pt-6 pb-1 space-x-10  space-y-24 md:-space-y-10">
        <div className="flex items-center w-[250px] md:w-[400px] h-[400px] md:h-[600px] rounded-lg">
          <Image
            src="/study.jpg"
            alt="learning stype"
            width={1000}
            height={1000}
            className="w-250 h-[350px] md:w-[526px] md:h-[600px] rounded-lg hover:scale-95 transition-transform duration-1000 ease-in-out"
          />
        </div>
        <div className="flex flex-col justify-center w-[300px] md:w-[400px] h-[600px] md:h-[800px] space-y-5">
          <motion.div
            initial={{
              y: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 1.2 }}
            className="space-y-3 font-rethink px-4 md:px-0"
          >
            <h1 className="text-xl md:text-2xl font-bold py-5 font-rethink px-1 md:px-0">
              Learn English and Spanish with Ease
            </h1>
          </motion.div>

          <motion.div
            initial={{
              y: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 1.2 }}
            className="space-y-3 font-rethink px-4 md:px-0"
          >
            <h2 className="text-xl font-bold">Conversational Fluency</h2>
            <p className="text-sm">
              Master everyday conversations with our interactive dialogues,
              real-life scenarios, and pronunciation practive.
            </p>
          </motion.div>

          <motion.div
            initial={{
              y: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 1.2 }}
            className="space-y-3 font-rethink px-4 md:px-0"
          >
            <h2 className="text-xl font-bold">Grammar Mastery</h2>
            <p className="text-sm">
              Strengthen your understanding of grammar through clear
              explanations, practice exercises, and personalized feedback.
            </p>
          </motion.div>

          <motion.div
            initial={{
              y: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 1.2 }}
            className="space-y-3 font-rethink px-4 md:px-0"
          >
            <h2 className="text-xl font-bold">Vocabulary Expansion</h2>
            <p className="text-sm">
              Expand your vocabulary with engaging word games, quizzes, and
              themed lessons that connect with your interests.
            </p>
          </motion.div>

          <motion.div
            initial={{
              y: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 1.2 }}
            className="space-y-3 font-rethink px-4 md:px-0"
          >
            <h2 className="text-xl font-bold">Cultural Immersion</h2>
            <p className="text-sm">
              Explore the rich cultures behind the languages you learn through
              authentic videos, stories, and interactive exercises.
            </p>
          </motion.div>
        </div>
      </div>
      {/* <div className="flex flex-col justify-center items-center bg-slate-200 w-full h-auto space-y-3 py-20"></div> */}

      <div className="relative bg-slate-200 w-full mx-auto px-10">
        <div className="flex flex-col justify-center items-center py-8 px-5 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-center pt-12">
            Learning Style Tailored for You
          </h2>
          <p className="text-center pt-8 md:px-24 w-full md:w-4xl lg:w-5xl">
            At CU International Language School, we offer individual, group and
            corporate learning. Our personalized language learning gives the
            flexibility of in-person or online classes.
          </p>
        </div>
        <div className="flex justify-center bg-slate-200 max-w-6xl shrink-0 mx-auto px-4 pb-20">
          <div className="flex flex-col lg:flex-row gap-8 justify-center text-black text-base">
            {cardData.map((card) => (
              <motion.div
                key={card.id}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 1, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: card.delay,
                  // ease: [0.23, 1, 0.32, 1],
                  opacity: { duration: 1 },
                  scale: { duration: 0.8 },
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Card key={card.id} {...card} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningStyle;
