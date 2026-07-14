import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FaqQuality = () => {
  return (
    <section className="bg-[#f5f5f2] py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="uppercase tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-xs md:text-sm font-semibold text-gray-600 mb-4 sm:mb-5"
          >
            Quality Plumbing At Competitive Prices
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl text-[#132238] font-bold leading-tight
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl"
          >
            Our services will make your home
            <br className="hidden sm:block" />
            <span className="block sm:inline">
              {" "}comfortable and cozy
            </span>
          </motion.h2>

          {/* Read More Button */}
          <motion.button
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group mt-8 sm:mt-10 flex items-center gap-3 text-[#132238] font-semibold text-sm sm:text-base"
          >
            <span className="relative">
              Read More

              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#132238] transition-all duration-300 group-hover:w-0"></span>
            </span>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FaqQuality;