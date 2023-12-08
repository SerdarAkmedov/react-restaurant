import React, { useState } from "react";
import { reservationData } from "../data";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "../timepicker.css";
import { FaUsers, FaCalendar, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";

const Reservation = () => {
  const { title, subtitle, modelImg, btnText } = reservationData;
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState("10:00");
  return (
    <section className="min-h-[900px] relative top-[700px] lg:top-[400px] z-30 pb-20 lg:min-h-[500px] lg:py-[100px]">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          className="text-center"
        >
          {/* title */}
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1.6)}
            className="h2 capitalize"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.4, 1.6)}
            className="mb-8 text-dark"
          >
            {subtitle}
          </motion.p>
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1.6)}
            className="flex justify-center mb-8"
          >
            <img src={modelImg} alt="" />
          </motion.div>
        </motion.div>
        {/* form */}
        <motion.form
          variants={fadeIn("up", "tween", 0.7, 1.6)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="flex flex-col lg:flex-row gap-y-4 items-center justify-between mb-8">
            {/* datePicker */}
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaCalendar />
                <div>Choose Date</div>
              </div>
              <DatePicker
                className="input"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            {/* timePicker */}
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaClock />
                <div>Choose Time</div>
              </div>
              <TimePicker
                className="input"
                clearIcon={false}
                clockIcon={false}
                onChange={setValue}
                value={value}
              />
            </div>
            {/* person number */}
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaUsers />
                <div>How many people?</div>
              </div>
              <input type="text" className="input" placeholder="1" />
            </div>
          </div>
          {/* btn */}
          <div className="max-w-[316px] mx-auto flex justify-center mt-28">
            <button className="btn capitalize w-full lg:w-auto">
              {btnText}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Reservation;
