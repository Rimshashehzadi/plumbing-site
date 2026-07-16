import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScrollProgress = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll to bottom
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="
        fixed
        bottom-4
        right-4
        sm:bottom-5
        sm:right-5
        md:bottom-6
        md:right-6
        lg:bottom-8
        lg:right-8
        z-50
      "
    >
      <button
        onClick={showTop ? scrollToTop : scrollToBottom}
        className="
          w-10
          h-10
          sm:w-11
          sm:h-11
          md:w-12
          md:h-12
          lg:w-14
          lg:h-14

          bg-[#13727b]
          text-white
          rounded-md
          sm:rounded-lg

          flex
          items-center
          justify-center

          shadow-xl
          transition-all
          duration-300

          hover:bg-[#0f5f66]
          hover:scale-105
          md:hover:scale-110

          active:scale-95
        "
        aria-label={showTop ? "Scroll to Top" : "Scroll to Bottom"}
      >
        {showTop ? (
          <FaArrowUp
            className="
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
            "
          />
        ) : (
          <FaArrowDown
            className="
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
            "
          />
        )}
      </button>
    </div>
  );
};

export default ScrollProgress;