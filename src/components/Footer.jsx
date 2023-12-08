import React from "react";
import Newsletter from "./Newsletter";
import Copyright from "./Copyright";
import Socials from "./Socials";
import { footerData } from "../data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";

const Footer = () => {
  const { contact, social, hours } = footerData;
  return (
    <>
      <footer className="relative top-[600px] z-20 min-h-[1100px] bg-dark lg:bg-transparent lg:min-h-[920px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20">
        <div className="container mx-auto h-full">
          {/* newsletter and info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView={"show"}
            className="h-full flex flex-col gap-y-12"
          >
            {/* newsletter */}
            <motion.div variants={fadeIn("up", "tween", 0.4, 1.6)}>
              <Newsletter />
            </motion.div>
            {/* info */}
            <motion.div
              variants={fadeIn("up", "tween", 0.6, 1.6)}
              className="flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12"
            >
              {/* contact */}
              <div className="flex-1 lg:max-w-[170px] ">
                <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                  {contact.title}
                </div>
                <div className="capitalize">{contact.address}</div>
                <div className="capitalize">{contact.phone}</div>
              </div>
              {/* program */}
              <div className="flex-1">
                <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                  {hours.title}
                </div>
                <div className="flex gap-x-[46px]">
                  {hours.program.map((item, index) => {
                    return (
                      <div key={index}>
                        <div>
                          <div>{item.days}</div>
                          <div className="text-[20px] text-accent">
                            {item.hours}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* social */}
              <div className="flex-1 lg:max-w-[280px] text-center">
                <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                  {social.title}
                </div>
                  <Socials className="text-center"/>
              </div>
            </motion.div>
            <Copyright />
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
