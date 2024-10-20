"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const ResultsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = Number(searchParams.get("score") || 0);

  const getRecommendation = (score: number) => {
    const highlightStyle = { fontWeight: "bold" };

    if (score <= 3) {
      return (
        <span>
          We recommend you take a <span style={highlightStyle}>beginners</span>{" "}
          course to improve your Language skills.
        </span>
      );
    } else if (score <= 8) {
      return (
        <span>
          Great job! We suggest you enroll in an{" "}
          <span style={highlightStyle}>intermediate</span> level course to
          further enhance your Language proficiency.
        </span>
      );
    } else {
      return (
        <span>
          Excellent work! You should consider taking an{" "}
          <span style={highlightStyle}>advanced</span> course to master your
          Language skills.
        </span>
      );
    }
  };

  const handleRetake = () => {
    router.push("/placementtest");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Your Results</h1>
        <p className="text-xl mb-4 text-center">
          Your score: <span className="font-bold">{score} / 10</span>
        </p>
        <p className="text-lg mb-6 text-center">{getRecommendation(score)}</p>
        <button
          onClick={handleRetake}
          className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-800 w-full"
        >
          Retake the Test
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
