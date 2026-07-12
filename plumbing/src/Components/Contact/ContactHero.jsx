import React from "react";


import contactBg from "../../assets/contact.avif";
import ContactForm from "./ContactForm";
// import Testimonial from "./Testimonial";

const ContactHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 lg:py-36"
      style={{
        backgroundImage: `url(${contactBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 flex justify-end">

      <ContactForm/>


      </div>
      
    </section>
  );
};

export default ContactHero;