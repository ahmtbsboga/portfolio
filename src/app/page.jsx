"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosColorFilter, IoMdClose } from "react-icons/io";
import ShadowTheme from "./components/shadowTheme/shadowTheme";
import { colors } from "./constants/colors";
import { techs } from "./constants/tech";
import Libraries from "./components/libraries";

const Page = () => {
  const [bgChange, setBgChange] = useState("/bgbeyaz.jpg");
  const [selectedShadow, setSelectedShadow] = useState("shadow-black");
  const [bgTheme, setBgTheme] = useState("dark");
  const [translate, setTranslate] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [textColor, setTextColor] = useState("#000000");

  const myColors = colors;
  const myTechs = techs;

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ color: textColor }}
    >
      {/* Arkaplan Resmi */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Image
          src={bgChange}
          alt="background"
          fill
          quality={100}
          className="object-cover opacity-100 select-none"
        />
      </div>

      {/* Dil Değiştirme Butonu */}
      <motion.button
        onClick={() => setTranslate(!translate)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed top-5 right-5 z-50 p-3 rounded-full shadow-lg ${
          bgTheme === "dark" ? "bg-white/20" : "bg-black/20"
        } backdrop-blur-md`}
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
        } backdrop-blur-md`}
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
                  src="/bgkrem.jpeg"
                  alt="bg"
                  quality={100}
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

      {/* Ana İçerik */}
      <div className="relative z-10 w-full mt-[-80px]">
        <div className="max-w-5xl w-full mx-auto px-4 py-20">
          {/* Hakkımda Bölümü */}
          <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
            <div className="flex flex-col md:flex-row items-center gap-8px-4">
              <motion.p
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="max-w-xl leading-relaxed text-sm md:text-base ml-4 bg-gray-100/30 p-2 mt-4 "
              >
                {translate
                  ? "Merhaba! Ben Ahmet, yazılım geliştiricisiyim. React ve React Native ile modern, kullanıcı dostu uygulamalar yapmayı seviyorum. Yeni teknolojiler öğrenmek ve projeler üretmek benim tutkum."
                  : "Hello! I'm Ahmet, a software developer. I enjoy building modern, user-friendly applications with React and React Native. Learning new technologies and creating projects is my passion."}
              </motion.p>

              <div className="hidden md:block border-r-4 border-red-800 h-85 mr-4 ml-4"></div>

              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col items-center md:items-start"
              >
                <Image
                  src={"/me1.jpeg"}
                  width={250}
                  height={250}
                  quality={100}
                  alt="profile"
                  className="rounded-lg mt-4 mb-4"
                />
              </motion.div>
            </div>
          </section>

          {/* Projeler Bölümü */}
          <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 ">
            <motion.h1
              initial={{ y: -60, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
                duration: 0.6,
                delay: 0.2,
              }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              {translate ? "Projeler" : "Projects"}
            </motion.h1>

            <Link href={"/projects"} className="mb-8 text-blue-500 underline">
              {translate ? "Daha Fazla" : "See More"}
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.2,
                    ease: "easeOut",
                  }}
                  className="bg-white/20 rounded-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer backdrop-blur-sm "
                >
                  {i === 0 ? (
                    <>
                      <h2 className="text-xl md:text-2xl font-semibold mb-2">
                        {translate ? "QR Menü" : "QR Menu"}
                      </h2>
                      <p className="text-sm mb-4">
                        {translate
                          ? "React, Next.js ve Firebase kullanarak restoranlar için QR kod tabanlı bir menü sistemi geliştirdim."
                          : "I developed a QR code-based menu system for restaurants using React, Next.js, and Firebase."}
                      </p>
                      <div className="border-t border-gray-300 my-4"></div>
                      <div className="flex justify-center">
                        <Image
                          src="/qr.jpeg"
                          width={150}
                          height={150}
                          alt="qr"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                      <div className="border-t border-gray-300 my-4"></div>
                      <Link
                        href={"https://tatalqr.vercel.app/menu"}
                        target="_blank"
                        className="underline text-blue-500"
                      >
                        {translate ? "Canlı Demo" : "Live Demo"}
                      </Link>
                    </>
                  ) : (
                    <>
                      <h2 className="text-xl md:text-2xl font-semibold mb-2">
                        {translate
                          ? "Araç Kiralama Platformu"
                          : "Car Rental Platform"}
                      </h2>
                      <p className="text-sm mb-4">
                        {translate
                          ? "TypeScript ve Next.js kullanarak geliştirdiğim Full-Stack bir araç kiralama uygulaması. Stripe ile güvenli ödeme sistemi entegre ettim."
                          : "A full-stack car rental application I developed using TypeScript and Next.js. I integrated a secure payment system with Stripe."}
                      </p>
                      <div className="border-t border-gray-300 my-4"></div>
                      <video
                        src="/carrental.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto rounded-lg shadow-lg"
                      ></video>
                      <div className="border-t border-gray-300 my-4"></div>
                      <Link
                        href={
                          "https://github.com/ahmtbsboga/React-NextJS-Project"
                        }
                        target="_blank"
                        className="underline text-blue-500 flex items-center justify-center gap-1"
                      >
                        GitHub <CgArrowTopRight />
                      </Link>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Yetenekler Bölümü */}
          <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-10">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.6,
              }}
              className={`text-3xl md:text-5xl font-bold mb-8`}
            >
              {translate ? "Yetenekler" : "Skills"}
            </motion.h1>

            <ShadowTheme
              selectedShadow={selectedShadow}
              textColor={textColor}
              translate={translate}
              setSelectedShadow={setSelectedShadow}
            />

            <div className="flex flex-wrap justify-center gap-5 mt-5 md:gap-4 max-w-3xl">
              {myTechs.map(({ name, url, icon: Icon }, index) => (
                <motion.div
                  key={name}
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.1,
                  }}
                >
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 md:px-6 md:py-3 font-medium text-sm md:text-base transition hover:bg-black/30 duration-300 backdrop-blur-sm shadow-md ${selectedShadow}`}
                  >
                    <Icon className="text-lg md:text-xl" />
                    {name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* İletişim Bölümü */}
          <section className="flex flex-col justify-center items-center text-center px-4 py-20 bg-gray-100/30  rounded-lg">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {translate ? "İletişim" : "Contact"}
            </h1>

            <p className="max-w-xl mb-8 text-sm md:text-base">
              {translate
                ? "Bana ulaşmak için aşağıdaki iletişim bilgilerini kullanabilirsiniz."
                : "You can contact me using the information below."}
            </p>

            <div className="flex flex-col items-start border-t-4 py-4 space-y-4 w-full max-w-sm">
              <a
                href="mailto:ahmetcik6666@gmail.com?subject=İletişim%20Talebi&body=Merhaba%20Ahmet,"
                className="contact"
                style={{ color: textColor }}
              >
                <MdEmail size={20} />
                ahmetcik6666@gmail.com
              </a>

              <a
                href="https://wa.me/905465767509?text=Merhaba%2C%20portfolyo%20sitenizi%20inceledim%20ve%20detayl%C4%B1%20bilgi%20almak%20istiyorum.%20M%C3%BCsaitseniz%20g%C3%B6r%C3%BC%C5%9Febilir%20miyiz%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="contact"
                style={{ color: textColor }}
              >
                <FaWhatsapp size={20} />
                WhatsApp
              </a>

              <a
                href="tel:+905465767509"
                className="contact"
                style={{ color: textColor }}
              >
                <MdPhone size={20} />
                +90 546 576 7509
              </a>
            </div>
          </section>
        </div>
        <h1
          className="text-3xl font-bold mt-30 text-center mb-5"
          style={{ color: textColor }}
        >
          {translate
            ? "Kullanılan JavaScript kütüphaneleri ve teknolojiler."
            : "JavaScript libraries and technologies used."}
        </h1>
        <Libraries textColor={textColor} />
      </div>
    </div>
  );
};

export default Page;
