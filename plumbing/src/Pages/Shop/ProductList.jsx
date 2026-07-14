import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Water Filter",
    price: "$50.00",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=700",
  },
  {
    id: 2,
    name: "Drain Stand",
    price: "$80.00",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700",
  },
  {
    id: 3,
    name: "Pumping Station",
    price: "$120.00",
    image:
      "https://images.unsplash.com/photo-1617098474202-0d0d7f60c4d8?w=700",
  },
  {
    id: 4,
    name: "Drain Hose",
    price: "$65.00",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=700",
  },
  {
    id: 5,
    name: "Pipe Connector",
    price: "$25.00",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700",
  },
  {
    id: 6,
    name: "Water Heater",
    price: "$180.00",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700",
  },
];

const categories = [
  "Hardware",
  "Pipes",
  "Spare Parts",
  "Tools",
  "Water Heaters",
];

const ProductList = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900"
          >
            Product List
          </motion.h1>

          <div className="mt-5 text-primary text-3xl">
            ↓
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Products */}

          <div className="lg:col-span-3">

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden group"
                >

                  <div className="overflow-hidden">

                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      src={product.image}
                      alt={product.name}
                      className="h-72 w-full object-cover"
                    />

                  </div>

                  <div className="p-6 text-center">

                    <h2 className="font-semibold text-xl">
                      {product.name}
                    </h2>

                    <p className="text-primary mt-2 font-bold text-lg">
                      {product.price}
                    </p>

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="mt-5 bg-primary text-white px-5 py-2 rounded-full"
                    >
                      Add To Cart
                    </motion.button>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

          {/* Sidebar */}

          <motion.aside
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 self-start h-fit"
          >

            <div className="bg-white rounded-xl shadow-lg p-7 space-y-10">

              {/* Cart */}

              <div>

                <div className="flex items-center gap-3 mb-4">

                  <ShoppingCart className="text-primary" />

                  <h2 className="font-bold text-2xl">
                    Cart
                  </h2>

                </div>

                <p className="text-gray-500">
                  No products in the cart.
                </p>

              </div>

              {/* Search */}

              <div>

                <h3 className="font-bold text-xl mb-4">
                  Search
                </h3>

                <div className="relative">

                  <Search
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    placeholder="Search products..."
                    className="w-full border rounded-lg py-3 pl-11 outline-none focus:border-primary"
                  />

                </div>

              </div>

              {/* Categories */}

              <div>

                <h3 className="font-bold text-xl mb-5">
                  Categories
                </h3>

                <ul className="space-y-4">

                  {categories.map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 8 }}
                      className="flex justify-between cursor-pointer text-gray-700 hover:text-primary"
                    >
                      <span>{item}</span>

                      <span className="text-gray-400">
                        ({Math.floor(Math.random() * 5) + 1})
                      </span>
                    </motion.li>
                  ))}

                </ul>

              </div>

              {/* Filter */}

              <div>

                <h3 className="font-bold text-xl mb-5">
                  Filter
                </h3>

                <input
                  type="range"
                  min={20}
                  max={200}
                  className="w-full accent-primary"
                />

                <div className="flex justify-between mt-3 text-gray-500">

                  <span>$20</span>

                  <span>$200</span>

                </div>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="mt-6 bg-primary text-white px-7 py-3 rounded-lg flex items-center gap-2"
                >
                  Filter

                  <ArrowRight size={18} />

                </motion.button>

              </div>

            </div>

          </motion.aside>

        </div>

      </div>
    </section>
  );
};

export default ProductList;