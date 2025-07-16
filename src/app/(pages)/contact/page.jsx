"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-zinc-200 text-white flex flex-col justify-center items-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-black"
      >
        İletişim
      </motion.h1>

      <div className="flex flex-col items-center gap-6 w-full max-w-md">
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
    </div>
  );
};

export default Contact;
