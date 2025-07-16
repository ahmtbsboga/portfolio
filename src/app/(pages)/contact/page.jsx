"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "./components/emailSend";
import { IoIosColorFilter, IoMdClose } from "react-icons/io";
import Image from "next/image";

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

  useEffect(() => {
    document.body.style.backgroundColor =
      bgTheme === "dark" ? "#0f172a" : "#f8fafc";
  }, [bgTheme]);

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
    <div className="relative top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center px-4 overflow-y-auto mt-10 z-10">
      <ContactForm translate={translate} />
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

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-black z-50 mt-10 border-b-2"
      >
        {translate ? "İletişim" : "Contact"}
      </motion.h1>

      <div className="flex flex-col items-center gap-6 w-full max-w-md z-50">
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
  );
};

export default Contact;
