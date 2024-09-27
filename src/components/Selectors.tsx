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
    ],
  },
];

const DropdownSelector = ({ type }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const renderCourses = () => (
    <ul>
      {courses.map((course) => (
        <li
          key={course.name}
          className="px-4 py-2 hover:bg-blue-300 cursor-pointer"
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
          className="px-4 py-2 hover:bg-blue-300 cursor-pointer relative"
          onMouseEnter={() => setHoveredOption(language.name)}
          onMouseLeave={() => setHoveredOption(null)}
        >
          {language.name}
          {hoveredOption === language.name && language.subOptions && (
            <div className="absolute left-full top-0 mt-0 ml-0 w-52 bg-blue-100 shadow-lg rounded-lg">
              <ul>
                {language.subOptions.map((sub) => (
                  <li
                    key={sub.name}
                    className="px-4 py-2 hover:bg-blue-300 cursor-pointer"
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
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      {/* Dropdown Button */}
      <button className="p-2 rounded-md hover:bg-blue-300 active:bg-blue-300 underline">
        {type === "courses" ? "Courses" : "Language"}
      </button>
      {dropdownOpen && (
        <div className="absolute w-28 bg-white shadow-lg rounded-md">
          {type === "courses" ? renderCourses() : renderLanguages()}
        </div>
      )}
    </div>
  );
};

export default DropdownSelector;
