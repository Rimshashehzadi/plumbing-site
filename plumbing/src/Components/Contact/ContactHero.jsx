import React from "react";
import contactBg from "../../assets/contact.avif";
import ContactForm from "./ContactForm";

const ContactHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center py-16 sm:py-20 lg:py-28"
      style={{
        backgroundImage: `url(${contactBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center lg:justify-end">
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[520px] xl:w-[560px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;