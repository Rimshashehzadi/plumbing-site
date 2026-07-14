import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Droplets,
  Flame,
  ShowerHead,
  Hammer,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "General Plumbing",
    description:
      "Professional plumbing installation and maintenance for homes and businesses.",
    icon: Wrench,
  },
  {
    id: 2,
    title: "Leak Detection",
    description:
      "Quick and accurate leak detection using advanced equipment.",
    icon: Droplets,
  },
  {
    id: 3,
    title: "Water Heater",
    description:
      "Installation and repair of all types of water heating systems.",
    icon: Flame,
  },
  {
    id: 4,
    title: "Bathroom Plumbing",
    description:
      "Complete bathroom plumbing installation and remodeling.",
    icon: ShowerHead,
  },
  {
    id: 5,
    title: "Emergency Repair",
    description:
      "24/7 emergency plumbing service whenever you need us.",
    icon: Hammer,
  },
  {
    id: 6,
    title: "Pipe Installation",
    description:
      "High-quality pipe installation and replacement services.",
    icon: Wrench,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const Services = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-primary font-semibold text-xs sm:text-sm">
            OUR SERVICES
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Professional Plumbing Services
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-500 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 px-2">
            We provide reliable plumbing services with experienced
            professionals, modern equipment, and guaranteed customer
            satisfaction.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary"
                >
                  <Icon
                    size={30}
                    className="text-primary group-hover:text-white transition-all duration-300"
                  />
                </motion.div>

                {/* Title */}
                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-500 text-sm sm:text-base leading-7">
                  {service.description}
                </p>

                {/* Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 flex items-center gap-2 text-primary font-semibold group/button"
                >
                  Read More

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;