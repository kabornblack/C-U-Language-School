"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "./Card";

const cardData = [
  {
    id: 1,
    title: "Beginner Level",
    image: "/beginner.png",
    alt: "Individual Learning",
    content: [
      "Total Learning Hours: 60 hours",
      "- Speaking: 20 hours",
      "- Listening: 25 hours",
      "- Writing: 15 hours",
    ],
    delay: 0.5,
    expandable: false,
  },
  {
    id: 2,
    title: "Intermediate Level",
    image: "/intermediate.png",
    alt: "Group Learning",
    content: [
      "Total Learning Hours: 60 hours",
      "- Speaking: 25 hours",
      "- Listening: 20 hours",
      "- Writing: 15 hours",
    ],
    delay: 1.0,
    expandable: false,
  },
  {
    id: 3,
    title: "Advance Level",
    image: "/advanced.png",
    alt: "Business English",
    content: [
      "Total Learning Hours: 60 hours",
      "- Speaking: 20 hours",
      "- Listening: 25 hours",
      "- Writing: 15 hours",
    ],
    delay: 1.5,
    expandable: false,
  },
  {
    id: 4,
    title: "Professional Level",
    image: "/lady.jpg",
    alt: "Business English",
    content: [
      "Total Learning Hours: 60 hours",
      "- Speaking: 20 hours",
      "- Listening: 20 hours",
      "- Writing: 20 hours",
    ],
    delay: 2,
    expandable: false,
    imagePosition: "bottom-center",
  },
];
function ProgramBackdrop() {
  return (
    <div className="bg-slate-100 w-full min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Learning Style Tailored for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-rethink">
          {cardData.slice(0, 2).map((card) => (
            <motion.div
              key={card.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: card.delay }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Card {...card} />
            </motion.div>
          ))}

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: cardData[3].delay }}
            viewport={{ once: true }}
            className="w-full md:col-start-1 lg:col-start-3"
          >
            <Card {...cardData[2]} />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: cardData[3].delay }}
            viewport={{ once: true }}
            className="w-full md:col-start-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:w-[calc(100%+2rem)]"
          >
            <Card {...cardData[3]} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProgramBackdrop;
