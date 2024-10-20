import React from "react";
import Hero from "@/components/Hero";
import Image from "next/image";
import Learning from "@/components/Learning";
import CulturalDiversity from "@/components/CulturalDiversity";
import LearningStyle from "@/components/LearningStyle";
import EnjoyableLearning from "@/components/EnjoyableLearning";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <main className="h-auto w-full bg-slate-100 -pt-2">
      <section className="">
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
      <section>
        <EnjoyableLearning />
      </section>
      <CookieConsent />
      <section></section>
    </main>
  );
}
