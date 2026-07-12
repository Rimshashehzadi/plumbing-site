import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import client1 from "../../assets/client1.avif";
import client2 from "../../assets/client2.avif";
import client3 from "../../assets/client3.avif";
import client4 from "../../assets/client4.avif";
import client5 from "../../assets/client5.avif";
import client6 from "../../assets/client6.avif";

// import StatsSection from "./StatesSection";
// import BottomGallery from "./BottomGallery";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      image: client1,
      name: "Roland Berry",
      location: "Fresno, CA",
      review:
        "Excellent plumbing service! They arrived on time, fixed the leak quickly, and cleaned everything before leaving. Highly recommended.",
    },
    {
      id: 2,
      image: client2,
      name: "George Caldwell",
      location: "Austin, TX",
      review:
        "Very professional team. They replaced our water heater in just a few hours. Great quality work and fair pricing.",
    },
    {
      id: 3,
      image: client3,
      name: "Sophia Martin",
      location: "Chicago, IL",
      review:
        "Fantastic customer support and experienced technicians. They solved our drainage issue on the same day.",
    },
    {
      id: 4,
      image: client4,
      name: "David Wilson",
      location: "Miami, FL",
      review:
        "Fast response, affordable prices, and outstanding workmanship. Definitely my go-to plumbing company.",
    },
    {
      id: 5,
      image: client5,
      name: "Emily Brown",
      location: "Dallas, TX",
      review:
        "The plumber explained everything clearly before starting the work. I appreciate their honesty and professionalism.",
    },
    {
      id: 6,
      image: client6,
      name: "James Anderson",
      location: "New York, NY",
      review:
        "Amazing experience! Our bathroom plumbing was repaired perfectly. I would recommend them to anyone.",
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-primary font-semibold text-sm sm:text-base">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Feedback from our clients
          </h2>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2,
            },
          }}
          className="pb-14"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-100 rounded-xl shadow-md cursor-pointer p-6 sm:p-8 lg:p-10 h-full"
              >
                <Quote
                  className="text-primary mb-6"
                  size={40}
                />

                <p className="text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg">
                  {item.review}
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 text-sm sm:text-base">
                      {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Stats */}
      {/* <div className="mt-12 sm:mt-16 lg:mt-20">
        <StatsSection />
      </div> */}

      {/* Gallery */}
      {/* <BottomGallery /> */}
    </section>
  );
};

export default Testimonial;