import React from "react";
import { motion } from "framer-motion";

import bgImg from "../../assets/about1.avif";
import personImg from "../../assets/about2.png";

const AboutHero = () => {
  return (
    <section className="bg-[#F7F8F8] py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-end"
          >
            {/* Background Image */}
            <motion.img
              src={bgImg}
              alt="Water Heater"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-[280px] sm:h-[400px] md:h-[500px] lg:h-[620px] object-cover rounded-xl shadow-xl"
            />

            {/* Floating Plumber */}
            <motion.img
              src={personImg}
              alt="Professional Plumber"
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="
                absolute
                bottom-0
                right-2
                sm:right-4
                md:right-6
                lg:-right-5
                w-36
                sm:w-48
                md:w-60
                lg:w-72
                xl:w-80
                drop-shadow-2xl
              "
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Small Heading */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="uppercase tracking-[3px] sm:tracking-[5px] text-xs sm:text-sm font-semibold text-gray-500"
            >
              Premium Quality
            </motion.p>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            >
              We solve plumbing
              <br className="hidden sm:block" />
              <span className="block sm:inline"> puzzles for you</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8 text-gray-500 leading-7 sm:leading-8 text-sm sm:text-base max-w-xl mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Our experienced plumbing team delivers reliable,
              affordable, and long-lasting solutions for homes and
              businesses.
            </motion.p>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-10 space-y-3 text-gray-700 text-sm sm:text-base font-medium"
            >
              <p>
                <span className="font-bold text-gray-900">
                  MON–FRI:
                </span>{" "}
                9 AM – 10 PM
              </p>

              <p>
                <span className="font-bold text-gray-900">
                  SATURDAY:
                </span>{" "}
                9 AM – 6 PM
              </p>
            </motion.div>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                mt-8
                sm:mt-10
                bg-primary
                hover:bg-primary/90
                text-white
                px-6
                sm:px-8
                lg:px-10
                py-3
                sm:py-4
                rounded-md
                font-semibold
                text-sm
                sm:text-base
                transition-all
                duration-300
                shadow-lg
                cursor-pointer
              "
            >
              Visit Our Store Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;