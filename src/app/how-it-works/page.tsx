import Contact from "@/components/Contact";
import HowItWorks from "@/components/HowItWorks";
import React from "react";

function page() {
  return (
    <div className="pt-20 md:pt-14 w-full h-auto">
      <HowItWorks />
      <Contact />
    </div>
  );
}

export default page;
