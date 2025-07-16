import { infoItems } from "@/app/constants/infoItems";
import { progressData } from "@/app/constants/progressData";
import React from "react";

const AboutTable = ({ textColor, translate, bgTheme }) => {
  const skills = progressData;

  return (
    <div
      className={`mt-10 grid md:grid-cols-2 gap-8 px-4 py-6 rounded-2xl shadow-xl backdrop-blur-lg ${
        bgTheme === "dark" ? "bg-white/10" : "bg-black/10"
      }`}
      style={{ color: textColor }}
    >
      {/* SOL TARAF: Bilgiler */}
      <div className="grid gap-5">
        {infoItems.map(({ labelTR, labelEN, value }, i) => (
          <div key={i} className="flex items-center gap-3 max-sm:border-b">
            <h1 className="font-extrabold max-sm:text-xs">
              {!translate ? labelEN : labelTR}
            </h1>
            <p className="max-sm:text-xs">{value}</p>
          </div>
        ))}

        <div className="flex items-center gap-3 max-sm:border-b">
          <h1 className="font-extrabold max-sm:text-xs">
            {!translate ? "CV :" : "Özgeçmiş :"}
          </h1>
          <a
            href="/ahmetbasbogacv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold max-sm:text-xs"
            style={{ color: textColor }}
          >
            {!translate ? "Show" : "Görüntüle"}
          </a>
        </div>
      </div>

      {/* SAĞ TARAF: Progress Bars */}
      <div className="space-y-5 w-full max-w-md mx-auto">
        {skills.map((skill, index) => (
          <div key={index}>
            <div
              className="flex justify-between mb-1"
              style={{ color: textColor }}
            >
              <span className="text-base font-extrabold ">{skill.name}</span>
              <span className="text-sm font-extrabold ">{skill.percent}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3">
              <div
                className="h-3 rounded-full transition-all duration-700"
                style={{
                  width: `${skill.percent}%`,
                  backgroundColor: textColor,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTable;
