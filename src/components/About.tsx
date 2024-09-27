import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto">
      <div className="flex items-center justify-center bg-blue-900 w-full h-32 ">
        <h1 className="text-white text-4xl font-bold">About Us</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-slate-100 w-full h-auto p-10 space-y-4">
        <div className="flex flex-col lg:flex-row justify-center items-center h-auto max-w-screen md:w-3/5 bg-slate-100 pt-10">
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
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p>
              has been the industry standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap in
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center h-auto max-w-screen md:w-3/5 bg-slate-100 pt-10">
          <div className="flex flex-col justify-center p-4 w-full h-full space-y-2">
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p>
              has been the industry standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap in
            </p>
          </div>
          <div className="p-4 w-full h-full text-center mr-3 md:mr-0">
            <Image
              src="/home.png"
              alt="about things"
              width={1000}
              height={1000}
              //   layout="fill"
              objectFit="cover"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-slate-100 h-auto max-w-screen pt-20">
        <div className="p-10 lg:p-20 md:w-2/3">
          <p className="text-sm font-light">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum,
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
