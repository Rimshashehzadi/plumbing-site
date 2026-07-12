import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

import heroLarge from "../../assets/heroLarge.avif";
import heroSmall from "../../assets/heroSmall.avif";

const QualityAssurance = () => {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <p className="uppercase tracking-[3px] sm:tracking-[5px] lg:tracking-[6px] text-primary font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
              QUALITY ASSURANCE
            </p>

            <h1 className="font-bold text-gray-900 leading-tight text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
              Plumbing
              <br />
              solutions on
              <br />
              demand
            </h1>

            <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
              We install the best plumbing for your home
            </h3>

            <p className="mt-5 sm:mt-7 text-gray-500 leading-7 sm:leading-8 text-base sm:text-lg max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Nisl tincidunt eget nullam non nisi.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-10 mt-10">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary px-8 sm:px-10 py-3 sm:py-4 text-white font-semibold shadow-xl hover:shadow-2xl transition cursor-pointer w-fit"
              >
                About Us
              </motion.button>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 sm:w-16 sm:h-16 border border-gray-300 flex items-center justify-center rounded-md">
                  <PhoneCall className="text-primary w-6 h-6" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Call Us
                  </p>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                    0 800 555 44 33
                  </h3>
                </div>

              </div>

            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="relative order-1 lg:order-2 h-[350px] sm:h-[450px] md:h-[550px] lg:h-[720px]">

            {/* Large Image */}
            <motion.img
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src={heroLarge}
              alt="Plumbing"
              className="absolute top-0 right-0 w-[80%] h-full object-cover rounded-lg shadow-xl"
            />

            {/* Small Image */}
            <motion.img
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              src={heroSmall}
              alt="Plumber"
              className="absolute bottom-0 left-0 w-[60%] h-[50%] sm:h-[55%] object-cover rounded-lg shadow-2xl border-4 border-white"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default QualityAssurance;