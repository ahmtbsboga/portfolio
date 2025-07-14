import React from "react";

const AboutTable = ({ textColor, translate, bgTheme }) => {
  const skills = [
    { name: "JavaScript", percent: 75 },
    { name: "TypeScript", percent: 70 },
    { name: "React", percent: 90 },
    { name: "React Native", percent: 60 },
    { name: "Node.js", percent: 56 },
    { name: "Express.js", percent: 80 },
    { name: "Next.js", percent: 95 },
    { name: "Tailwind CSS", percent: 100 },
  ];

  return (
    <div
      className={`mt-10 grid md:grid-cols-2 gap-8 px-4 py-6 rounded-2xl shadow-xl backdrop-blur-lg ${
        bgTheme === "dark" ? "bg-white/10" : "bg-black/10"
      }`}
      style={{ color: textColor }}
    >
      {/* SOL TARAF: Bilgiler */}
      <div className="grid gap-5">
        <div className="flex items-center gap-3 max-sm:border-b">
          <h1 className="font-extrabold max-sm:text-xs">
            {!translate ? "Birthday :" : "Doğum Günü :"}
          </h1>
          <p className="max-sm:text-xs">
            1 {!translate ? "June" : "Haziran"} 2003
          </p>
        </div>

        <div className="flex items-center gap-3 max-sm:border-b">
          <h1 className="font-extrabold max-sm:text-xs">
            {!translate ? "Age :" : "Yaş :"}
          </h1>
          <p className="max-sm:text-xs">22</p>
        </div>

        <div className="flex items-center gap-3 max-sm:border-b">
          <h1 className="font-extrabold max-sm:text-xs">
            {!translate ? "Phone :" : "Telefon :"}
          </h1>
          <p className="max-sm:text-xs">0546 576 7509</p>
        </div>

        <div className="flex items-center gap-3 max-sm:border-b">
          <h1 className="font-extrabold max-sm:text-xs">
            {!translate ? "City :" : "Şehir :"}
          </h1>
          <p className="max-sm:text-xs">Yozgat</p>
        </div>

        <div className="flex items-center gap-3 max-sm:border-b">
          <h1 className="font-extrabold max-sm:text-xs">
            {!translate ? "Experience :" : "Deneyim :"}
          </h1>
          <p className="max-sm:text-xs">1+ {!translate ? "Year" : "Yıl"}</p>
        </div>

        <div className="flex items-center gap-3 max-sm:border-b">
          <h1 className="font-extrabold max-sm:text-xs max-sm:whitespace-nowrap">
            {!translate ? "Tech Stack:" : "Teknoloji Yığını:"}
          </h1>
          <p className="max-sm:text-xs">
            React, React Native, Node.js, Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-3 max-sm:border-b">
          <h1 className="font-extrabold max-sm:text-xs">
            {!translate ? "Languages:" : "Diller:"}
          </h1>
          <p className="max-sm:text-xs max-sm:whitespace-nowrap">
            JavaScript, TypeScript
          </p>
        </div>

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
