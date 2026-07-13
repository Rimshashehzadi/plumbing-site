import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-white py-14 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className={`
                relative
                flex
                items-center
                justify-center
                h-44
                md:h-52
                lg:h-60

                ${index !== 3 ? "lg:border-r border-gray-300" : ""}
                ${index < 2 ? "border-b lg:border-b-0 border-gray-300" : ""}
              `}
            >
              {/* Background Number */}
              <h1 className="absolute inset-0 flex items-center justify-center text-[85px] sm:text-[120px] md:text-[150px] lg:text-[170px] xl:text-[190px] font-extrabold text-gray-100 leading-none select-none">
                {inView && (
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2.5}
                  />
                )}
              </h1>

              {/* Foreground Title */}
              <h3 className="relative z-10 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                {item.title}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StatsSection;