import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import LogoWhite from "../assets/img/header/logo-white.png";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../variants";
import Socials from "./Socials";

const headerVariants = {
  hidden: {
    padding: "84px 0 84px 0",
    background: "none",
  },
  show: {
    padding: "14px 0 14px 0",
    background: "rgba(0,0,0,0.92)",
    transition: {
      type: "spring",
    },
  },
};

export const navbarVariants = {
  hidden: {
    clipPath: "circle(5.8% at 50% 0)",
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    clipPath: "circle(130% at 50% 0)",
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  const [isActive, setIsActive] = useState(false);
  const [navbar, setNavbar] = useState(false);

  return (
    <motion.div
      variants={headerVariants}
      initial={"hidden"}
      animate={isActive ? "show" : ""}
      className="bg-pink-200/20 fixed w-full max-w-[1800px] z-50 py-4"
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        animate={"show"}
        className="container mx-auto"
      >
        <div className="flex justify-between items-center px-4 lg:px-0 relative text-white">
          <motion.div
            variants={fadeIn("down", "tween", 1.2, 1.4)}
            className={`
            flex flex-col ${
              navbar ? "gap-y-0" : "gap-y-2"
            } items-center justify-center w-12 h-12 p-3 cursor-pointer border-2 order-2 lg:order-none rounded-full`}
            onClick={() => setNavbar(!navbar)}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: navbar ? -45 : 0, translateY: navbar ? 2 : 0 }}
              className="w-full h-[2px] bg-white"
            ></motion.div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: navbar ? 45 : 0 }}
              className="w-full h-[2px] bg-white"
            ></motion.div>
          </motion.div>
          <motion.div
            className="order-1 lg:order-none lg:ml-[11rem]"
            variants={fadeIn("down", "tween", 1.2, 1.4)}
          >
            <a href="#">
              <img
                src={LogoWhite}
                className={`${
                  isActive ? "w-[90px] h-[90px]" : " w-[107px] h-[107]"
                }`}
                alt="logo"
              />
            </a>
          </motion.div>
          <motion.div
            className="hidden lg:flex"
            variants={fadeIn("down", "tween", 1.4, 1.4)}
          >
            <Socials />
          </motion.div>
          <motion.div
            variants={navbarVariants}
            initial={"hidden"}
            animate={navbar ? "show" : ""}
            className="absolute bg-accent w-[310px] h-[50vh] right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl"
          >
            <Nav />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
