import Image from "next/image";
import React from "react";

function HowItWorks() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto">
      <div className="flex items-center justify-center text-center bg-blue-900 w-full  h-32 ">
        <h1 className="text-white text-4xl font-bold">How it Works</h1>
      </div>
      <div className="flex justify-center items-center bg-slate-200 h-auto w-screen">
        <div className="p-10 md:10 lg:p-20 md:w-2/3 lg:w-3/4">
          <p className="text-sm font-light">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum c
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-slate-100 w-full h-auto p-10 space-y-4 pb-28">
        <div className="flex flex-col lg:flex-row justify-center items-center min-h-full w-full md:w-3/5 bg-slate-100 pt-10">
          <div className="p-4 w-full h-full text-center mr-3 md:mr-0">
            <Image
              src="/home.png"
              alt="about things"
              width={10000}
              height={10000}
              //   layout="fill"
              objectFit="cover"
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col justify-center p-4 w-full h-full space-y-2">
            <h2 className="text-xl font-semibold">Flexible Payement</h2>
            <p className="text-sm">
              There's a flexible sunscription based payment plan just for you!
              This way you get to pay based on your scedule
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center min-h-full w-full md:w-2/3 bg-slate-100 pt-10">
          <div className="flex flex-col justify-center p-4 w-full h-full space-y-2">
            <h2 className="text-xl font-semibold">150 Hours Module</h2>
            <p className="text-sm">
              Our programs have a total of 150 hours of learning across board.
              This means you get to have a 50 minute learning session over a
              period of 3 months
            </p>
          </div>
          <div className="p-4 w-full h-full text-center mr-3 md:mr-0">
            <Image
              src="/home.png"
              alt="about things"
              width={10000}
              height={10000}
              //   layout="fill"
              objectFit="cover"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
