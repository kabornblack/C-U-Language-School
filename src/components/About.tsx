"use client";

// eslint-disable-next-line react/no-unescaped-entities

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import MeetOurTeachers from "./MeetOurTeachers";

function About() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto font-rethink">
      <div className="flex items-center justify-center bg-blue-950 w-full h-32 ">
        <h1 className="text-white text-4xl font-bold">About Us</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-slate-100 w-full h-auto p-10 space-y-4">
        <div className="flex flex-col lg:flex-row justify-center items-center h-auto max-w-screen md:w-3/5 bg-slate-100 pt-10">
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
              src="/vision.png"
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
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p>
              {`Our vision is to redefine language education by making learning
              English an exciting journey of exploration and personal
              development. We want to connect people from different cultures and
              help students appreciate the world's diversity. By encouraging
              creativity and fun, we envision our students becoming confident
              speakers who can succeed in a global community.`}
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center h-auto max-w-screen md:w-3/5 bg-slate-100 pt-10">
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
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p>
              C/U International Language School was established with the mission
              to provide high-quality, accessible language education to learners
              of all ages. We teach English through real-life conversations and
              cultural experiences, moving beyond traditional grammar-focused
              methods. We aim to create a welcoming and active community where
              students can learn and grow together.
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
              src="/mission.png"
              alt="about things"
              width={1000}
              height={1000}
              //   layout="fill"
              objectFit="cover"
              className="h-full w-full hover:scale-95 transition-transform duration-1000 ease-in-out"
            />
          </motion.div>
        </div>
      </div>
      <MeetOurTeachers />
      <div className="flex justify-center items-center bg-slate-100 h-auto max-w-screen pt-20">
        <div className="p-10 lg:p-20 md:w-2/3 lg:3/5">
          <p className="text-sm font-light">
            {`C/U International Language School is embarking on a pioneering journey to redefine English/Spanish language learning. Our project seeks to carve out a unique niche where mastering English/Spanish is both effortless and enjoyable, with a distinct focus on cultural immersion and diversity. We eschew the traditional emphasis on grammar, instead prioritizing natural communication skills and real-world applications. This innovative approach is designed to accelerate language acquisition, making the process swift, engaging, and fun.`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
