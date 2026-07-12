import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo2 from "../../assets/logo2.png";

import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#171C1D] text-white">
      <div className="w-full mx-auto px-6 md:px-10 lg:px-30 py-2 lg:py-20">
        {/* Top Section */}
        <div className=" mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <img
              src={logo2}
              alt="logo"
              className="w-44 md:w-52 mx-auto md:mx-0"
            />

            <h2 className="mt-8 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Plumbing services with a quality guarantee
            </h2>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Address
            </h3>

            <p className="text-gray-400 text-base md:text-lg leading-8">
              The USA —
              <br />
              785 15th Street,
              <br />
              Office 478
              <br />
              Boston, MD 02130
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-8">
              {[FaFacebookF, FaTwitter, FaDribbble, FaInstagram].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center cursor-pointer hover:bg-primary hover:border-primary transition duration-300"
                  >
                    <Icon size={18} />
                  </div>
                )
              )}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Say Hello
            </h3>

            <a
              href="mailto:info@email.com"
              className="inline-block text-gray-300 border-b border-gray-600 pb-1 hover:text-primary transition"
            >
              info@email.com
            </a>

            <h2 className="text-3xl md:text-4xl font-bold mt-8">
              +1 800 555 25 69
            </h2>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Menu */}
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-base md:text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-primary transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-primary transition"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                className="hover:text-primary transition"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-primary transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Copyright */}
          <p className="text-gray-400 text-center lg:text-right text-sm md:text-base">
            © {new Date().getFullYear()} Plumbing. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;