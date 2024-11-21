// Card.tsx
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface CardProps {
  id: number;
  title: string;
  image: string;
  alt: string;
  content: string[];
  delay: number;
  expandable?: boolean;
  optionalButton?: boolean;
  buttonLink?: string;
  imagePosition?:
    | string
    | "center"
    | "bottom"
    | "top"
    | "bottom-center"
    | "center-bottom";
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  alt,
  content,
  expandable = false,
  optionalButton = false,
  buttonLink = "/",
  imagePosition = "center",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Display logic for expandable content
  const displayContent = isExpanded || !expandable ? content : [content[0]];

  return (
    <div
      className="max-w-[400px] shrink-0 bg-white rounded-lg shadow-md 
     md:hover:shadow-xl 
     md:hover:scale-105 
     md:transition-all 
     md:duration-300"
    >
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={alt}
          fill
          className="rounded-t-lg object-cover"
          style={{
            objectPosition:
              imagePosition === "bottom"
                ? "center 100%"
                : imagePosition === "top"
                ? "center 0%"
                : imagePosition === "bottom-center"
                ? "center 75%"
                : imagePosition === "center-bottom"
                ? "center 65%"
                : "center center",
          }}
        />
      </div>
      <div className="p-6 space-y-4">
        <h4 className="text-xl font-semibold">{title}</h4>
        {/* <div className="space-y-2">
          {displayContent.map((paragraph, index) => (
            <p key={index} className="text-gray-600">
              {paragraph}
            </p>
          ))}
        </div> */}
        <div className="space-y-2">
          {displayContent.map((paragraph, index) => {
            // Split paragraph into words and take first 20
            const words = paragraph.split(" ");
            const first20Words = words.slice(0, 20).join(" ");
            // Add ellipsis if paragraph has more than 20 words
            const displayText =
              words.length > 20 ? `${first20Words}...` : paragraph;

            return (
              <p key={index} className="text-gray-600">
                {displayText}
              </p>
            );
          })}
        </div>

        {expandable && content.length > 1 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 text-sm mt-4"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}

        {optionalButton && (
          <div className="pt-4">
            <Link href={buttonLink}>
              <button className="w-full bg-white hover:bg-blue-900 text-blue-900 hover:text-white border border-blue-900 py-2 px-4 rounded-md transition-colors duration-300">
                Get started
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
