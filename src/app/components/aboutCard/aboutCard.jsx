const AboutCard = ({ text, textColor, bgTheme }) => {
  return (
    <div
      className={`p-6 rounded-xl shadow-lg backdrop-blur-md h-full transition-all duration-300 ${
        bgTheme === "dark"
          ? "bg-white/10 border-white/20"
          : "bg-black/10 border-black/20"
      } border`}
      style={{ color: textColor }}
    >
      <p className="leading-relaxed text-xs">{text}</p>
    </div>
  );
};

export default AboutCard;
