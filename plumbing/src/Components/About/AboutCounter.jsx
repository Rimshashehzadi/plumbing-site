import React from "react";
// import CountUp from "react-countup";
import * as CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  {
    title: "Offices",
    value: 90,
    suffix: "+",
  },
  {
    title: "Happy Clients",
    value: 2548,
    suffix: "",
  },
  {
    title: "Years",
    value: 25,
    suffix: "+",
  },
  {
    title: "Projects",
    value: 256,
    suffix: "",
  },
];

const AboutCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h4>

              <h2 className="mt-3 text-5xl md:text-6xl font-bold text-gray-900">
                {inView && (
                  <CountUp
                    end={item.value}
                    duration={2.5}
                  />
                )}
                {item.suffix && (
                  <span className="text-primary">
                    {item.suffix}
                  </span>
                )}
              </h2>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutCounter;