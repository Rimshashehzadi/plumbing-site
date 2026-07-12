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

const Services = () => {
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

  return (
    <section className="bg-gray-50 py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-primary font-semibold text-sm sm:text-base">
            OUR SERVICES
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Professional Plumbing Services
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-gray-500 text-base sm:text-lg leading-7 sm:leading-8">
            We provide reliable plumbing services with experienced
            professionals, modern equipment, and guaranteed customer
            satisfaction.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-2xl shadow-primary bg-white p-6 sm:p-8 hover:shadow-primary shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-primary/10 group-hover:bg-primary transition duration-300">
                  <Icon
                    size={30}
                    className="text-primary group-hover:text-white transition duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-500 leading-7 text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Button */}
                <button className="mt-8 flex items-center gap-2 font-semibold text-primary transition-all duration-300 group-hover:gap-4">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Services;