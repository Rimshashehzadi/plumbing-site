import { motion } from "framer-motion";
import {
  ChevronDown,
  Plus,
  Minus,
  Trash2,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from '../../Pages/Shop/CartContext'

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  // Calculate total payment
  const totalPayment = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // Calculate total products
  const totalProducts = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <section className="min-h-[80vh] bg-[#f8f8f8] px-4 sm:px-6 lg:px-8 py-16">

      <div className="w-full max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <motion.h1
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
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
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            className="flex justify-center mt-4"
          >
            <ChevronDown
              size={22}
              className="text-black"
            />
          </motion.div>

        </div>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
            }}
            className="mt-12 sm:mt-16 md:mt-20 text-center"
          >

            <ShoppingCart
              size={60}
              className="mx-auto text-gray-300 mb-5"
            />

            <p className="text-gray-500 text-base sm:text-lg">
              Your cart is currently empty.
            </p>

            <Link to="/productlist">

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#0c8790",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  mt-8
                  bg-primary
                  text-white
                  font-semibold
                  rounded
                  px-6 py-3
                  sm:px-8 sm:py-4
                  md:px-10
                "
              >
                Return to Product List
              </motion.button>

            </Link>

          </motion.div>

        ) : (

          /* CART CONTENT */
          <div className="mt-12 grid lg:grid-cols-3 gap-8">

            {/* CART PRODUCTS */}
            <div className="lg:col-span-2 space-y-5">

              {cartItems.map((item, index) => (

                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  layout
                  className="
                    bg-white
                    rounded-xl
                    shadow-md
                    p-4
                    sm:p-6
                    flex
                    flex-col
                    sm:flex-row
                    items-center
                    gap-5
                  "
                >

                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-28
                      h-28
                      sm:w-32
                      sm:h-32
                      object-cover
                      rounded-lg
                    "
                  />

                  {/* Product Details */}
                  <div className="flex-1 text-center sm:text-left">

                    <p className="text-sm text-gray-400">
                      {item.category}
                    </p>

                    <h2 className="text-xl font-bold mt-1">
                      {item.name}
                    </h2>

                    <p className="text-primary font-bold text-lg mt-2">
                      ${item.price.toFixed(2)}
                    </p>

                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">

                    {/* Decrease */}
                    <motion.button
                      whileTap={{
                        scale: 0.85,
                      }}
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="
                        w-9
                        h-9
                        flex
                        items-center
                        justify-center
                        rounded-lg
                        bg-gray-200
                        hover:bg-primary
                        hover:text-white
                        transition
                      "
                    >
                      <Minus size={16} />
                    </motion.button>

                    {/* Quantity */}
                    <span className="font-bold text-lg min-w-[25px] text-center">
                      {item.quantity}
                    </span>

                    {/* Increase */}
                    <motion.button
                      whileTap={{
                        scale: 0.85,
                      }}
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="
                        w-9
                        h-9
                        flex
                        items-center
                        justify-center
                        rounded-lg
                        bg-gray-200
                        hover:bg-primary
                        hover:text-white
                        transition
                      "
                    >
                      <Plus size={16} />
                    </motion.button>

                  </div>

                  {/* Product Total */}
                  <div className="text-center min-w-25">

                    <p className="text-gray-500 text-sm">
                      Total
                    </p>

                    <p className="font-bold text-primary text-lg">
                      $
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)}
                    </p>

                  </div>

                  {/* Remove Product */}
                  <motion.button
                    whileTap={{
                      scale: 0.8,
                    }}
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="
                      text-red-500
                      hover:text-red-700
                      transition
                    "
                  >
                    <Trash2 size={22} />
                  </motion.button>

                </motion.div>

              ))}

            </div>

            {/* ORDER SUMMARY */}
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                bg-white
                rounded-xl
                shadow-lg
                p-6
                h-fit
                lg:sticky
                lg:top-24
              "
            >

              <h2 className="text-2xl font-bold mb-6">
                Cart Summary
              </h2>

              {/* Total Products */}
              <div className="flex justify-between mb-5">

                <span className="text-gray-600">
                  Total Products
                </span>

                <span className="font-bold">
                  {totalProducts}
                </span>

              </div>

              {/* Subtotal */}
              <div className="flex justify-between mb-5">

                <span className="text-gray-600">
                  Subtotal
                </span>

                <span className="font-bold">
                  ${totalPayment.toFixed(2)}
                </span>

              </div>

              <div className="border-t pt-5">

                <div className="flex justify-between items-center">

                  <span className="text-xl font-bold">
                    Total Payment
                  </span>

                  <span className="text-primary text-2xl font-bold">
                    ${totalPayment.toFixed(2)}
                  </span>

                </div>

              </div>

              {/* Checkout Button */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  w-full
                  mt-7
                  bg-primary
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                  transition
                "
              >
                Proceed To Checkout
              </motion.button>

              {/* Continue Shopping */}
              <Link to="/productlist">

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    w-full
                    mt-4
                    border
                    border-primary
                    text-primary
                    py-3
                    rounded-lg
                    font-semibold
                    transition
                    hover:bg-primary
                    hover:text-white
                  "
                >
                  Continue Shopping
                </motion.button>

              </Link>

            </motion.div>

          </div>

        )}

      </div>

    </section>
  );
};

export default Cart;