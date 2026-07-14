import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import bosh from "../../assets/bosh.png";
import cmg from "../../assets/cmg.webp";
import john from "../../assets/john.webp";

const awards = [
  {
    id: 1,
    image: bosh,
    year: "2018",
  },
  {
    id: 2,
    image: cmg,
    year: "2021",
  },
  {
    id: 3,
    image: john,
    year: "2024",
  },
];

const AboutAward = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-14">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[4px] text-gray-500 font-semibold text-sm">
              Huge Honor
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Our Awards
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-xl text-gray-500 leading-8"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>

          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 font-semibold"
          >
            View All
            <ArrowRight size={18} />
          </motion.button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {awards.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              transition={{ duration: .3 }}
              className="group relative h-60 border border-gray-200 overflow-hidden cursor-pointer"
            >

              {/* Logo */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-75">
                <img
                  src={item.image}
                  alt=""
                  className="w-44 object-contain"
                />
              </div>

              {/* Hover */}
              <div className="absolute inset-0 bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">

                <div className="text-center">

                  <p className="uppercase tracking-[3px] text-sm">
                    Project Year
                  </p>

                  <h2 className="text-6xl font-bold mt-2">
                    {item.year}
                  </h2>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutAward;