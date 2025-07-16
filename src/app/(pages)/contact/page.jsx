"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "./components/emailSend";
import { IoIosColorFilter, IoMdClose } from "react-icons/io";
import Image from "next/image";
import { colors } from "././././../../constants/colors";
import Robot from "../../threejs/Robot";

const links = [
  {
    href: "https://wa.me/905465767509",
    icon: <FaWhatsapp size={24} />,
    text: "WhatsApp",
    bg: "bg-green-600 hover:bg-green-700",
  },
  {
    href: "https://www.instagram.com/ahmtbasboga_",
    icon: <FaInstagram size={24} />,
    text: "Instagram",
    bg: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:brightness-110",
  },
  {
    href: "https://www.linkedin.com/in/ahmet-ba%C5%9Fbo%C4%9Fao%C4%9Flu-35a6761a1/",
    icon: <FaLinkedin size={24} />,
    text: "LinkedIn",
    bg: "bg-blue-600 hover:bg-blue-700",
  },
  {
    href: "mailto:ahmetcik6666@gmail.com",
    icon: <MdEmail size={24} />,
    text: "Mail",
    bg: "bg-red-600 hover:bg-red-700",
  },
  {
    href: "https://github.com/ahmtbsboga",
    icon: <FaGithub size={24} />,
    text: "GitHub",
    bg: "bg-gray-800 hover:bg-gray-700",
  },
];

const Contact = () => {
  const [translate, setTranslate] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [textColor, setTextColor] = useState("#000000");
  const [bgTheme, setBgTheme] = useState("dark");
  const [showEmailForm, setShowEmailForm] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor =
      bgTheme === "dark" ? "#0f172a" : "#f8fafc";
  }, [bgTheme]);

  const myColors = colors;

  return (
    <div className="relative top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center px-4 overflow-y-auto z-10 min-md:ml-40 min-lg:ml-50 min-xl:ml-60 max-sm:ml-15">
      {/* 3D Robot */}
      {!showEmailForm ? (
        <Robot
          onRobotClick={() => setShowEmailForm(true)}
          translate={translate}
          textColor={textColor}
        />
      ) : (
        ""
      )}

      {/* Email Form Modal */}
      {showEmailForm && (
        <div className="fixed inset-0 overflow-y-auto backdrop-blur-sm bg-black/50 z-150 flex-col min-h-screen py-20 overflow-auto flex items-center">
          <div className="relative bg-white p-6 rounded-lg max-w-md w-full min-h-full mx-4 overflow-auto">
            <button
              onClick={() => setShowEmailForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <ContactForm
              translate={translate}
              textColor={textColor}
              onClose={() => setShowEmailForm(false)}
            />
          </div>

          <div className="flex flex-col items-center gap-6 w-full mt-20 max-w-md z-50">
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`w-full flex items-center justify-center gap-3 ${link.bg} transition-all duration-300 py-5 px-6 text-lg font-medium rounded-full shadow-lg`}
              >
                {link.icon} {link.text}
              </motion.a>
            ))}
            <button
              onClick={() => setShowEmailForm(false)}
              type="button"
              className="px-6 py-5 bg-black text-white hover:bg-white hover:text-black w-full rounded-4xl duration-400 mb-20"
            >
              {translate ? "Kapat" : "Close"}
            </button>
          </div>
        </div>
      )}

      {/* Background Image */}
      <div className="fixed inset-0 z-10">
        {bgTheme === "dark" ? (
          <Image
            src="/bgbeyaz.jpg"
            alt="Dark background"
            fill
            quality={100}
            className="object-cover"
          />
        ) : (
          <Image
            src="/bgkrem.jpeg"
            alt="Light background"
            fill
            quality={100}
            className="object-cover"
          />
        )}
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
        className={`fixed top-20 right-5 z-50 p-3 rounded-full shadow-lg  ${
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
          className={`fixed top-36 right-5 z-9999 p-4 rounded-xl shadow-xl ${
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

export default Contact;
