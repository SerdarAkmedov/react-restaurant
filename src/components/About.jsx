import React from "react";
import { aboutData } from "../data";
import { motion } from "framer-motion";
import { plateVariants, fadeIn } from "../variants";
const About = () => {
  const { title, pretitle, subtitle, btnText, image } = aboutData;
  return (
    <section className="min-h-[620px]">
      <div className="container mx-auto min-h-[620px]">
        <motion.div
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="min-h-[620px] flex flex-col lg:flex-row items-center"
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1.8)}
            className="flex-1 text-center lg:text-left"
          >
            <div className="pretitle">{pretitle}</div>
            <h2 className="h2 capitalize">{title}</h2>
            <p className="mb-8 max-w-[560px]">{subtitle}</p>
            <button className="btn capitalize mx-auto lg:mx-0">
              {btnText}
            </button>
          </motion.div>
          <motion.div
            className="-mr-[186px] relative z-10"
            variants={plateVariants}
          >
            <img src={image} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
