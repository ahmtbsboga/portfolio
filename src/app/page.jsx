"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { FaNodeJs } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiFramer,
  SiRedux,
  SiGithub,
  SiVite,
} from "react-icons/si";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosColorFilter, IoMdClose } from "react-icons/io";

const Page = () => {
  const [bgChange, setBgChange] = useState("/bgbeyaz.jpg");
  const [translate, setTranslate] = useState(false);
  const [bgTheme, setBgTheme] = useState("dark");
  const [themeOpen, setThemeOpen] = useState(false);
  const [textColor, setTextColor] = useState("#000000");

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

  const techs = [
    { name: "React", url: "https://reactjs.org/", icon: SiReact },
    { name: "React Native", url: "https://reactnative.dev/", icon: SiReact },
    { name: "Next.js", url: "https://nextjs.org/", icon: SiNextdotjs },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
      icon: SiTypescript,
    },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: SiJavascript,
    },
    { name: "Node.js", url: "https://nodejs.org/", icon: FaNodeJs },
    { name: "Express.js", url: "https://expressjs.com/", icon: SiExpress },
    { name: "MongoDB", url: "https://www.mongodb.com/", icon: SiMongodb },
    { name: "Firebase", url: "https://firebase.google.com/", icon: SiFirebase },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      icon: SiTailwindcss,
    },
    { name: "Redux", url: "https://redux.js.org/", icon: SiRedux },
    {
      name: "Framer Motion",
      url: "https://www.framer.com/motion/",
      icon: SiFramer,
    },
    { name: "Vite", url: "https://vitejs.dev/", icon: SiVite },
    {
      name: "HTML5",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: SiHtml5,
    },
    {
      name: "CSS3",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: SiCss3,
    },
    { name: "GitHub", url: "https://github.com/", icon: SiGithub },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden text-black">
      <div>
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
                  <span
                    className="text-white text-xs"
                    onClick={() => setBgChange("/bgbeyaz.jpg")}
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
                  </span>
                </button>
                <button
                  onClick={() => setBgTheme("light")}
                  className={`p-2 rounded-lg ${
                    bgTheme === "light" ? "ring-2 ring-blue-500" : ""
                  }`}
                  style={{ backgroundColor: "#f8fafc" }}
                >
                  <span
                    className="text-black text-xs"
                    onClick={() => setBgChange("/bgkrem.jpeg")}
                  >
                    <Image
                      width={50}
                      height={50}
                      src="/bgkrem.jpeg"
                      alt="bg"
                      quality={100}
                      className="w-10 rounded-full h-10"
                      onClick={() => setBgChange("/bgkrem.jpeg")}
                    />
                  </span>
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

      <div className="fixed top-0 left-0 w-full h-screen z-10">
        <Image
          src={bgChange}
          alt="background"
          fill
          quality={100}
          className="object-cover opacity-100 select-none"
        />
      </div>

      {/* Scroll Edilebilir İçerik */}
      <div className="relative z-10 w-full">
        <div className="max-w-5xl w-full mx-auto px-4">
          <div className="backdrop-blur-xs bg-white/10 rounded-xl flex flex-col gap-0 px-2 py-20 space-y-4">
            <section className="h-screen flex flex-col justify-center items-center text-center px-4">
              <div className="flex flex-row-reverse items-center gap-2">
                <div className="flex flex-col items-start">
                  <h1
                    className="text-6xl font-bold  mb-6"
                    style={{ color: textColor }}
                  >
                    {translate ? "Hakkımda" : "About"}
                  </h1>
                  <Image
                    src={"/me1.jpeg"}
                    width={150}
                    height={100}
                    quality={100}
                    alt="profile"
                    className="rounded-lg mt-4"
                  />
                </div>
                <div className="border-2 border-red-800 h-full"></div>
                <p
                  className="text-black max-w-3xl leading-relaxed"
                  style={{ color: textColor }}
                >
                  {translate
                    ? "Merhaba! Ben Ahmet, yazılım geliştiricisiyim. React ve React Native ile modern, kullanıcı dostu uygulamalar yapmayı seviyorum. Yeni teknolojiler öğrenmek ve projeler üretmek benim tutkum."
                    : "Hello! I'm Ahmet, a software developer. I enjoy building modern, user-friendly applications with React and React Native. Learning new technologies and creating projects is my passion."}
                </p>
              </div>
            </section>

            <section className="h-screen flex flex-col justify-center items-center text-center px-4">
              <h1
                className="text-5xl font-bold text-black mb-6"
                style={{ color: textColor }}
              >
                {translate ? "Projeler" : "Projects"}
              </h1>
              <Link href={"/projects"} className="mb-4 text-blue-500 underline">
                {translate ? "Daha Fazla" : "See More"}
              </Link>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
                <div className="bg-white/20 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <h2
                    className="text-2xl font-semibold mb-2 text-black"
                    style={{ color: textColor }}
                  >
                    {translate ? "QR Menü" : "QR Menu"}
                  </h2>

                  <p
                    className="text-black text-sm"
                    style={{ color: textColor }}
                  >
                    {translate
                      ? "React, Next.js ve Firebase kullanarak restoranlar için QR kod tabanlı bir menü sistemi geliştirdim."
                      : "I developed a QR code-based menu system for restaurants using React, Next.js, and Firebase."}
                  </p>

                  <div className="border mt-2 mb-2"></div>

                  <div className="flex justify-center">
                    <Image
                      src="/qr.jpeg"
                      width={100}
                      height={100}
                      alt="qr"
                      className="rounded-lg shadow-lg"
                    />
                  </div>

                  <div className="border mt-2 mb-2"></div>

                  <Link
                    href={"https://tatalqr.vercel.app/menu"}
                    target="_blank"
                    className="underline text-blue-500"
                  >
                    {translate ? "QR Menü" : "QR Menu"}
                  </Link>
                </div>
                <div className="bg-white/20 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <h2
                    className="text-2xl font-semibold mb-2 text-black"
                    style={{ color: textColor }}
                  >
                    {translate
                      ? "Araç Kiralama Platformu"
                      : "Car Rental Platform"}
                  </h2>

                  <p
                    className="text-black text-sm"
                    style={{ color: textColor }}
                  >
                    {translate
                      ? "TypeScript ve Next.js kullanarak geliştirdiğim Full-Stack bir araç kiralama uygulaması. Stripe ile güvenli ödeme sistemi entegre ettim. Projede hem frontend hem backend taraflarını yönettim."
                      : "A full-stack car rental application I developed using TypeScript and Next.js. I integrated a secure payment system with Stripe and handled both frontend and backend parts of the project."}
                  </p>

                  <div className="border mt-2 mb-2"></div>

                  <video
                    src="/carrental.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-lg shadow-lg"
                  ></video>
                  <div className="border mt-2 mb-2"></div>
                  <Link
                    href={"https://github.com/ahmtbsboga/React-NextJS-Project"}
                    target="_blank"
                    className="underline text-blue-500 flex items-center justify-center"
                  >
                    Github <CgArrowTopRight />
                  </Link>
                </div>
              </div>
            </section>

            <section className="h-screen flex flex-col justify-center items-center text-center px-4">
              <h1
                className="text-5xl font-bold text-black mb-6 mt-20"
                style={{ color: textColor }}
              >
                {translate ? "Yetenekler" : "Skills"}
              </h1>
              <ul className="flex flex-wrap flex-row-reverse gap-4">
                {techs.map(({ name, url, icon: Icon }) => (
                  <li key={name}>
                    <Link
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/20 rounded-full px-6 py-3  font-semibold  transition hover:bg-black/50 duration-700"
                      style={{ color: textColor }}
                    >
                      <Icon className="text-xl" />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="h-screen flex flex-col justify-center items-center text-center px-4">
              <h1
                className="text-5xl font-bold text-black mb-6"
                style={{ color: textColor }}
              >
                {translate ? "İletişim" : "Contact"}
              </h1>
              <p
                className="text-black max-w-xl mb-4"
                style={{ color: textColor }}
              >
                {translate
                  ? "Bana ulaşmak için aşağıdaki e-posta adresimi ve iletişim numaramı kullanabilirsiniz."
                  : "You can contact me via the email address and phone number below."}
              </p>

              <div className="flex flex-col space-y-3 max-w-sm mx-auto">
                <a
                  href="mailto:ahmetcik6666@gmail.com?subject=İletişim%20Talebi&body=Merhaba%20Ahmet,"
                  className="flex items-center gap-2 text-cyan-400 underline text-lg hover:text-cyan-600 transition"
                >
                  <MdEmail size={24} />
                  ahmetcik6666@gmail.com
                </a>

                <a
                  href="https://wa.me/905465767509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 underline hover:text-cyan-600 transition"
                >
                  <FaWhatsapp size={24} />
                  Whatsapp
                </a>

                <a
                  href="tel:+905465767509"
                  className="flex items-center gap-2 text-cyan-400 underline hover:text-cyan-600 transition"
                >
                  <MdPhone size={24} />
                  +90 546 576 7509
                </a>
              </div>
            </section>
          </div>
        </div>
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
    </div>
  );
};

export default Page;
