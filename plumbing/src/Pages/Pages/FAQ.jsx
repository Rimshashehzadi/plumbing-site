import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import FaqServices from "../../Components/Home/FaqServices";
import FaqQuality from "../../Components/Home/FaqQuality";

const faqData = [
  {
    question: "Cost of a service visit?",
    answer:
      "Our service visit pricing depends on your location and the type of plumbing issue. Contact us for a free estimate.",
  },
  {
    question: "Is there a guarantee?",
    answer:
      "Yes! We provide a workmanship guarantee on all plumbing repairs and installations for your peace of mind.",
  },
  {
    question: "Materials used in repairs?",
    answer:
      "We only use high-quality, industry-approved plumbing materials to ensure long-lasting performance.",
  },
  {
    question: "Work warranties offered?",
    answer:
      "Yes. Most of our plumbing services include warranties. The duration depends on the service provided.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section >
        <div className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[4px] font-semibold">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl font-bold mt-3 text-gray-900">
            Plumbing FAQs
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGES */}
          <div className="grid grid-cols-2 gap-6">

            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700"
              alt=""
              className="rounded-lg object-cover h-125 w-full"
            />

            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700"
              alt=""
              className="rounded-lg object-cover h-125 w-full mt-10"
            />

          </div>

          {/* FAQ */}
          <div>

            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-300 py-6"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {item.question}
                  </h3>

                  <span className="text-primary text-xl">
                    {activeIndex === index ? (
                      <FaMinus />
                    ) : (
                      <FaPlus />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index
                      ? "max-h-40 mt-4"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
        
      </div>
     <FaqQuality/>
      </div>
       <FaqServices/>
    </section>
  );
};

export default FAQ;