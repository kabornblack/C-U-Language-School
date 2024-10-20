import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="min-h-screen w-screen">
      <div className="p-20 pr-5 pl-10 md:pl-20 lg:pl-44 font-rethink space-y-5 w-96 md:w-[600px] lg:w-[750px]">
        <h2 className="text-lx font-semibold text-blue-950">
          Find out your current English level!
        </h2>
        <p className="font-normal">
          This online level test will give you an approximate indication of your
          English language level.
        </p>
        <p>
          {`There are 10 questions and the test takes less than 5 minutes. Upon
          completion, we'll email your results.`}
        </p>
        <Link
          href="/placementtest/test"
          passHref
          className="flex justify-start items-center"
        >
          <Button className="font-semibold font-sans text-sm bg-blue-950 hover:bg-blue-900 text-slate-100 active:bg-blue-700 px-8 mt-6">
            Start test
          </Button>
          <p className=" text-center pt-4 pl-3 text-xs">
            press <span className=" font-bold">Enter ↵</span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default page;
