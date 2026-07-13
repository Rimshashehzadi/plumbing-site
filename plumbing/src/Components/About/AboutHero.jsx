import React from "react";
import { motion } from "framer-motion";

import bgImg from "../../assets/about1.avif";     // Water heater image
import personImg from "../../assets/about2.png"; // Plumber image

const AboutHero = () => {
  return (
    <section className="bg-[#F7F8F8] py-16 lg:py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGES */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            {/* Main Image */}

            <img
              src={bgImg}
              alt=""
              className="w-full max-w-130 h-75 sm:h-112.5 lg:h-150 object-cover"
            />

            {/* Floating Image */}

            <motion.img
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              src={personImg}
              alt=""
              className="
              w-52
              sm:w-72
              lg:w-80
              absolute
              -bottom-7.5
              right-0
              lg:-right-5
              shadow-2xl
              "
            />

          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[5px] text-gray-500 font-semibold">
              Premium Quality
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              We solve plumbing
              <br />
              puzzles for you
            </h2>

            <p className="mt-8 text-gray-500 leading-8 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>

            <div className="mt-10 space-y-2 text-gray-600 font-medium">

              <p>
                <span className="font-semibold">
                  MON-FRI:
                </span>{" "}
                9 AM – 10 PM
              </p>

              <p>
                <span className="font-semibold">
                  SATURDAY:
                </span>{" "}
                9 AM – 6 PM
              </p>

            </div>

            <button className="mt-10 bg-primary hover:bg-primary/90 text-white px-10 py-4 font-semibold transition duration-300 cursor-pointer">
              Visit Our Store Now
            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default AboutHero;