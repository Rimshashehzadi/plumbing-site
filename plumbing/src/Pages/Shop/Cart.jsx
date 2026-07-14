import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className="min-h-[80vh] bg-[#f8f8f8] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">

      <div className="w-full max-w-3xl text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-bold
            text-[#1b1b1b]
          "
        >
          Cart
        </motion.h1>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-4 sm:mt-5"
        >
          <ChevronDown
            size={22}
            className="text-black"
          />
        </motion.div>

        {/* Empty Cart */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <p className="text-gray-500 text-base sm:text-lg">
            Your cart is currently empty.
          </p>

          <Link to="/productlist">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#0c8790",
              }}
              whileTap={{ scale: 0.95 }}
              className="
                mt-8
                bg-primary
                text-white
                font-semibold
                rounded
                transition-all
                duration-300

                px-6 py-3
                sm:px-8 sm:py-4
                md:px-10

                w-full
                sm:w-auto
              "
            >
              Return to Product List
            </motion.button>
          </Link>
        </motion.div>

      </div>

    </section>
  );
};

export default Cart;