"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function CulturalDiversity() {
  return (
    <div className="flex flex-col justify-center items-center bg-white min-h-96 w-full pt-10 font-rethink">
      <div className="bg-white w-full">
        <h2 className="text-center text-2xl font-bold mb-8 p-6">
          Immerse Yourself in Cultural Diversity
        </h2>
      </div>

      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center md:space-x-1 px-1 lg:space-x-4 min-h-20">
        {/* First div */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 1, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,

            opacity: { duration: 1 },
            scale: { duration: 0.8 },
          }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
          className="max-w-xs bg-white shadow p-4 rounded-md hover:bg-slate-100 hover:shadow-slate-500"
        >
          <h3 className="font-medium text-xl mb-2">Cultural Insight</h3>
          <p className="text-sm">
            Learn about the customs, traditions, and history of English and
            Spanish-speaking countries through engaging videos, documents, and
            interactive activities.
          </p>
        </motion.div>

        {/* Second div */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 1, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,

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
          className="max-w-xs bg-white shadow p-4 rounded-md hover:bg-slate-100 hover:shadow-slate-500"
        >
          <h3 className="font-medium text-xl mb-2">Global Connections</h3>
          <p className="text-sm">
            Connect with a diverse community of learners and native speakers
            from around the world through interactive forums, language exchange
            programs, and virtual events.
          </p>
        </motion.div>

        {/* Third div */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 1, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,

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
          className="max-w-xs bg-white shadow p-4 rounded-md hover:bg-slate-100 hover:shadow-slate-500"
        >
          <h3 className="font-medium text-xl mb-2">Expand Your Horizons</h3>
          <p>
            Develop cultural sensitivity and understanding, broaden your
            perspectives, and enhance your global communication skills.
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full mx-auto h-auto bg-slate-200 mt-20 py-01 md:py-16">
        <div className="flex flex-col justify-center items-center w-[300px] md:w-[400px] h-[800px] space-y-5 p-4 px-1 font-rethink">
          <h1 className="text-2xl font-bold pb-12 px-2">
            Personalized Learning Paths
          </h1>
          <motion.div
            initial={{
              y: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex space-x-4 "
          >
            <motion.div
              initial={{
                y: 100,
                scale: 1,
                opacity: 0,
              }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-32 w-16 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="155"
                viewBox="0 0 60 155"
                fill="none"
              >
                <path
                  d="M60 138.923V0.189941L30.0791 15.3179L0 0.189941V138.923L30.0791 154.19L60 138.923Z"
                  fill="#121D59"
                />
              </svg>
            </motion.div>
            <div className="flex flex-col justify-start items-start space-y-3 px-4">
              <h2 className="text-xl font-bold">Learning Assessment</h2>
              <p className="text-sm md:text-base">
                Begin your journey with a comprehensive assessment to identify
                your strengths, weaknesses, and learning preferences.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              y: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex space-x-4"
          >
            <motion.div
              initial={{
                y: 100,
                scale: 1,
                opacity: 0,
              }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="h-32 w-16 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="155"
                viewBox="0 0 60 155"
                fill="none"
              >
                <path
                  d="M60 138.923V0.189941L30.0791 15.3179L0 0.189941V138.923L30.0791 154.19L60 138.923Z"
                  fill="#FF509B"
                />
              </svg>
            </motion.div>
            <div className="flex flex-col justify-start items-start space-y-3 px-4">
              <h2 className="text-xl font-bold">Personalized Curriculum</h2>
              <p className="text-sm md:text-base">
                Receive a personalized curriculum tailored to your specific
                needs and goals, with modules designed to address your
                individual learning style.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              y: 100,
              scale: 1,
              opacity: 0,
            }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <motion.div
              initial={{
                y: 100,
                scale: 1,
                opacity: 0,
              }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="h-32 w-16 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="155"
                viewBox="0 0 60 155"
                fill="none"
              >
                <path
                  d="M60 138.923V0.189941L30.0791 15.3179L0 0.189941V138.923L30.0791 154.19L60 138.923Z"
                  fill="#121D59"
                />
              </svg>
            </motion.div>
            <div className="flex flex-col justify-start items-start space-y-3 px-4">
              <h2 className="text-xl font-bold">Progress Tracking</h2>
              <p className="text-sm md:text-base">
                Track your progress with detailed analytics, monitor your
                development, and receive regular feedback to stay on track.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="w-[300px] md:w-[400px] h-[600px] md:h-[800px] rounded-lg pl-3 shrink-1">
          <Image
            src="/read.png"
            alt="learning stype"
            width={1000}
            height={1000}
            className="w-full h-full rounded-lg hover:scale-95 transition-transform duration-1000 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

export default CulturalDiversity;
