import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";

import videoPoster from "../../assets/vedioPoster.avif"; 

const VideoSection = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
      <section className=" py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={videoPoster}
              alt="Video"
              className="w-full h-62.5 sm:h-100 md:h-125 lg:h-162.5 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Play Button */}
            <button
              onClick={() => setOpenVideo(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm hover:scale-110 transition duration-300">
                <FaPlay className="text-white text-2xl md:text-3xl ml-1" />
              </div>
            </button>

            {/* Play Text */}
            <div className="absolute inset-0 flex items-center justify-center mt-28 md:mt-36 pointer-events-none">
              <span className="text-white font-semibold tracking-widest uppercase text-sm md:text-lg">
                PLAY
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Video Modal */}
      {openVideo && (
        <div className="fixed inset-0 z-999 bg-black/90 flex items-center justify-center px-4">

          <button
            onClick={() => setOpenVideo(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-red-500"
          >
            <FaTimes />
          </button>

          <div className="relative w-full max-w-5xl aspect-video">

            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1"
              title="Plumbing Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

          </div>

        </div>
      )}
    </>
  );
};

export default VideoSection;