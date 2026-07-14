import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import FaqServices from "../../Components/Home/FaqServices";
import FaqQuality from "../../Components/Home/FaqQuality";

const faqData = [
  {
    question: "Cost of a service visit?",
    answer:
      "Our service visit pricing depends on your location and the type of plumbing issue. Contact us for a free estimate.",
  },
  {
    question: "Is there a guarantee?",
    answer:
      "Yes! We provide a workmanship guarantee on all plumbing repairs and installations for your peace of mind.",
  },
  {
    question: "Materials used in repairs?",
    answer:
      "We only use high-quality, industry-approved plumbing materials to ensure long-lasting performance.",
  },
  {
    question: "Work warranties offered?",
    answer:
      "Yes. Most of our plumbing services include warranties. The duration depends on the service provided.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <div className="bg-[#f5f5f5] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
            >
              FAQs
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-primary text-2xl sm:text-3xl"
            >
              ↓
            </motion.div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Images */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700"
                alt="Plumbing Service"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-xl shadow-lg"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              />

              <motion.img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700"
                alt="Plumbing Work"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-xl shadow-lg sm:mt-8 lg:mt-10"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* FAQ */}
            <motion.div
              className="mt-4 lg:mt-0"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {faqData.map((item, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-300 py-4 sm:py-5 lg:py-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left gap-4"
                  >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                      {item.question}
                    </h3>

                    <motion.span
                      animate={{
                        rotate: activeIndex === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-primary text-lg sm:text-xl flex-shrink-0"
                    >
                      {activeIndex === index ? <FaMinus /> : <FaPlus />}
                    </motion.span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: activeIndex === index ? "auto" : 0,
                      opacity: activeIndex === index ? 1 : 0,
                      marginTop: activeIndex === index ? 16 : 0,
                    }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
                      {item.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Quality Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <FaqQuality />
        </div>
      </div>

      {/* Services Section */}
      <FaqServices />
    </section>
  );
};

export default FAQ;