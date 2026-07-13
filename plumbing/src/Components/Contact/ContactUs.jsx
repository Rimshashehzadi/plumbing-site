import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  CircleHelp,
  Pencil,
  MapPin,
} from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-[#F7F8F8]">

      {/* Page Header */}
      <div className="py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-gray-900"
        >
          Contact
        </motion.h1>

        <div className="mt-5 text-primary text-3xl">
          ↓
        </div>
      </div>

      {/* Contact Area */}

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[5px] text-gray-500 font-semibold">
              Contact Us
            </p>

            <h2 className="text-5xl font-bold leading-tight mt-5">
              Have Questions?
              <br />
              Get in touch!
            </h2>

            <p className="text-gray-500 mt-8 leading-8">
              We are always available to answer your questions and
              provide reliable plumbing solutions for your home
              and business.
            </p>

            <div className="space-y-8 mt-12">

              <div className="flex items-center gap-5">
                <MapPin className="text-primary" />
                <p className="text-gray-600">
                  785 15th Street, Office 478 Boston
                </p>
              </div>

              <div className="flex items-center gap-5">
                <Phone className="text-primary" />
                <h3 className="text-2xl font-bold">
                  +1 800 555 25 69
                </h3>
              </div>

              <div className="flex items-center gap-5">
                <Mail className="text-primary" />
                <p className="text-gray-600">
                  info@email.com
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >

            <div className="grid md:grid-cols-2 gap-8">

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-0 top-1 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-b border-gray-400 pl-8 pb-3 outline-none bg-transparent"
                />
              </div>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-0 top-1 text-gray-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-b border-gray-400 pl-8 pb-3 outline-none bg-transparent"
                />
              </div>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-0 top-1 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border-b border-gray-400 pl-8 pb-3 outline-none bg-transparent"
                />
              </div>

              <div className="relative">
                <CircleHelp
                  size={18}
                  className="absolute left-0 top-1 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border-b border-gray-400 pl-8 pb-3 outline-none bg-transparent"
                />
              </div>

            </div>

            <div className="relative">

              <Pencil
                size={18}
                className="absolute left-0 top-1 text-gray-500"
              />

              <textarea
                rows="5"
                placeholder="How can we help you? Feel free to get in touch!"
                className="w-full border-b border-gray-400 pl-8 outline-none bg-transparent resize-none"
              ></textarea>

            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-6">

              <button
                type="submit"
                className="bg-primary text-white px-10 py-4 font-semibold hover:opacity-90 transition"
              >
                Get in Touch
              </button>

              <label className="flex items-center gap-3 text-gray-600 text-sm">

                <input type="checkbox" />

                I agree to the Privacy Policy

              </label>

            </div>

          </motion.form>

        </div>

      </div>

      {/* Google Map */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Boston&output=embed"
          className="w-full h-125 border-0"
          loading="lazy"
        ></iframe>
      </motion.div>

    </section>
  );
};

export default ContactUs;