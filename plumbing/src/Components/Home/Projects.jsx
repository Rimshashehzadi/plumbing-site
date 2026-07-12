import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import cmg from '../../assets/cmg.webp'
import bosh from '../../assets/bosh.png'
import cat from '../../assets/cat.webp'
import metabo from '../../assets/metabo.webp'
import kita from '../../assets/kita.webp'
import john from '../../assets/john.webp'

import "swiper/css";
import "swiper/css/navigation";

import bath from "../../assets/bath.avif";
import kitchen from "../../assets/kitchen.avif";
import pipe from "../../assets/pipe.avif";
import leak from "../../assets/leak.avif";
import leak2 from '../../assets/leak2.avif'

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
      title: "Leak Detection",
      description: "Modern leak detection with advanced tools.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center mb-14"
        >
          <div>
            <p className="uppercase tracking-[5px] text-primary font-semibold">
              Work Examples
            </p>

            <h2 className="text-5xl font-bold mt-3">
              Our Projects
            </h2>
          </div>

          <p className="max-w-xl text-gray-500 mt-6 lg:mt-0 text-lg font-normal">
            We deliver high-quality plumbing solutions with
            professional workmanship and customer satisfaction.
          </p>

          <div className="flex gap-4 mt-8 lg:mt-0">

            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="w-12 h-12 rounded-full cursor-pointer border hover:bg-primary hover:text-white transition"
            >
              <ArrowLeft className="mx-auto" size={20} />
            </button>

            <button
              onClick={() => swiperRef.current.slideNext()}
              className="w-12 h-12 rounded-full border hover:bg-primary hover:text-white transition"
            >
              <ArrowRight className="mx-auto" size={20} />
            </button>

          </div>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: .3 }}
                className="group overflow-hidden rounded-xl bg-white shadow-lg cursor-pointer"
              >
                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-112.5 object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">

                    <div className="p-6 translate-y-12 group-hover:translate-y-0 transition duration-500">

                      <h3 className="text-white text-3xl font-bold">
                        {project.title}
                      </h3>

                      <p className="text-white/80 text-lg font-normal mt-3">
                        {project.description}
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>
    

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mt-20">
  {brands.map((brand, index) => (
    <div
      key={index}
      className="group cursor-pointer overflow-hidden"
    >
      <img
        src={brand.img}
        alt={brand.name}
        className="
          w-28 sm:w-32 md:w-36 lg:w-40
          h-16 object-contain
          grayscale
          opacity-70
          transition-all
          duration-500
          group-hover:grayscale-0
          group-hover:opacity-100
          group-hover:-translate-y-3
        "
      />
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Projects;