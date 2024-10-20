"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function OtherSpanishCoursesBusiness() {
  return (
    <div className=" bg-slate-100 w-full h-auto py-20">
      <div className="flex flex-col justify-center items-center h-auto w-full py-10">
        <h2 className="text-3xl font-bold text-center ">
          Other Spanish Language Courses
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
          <div className="w-72 md:w-60 lg:w-80 bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/spanishbeginner.png"
              alt="Individual Learning"
              width={1000}
              height={1000}
              className="h-40 w-full rounded-t-sm object-cover"
            />
            <div className="p-4 space-y-4 pb-5 font-rethink">
              <h4 className="text-lg font-semibold">Spanish for Teenagers</h4>
              <p className="text-sm font-rethink">
                Connect with a diverse community of learners and native speakers
                from around the world through interactive forums, language
                exchange programs, and virtual events.
              </p>
              <Link href="/getstarted">
                <Button className="w-1/2 py-1 bg-blue-950 hover:bg-blue-700 active:bg-blue-600 my-5">
                  Get Started
                </Button>
              </Link>
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
          className=" shrink-0 hover:scale-105 transition-transform duration-100 ease-in-out"
        >
          <div className="w-72 md:w-60 lg:w-80 bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/spanishintermediate.png"
              alt="Group Learning"
              width={1000}
              height={1000}
              className="h-40 w-full rounded-t-sm object-cover"
            />
            <div className="p-4 space-y-4 pb-5">
              <h4 className="text-lg font-semibold">Spanish for Kids</h4>
              <p className="text-sm font-rethink">
                Connect with a diverse community of learners and native speakers
                from around the world through interactive forums, language
                exchange programs, and virtual events.
              </p>
              <Link href="/getstarted">
                <Button className="w-1/2 py-1 bg-blue-950 hover:bg-blue-700 active:bg-blue-600 my-5">
                  Get Started
                </Button>
              </Link>
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
          className=" shrink-0 hover:scale-105 transition-transform duration-100 ease-in-out"
        >
          <div className="w-72 md:w-60 lg:w-80 bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/spanishadvance.png"
              alt="Business English"
              width={1000}
              height={1000}
              className="h-40 w-full rounded-t-sm object-cover"
            />
            <div className="p-4 space-y-4 pb-5">
              <h4 className="text-lg font-semibold">Business Spanish</h4>
              <p className="text-sm font-rethink">
                Connect with a diverse community of learners and native speakers
                from around the world through interactive forums, language
                exchange programs, and virtual events.
              </p>
              <Link href="/getstarted">
                <Button className="w-1/2 py-1 bg-blue-950 hover:bg-blue-700 active:bg-blue-600 my-5">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col justify-center items-center pt-20 space-y-3 font-rethink">
        <h3 className="text-2xl font-semibold">Excited to learn?</h3>
        <p className="text-sm">
          Fill out the contact form below and we will be in touch with you as
          soon as possible.
        </p>
      </div>
    </div>
    // </div>
  );
}

export default OtherSpanishCoursesBusiness;