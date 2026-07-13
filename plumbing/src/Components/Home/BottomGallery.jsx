import React from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/gallery1.avif";
import img2 from "../../assets/gallery2.avif";
import img3 from "../../assets/gallery3.avif";
import img4 from "../../assets/gallery4.avif";
import img5 from "../../assets/gallery5.avif";
import img6 from "../../assets/gallery6.avif";

const images = [
  { img: img1, title: "Bathroom Plumbing" },
  { img: img2, title: "Copper Pipes" },
  { img: img3, title: "Pipe Installation" },
  { img: img4, title: "Water Filters" },
  { img: img5, title: "Maintenance" },
  { img: img6, title: "Repair Service" },
];

const BottomGallery = () => {
  return (
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

        {images.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="relative overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 sm:h-48 md:h-56 lg:h-72 object-cover transition-all duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500"></div>

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 px-3">
              <h3 className="text-white text-center text-base sm:text-lg lg:text-xl font-semibold">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default BottomGallery;