"use client";
import AboutCard from "@/app/components/aboutCard/aboutCard";
import aboutData from "@/app/constants/aboutData";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosColorFilter, IoMdClose } from "react-icons/io";
import Image from "next/image";
import AboutTable from "@/app/components/aboutTable/aboutTable";
import AboutDev from "@/app/components/aboutDev/aboutDev";
import { colors } from "@/app/constants/colors";

const About = () => {
  const [translate, setTranslate] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [textColor, setTextColor] = useState("#000000");
  const [bgTheme, setBgTheme] = useState("dark");

  const myColors = colors;

  // Arkaplan temasını değiştir
  useEffect(() => {
    document.body.style.backgroundColor =
      bgTheme === "dark" ? "#0f172a" : "#f8fafc";
  }, [bgTheme]);

  return (
    <div className="min-h-screen ml-20 max-sm:ml-8 relative overflow-y-auto">
      {/* Dinamik arkaplan */}
      <div className="fixed inset-0 z-10">
        {bgTheme === "dark" ? (
          <Image
            src="/bgbeyaz.jpg"
            alt="Dark background"
            fill
            className="object-cover rounded-2xl"
            quality={100}
          />
        ) : (
          <Image
            src="/bgkrem.jpeg" // Light tema için yeni bir resim
            alt="Light background"
            fill
            className="object-cover rounded-2xl"
            quality={100}
          />
        )}
      </div>

      {/* İçerik */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold mb-3" style={{ color: textColor }}>
            {translate ? "Hakkımda" : "About Me"}
          </h1>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ background: textColor }}
          />
        </motion.div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ y: 50, opacity: 0, scale: 0.3 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
                delay: i * 0.2,
              }}
            >
              <AboutCard
                text={translate ? item.text_tr : item.text_en}
                textColor={textColor}
                bgTheme={bgTheme}
              />
            </motion.div>
          ))}
        </div>

        <AboutDev
          textColor={textColor}
          bgTheme={bgTheme}
          translate={translate}
        />

        <AboutTable
          textColor={textColor}
          bgTheme={bgTheme}
          translate={translate}
        />
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

      {/* Tema Ayarları Butonu */}
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

      {/* Tema Seçim Paneli */}
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

          {/* Arkaplan Teması */}
          <div className="mb-4">
            <p className="text-sm mb-2 text-gray-400">
              {translate ? "Arkaplan" : "Background"}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setBgTheme("dark")}
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
                  onClick={() => setBgChange("/bgbeyaz.jpg")}
                />
              </button>
              <button
                onClick={() => setBgTheme("light")}
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
                  onClick={() => setBgChange("/bgkrem.jpeg")}
                />
              </button>
            </div>
          </div>

          {/* Metin Rengi */}
          <div>
            <p className="text-sm mb-2 text-gray-400">
              {translate ? "Metin Rengi" : "Text Color"}
            </p>
            <div className="grid grid-cols-4 gap-2">
              {myColors.map((color, i) => (
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
  );
};

export default About;
