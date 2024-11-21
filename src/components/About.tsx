"use client";

// eslint-disable-next-line react/no-unescaped-entities

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import MeetOurTeachers from "./MeetOurTeachers";
import Card from "./Card";

const cardData = [
  {
    id: 1,
    title: "Collins Ugezene",
    image: "/image.png",
    alt: "Individual Learning",
    content: [
      "Collins Ugezene is the founder and owner of C/U International Language School, a distinguished educator from Nigeria with a TEFL diploma from the UK and over 10 years of international teaching experience across four continents. He has partnered with ministries of education in countries such as Colombia, Brazil, and Estonia, championing the promotion of English as a second official language.",

      "Collins is renowned for his dedication to cultivating a culturally rich and inclusive learning environment. He breathes life into English language education by seamlessly integrating real-world contexts that resonate with his students' diverse backgrounds. In his dynamic, conversational classrooms, every learner is valued and empowered to express themselves confidently.",

      "His innovative approach not only enhances student confidence but also celebrates the beauty of cultural diversity, equipping learners with the essential skills to thrive in a globalized world. Under his leadership, C/U International Language School stands as a beacon of excellence in language education, committed to shaping the next generation of global communicators.",
    ],
    delay: 0.5,
    expandable: true,
  },
];

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto font-rethink">
      <div className="flex items-center justify-center bg-blue-950 w-full h-32 ">
        <h1 className="text-white text-4xl font-bold">About Us</h1>
      </div>
      <div className="p-10 w-full md:w-4xl lg:w-5xl font-rethink text-base pt-20">
        <p className="">
          Welcome to C/U International School, where innovative teaching methods
          create an unforgettable learning experience. Founded by Collins
          Ugezene, our culturally inclusive and transformative approach to
          language education empowers students from diverse backgrounds.
          <p className="pt-5">
            We offer a comprehensive curriculum that includes in-person classes,
            specialized Business English or Spanish courses, and flexible online
            learning options. Our educators integrate real-world contexts into
            lessons, ensuring that English or Spanish becomes a practical tool
            for effective communication and self-expression.
          </p>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-auto p-10 space-y-4">
        <div className="flex flex-col lg:flex-row justify-center items-center h-auto max-w-screen md:w-3/5 pt-10">
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
            <p className="text-base">
              {`Our vision is to redefine language education by making learning
              English an exciting journey of exploration and personal
              development. We want to connect people from different cultures and
              help students appreciate the world's diversity. By encouraging
              creativity and fun, we envision our students becoming confident
              speakers who can succeed in a global community.`}
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center h-auto max-w-screen md:w-3/5 pt-10">
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
            <h2 className="text-2xl font-bold">Our Mission</h2>
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
      <div className="flex flex-col justify-center items-center h-auto w-full lg:w-5xl pt-32 pb-16 px-5">
        <h2 className="text-2xl md:text-3xl font-bold text-center font-rethink pb-20">
          Meet Our Founder
        </h2>
        <div className="flex flex-col justify-center lg:flex-row lg:items-start items-center space-x-5 space-y-16">
          <div className="relative flex flex-col justify-center items-center p-1 rounded-full hover:from-[#5F5F53] hover:to-[#50644C]">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={cardData[0].image}
                alt="Founder"
                width={400}
                height={400}
                className="flex items-center justify-center w-[300px] md:w-[350px] h-[350px] md:h-[400px] rounded-full object-cover object-center
                transition-all duration-700 transform hover:scale-110"
              />
            </div>
          </div>
          <div className="w-full md:w-3xl lg:w-1/2 space-y-4 px-5">
            <h2 className="font-rethink-sans font-semibold text-xl leading-[28.8px] tracking-[-0.02em]">
              {cardData[0]?.title}
            </h2>
            <div className="font-rethink-sans font-normal text-base leading-[21px] space-y-6">
              {/* First paragraph is always visible */}
              <p className="text-base text-black leading-relaxed">
                {cardData[0]?.content[0]}
              </p>

              {/* Additional paragraphs shown when expanded */}
              {isExpanded &&
                cardData[0]?.content.slice(1).map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base text-black leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}

              {/* Show more/less button */}
              {cardData[0]?.content.length > 1 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                >
                  <span>{isExpanded ? "Show less" : "Show more"}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default About;
