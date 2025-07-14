"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { VscProject } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [language, setLanguage] = useState(false);

  const navItems = [
    {
      href: "/",
      labelTR: "Anasayfa",
      labelEN: "Home",
      icon: <AiFillHome size={30} />,
    },
    {
      href: "/about",
      labelTR: "Hakkımda",
      labelEN: "About",
      icon: <FaUserAlt size={30} />,
    },
    {
      href: "/projects",
      labelTR: "Projeler",
      labelEN: "Projects",
      icon: <VscProject size={30} />,
    },
    {
      href: "/contact",
      labelTR: "İletişim",
      labelEN: "Contact",
      icon: <IoMdCall size={30} />,
    },
  ];

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
            {navItems.map(({ href, labelTR, labelEN, icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-4 px-2 py-1 rounded-lg transition ${
                    isActive
                      ? "ring-4 rounded-tr-3xl ring-black font-bold text-black"
                      : "hover:text-gray-700"
                  }  hover:scale-110 duration-400`}
                >
                  <span
                    className={`${isActive ? "text-black" : "text-gray-900"}`}
                  >
                    {icon}
                  </span>
                  {sideBarOpen && (
                    <p className="w-20 tracking-widest">
                      {!language ? labelEN : labelTR}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
