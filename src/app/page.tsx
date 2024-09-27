import React from "react";
import Hero from "@/components/Hero";
import Image from "next/image";
import Learning from "@/components/Learning";
import CulturalDiversity from "@/components/CulturalDiversity";
import LearningStyle from "@/components/LearningStyle";

export default function Home() {
  return (
    <main className="h-auto min-w-screen bg-slate-100 overflow-x-hidden">
      <section className="mx-auto">
        <Hero />
      </section>
      <section>
        <Learning />
      </section>
      <section>
        <LearningStyle />
      </section>
      <section>
        <CulturalDiversity />
      </section>
      <section></section>
    </main>
  );
}
