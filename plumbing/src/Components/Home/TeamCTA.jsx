import { motion } from "framer-motion";

export default function TeamCTA() {
  return (
    <section className="bg-[#005487] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Schedule an appointment to meet or email us
              your questions
            </h2>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition duration-300">
              Request a Quote
            </button>

            <button className="border border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition duration-300">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}