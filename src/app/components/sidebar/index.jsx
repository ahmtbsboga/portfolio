"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { VscProject } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

import Link from "next/link";

const Sidebar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [language, setLanguage] = useState(false);

  return (
    <div className="flex bg-gray-50 min-h-screen max-h-fit max-w-fit rounded-tr-4xl fixed z-50">
      <div className="flex flex-col items-center gap-20">
        <button
          onClick={() => setSideBarOpen(!sideBarOpen)}
          className="items-end p-4"
        >
          <CiMenuBurger color="black" size={40} />
        </button>
        {sideBarOpen && (
          <button
            onClick={() => setLanguage(!language)}
            className="w-10 h-10 rounded-full border border-black grid place-items-center hover:bg-black hover:text-white duration-700 text-black absolute right-15 top-18"
          >
            {language ? "TR" : "EN"}
          </button>
        )}
        <div className="flex flex-row-reverse items-center px-4">
          <div className="text-black flex flex-col items-end gap-10">
            <Link href="/" className="flex items-center gap-4">
              <AiFillHome size={30} color="black" />
              {sideBarOpen && (
                <p className="w-20 tracking-widest">
                  {!language ? "Home" : "Anasayfa"}
                </p>
              )}
            </Link>

            <Link href="/about" className="flex items-center gap-4">
              <FaUserAlt size={30} color="black" />
              {sideBarOpen && (
                <p className="w-20 tracking-widest">
                  {!language ? "About" : "Hakkımda"}
                </p>
              )}
            </Link>

            <Link href="/projects" className="flex items-center gap-4">
              <VscProject size={30} color="black" />
              {sideBarOpen && (
                <p className="w-20 tracking-widest">
                  {!language ? "Projects" : "Projeler"}
                </p>
              )}
            </Link>

            <Link href="/contact" className="flex items-center gap-4">
              <IoMdCall size={30} color="black" />
              {sideBarOpen && (
                <p className="w-20 tracking-widest">
                  {!language ? "Contact" : "İletişim"}
                </p>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
