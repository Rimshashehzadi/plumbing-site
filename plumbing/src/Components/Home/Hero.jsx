import React from "react";
import { motion } from "framer-motion";

import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="order-1 h-75 sm:h-112.5 md:h-137.5 lg:h-200"
        >
          <img
            src={heroImg}
            alt="Plumber"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="order-2 px-5 sm:px-8 md:px-10 lg:px-16 py-10 sm:py-14 lg:py-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900"
          >
            We solve,
            <br />
            you evolve —
            <br />
            plumbing services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 text-gray-500 text-base sm:text-lg leading-7 sm:leading-9 max-w-xl"
          >
            At vero eos et accusamus et iusto odio dignissimos ducimus
            qui blanditiis praesentium voluptatum deleniti atque
            corrupti.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="mt-8 sm:mt-10 bg-primary hover:bg-primary/90 text-white px-7 sm:px-10 py-3 sm:py-4 font-semibold transition duration-300 cursor-pointer"
          >
            More Information
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;