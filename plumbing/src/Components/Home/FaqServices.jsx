import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Sewer Pipes",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Plumbing Tools",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Water Filters",
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function FaqServices() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small Heading */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-xs md:text-sm font-semibold text-gray-500 text-center lg:text-left"
        >
          Our Services
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-3 text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
        >
          Browse our catalog
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl shadow-lg">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between border-b border-gray-200 py-5">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <motion.button
                  whileHover={{
                    scale: 1.1,
                    rotate: -10,
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-300 flex items-center justify-center bg-white text-gray-900 group-hover:bg-[#13727b] group-hover:text-white group-hover:border-[#13727b]"
                >
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}