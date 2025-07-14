"use client";
import React, { useState, useEffect } from "react";

const AboutDev = ({ textColor }) => {
  const titles = [
    "Software Developer",
    "React Developer",
    "React-Native Developer",
    "Full-Stack Developer",
  ];

  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timer;

    if (!deleting && charIndex <= currentTitle.length) {
      // Yazma animasyonu
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 150);
    } else if (deleting && charIndex >= 0) {
      // Silme animasyonu
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 100);
    } else if (charIndex === currentTitle.length + 1) {
      // Yazma bitti, biraz bekle sonra silmeye başla
      timer = setTimeout(() => setDeleting(true), 1000);
    } else if (charIndex === -1) {
      // Silme bitti, sonraki title'a geç
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timer);
  }, [charIndex, deleting, titleIndex, titles]);

  return (
    <h2
      style={{ color: textColor }}
      className="text-3xl mt-8 text-center font-semibold"
    >
      I'm a{" "}
      <span style={{ color: textColor }} className="font-extrabold">
        {displayText}
      </span>
      <span className="blinking-cursor">|</span>
      <style>{`
        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from, to { opacity: 1 }
          50% { opacity: 0 }
        }
      `}</style>
    </h2>
  );
};

export default AboutDev;
