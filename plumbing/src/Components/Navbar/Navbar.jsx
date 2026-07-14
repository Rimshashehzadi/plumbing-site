import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { IoChevronDown } from "react-icons/io5";
import { Grip, Search, ShoppingBag } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import SideBar from "./SideBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Menu = [
    { name: "Home", path: "/" },
    {
      name: "Pages",
      path: "",
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
      path: "",
      subMenu: [
        { name: "Product List", path: "/productlist" },
        { name: "Cart", path: "/cart" },
        { name: "Wishlist Page", path: "/wishlistpage" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-gray-200">
      <div className="px-6 lg:px-30 py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Company Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {Menu.map((item, index) => (
              <li key={index} className="relative group">
                {item.subMenu ? (
                  <>
                    <button className="flex items-center gap-1 text-lg font-semibold text-gray-700 hover:text-primary transition">
                      {item.name}
                      <IoChevronDown
                        size={18}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    </button>

                    <div className="absolute left-0 top-full mt-4 w-64 rounded-lg bg-primary shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <ul className="py-2">
                        {item.subMenu.map((subItem, i) => (
                          <li key={i}>
                            <Link
                              to={subItem.path}
                              className="block px-5 py-3 text-white hover:bg-white hover:text-primary transition duration-300"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="relative text-lg font-semibold text-gray-700 hover:text-primary transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Connect Button */}
            <Link
              to="/signup"
              className="bg-primary hover:bg-primary text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Connect
            </Link>

            {/* Shopping Bag */}
            <div className="relative cursor-pointer">
              <ShoppingBag
                size={28}
                className="text-gray-700 hover:text-primary transition"
              />
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                0
              </span>
            </div>

            {/* Search */}
            <Search
              size={28}
              className="cursor-pointer text-gray-700 hover:text-primary transition"
            />

            {/* Sidebar Button */}
            <button onClick={() => setIsOpen(true)}>
              <Grip
                size={28}
                className="cursor-pointer text-gray-700 hover:text-primary transition"
              />
            </button>

            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          {/* Mobile Navbar */}
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;