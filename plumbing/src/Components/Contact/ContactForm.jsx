import React from 'react'
import { motion } from "framer-motion";

function ContactForm() {
  return (
    <div>
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="bg-white w-full lg:w-[540px] xl:w-[600px] p-8 lg:p-12 shadow-2xl"
        >
          <p className="uppercase tracking-[5px] text-gray-700 font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mt-4">
            Have questions?
            <br />
            Get in touch!
          </h2>

          <form className="mt-12">

            <div className="grid md:grid-cols-2 gap-8">

              <input
                type="text"
                placeholder="Name"
                className="border-b border-gray-300 outline-none py-3 focus:border-primary transition"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="border-b border-gray-300 outline-none py-3 focus:border-primary transition"
              />

              <input
                type="email"
                placeholder="Email"
                className="border-b border-gray-300 outline-none py-3 focus:border-primary transition"
              />

              <select
                className="border-b border-gray-300 outline-none py-3 bg-transparent focus:border-primary transition"
              >
                <option>Select Residence</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Office</option>
              </select>

            </div>

            <button
              className="mt-12 bg-primary cursor-pointer text-white px-10 py-4 font-semibold hover:bg-black transition duration-300"
            >
              Get in Touch
            </button>

          </form>
        </motion.div>
    </div>
  )
}

export default ContactForm