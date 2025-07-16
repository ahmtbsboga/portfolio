import React from "react";
import { motion } from "framer-motion";

const libraries = [
  "REACT 19+",
  "NEXT 15.3+",
  "EMAILJS",
  "FRAMER-MOTION",
  "REACT-ICON",
  "REACT-TOASTIFY",
  "VERCEL",
  "GITHUB",
  "THREE-DREI",
  "THREE-FIBER",
  "THREEJS",
  "REACT-DOM",
  "TAILWINDCSS",
];

const Libraries = () => {
  return (
    <div className="w-full h-[600px] bg-black/80 text-white/80 overflow-hidden relative flex flex-col items-center rounded-2xl">
      {/* Kayan Yazılar */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-6 text-xl font-semibold opacity-70 pointer-events-none"
      >
        {libraries.map((lib, index) => (
          <div key={index}>{lib}</div>
        ))}
      </motion.div>
    </div>
  );
};

export default Libraries;
