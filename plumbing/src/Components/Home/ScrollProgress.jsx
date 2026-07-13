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
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={showTop ? scrollToTop : scrollToBottom}
        className="
          w-14
          h-14
          bg-[#13727b]
          text-white
          rounded-lg
          flex
          items-center
          justify-center
          shadow-xl
          transition-all
          duration-300
          hover:bg-[#0f5f66]
          hover:scale-110
          active:scale-95
        "
        aria-label={showTop ? "Scroll to Top" : "Scroll to Bottom"}
      >
        {showTop ? (
          <FaArrowUp size={20} />
        ) : (
          <FaArrowDown size={20} />
        )}
      </button>
    </div>
  );
};

export default ScrollProgress;