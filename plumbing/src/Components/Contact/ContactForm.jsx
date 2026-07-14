import React from "react";
import { motion } from "framer-motion";

function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white w-full max-w-xl xl:max-w-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl rounded-lg"
    >
      <p className="uppercase tracking-[3px] sm:tracking-[5px] text-gray-700 font-semibold text-sm">
        Contact Us
      </p>

      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
        Have questions?
        <br />
        Get in touch!
      </h2>

      <form className="mt-8 sm:mt-10 lg:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border-b border-gray-300 outline-none py-3 focus:border-primary transition"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-full border-b border-gray-300 outline-none py-3 focus:border-primary transition"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-b border-gray-300 outline-none py-3 focus:border-primary transition"
          />

          <select
            className="w-full border-b border-gray-300 outline-none py-3 bg-transparent focus:border-primary transition"
          >
            <option>Select Residence</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Office</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-8 sm:mt-10 lg:mt-12 w-full sm:w-auto bg-primary hover:bg-black text-white px-8 py-4 font-semibold transition duration-300"
        >
          Get in Touch
        </button>
      </form>
    </motion.div>
  );
}

export default ContactForm;