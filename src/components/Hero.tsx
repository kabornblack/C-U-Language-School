import React from "react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <div className="flex justify-center items-center min-h-96 pt-32 mt-16 bg-fixed bg-paralex bg-cover">
      <div className="space-y-4">
        <h1 className="text-5xl text-white text-center">
          Hello, Hola! Let's learn together
        </h1>
        <p className="text-white text-center">
          Experience English and Spanish in a whole new way. Enjoy learning with
          ease and excitement
        </p>
        <div className="flex justify-center items-center">
          <Button className="bg-white hover:bg-blue-900 text-blue-900 hover:text-white active:bg-blue-700 px-8 whitespace-nowrap sm:block md:hidden">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
