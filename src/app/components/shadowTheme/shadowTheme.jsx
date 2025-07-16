"use client";
import { shadowColors } from "@/app/constants/shadowColors";
import { useState } from "react";
import { IoIosArrowUp as Up, IoIosArrowDown as Down } from "react-icons/io";

const ShadowTheme = ({ selectedShadow, setSelectedShadow }) => {
  const [shown, setShown] = useState(false);
  const colors = shadowColors;

  return (
    <div>
      <button onClick={() => setShown(!shown)}>
        {!shown ? (
          <Down
            size={30}
            className="border rounded-full px-2 py-1 hover:bg-black hover:text-white hover:border-black duration-400 hover:scale-120"
          />
        ) : (
          <Up
            size={30}
            className="border rounded-full px-2 py-1 hover:bg-black hover:text-white hover:border-black duration-400 hover:scale-120"
          />
        )}
      </button>
      {shown && (
        <div className="mt-4 px-4 py-4 w-fit">
          <div className="grid grid-cols-16 max-md:grid-cols-8 max-sm:grid-cols-6 gap-2">
            {colors.map(({ name, hex }, i) => (
              <button
                key={i}
                onClick={() => setSelectedShadow(name)}
                className={`w-8 h-8 rounded-full ${
                  selectedShadow === name
                    ? "ring-2 ring-offset-2 ring-blue-500"
                    : ""
                }`}
                style={{ backgroundColor: hex }}
                title={name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShadowTheme;
