import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import cmg from "../../assets/cmg.webp";
import bosh from "../../assets/bosh.png";
import cat from "../../assets/cat.webp";
import metabo from "../../assets/metabo.webp";
import kita from "../../assets/kita.webp";
import john from "../../assets/john.webp";

import bath from "../../assets/bath.avif";
import kitchen from "../../assets/kitchen.avif";
import pipe from "../../assets/pipe.avif";
import leak from "../../assets/leak.avif";
import leak2 from "../../assets/leak2.avif";

const Projects = () => {
  const swiperRef = useRef(null);

  const brands = [
    { img: bosh, name: "Bosch" },
    { img: cat, name: "CAT" },
    { img: kita, name: "KITA" },
    { img: metabo, name: "Metabo" },
    { img: cmg, name: "CMG" },
    { img: john, name: "John Deere" },
  ];

  const projects = [
    {
      id: 1,
      image: bath,
      title: "Bathroom Plumbing",
      description: "Complete bathroom installation and maintenance.",
    },
    {
      id: 2,
      image: kitchen,
      title: "Kitchen Installation",
      description: "Professional kitchen plumbing services.",
    },
    {
      id: 3,
      image: pipe,
      title: "Pipe Repair",
      description: "Fast repair of damaged water pipes.",
    },
    {
      id: 4,
      image: leak,
      title: "Leak Detection",
      description: "Modern leak detection with advanced tools.",
    },
    {
      id: 5,
      image: leak2,
      title: "Emergency Service",
      description: "24/7 plumbing solutions for your home and office.",
    },
  ];

  return (
    <section className="bg-gray-100 py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 mb-12"
        >
          <div className="text-center lg:text-left">
            <p className="uppercase tracking-[4px] text-primary font-semibold text-sm">
              Work Examples
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
              Our Projects
            </h2>
          </div>

          <p className="max-w-xl text-gray-500 text-base sm:text-lg text-center lg:text-left">
            We deliver high-quality plumbing solutions with professional
            workmanship and customer satisfaction.
          </p>

          <div className="flex justify-center lg:justify-end gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 hover:bg-primary hover:text-white transition flex items-center justify-center"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 hover:bg-primary hover:text-white transition flex items-center justify-center"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group rounded-xl overflow-hidden bg-white shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
                    <div className="p-4 sm:p-6 translate-y-10 group-hover:translate-y-0 transition duration-500">
                      <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">
                        {project.title}
                      </h3>

                      <p className="text-white/80 text-sm sm:text-base mt-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 mt-16 lg:mt-20 items-center justify-items-center"
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden flex items-center justify-center"
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-12 sm:h-14 md:h-16 object-contain grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-2"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;