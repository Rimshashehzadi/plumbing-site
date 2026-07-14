import React from "react";
import { motion } from "framer-motion";

import blog1 from "../../assets/leak.avif";
import blog2 from "../../assets/heater.avif";
import blog3 from "../../assets/kitchen.avif";
import blog4 from "../../assets/leak2.avif";
import blog5 from "../../assets/heroSmall.avif";
import blog6 from "../../assets/bath.avif";

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "How to Prevent Plumbing Leaks at Home",
    description:
      "Discover simple maintenance tips that can help you avoid costly plumbing repairs and keep your home's water system running smoothly.",
  },
  {
    id: 2,
    image: blog2,
    title: "Signs Your Water Heater Needs Replacement",
    description:
      "Learn the common warning signs that indicate your water heater may need repair or replacement before it completely fails.",
  },
  {
    id: 3,
    image: blog3,
    title: "Top Kitchen Plumbing Maintenance Tips",
    description:
      "Keep your kitchen plumbing in excellent condition with these easy maintenance practices every homeowner should know.",
  },
  {
    id: 4,
    image: blog4,
    title: "Why Regular Drain Cleaning Is Important",
    description:
      "Regular drain cleaning improves water flow, prevents clogs, and extends the life of your plumbing system.",
  },
  {
    id: 5,
    image: blog5,
    title: "Emergency Plumbing Tips Before Help Arrives",
    description:
      "Follow these quick emergency plumbing tips to minimize water damage while waiting for professional assistance.",
  },
  {
    id: 6,
    image: blog6,
    title: "Bathroom Remodeling Plumbing Checklist",
    description:
      "Planning a bathroom renovation? Here's a complete plumbing checklist to ensure everything goes smoothly.",
  },
];

const Blog = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="py-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-gray-900"
            >
              Blog
            </motion.h1>
    
            <div className="mt-5 text-primary text-3xl">
              ↓
            </div>
          </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-60 object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition">
                  {blog.title}
                </h3>

                <p className="text-gray-500 mt-4 leading-7">
                  {blog.description}
                </p>

                <button className="mt-6 text-primary font-semibold hover:translate-x-2 transition duration-300">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;