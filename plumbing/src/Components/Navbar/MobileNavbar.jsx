import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../../assets/logo2.png";

import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";
import { ArrowRight, ShoppingBag } from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { useCart } from "../../Pages/Shop/CartContext";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Get cart data from CartContext
  const { totalItems } = useCart();

  const menu = [
    { name: "Home", path: "/" },

    {
      name: "Pages",
      subMenu: [
        { name: "About Us", path: "/about" },
        { name: "FAQ", path: "/faq" },
        { name: "Our Team", path: "/ourteam" },
        { name: "Login", path: "/login" },
        { name: "Signup", path: "/signup" },
      ],
    },

    { name: "Blog", path: "/blog" },

    {
      name: "Shop",
      subMenu: [
        { name: "Product List", path: "/productlist" },
        { name: "Cart", path: "/cart" },
        { name: "Wishlist Page", path: "/wishlistpage" },
      ],
    },

    { name: "Contact Us", path: "/contact" },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(
      openDropdown === index ? null : index
    );
  };

  return (
    <>
      {/* Mobile Top Buttons */}
      <div className="lg:hidden flex items-center gap-4">

        {/* Cart Button */}
        <Link
          to="/cart"
          onClick={() => setIsMenuOpen(false)}
          className="relative"
        >
          <ShoppingBag
            size={26}
            className="text-gray-700"
          />

          {/* Cart Count */}
          {totalItems > 0 && (
            <span
              className="
                absolute
                -top-3
                -right-3
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-primary
                text-xs
                font-bold
                text-white
              "
            >
              {totalItems}
            </span>
          )}
        </Link>

        {/* Hamburger */}
        <button
          className="cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          <RxHamburgerMenu size={28} />
        </button>

      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-[85%] max-w-82.5 bg-primary text-white shadow-xl overflow-y-auto transition-transform duration-300 ${
          isMenuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/20 p-5">

          <img
            src={logo2}
            alt="logo"
            className="w-32"
          />

          <button
            onClick={() => setIsMenuOpen(false)}
            className="rounded-full p-2 hover:bg-white/10 transition"
          >
            <RxCross2 size={24} />
          </button>

        </div>

        {/* Navigation */}
        <div className="px-6 py-6">

          <ul className="space-y-2">

            {menu.map((item, index) => (

              <li
                key={index}
                className="border-b border-white/20 pb-2"
              >

                {item.subMenu ? (

                  <>

                    <button
                      onClick={() =>
                        toggleDropdown(index)
                      }
                      className="flex w-full items-center justify-between py-2 text-lg font-medium text-white"
                    >

                      <span>
                        {item.name}
                      </span>

                      <IoChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          openDropdown === index
                            ? "rotate-180"
                            : ""
                        }`}
                      />

                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openDropdown === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >

                      <ul className="ml-4 py-2">

                        {item.subMenu.map(
                          (subItem) => (

                            <li
                              key={subItem.name}
                            >

                              <Link
                                to={subItem.path}
                                onClick={() =>
                                  setIsMenuOpen(false)
                                }
                                className="flex items-center justify-between rounded-lg p-2 text-gray-200 hover:bg-white hover:text-primary transition duration-300"
                              >

                                {subItem.name}

                                <ArrowRight
                                  size={14}
                                />

                              </Link>

                            </li>

                          )
                        )}

                      </ul>

                    </div>

                  </>

                ) : (

                  <Link
                    to={item.path}
                    onClick={() =>
                      setIsMenuOpen(false)
                    }
                    className="flex items-center justify-between py-3 text-lg font-medium text-white"
                  >

                    {item.name}

                    <ArrowRight size={16} />

                  </Link>

                )}

              </li>

            ))}

          </ul>

          {/* Mobile Cart Button Inside Sidebar */}
          <Link
            to="/cart"
            onClick={() =>
              setIsMenuOpen(false)
            }
            className="
              mt-8
              flex
              items-center
              justify-between
              rounded-lg
              border
              border-white/30
              px-5
              py-4
              text-lg
              font-semibold
              hover:bg-white
              hover:text-primary
              transition
            "
          >

            <div className="flex items-center gap-3">

              <ShoppingBag
                size={22}
              />

              <span>
                Cart
              </span>

            </div>

            <span
              className="
                flex
                h-7
                min-w-7
                items-center
                justify-center
                rounded-full
                bg-white
                px-2
                text-sm
                font-bold
                text-primary
              "
            >
              {totalItems}
            </span>

          </Link>

          {/* Connect Button */}
          <div className="mt-6">

            <Link
              to="/signup"
              onClick={() =>
                setIsMenuOpen(false)
              }
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-lg
                bg-white
                px-6
                py-3
                text-lg
                font-semibold
                text-primary
                transition
                hover:bg-gray-100
              "
            >
              Connect
            </Link>

          </div>

          {/* Social Icons */}
          <div className="mt-8 border-t border-white/20 pt-6">

            <h3 className="text-lg font-semibold">
              Follow Us
            </h3>

            <div className="mt-5 flex gap-3">

              <a
                href="#"
                className="rounded-full bg-gray-800 p-3 hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full bg-gray-800 p-3 hover:bg-sky-500 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="rounded-full bg-gray-800 p-3 hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-full bg-gray-800 p-3 hover:bg-blue-700 transition"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

      </aside>
    </>
  );
};

export default MobileNavbar;