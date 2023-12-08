import React from "react";
import { socialData } from "../data";
const Socials = () => {
  return (
    <div className="flex gap-x-[10px] flex-row justify-center">
      {socialData.map((item, index) => {
        return (
          <a
            href={item.href}
            key={index}
            className="border rounded-full w-[35px] h-[35px] border-white/20 flex justify-center items-center text-sm hover:text-accent"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
