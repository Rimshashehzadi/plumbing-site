import React from 'react'
import { motion } from "framer-motion";
import AboutHero from '../../Components/About/AboutHero';
import Projects from '../../Components/Home/Projects'
import VideoSection from '../../Components/About/VedioSection';
// import AboutCounter from '../../Components/About/AboutCounter';

const About = () => {
  return (
  <section className="bg-[#F7F8F8]">
     <div className="py-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-gray-900"
            >
              About Us
            </motion.h1>
    
            <div className="mt-5 text-primary text-3xl">
              ↓
            </div>
          </div>
          <AboutHero/>
          {/* <AboutCounter/> */}
           <VideoSection/>
          <Projects/>
         
  </section>
  )
}

export default About