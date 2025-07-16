"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { VscProject } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";

const Sidebar = () => {
  const pathname = usePathname();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [language, setLanguage] = useState(false);

  const navItems = [
    {
      href: "/",
      labelTR: "Anasayfa",
      labelEN: "Home",
      icon: <AiFillHome size={20} />,
    },
    {
      href: "/about",
      labelTR: "Hakkımda",
      labelEN: "About",
      icon: <FaUserAlt size={20} />,
    },
    {
      href: "/projects",
      labelTR: "Projeler",
      labelEN: "Projects",
      icon: <VscProject size={20} />,
    },
    {
      href: "/contact",
      labelTR: "İletişim",
      labelEN: "Contact",
      icon: <IoMdCall size={20} />,
    },
  ];

  return (
    <div
      className={`flex min-h-screen rounded-tr-4xl rounded-br-4xl fixed z-50 ${
        sideBarOpen ? "bg-gray-100/60 min-h-fit " : ""
      }`}
    >
      <div className="flex flex-col items-center gap-20">
        <button
          onClick={() => setSideBarOpen(!sideBarOpen)}
          className="items-end p-4 bg-[#C1C1C1] rounded-full absolute top-5 left-5 hover:bg-gray-100/90 duration-400"
        >
          {!sideBarOpen ? (
            <IoMenuOutline color="black" size={15} />
          ) : (
            <IoClose color="black" size={15} />
          )}
        </button>

        {sideBarOpen && (
          <div className="flex flex-row-reverse items-center px-1 my-40">
            <div className="text-black flex flex-col items-end gap-10">
              {navItems.map(({ href, labelTR, labelEN, icon }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex flex-col items-center gap-4 px-1 py-1 rounded-lg transition ${
                      isActive
                        ? "ring ring-black font-bold text-black bg-black"
                        : "hover:text-gray-700"
                    }  hover:scale-110 duration-400`}
                  >
                    <span
                      className={`${
                        isActive ? "text-white" : "text-gray-900"
                      } p-0`}
                    >
                      {icon}
                    </span>
                    {sideBarOpen && (
                      <p
                        className={`w-20 text-xs text-center tracking-widest ${
                          isActive ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {!language ? labelEN : labelTR}
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        {sideBarOpen && (
          <button
            onClick={() => setLanguage(!language)}
            className="w-10 h-10 rounded-full border border-black grid place-items-center hover:bg-black hover:text-white duration-700 text-black absolute top-20 left-6"
          >
            {language ? "TR" : "EN"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
