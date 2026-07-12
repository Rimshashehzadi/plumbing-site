import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  {
    number: 98,
    title: "Projects",
  },
  {
    number: 65,
    title: "People",
  },
  {
    number: 10,
    title: "Years",
  },
  {
    number: 15,
    title: "Offices",
  },
];

const StateSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4">

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
              className={`
                relative flex items-center justify-center
                h-36 sm:h-44 md:h-52 lg:h-60
                overflow-hidden

                ${
                  index !== stats.length - 1
                    ? "lg:border-r border-gray-300"
                    : ""
                }

                ${
                  index < 2
                    ? "border-b lg:border-b-0 border-gray-300"
                    : ""
                }
              `}
            >

              {/* Background Number */}
              <h1
                className="
                  absolute
                  font-extrabold
                  text-gray-100
                  leading-none
                  select-none
                  z-0
                  text-[70px]
                  sm:text-[100px]
                  md:text-[130px]
                  lg:text-[170px]
                "
              >
                {inView && (
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2.5}
                  />
                )}
              </h1>

              {/* Foreground Title */}
              <h3
                className="
                  relative
                  z-10
                  font-bold
                  text-gray-900
                  text-lg
                  sm:text-2xl
                  md:text-3xl
                  text-center
                "
              >
                {item.title}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StateSection;