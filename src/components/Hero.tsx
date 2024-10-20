import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-full min-h-96">
      <div className="relative bg-[#121D59] w-full min-h-[580px] ">
        <Image
          src="/hero.jpg"
          alt="Background Image"
          // width={1000}
          // height={1000}
          layout="fill"
          objectFit="cover"
          className="h-full w-screen absolute object-cover object-center mix-blend-lighten opacity-25"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 p-10">
          <h1 className="text-4xl md:text-5xl text-white font-bold font-rethink text-center">
            {`Hello, Hola! Let's learn together.`}
          </h1>
          <p className="text-white text-center text-sm">
            Experience English and Spanish in a whole new way. Enjoy learning
            with ease and excitement!
          </p>
          <div className="flex justify-center items-center">
            <Link href="/getstarted" passHref>
              <Button className="bg-white hover:bg-blue-900 text-blue-900 hover:text-white active:bg-blue-700 px-8">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
