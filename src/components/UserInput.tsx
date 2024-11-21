import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const personOptions = ["an adult", "a child"];
const studyOptions = ["in-person", "online"];

function UserInput() {
  const [selectedPerson, setSelectedPerson] = useState(personOptions[0]);
  const [selectedStudy, setSelectedStudy] = useState(studyOptions[0]);
  const [hasSelected, setHasSelected] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="hidden md:flex bg-slate-100 h-20 w-[546px] justify-center items-center space-x-3 pr-2 text-sm rounded-md">
      <p>I am</p>
      {/* Person Selector */}
      <Listbox
        value={selectedPerson}
        onChange={(value) => {
          setSelectedPerson(value);
          setHasSelected(true);
        }}
      >
        <div className="relative">
          <ListboxButton
            className={`flex items-center justify-center px-2 py-3 text-sm text-center border border-gray-200 rounded-none w-24 ${
              hasSelected ? "text-pink-500" : "text-black"
            }`}
          >
            {selectedPerson || "Select"}{" "}
            {/* 'Select' shows when nothing is selected */}
            <ChevronDownIcon className="ml-2 w-4 h-4" />
          </ListboxButton>
          <ListboxOptions className="absolute w-24 bg-white text-sm rounded-none z-10">
            {personOptions.map((option) => (
              <ListboxOption
                key={option}
                value={option}
                className="px-2 py-2 cursor-pointer hover:bg-[#FF509B] text-sm"
              >
                {option}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>

      <span>{`and I'd like to learn`}</span>

      {/* Study Selector */}
      <Listbox
        value={selectedStudy}
        onChange={(value) => {
          setSelectedStudy(value);
          setIsSelected(true);
        }}
      >
        <div className="relative">
          <ListboxButton
            className={`flex items-center justify-center px-2 py-3 text-sm text-center border border-gray-200 rounded-none w-28 ${
              isSelected ? "text-pink-500" : "text-black"
            }`}
          >
            {selectedStudy || "Select"}{" "}
            <ChevronDownIcon className="ml-2 w-4 h-4" />
          </ListboxButton>
          <ListboxOptions className="absolute w-28 bg-white text-sm rounded-none z-10">
            {studyOptions.map((option) => (
              <ListboxOption
                key={option}
                value={option}
                className="px-2 py-2 cursor-pointer hover:bg-[#FF509B] text-sm"
              >
                {option}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>

      {/* Go Button */}
      <Link href="/getstarted" passHref>
        <Button className="bg-blue-950 hover:bg-blue-900 text-slate-100 hover:text-white active:bg-blue-700 px-10">
          Go
        </Button>
      </Link>
    </div>
  );
}

export default UserInput;
