import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/hero.png";

const Hero = () => {
  const stats = [
    {
      number: "20+",
      title: "Parts installed per day",
    },
    {
      number: "100+",
      title: "Happy customers weekly",
    },
    {
      number: "10+",
      title: "New clients daily",
    },
  ];

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1"
          >
            <img
              src={heroImg}
              alt="Plumber"
              className="w-full h-[320px] sm:h-[450px] md:h-[550px] lg:h-[760px] object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2 px-5 sm:px-8 md:px-12 lg:px-16 py-10 lg:py-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold leading-tight text-gray-900 text-center lg:text-left">
              We solve, you evolve —
              <br />
              plumbing services
            </h1>

            <p className="mt-6 text-gray-500 text-base sm:text-lg leading-7 max-w-xl text-center lg:text-left">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-8 py-4 transition duration-300">
                More Information
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
                {stats.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                      {item.number}
                    </h2>

                    <p className="mt-2 text-gray-800 font-semibold text-base leading-6">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;