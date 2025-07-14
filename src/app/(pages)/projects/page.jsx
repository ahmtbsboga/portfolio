"use client";
import Image from "next/image";
import projects from "../../constants/projectsText";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosColorFilter, IoMdClose } from "react-icons/io";

const Projects = () => {
  const [bgChange, setBgChange] = useState("/bgbeyaz.jpg");
  const [activeIndex, setActiveIndex] = useState(null);
  const [translate, setTranslate] = useState(false);
  const [bgTheme, setBgTheme] = useState("dark");
  const [themeOpen, setThemeOpen] = useState(false);
  const [textColor, setTextColor] = useState("#ffffff");

  const handleMobileClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const colors = [
    { name: "Kırmızı", value: "#ef4444" },
    { name: "Mavi", value: "#3b82f6" },
    { name: "Siyah", value: "#000000" },
    { name: "Turkuaz", value: "#06b6d4" },
    { name: "Pembe", value: "#ec4899" },
    { name: "Beyaz", value: "#ffffff" },
    { name: "Yeşil", value: "#22c55e" },
    { name: "Mor", value: "#a855f7" },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Arka Plan Resmi */}
      <div className="fixed inset-0 z-10">
        <Image
          src={bgChange}
          alt="bg"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* Tema Ayarları */}
      <div>
        <motion.button
          onClick={() => setThemeOpen(!themeOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`fixed top-20 right-5 z-50 p-3 rounded-full shadow-lg ${
            bgTheme === "dark" ? "bg-white/20" : "bg-black/20"
          } backdrop-blur-md text-black`}
        >
          {themeOpen ? <IoMdClose size={20} /> : <IoIosColorFilter size={20} />}
        </motion.button>

        {themeOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`fixed top-36 right-5 z-50 p-4 rounded-xl shadow-xl ${
              bgTheme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="font-medium mb-3 text-gray-400">
              {translate ? "Tema Ayarları" : "Theme Settings"}
            </h3>

            <div className="mb-4">
              <p className="text-sm mb-2 text-gray-400">
                {translate ? "Arkaplan" : "Background"}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setBgTheme("dark");
                    setBgChange("/bgbeyaz.jpg");
                  }}
                  className={`p-2 rounded-lg ${
                    bgTheme === "dark" ? "ring-2 ring-blue-500" : ""
                  }`}
                  style={{ backgroundColor: "#0f172a" }}
                >
                  <Image
                    width={50}
                    height={50}
                    quality={100}
                    src="/bgbeyaz.jpg"
                    alt="bg"
                    className="w-10 rounded-full h-10"
                  />
                </button>
                <button
                  onClick={() => {
                    setBgTheme("light");
                    setBgChange("/bgkrem.jpeg");
                  }}
                  className={`p-2 rounded-lg ${
                    bgTheme === "light" ? "ring-2 ring-blue-500" : ""
                  }`}
                  style={{ backgroundColor: "#f8fafc" }}
                >
                  <Image
                    width={50}
                    height={50}
                    quality={100}
                    src="/bgkrem.jpeg"
                    alt="bg"
                    className="w-10 rounded-full h-10"
                  />
                </button>
              </div>
            </div>

            <div>
              <p className="text-sm mb-2 text-gray-400">
                {translate ? "Metin Rengi" : "Text Color"}
              </p>
              <div className="grid grid-cols-4 gap-2">
                {colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setTextColor(color.value)}
                    className={`w-8 h-8 rounded-full ${
                      textColor === color.value
                        ? "ring-2 ring-offset-2 ring-blue-500"
                        : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Ana İçerik */}
      <div className="relative z-10 p-10 max-sm:ml-[-28px] max-sm:p-4">
        <p className="text-7xl max-sm:text-5xl font-bold text-black px-12 py-2 whitespace-nowrap">
          {translate ? (
            <span className="text-red-800">Projelerim</span>
          ) : (
            <>
              <span className="text-black">My </span>
              <span className="text-red-800">Projects</span>
            </>
          )}
        </p>

        <motion.div
          className="grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mt-10 max-sm:pl-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              onClick={() => handleMobileClick(i)}
              className="relative aspect-video w-full bg-black rounded-xl overflow-hidden group cursor-pointer"
              variants={itemVariants}
            >
              <video
                src={project.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:opacity-40"
              />
              <div
                className={`absolute top-0 h-full w-1/2 bg-black/70 text-white flex flex-col justify-center p-4
                  transition-all duration-500
                  ${activeIndex === i ? "left-0" : "left-[-100%]"}
                  group-hover:left-0`}
              >
                <p className="text-xs" style={{ color: textColor }}>
                  {translate ? project.text_tr : project.text_en}
                </p>
              </div>
              <h3
                className="absolute bottom-2 right-2 px-3 py-1 rounded-md text-sm font-semibold"
                style={{
                  color: textColor,
                  backgroundColor:
                    bgTheme === "dark"
                      ? "rgba(0,0,0,0.5)"
                      : "rgba(255,255,255,0.5)",
                }}
              >
                {translate ? project.title_tr : project.title_en}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center items-center gap-1 flex-col mt-5 pb-10">
          <h1 className="font-extrabold" style={{ color: textColor }}>
            {translate ? "Ve dahası .." : "See More"}
          </h1>
          <Link
            href={"https://github.com/ahmtbsboga"}
            target="_blank"
            rel="noreferrer"
            style={{ color: textColor }}
            className="relative underline shadow-2xl shadow-black p-3 rounded-lg duration-700 animate-pulse"
          >
            GitHub
          </Link>
        </div>
      </div>

      {/* Dil Değiştirme Butonu */}
      <motion.button
        onClick={() => setTranslate(!translate)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed top-5 right-5 z-50 p-3 rounded-full shadow-lg ${
          bgTheme === "dark" ? "bg-white/20" : "bg-black/20"
        } backdrop-blur-md text-black`}
      >
        {translate ? "🇹🇷 TR" : "🇬🇧 EN"}
      </motion.button>
    </div>
  );
};

export default Projects;
