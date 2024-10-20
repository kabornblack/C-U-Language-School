// DropdownSelector.tsx

import { useState } from "react";
import Link from "next/link"; // Adjust based on your routing setup

const courses = [
  { name: "Individual" },
  { name: "Group" },
  { name: "Business" },
];

const languageOptions = [
  {
    name: "English",
    subOptions: [
      { name: "English for Kids", link: "/language/english/english-for-kids" },
      {
        name: "English for Teenager",
        link: "/language/english/english-for-teenager",
      },
      {
        name: "English for Adult",
        link: "/language/english/english-for-adult",
      },
      {
        name: "Learn Business English",
        link: "/language/english/business-english",
      },
    ],
  },
  {
    name: "Spanish",
    subOptions: [
      { name: "Spanish for Kids", link: "/language/spanish/spanish-for-kids" },
      {
        name: "Spanish for Teenager",
        link: "/language/spanish/spanish-for-teenager",
      },
      {
        name: "Spanish for Adult",
        link: "/language/spanish/spanish-for-adult",
      },
      {
        name: "Learn Business Spanish",
        link: "/language/spanish/business-spanish",
      },
    ],
  },
];

type SelectorType = "courses" | "languages";

const DropdownSelector = ({ type }: { type: SelectorType }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const renderCourses = () => (
    <ul>
      {courses.map((course) => (
        <li
          key={course.name}
          className="px-4 py-2 hover:bg-pink-400 cursor-pointer z-50"
        >
          <Link
            href={`/courses/${course.name.toLowerCase().replace(" ", "-")}`}
          >
            {course.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  const renderLanguages = () => (
    <ul>
      {languageOptions.map((language) => (
        <li
          key={language.name}
          className="px-4 py-2 hover:bg-pink-400 cursor-pointer bg-slate-100 relative z-50"
          onMouseEnter={() => setHoveredOption(language.name)}
          onMouseLeave={() => setHoveredOption(null)}
        >
          {language.name}
          {hoveredOption === language.name && language.subOptions && (
            <div className="absolute left-full top-0 mt-0 ml-0 w-52 bg-slate-100 shadow-lg z-50">
              <ul>
                {language.subOptions.map((sub) => (
                  <li
                    key={sub.name}
                    className="px-4 py-2 hover:bg-pink-400 cursor-pointer "
                  >
                    <Link href={sub.link}>{sub.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className="relative group"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      {/* Dropdown Button */}
      <button className="px-1 hover:text-[#FF509B] active:bg-blue-300">
        {type === "courses" ? "Courses" : "Language"}
        <span className="ml-2 text-xs text-gray-400 group-hover:text-[#FF509B] ">
          ▼
        </span>
      </button>
      {dropdownOpen && (
        <div className="absolute w-28 bg-white shadow-lg z-50">
          {type === "courses" ? renderCourses() : renderLanguages()}
        </div>
      )}
    </div>
  );
};

export default DropdownSelector;
