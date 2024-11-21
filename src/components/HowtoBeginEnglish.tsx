// HowtoBeginEnglish.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "./Card"; // Make sure the path is correct

const englishCardData = [
  {
    id: 1,
    title: "Beginner English",
    image: "/adult.png",
    alt: "Beginner English",
    content: [
      "Build Your Foundation with Fun and Excitement!",
      "Our beginner program focuses on essential vocabulary, basic grammar, and everyday communication in a lively atmosphere.",
      "Students participate in interactive activities like role-plays, games, and real-life scenarios that make learning enjoyable.",
      "This approach boosts confidence and empowers learners to navigate daily interactions with ease.",
    ],
    delay: 0.5,
    expandable: true,
  },
  {
    id: 2,
    title: "Intermediate English",
    image: "/adult1.png",
    alt: "Intermediate English",
    content: [
      "Expand Your Horizons with Engagement in Learning!",
      "In the intermediate program, students enhance their vocabulary and grammar while diving into stimulating discussions.",
      "This level is all about fun—engaging conversations, creative writing exercises, and cultural explorations keep the learning dynamic.",
      "By incorporating idiomatic expressions and relatable topics, we enrich learners' understanding while making communication enjoyable.",
    ],
    delay: 1,
    expandable: true,
  },
  {
    id: 3,
    title: "Advanced English",
    image: "/adult2.png",
    alt: "Advanced English",
    content: [
      "Achieve Fluency and Mastery with Excitement!",
      "The advanced program is for those ready to refine their skills while having a blast.",
      "Students engage in high-level discussions, debates, and presentations that challenge their thinking and public speaking abilities all in a supportive environment.",
      "Fun writing workshops and specialized vocabulary exploration related to personal interests make mastering English an exhilarating experience.",
    ],
    delay: 1.5,
    expandable: true,
  },
];

function HowtoBeginEnglish() {
  return (
    <div className="bg-slate-100 w-full h-auto py-20">
      <div className="flex flex-col justify-center items-center h-auto w-full py-10">
        <h2 className="text-3xl font-bold text-center">
          How would you like to begin?
        </h2>
      </div>

      <div className="flex justify-center bg-slate-100 max-w-6xl shrink-0 mx-auto px-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-8 justify-center text-black text-base">
          {englishCardData.map((card) => (
            <motion.div
              key={card.id}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 1, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: card.delay,
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
              <Card {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowtoBeginEnglish;
