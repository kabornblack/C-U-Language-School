"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

function Questionnaire() {
  const router = useRouter();
  const [answers, setAnswers] = useState<(string | null)[]>(
    new Array(10).fill(null)
  );
  const [showError, setShowError] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What's the correct word?\nShe ____ to school every day.",
      options: ["go", "goes", "going"],
      correctAnswer: "goes",
    },
    {
      id: 2,
      question: "Complete the sentence:\nThey ____ to the park yesterday?",
      options: ["go", "went", "going"],
      correctAnswer: "went",
    },
    {
      id: 3,
      question: "Choose the right word:\nI am excited ____ the new movie.",
      options: ["with", "for", "about"],
      correctAnswer: "about",
    },
    {
      id: 4,
      question:
        "Read the passage and answer the questions: \"Sam has a pet dog. The dog's name is Max. Sam and Max go to the park every day.\"\nWhat is the dog's name?",
      options: ["Max", "Sam", "Rover"],
      correctAnswer: "Max",
    },
    {
      id: 5,
      question:
        'Read the passage and answer the questions: "Sam has a pet dog. The dog\'s name is Max. Sam and Max go to the park every day."\nWhere do Sam and Max go?',
      options: ["School", "Park", "Store"],
      correctAnswer: "Park",
    },
    {
      id: 6,
      question: "Alice, ____ the windows please.\nIts too hot in here",
      options: ["Open", "Opens", "Opened"],
      correctAnswer: "Open",
    },
    {
      id: 7,
      question: "The movie was ____ the book",
      options: ["good as", "as good as", "as"],
      correctAnswer: "as good as",
    },
    {
      id: 8,
      question:
        "Mr. Hawkins requests that someone ____ the data by fax immediately.",
      options: ["sent", "to send", "sends"],
      correctAnswer: "sends",
    },
    {
      id: 9,
      question: "The concert will begin ____ fifteen minutes.",
      options: ["in", "on", "with"],
      correctAnswer: "in",
    },
    {
      id: 10,
      question: "Each of the Olympic athletes ____ for months, even years.",
      options: ["have been training", "were training", "been training"],
      correctAnswer: "have been training",
    },
  ];

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      if (answer === questions[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const submitForm = () => {
    const allQuestionsAnswered = answers.every((answer) => answer !== null);

    if (!allQuestionsAnswered) {
      setShowError(true);
      const firstUnansweredIndex = answers.findIndex(
        (answer) => answer === null
      );
      const questionElement = document.getElementById(
        `question-${firstUnansweredIndex}`
      );
      if (questionElement) {
        questionElement.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    const score = calculateScore();
    router.push(`/placementtest/results?score=${score}`);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm();
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    submitForm();
  };

  // const submitForm = () => {
  //   const allQuestionsAnswered = answers.every((answer) => answer !== null);

  //   if (!allQuestionsAnswered) {
  //     setShowError(true);
  //     const firstUnansweredIndex = answers.findIndex(
  //       (answer) => answer === null
  //     );
  //     const questionElement = document.getElementById(
  //       `question-${firstUnansweredIndex}`
  //     );
  //     if (questionElement) {
  //       questionElement.scrollIntoView({ behavior: "smooth" });
  //     }
  //     return;
  //   }

  //   console.log("Answers:", answers);
  //   window.location.href = "/results";
  // };

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    setAnswers((prevAnswers) =>
      prevAnswers.map((prevAnswer, index) =>
        index === questionIndex ? answer : prevAnswer
      )
    );
    setShowError(false);
  };

  const getQuestionsRemaining = () => {
    return answers.filter((answer) => answer === null).length;
  };

  return (
    <div className="flex flex-col justify-start items-start p-20 pr-5 pl-10 md:pl-32 lg:pl-60 font-rethink space-y-5 w-96 md:w-[600px] lg:w-[750px]">
      <form onSubmit={handleSubmit}>
        <div className="space-y-20">
          {questions.map((question, index) => (
            <div
              key={index}
              id={`question-${index}`}
              className="space-y-4 text-xl font-normal leading-normal"
            >
              <p className="font-normal mb-2 whitespace-pre-line">
                {`${question.id}/10\n${question.question}`}
              </p>
              <div className="flex space-x-3">
                {question.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    type="button"
                    onClick={() => handleAnswerChange(index, option)}
                    className={`px-4 py-1 text-sm ${
                      answers[index] === option
                        ? "bg-blue-950 text-white"
                        : "bg-transparent hover:bg-gray-300 border border-blue-900"
                    } rounded`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {showError && answers[index] === null && (
                <p className="text-red-500 text-sm mt-2">
                  Please answer this question
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-10 space-y-8 font-rethink text-sm">
          {showError && getQuestionsRemaining() > 0 && (
            <p className="text-red-500">
              Please answer all questions before submitting.
              {getQuestionsRemaining()} question
              {getQuestionsRemaining() > 1 ? "s" : ""} remaining.
            </p>
          )}
          <h4>
            {getQuestionsRemaining() === 0
              ? "Well done! Submit your language test and see your Score."
              : `Please complete all questions. ${getQuestionsRemaining()} question${
                  getQuestionsRemaining() > 1 ? "s" : ""
                } remaining.`}
          </h4>
          {/* <input
            type="email"
            placeholder="name@example.com"
            required
            className="border-b border-gray-300 py-2"
          /> */}
          <button
            type="button"
            onClick={handleButtonClick}
            className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Questionnaire;
