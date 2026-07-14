import React, { useEffect, useState } from "react";
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

const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const increment = Math.ceil(end / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const Stats = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="text-center"
            >
              <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h4>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-none">
                <Counter end={item.value} suffix={item.suffix} />
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;