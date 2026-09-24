import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Frontend Developer",
          "Backend Developer",
          "Fullstack Developer",
          "Mobile Developer",
          "AI/ML Developer",
          "QA/Tester",
          "Database Engineer",
          "UI/UX Designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
