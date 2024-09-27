import About from "@/components/About";
import Contact from "@/components/Contact";
import React from "react";

function page() {
  return (
    <div className="pt-20 md:pt-14 w-full h-auto">
      <About />
      <Contact />
    </div>
  );
}

export default page;
