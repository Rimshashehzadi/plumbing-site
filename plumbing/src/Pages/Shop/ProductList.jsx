import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShoppingCart,
  ArrowRight,
  X,
} from "lucide-react";
import { useCart } from '../Shop/CartContext';

const products = [
  {
    id: 1,
    name: "Water Filter",
    category: "Hardware",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=700",
  },
  {
    id: 2,
    name: "Drain Stand",
    category: "Spare Parts",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700",
  },
  {
    id: 3,
    name: "Pumping Station",
    category: "Tools",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700",
  },
  {
    id: 4,
    name: "Drain Hose",
    category: "Pipes",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=700",
  },
  {
    id: 5,
    name: "Pipe Connector",
    category: "Pipes",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700",
  },
  {
    id: 6,
    name: "Water Heater",
    category: "Water Heaters",
    price: 180,
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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(200);
  const [appliedPrice, setAppliedPrice] = useState(200);

  const { addToCart, cartItems } = useCart();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesPrice = product.price <= appliedPrice;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice
      );
    });
  }, [
    searchTerm,
    selectedCategory,
    appliedPrice,
  ]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setMaxPrice(200);
    setAppliedPrice(200);
  };

  return (
    <section className="bg-gray-50 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="py-20 text-center">

          <motion.h1
            initial={{
              opacity: 0,
              y: -40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-5xl md:text-6xl font-bold text-gray-900"
          >
            Product List
          </motion.h1>

          <div className="mt-5 text-primary text-3xl">
            ↓
          </div>

        </div>

        <div className="grid lg:grid-cols-4 gap-12">

          {/* PRODUCTS */}
          <div className="lg:col-span-3">

            {/* Results Count */}
            <div className="mb-6 flex flex-wrap justify-between items-center gap-4">

              <p className="text-gray-600">

                Showing{" "}

                <span className="font-bold text-primary">
                  {filteredProducts.length}
                </span>{" "}

                products

              </p>

              {(searchTerm ||
                selectedCategory !== "All" ||
                appliedPrice !== 200) && (

                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-red-500 hover:text-red-700"
                >

                  <X size={18} />

                  Clear Filters

                </button>

              )}

            </div>

            {/* PRODUCT GRID */}
            {filteredProducts.length > 0 ? (

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

                {filteredProducts.map(
                  (product, index) => (

                    <motion.div
                      key={product.id}
                      initial={{
                        opacity: 0,
                        y: 40,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      whileHover={{
                        y: -8,
                      }}
                      className="bg-white rounded-xl shadow-md overflow-hidden group"
                    >

                      {/* IMAGE */}
                      <div className="overflow-hidden">

                        <motion.img
                          whileHover={{
                            scale: 1.08,
                          }}
                          transition={{
                            duration: 0.4,
                          }}
                          src={product.image}
                          alt={product.name}
                          className="h-72 w-full object-cover"
                        />

                      </div>

                      {/* PRODUCT DETAILS */}
                      <div className="p-6 text-center">

                        <p className="text-sm text-gray-400 mb-2">
                          {product.category}
                        </p>

                        <h2 className="font-semibold text-xl">
                          {product.name}
                        </h2>

                        <p className="text-primary mt-2 font-bold text-lg">
                          ${product.price.toFixed(2)}
                        </p>

                        {/* ADD TO CART */}
                        <motion.button
                          onClick={() =>
                            addToCart(product)
                          }
                          whileTap={{
                            scale: 0.9,
                          }}
                          whileHover={{
                            scale: 1.05,
                          }}
                          className="mt-5 bg-primary text-white px-5 py-2 rounded-full"
                        >
                          Add To Cart
                        </motion.button>

                      </div>

                    </motion.div>

                  )
                )}

              </div>

            ) : (

              <div className="bg-white rounded-xl shadow-md p-12 text-center">

                <h2 className="text-2xl font-bold text-gray-700">
                  No Products Found
                </h2>

                <p className="text-gray-500 mt-2">
                  Try changing your search or filter options.
                </p>

              </div>

            )}

          </div>

          {/* SIDEBAR */}
          <motion.aside
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="lg:sticky lg:top-24 self-start h-fit"
          >

            <div className="bg-white rounded-xl shadow-lg p-7 space-y-10">

              {/* CART PREVIEW */}
              <div>

                <div className="flex items-center gap-3 mb-4">

                  <ShoppingCart
                    className="text-primary"
                  />

                  <h2 className="font-bold text-2xl">
                    Cart
                  </h2>

                </div>

                {cartItems.length === 0 ? (

                  <p className="text-gray-500">
                    No products in the cart.
                  </p>

                ) : (

                  <div className="space-y-4">

                    {cartItems.map((item) => (

                      <div
                        key={item.id}
                        className="flex items-center gap-3 border-b pb-3"
                      >

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 object-cover rounded-lg"
                        />

                        <div className="flex-1">

                          <p className="font-semibold text-sm">
                            {item.name}
                          </p>

                          <p className="text-gray-500 text-sm">
                            Qty: {item.quantity}
                          </p>

                        </div>

                        <p className="text-primary font-bold text-sm">
                          $
                          {(
                            item.price *
                            item.quantity
                          ).toFixed(2)}
                        </p>

                      </div>

                    ))}

                  </div>

                )}

              </div>

              {/* SEARCH */}
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
                    type="text"
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(
                        e.target.value
                      )
                    }
                    placeholder="Search products..."
                    className="w-full border rounded-lg py-3 pl-11 pr-4 outline-none focus:border-primary"
                  />

                </div>

              </div>

              {/* CATEGORIES */}
              <div>

                <h3 className="font-bold text-xl mb-5">
                  Categories
                </h3>

                <ul className="space-y-4">

                  {/* ALL PRODUCTS */}
                  <motion.li
                    whileHover={{
                      x: 8,
                    }}
                    onClick={() =>
                      setSelectedCategory(
                        "All"
                      )
                    }
                    className={`flex justify-between cursor-pointer ${
                      selectedCategory === "All"
                        ? "text-primary font-bold"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >

                    <span>
                      All Products
                    </span>

                    <span className="text-gray-400">
                      ({products.length})
                    </span>

                  </motion.li>

                  {categories.map(
                    (category) => {

                      const categoryCount =
                        products.filter(
                          (product) =>
                            product.category ===
                            category
                        ).length;

                      return (

                        <motion.li
                          key={category}
                          whileHover={{
                            x: 8,
                          }}
                          onClick={() =>
                            setSelectedCategory(
                              category
                            )
                          }
                          className={`flex justify-between cursor-pointer ${
                            selectedCategory ===
                            category
                              ? "text-primary font-bold"
                              : "text-gray-700 hover:text-primary"
                          }`}
                        >

                          <span>
                            {category}
                          </span>

                          <span className="text-gray-400">
                            ({categoryCount})
                          </span>

                        </motion.li>

                      );

                    }
                  )}

                </ul>

              </div>

              {/* PRICE FILTER */}
              <div>

                <h3 className="font-bold text-xl mb-5">
                  Filter By Price
                </h3>

                <input
                  type="range"
                  min={20}
                  max={200}
                  value={maxPrice}
                  onChange={(e) =>
                    setMaxPrice(
                      Number(e.target.value)
                    )
                  }
                  className="w-full accent-primary"
                />

                <div className="flex justify-between mt-3 text-gray-500">

                  <span>
                    $20
                  </span>

                  <span className="font-bold text-primary">
                    ${maxPrice}
                  </span>

                </div>

                <motion.button
                  onClick={() =>
                    setAppliedPrice(
                      maxPrice
                    )
                  }
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="mt-6 bg-primary text-white px-7 py-3 rounded-lg flex items-center gap-2"
                >

                  Filter

                  <ArrowRight
                    size={18}
                  />

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